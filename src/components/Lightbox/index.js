'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaSearchMinus,
} from 'react-icons/fa';

/**
 * Reusable, user-friendly lightbox / popup modal.
 *
 * Props:
 *  - items:    array of { full, thumb, title, category }
 *  - index:    current index ( < 0 = closed )
 *  - onClose:  () => void
 *  - onChange: (newIndex) => void
 *  - actions:  optional React node (extra toolbar buttons, e.g. share/save)
 */
const Lightbox = ({ items = [], index = -1, onClose, onChange, actions = null }) => {
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');
  const [loading, setLoading] = useState(true);
  const touchStartX = useRef(null);
  const stripRef = useRef(null);

  const open = index >= 0 && items.length > 0;
  const current = open ? items[index] : null;

  const prev = useCallback(() => {
    setZoomed(false);
    onChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onChange]);

  const next = useCallback(() => {
    setZoomed(false);
    onChange((index + 1) % items.length);
  }, [index, items.length, onChange]);

  const close = useCallback(() => {
    setZoomed(false);
    onClose();
  }, [onClose]);

  // Reset loading + zoom whenever the visible image changes.
  useEffect(() => {
    if (open) {
      setLoading(true);
      setZoomed(false);
    }
  }, [index, open]);

  // Keyboard + lock body scroll while open.
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, prev, next]);

  // Keep the active thumbnail in view within the filmstrip.
  useEffect(() => {
    if (!open || !stripRef.current) return;
    const active = stripRef.current.querySelector('.is-active');
    if (active) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [index, open]);

  const handleMove = useCallback(
    (e) => {
      if (!zoomed) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setOrigin(`${x}% ${y}%`);
    },
    [zoomed]
  );

  // Swipe to navigate (disabled while zoomed so panning still works).
  const onTouchStart = (e) => {
    if (zoomed) return;
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (zoomed || touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  if (!open) return null;

  return (
    <div className="vb-lightbox" onClick={close}>
      {/* Top bar: counter + extra actions + close */}
      <div className="vb-lightbox__bar" onClick={(e) => e.stopPropagation()}>
        <span className="vb-lightbox__counter">
          {index + 1} / {items.length}
        </span>
        <div className="vb-lightbox__bar-actions">
          {actions}
          <button
            type="button"
            className="vb-lightbox__icon-btn"
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
          >
            {zoomed ? <FaSearchMinus /> : <FaSearchPlus />}
          </button>
          <button
            type="button"
            className="vb-lightbox__icon-btn vb-lightbox__icon-btn--close"
            onClick={close}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Prev / Next */}
      {items.length > 1 && (
        <>
          <button
            className="vb-lightbox__nav vb-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            className="vb-lightbox__nav vb-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Stage */}
      <figure
        className="vb-lightbox__content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {loading && <span className="vb-lightbox__spinner" aria-hidden="true" />}
        <img
          src={current.full}
          alt={current.title || 'Project'}
          className={`${zoomed ? 'is-zoomed' : ''} ${loading ? 'is-loading' : ''}`}
          onLoad={() => setLoading(false)}
          onMouseMove={handleMove}
          onClick={() => setZoomed((z) => !z)}
          style={{ transformOrigin: origin, transform: zoomed ? 'scale(2.2)' : 'scale(1)' }}
        />
        {(current.title || current.category) && (
          <figcaption>
            {current.title}
            {current.category ? <span> · {current.category}</span> : null}
          </figcaption>
        )}
      </figure>

      {/* Thumbnail filmstrip */}
      {items.length > 1 && (
        <div className="vb-lightbox__strip" ref={stripRef} onClick={(e) => e.stopPropagation()}>
          {items.map((it, i) => (
            <button
              key={`${it.full}-${i}`}
              type="button"
              className={`vb-lightbox__thumb ${i === index ? 'is-active' : ''}`}
              onClick={() => {
                setZoomed(false);
                onChange(i);
              }}
              aria-label={`Go to ${it.title || `image ${i + 1}`}`}
            >
              <img src={it.thumb || it.full} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lightbox;
