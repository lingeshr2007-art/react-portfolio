import React, { useEffect, useRef } from 'react';

const MouseEffect = () => {
    const canvasRef = useRef(null);
    const sparklesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleClick = (e) => {
            // Create sparkles on click
            for (let i = 0; i < 12; i++) {
                sparklesRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 6,
                    vy: (Math.random() - 0.5) * 6,
                    size: Math.random() * 4 + 2,
                    color: `hsl(${Math.random() * 60 + 100}, 100%, 70%)`, // Bright green/yellowish
                    life: 1.0
                });
            }
        };

        window.addEventListener('click', handleClick);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw sparkles
            sparklesRef.current.forEach((sparkle, index) => {
                sparkle.x += sparkle.vx;
                sparkle.y += sparkle.vy;
                sparkle.life -= 0.02;
                sparkle.vy += 0.1; // Gravity effect for sparkles

                if (sparkle.life <= 0) {
                    sparklesRef.current.splice(index, 1);
                } else {
                    ctx.globalAlpha = sparkle.life;
                    ctx.fillStyle = sparkle.color;
                    ctx.beginPath();
                    ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
        />
    );
};

export default MouseEffect;
