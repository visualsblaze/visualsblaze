import React from 'react';
import { FiGlobe, FiSmile, FiCheckCircle, FiPackage } from 'react-icons/fi'; // Modern icons from Feather icons

const FunFact = (props) => {
    const facts = [
        { number: "5+", text: "years<br />experience", icon: <FiCheckCircle /> },
        { number: "2+", text: "countries<br />served", icon: <FiGlobe /> },
        { number: "100%", text: "client<br />satisfied", icon: <FiSmile /> },
        { number: "100%", text: "project<br />delivered", icon: <FiPackage /> }
    ];

    return (
        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids" style={styles.factGrid}>
                            {facts.map((fact, index) => (
                                <div className="fun-fact-box" key={index} style={styles.factBox}>
                                    <div className="icon" style={styles.icon}>
                                        {fact.icon}
                                    </div>
                                    <h3 style={styles.number}>{fact.number}</h3>
                                    {/* Using dangerouslySetInnerHTML to render the line breaks */}
                                    <p style={styles.text} dangerouslySetInnerHTML={{ __html: fact.text }}></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    factGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px',
    },
    factBox: {
        flex: '1 1 calc(50% - 20px)', // Two boxes per row
        padding: '20px',
        backgroundColor: '#aa2135',
        borderRadius: '10px',
        borderBottomLeftRadius: '50px',
        textAlign: 'center',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow
        transition: 'box-shadow 0.3s ease', // Smooth transition for hover effect
        margin: '10px 0',
        maxWidth: 'calc(50% - 20px)', // Ensures each box takes up half the width
    },
    icon: {
        fontSize: '40px',
        color: '#ffb100', // Updated color for a more modern look
        marginBottom: '10px',
    },
    number: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ffffff',
    },
    text: {
        fontSize: '16px',
        color: '#ffffff',
        lineHeight: '1.5', // Optional for better spacing between lines
    }
};

// Optional hover effect for a more dynamic look
styles.factBox[':hover'] = {
    boxShadow: '0px 17px 27px rgba(0, 0, 0, 0.3)', // Stronger shadow on hover
};

export default FunFact;
