import React from 'react'
import SectionTitle from '../SectionTitle'

import fIcon1 from '../../images/work/creating-a-concept-icon.png'
import fIcon2 from '../../images/work/budget-planning-icon.png'
import fIcon3 from '../../images/work/design-process-icon.png'
import fIcon4 from '../../images/work/building-your-dream-icon.png'
import fIcon5 from '../../images/mission-icons.png'
import fIcon6 from '../../images/vision-icons.png'



const Features = (props) => {
    const missionVision = [
        {
            id: 'mission',
            title: 'MISSION',
            image: fIcon5, // Replace with your mission image
            description: 'Our mission at our graphic design agency is to harness the transformative power of visual communication to help businesses connect authentically with their audience. We strive to push creative boundaries, delivering innovative and impactful design solutions that not only elevate brands but also inspire meaningful engagement.'
        },
        {
            id: 'vision',
            title: 'VISION',
            image: fIcon6, // Replace with your vision image
            description: 'Our vision is to be a catalyst for positive change, empowering brands to tell their stories with clarity, creativity, and purpose. By fostering collaboration, embracing diversity, and staying at the forefront of design trends and technologies, we aim to shape a vibrant and visually compelling future for our clients and their audiences.'
        }
    ];
     const featres = [
         {
            id:'1',
            fIcon:fIcon1,
            title:'Creating a Concept',
         },
         {
            id:'2',
            fIcon:fIcon2,
            title:'Budget Planning',   
         },
         {
            id:'3',
            fIcon:fIcon3,
            title:'Design Process',    
         },
         {
            id:'4',
            fIcon:fIcon4,
            title:'Building Your Dream',    
         },
         
     ]


    return(
        <section className={`wpo-work-section section-padding ${props.wClass}`}>
        <div className="container">
        <div className="mission-vision-section">
    {missionVision.map((item) => (
        <div className="mission-vision-item" key={item.id}>
            <div
                className="mission-vision-icon yellow-line "
                data-title={item.title}
            >
                <h2>{item.title}</h2>
                <img className='flip-horizontal' src={item.image} alt={item.title} />
            </div>
            <div className="mission-vision-content">
                <p>
                    <span className="highlight">
                        {item.description.split(" ").slice(0, 2).join(" ")}
                    </span>{" "}
                    {item.description.split(" ").slice(2).join(" ")}
                </p>
            </div>
        </div>
    ))}
</div>
            </div>
            <div className="container">
                <SectionTitle subTitle={'Working Process'} MainTitle={'How We Do Our Work Plan'} vTitle={'Work'}/>
                <div className="wpo-work-wrap">
                    <div className="row">
                        {featres.map((featres, fitem) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={fitem}> 
                                <div className="wpo-work-iem">
                                    <div className="wpo-work-icon-wrap">
                                        <div className="wpo-work-icon flip-horizontal">
                                            <img src={featres.fIcon} className='wp-icon' alt=""/>
                                        </div>
                                        <div className="wpo-work-icon-thumb">
                                            <span>{featres.id}</span>
                                        </div>
                                    </div>
                                    <div className="wpo-work-text flip-horizontal">
                                        <h4>{featres.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;