'use client';
import React from 'react'

const PageTitle = (props) => {
    return(
        <div className="wpo-breadcumb-area">
            {/* Red band — the floating navbar sits over this */}
            <div className="wpo-breadcumb-top" />
            {/* Header image, pushed below the red band */}
            <div className="wpo-breadcumb-img" />
        </div>
    )
}

export default PageTitle;
