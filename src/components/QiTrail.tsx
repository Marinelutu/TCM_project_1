import { useEffect, useRef } from 'react';

export default function QiTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const points = useRef<{ x: number; y: number; age: number }[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and filter points
            points.current = points.current.filter(p => p.age < 50);
            points.current.forEach(p => p.age++);

            if (points.current.length > 2) {
                ctx.beginPath();
                ctx.moveTo(points.current[0].x, points.current[0].y);

                for (let i = 1; i < points.current.length; i++) {
                    const xc = (points.current[i].x + points.current[i - 1].x) / 2;
                    const yc = (points.current[i].y + points.current[i - 1].y) / 2;
                    ctx.quadraticCurveTo(points.current[i - 1].x, points.current[i - 1].y, xc, yc);

                    const alpha = 1 - points.current[i].age / 50;
                    ctx.strokeStyle = `rgba(253, 230, 138, ${alpha * 0.2})`; // soft-gold
                    ctx.lineWidth = alpha * 30;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(xc, yc);
                }
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[100] mix-blend-screen opacity-50"
            aria-hidden="true"
        />
    );
}
