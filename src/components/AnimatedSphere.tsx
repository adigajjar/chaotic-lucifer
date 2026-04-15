import React, { useEffect, useRef } from "react";

const AnimatedSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    const dots: {
      x: number;
      y: number;
      z: number;
      baseRadius: number;
      phase: number;
      speed: number;
    }[] = [];
    const DOT_COUNT = 800;
    const SPHERE_RADIUS = width * 0.4;

    for (let i = 0; i < DOT_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
      const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;

      dots.push({
        x: SPHERE_RADIUS * Math.cos(theta) * Math.sin(phi),
        y: SPHERE_RADIUS * Math.sin(theta) * Math.sin(phi),
        z: SPHERE_RADIUS * Math.cos(phi),
        baseRadius: 1 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.002,
      });
    }

    let rotationX = 0;
    let rotationY = 0;

    // Mouse interaction states
    let targetVX = 0.0015;
    let targetVY = 0.0025;
    let currentVX = 0.0015;
    let currentVY = 0.0025;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate distance from center (-1 to 1)
      const dx = (mouseX / rect.width) * 2 - 1;
      const dy = (mouseY / rect.height) * 2 - 1;

      // Influence rotation target velocities based on mouse position
      targetVY = dx * 0.015;
      targetVX = dy * 0.015;
    };

    const handleMouseLeave = () => {
      // Return to auto-rotation when mouse leaves
      targetVX = 0.0015;
      targetVY = 0.0025;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate current velocity towards target velocity
      currentVX += (targetVX - currentVX) * 0.05;
      currentVY += (targetVY - currentVY) * 0.05;

      rotationX += currentVX;
      rotationY += currentVY;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      const centerX = width / 2;
      const centerY = height / 2;

      const projectedDots = dots.map((dot) => {
        const x1 = dot.x * cosY - dot.z * sinY;
        const z1 = dot.z * cosY + dot.x * sinY;

        const y2 = dot.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + dot.y * sinX;

        const focalLength = 600;
        const z = z2 + focalLength;
        const perspectiveScale = focalLength / z;

        const projX = centerX + x1 * perspectiveScale;
        const projY = centerY + y2 * perspectiveScale;

        // Pulse animation per dot
        const pulse = Math.sin(time * dot.speed + dot.phase); // Between -1 and 1
        const scaleMod = 1 + pulse * 0.8; // Scale varies between 0.6 and 1.4
        const opacityMod = 0.6 + pulse * 0.4; // Base opacity varies based on pulse

        return {
          x: projX,
          y: projY,
          z: z2,
          scale: perspectiveScale * scaleMod,
          radius: dot.baseRadius,
          opacityMod,
        };
      });

      projectedDots.sort((a, b) => b.z - a.z);

      for (const dot of projectedDots) {
        const depthFactor = (dot.z + SPHERE_RADIUS) / (SPHERE_RADIUS * 2);
        const baseOpacity = Math.max(0.05, Math.min(0.9, depthFactor + 0.1));
        const finalOpacity = baseOpacity * dot.opacityMod;

        const size = dot.radius * dot.scale;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.1, size), 0, Math.PI * 2);

        ctx.fillStyle = `rgba(0, 255, 204, ${finalOpacity})`;

        if (dot.z > SPHERE_RADIUS * 0.3) {
          ctx.shadowBlur = 10 * dot.opacityMod;
          ctx.shadowColor = `rgba(0, 255, 204, ${finalOpacity * 0.8})`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full max-w-[450px] aspect-square object-contain mx-auto transition-transform duration-700 ease-out hover:scale-105 cursor-crosshair"
      style={{ width: "100%" }}
    />
  );
};

export default AnimatedSphere;
