"use client";

import React from 'react';

const ParticleField = () => {
    // This component will only render on the client
    const [particles, setParticles] = React.useState<React.JSX.Element[]>([]);

    React.useEffect(() => {
        const newParticles = Array.from({ length: 50 }).map((_, i) => {
            const style = {
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
            };
            return <div key={i} className="particle" style={style}></div>;
        });
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
            <div className="particle-field">
                {particles}
            </div>
        </div>
    )
}

export default ParticleField;
