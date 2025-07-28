"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  id: number;
  colorPhase: number;
  directionChangeTimer: number;
  targetVx: number;
  targetVy: number;
  speedMultiplier: number;
  speedChangeTimer: number;
  colorBias: number; // -1 to 1, where -1 is blue, 1 is red
}

interface Triangle {
  p1: Point;
  p2: Point;
  p3: Point;
  opacity: number;
}

const AnimatedMesh = ({
  width = 400,
  height = 400,
  pointCount = 12,
  maxDistance = 80,
  speed = 0.5,
  densityGradient = false,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize points
  useEffect(() => {
    const points: Point[] = [];
    // Aggressive reduction for Android performance
    const isAndroid = isMobile;
    let effectivePointCount;
    if (isAndroid) {
      effectivePointCount = Math.min(pointCount, 35); // More aggressive for Android
    } else if (isMobile) {
      effectivePointCount = Math.min(pointCount, 60);
    } else {
      effectivePointCount = pointCount;
    }

    // Create equal distribution of red and blue biased points
    const shuffledIndices = Array.from({ length: effectivePointCount }, (_, i) => i);
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }

    for (let i = 0; i < effectivePointCount; i++) {
      let x, y;

      if (densityGradient) {
        // Create density gradient: denser on right side
        const bias = Math.random(); // 0 to 1
        const biasedX = Math.pow(bias, 0.6); // Skew towards right (higher values)
        x = biasedX * width;
        y = Math.random() * height;
      } else {
        x = Math.random() * width;
        y = Math.random() * height;
      }

      const initialVx = (Math.random() - 0.5) * speed;
      const initialVy = (Math.random() - 0.5) * speed;

      // Assign equal red/blue distribution with randomness
      const isRedBiased = shuffledIndices[i] < effectivePointCount / 2;
      const colorBias = isRedBiased ?
        0.3 + Math.random() * 0.7 : // Red bias: 0.3 to 1.0
        -0.3 - Math.random() * 0.7; // Blue bias: -0.3 to -1.0

      points.push({
        x,
        y,
        vx: initialVx,
        vy: initialVy,
        id: i,
        colorPhase: Math.random() * Math.PI * 2,
        directionChangeTimer: Math.random() * 120 + 60, // 60-180 frames
        targetVx: initialVx,
        targetVy: initialVy,
        speedMultiplier: 0.5 + Math.random() * 1.5, // 0.5x to 2x speed
        speedChangeTimer: Math.random() * 200 + 100, // 100-300 frames
        colorBias: colorBias
      });
    }
    pointsRef.current = points;
  }, [pointCount, width, height, speed, densityGradient, isMobile]);

  // Calculate distance between two points
  const distance = (p1: Point, p2: Point): number => {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  };

  // Find triangles using Delaunay-inspired approach
  const findTriangles = useCallback((points: Point[]): Triangle[] => {
    const triangles: Triangle[] = [];
    const effectiveMaxDistance = maxDistance;

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        for (let k = j + 1; k < points.length; k++) {
          const p1 = points[i];
          const p2 = points[j];
          const p3 = points[k];

          const d1 = distance(p1, p2);
          const d2 = distance(p2, p3);
          const d3 = distance(p3, p1);

          // Only create triangle if all sides are within max distance
          if (d1 <= effectiveMaxDistance && d2 <= effectiveMaxDistance && d3 <= effectiveMaxDistance) {
            // Calculate opacity based on triangle size (smaller = more opaque)
            const perimeter = d1 + d2 + d3;
            const opacity = Math.max(0.1, 1 - (perimeter / (effectiveMaxDistance * 3)));
            const opacityMultiplier = 0.35;

            triangles.push({
              p1, p2, p3,
              opacity: opacity * opacityMultiplier
            });
          }
        }
      }
    }

    return triangles;
  }, [maxDistance]);

  // Get dynamic color based on position and time
  const getDynamicColor = (point: Point): { r: number, g: number, b: number } => {
    // Simple red/blue randomization based on colorBias
    if (point.colorBias > 0) {
      // Strong red points - matching tile red-900
      return { r: 255, g: 29, b: 29 }; // red-900 color
    } else {
      // Strong blue points - matching tile blue-900
      return { r: 15, g: 58, b: 255 }; // blue-900 color
    }
  };

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // const currentTime = Date.now(); // Unused for now

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Update point positions and color phases
    pointsRef.current.forEach(point => {
      // Handle random speed changes
      point.speedChangeTimer--;
      if (point.speedChangeTimer <= 0) {
        // Set new random speed multiplier
        point.speedMultiplier = 0.3 + Math.random() * 2.5; // 0.3x to 2.8x speed
        point.speedChangeTimer = Math.random() * 300 + 150; // 150-450 frames
      }

      // Handle random direction changes
      point.directionChangeTimer--;
      if (point.directionChangeTimer <= 0) {
        // Set new random target velocity with current speed multiplier
        point.targetVx = (Math.random() - 0.5) * speed * point.speedMultiplier;
        point.targetVy = (Math.random() - 0.5) * speed * point.speedMultiplier;
        point.directionChangeTimer = Math.random() * 180 + 60; // 60-240 frames
      }

      // Smoothly interpolate towards target velocity (curved movement)
      const lerp = 0.02; // Slower interpolation for smoother curves
      point.vx += (point.targetVx - point.vx) * lerp;
      point.vy += (point.targetVy - point.vy) * lerp;

      // Update position
      point.x += point.vx;
      point.y += point.vy;
      point.colorPhase += 0.01; // Slowly evolving color phase

      // Bounce off edges with some padding
      const padding = 20;
      if (point.x <= padding || point.x >= width - padding) {
        point.vx *= -1;
        point.targetVx *= -1; // Also flip target to maintain direction
        point.x = Math.max(padding, Math.min(width - padding, point.x));
        // Keep speed multiplier when bouncing
        point.targetVx = point.targetVx > 0 ? Math.abs(point.targetVx) : -Math.abs(point.targetVx);
      }
      if (point.y <= padding || point.y >= height - padding) {
        point.vy *= -1;
        point.targetVy *= -1; // Also flip target to maintain direction
        point.y = Math.max(padding, Math.min(height - padding, point.y));
        // Keep speed multiplier when bouncing
        point.targetVy = point.targetVy > 0 ? Math.abs(point.targetVy) : -Math.abs(point.targetVy);
      }
    });

    // Find and draw triangles
    const triangles = findTriangles(pointsRef.current);

    // Draw triangular mesh
    triangles.forEach(triangle => {
      ctx.beginPath();
      ctx.moveTo(triangle.p1.x, triangle.p1.y);
      ctx.lineTo(triangle.p2.x, triangle.p2.y);
      ctx.lineTo(triangle.p3.x, triangle.p3.y);
      ctx.closePath();

      // Get average color of triangle vertices
      const color1 = getDynamicColor(triangle.p1);
      const color2 = getDynamicColor(triangle.p2);
      const color3 = getDynamicColor(triangle.p3);

      const avgColor = {
        r: Math.floor((color1.r + color2.r + color3.r) / 3),
        g: Math.floor((color1.g + color2.g + color3.g) / 3),
        b: Math.floor((color1.b + color2.b + color3.b) / 3)
      };

      // Fill triangle with dynamic gradient
      const centerX = (triangle.p1.x + triangle.p2.x + triangle.p3.x) / 3;
      const centerY = (triangle.p1.y + triangle.p2.y + triangle.p3.y) / 3;

      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 50
      );

      gradient.addColorStop(0, `rgba(${avgColor.r}, ${avgColor.g}, ${avgColor.b}, ${triangle.opacity})`);
      gradient.addColorStop(0.5, `rgba(${Math.floor(avgColor.r * 0.8)}, ${Math.floor(avgColor.g * 0.8)}, ${Math.floor(avgColor.b * 0.8)}, ${triangle.opacity * 0.7})`);
      gradient.addColorStop(1, `rgba(${Math.floor(avgColor.r * 0.6)}, ${Math.floor(avgColor.g * 0.6)}, ${Math.floor(avgColor.b * 0.6)}, ${triangle.opacity * 0.4})`);

      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw triangle edges with dynamic color
      ctx.strokeStyle = `rgba(${avgColor.r}, ${avgColor.g}, ${avgColor.b}, ${triangle.opacity * 0.8})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    });

    // Draw connection lines between nearby points
    const effectiveMaxDistance = maxDistance;
    const lineOpacityMultiplier = 0.6;
    const lineWidth = 1.2;

    for (let i = 0; i < pointsRef.current.length; i++) {
      for (let j = i + 1; j < pointsRef.current.length; j++) {
        const p1 = pointsRef.current[i];
        const p2 = pointsRef.current[j];
        const dist = distance(p1, p2);

        if (dist <= effectiveMaxDistance) {
          const opacity = (1 - dist / effectiveMaxDistance) * lineOpacityMultiplier;

          // Get colors for both points and blend
          const color1 = getDynamicColor(p1);
          const color2 = getDynamicColor(p2);
          const blendColor = {
            r: Math.floor((color1.r + color2.r) / 2),
            g: Math.floor((color1.g + color2.g) / 2),
            b: Math.floor((color1.b + color2.b) / 2)
          };

          // Add noise displacement for white outline
          const noiseOffset1 = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          };
          const noiseOffset2 = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          };

          // Draw white outline with noise displacement
          ctx.beginPath();
          ctx.moveTo(p1.x + noiseOffset1.x, p1.y + noiseOffset1.y);
          ctx.lineTo(p2.x + noiseOffset2.x, p2.y + noiseOffset2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
          ctx.lineWidth = lineWidth + 0.5;
          ctx.stroke();

          // Draw main colored line
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${blendColor.r}, ${blendColor.g}, ${blendColor.b}, ${opacity})`;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
      }
    }

    // Draw points with Android optimizations
    const isAndroid = isMobile;
    const pointRadius = isAndroid ? 2 : (isMobile ? 2.5 : 3);
    const glowRadius = isAndroid ? 4 : (isMobile ? 5 : 6);
    const pointOpacity = isAndroid ? 0.8 : (isMobile ? 1.0 : 0.9);
    const glowOpacity = isAndroid ? 0.2 : (isMobile ? 0.4 : 0.3);

    pointsRef.current.forEach(point => {
      const pointColor = getDynamicColor(point);

      // Main point
      ctx.beginPath();
      ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${pointColor.r}, ${pointColor.g}, ${pointColor.b}, ${pointOpacity})`;
      ctx.fill();

      // Add glow effect
      ctx.beginPath();
      ctx.arc(point.x, point.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${pointColor.r}, ${pointColor.g}, ${pointColor.b}, ${glowOpacity})`;
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [findTriangles, height, isMobile, maxDistance, speed, width]);

  useEffect(() => {
    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`${className}`}
      style={{
        filter: 'blur(0.5px)',
        background: 'transparent',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        willChange: 'transform', // Optimize for animations
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    />
  );
};

export default AnimatedMesh;