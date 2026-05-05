import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function useCounterAnimation(targetValue: string, shouldAnimate: boolean) {
  const [displayValue, setDisplayValue] = useState(() => shouldAnimate ? '0' : targetValue);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAnimatedRef = useRef(false);

  // Use useMemo to compute initial value
  const initialValue = useMemo(() => shouldAnimate ? '0' : targetValue, [targetValue, shouldAnimate]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayValue(initialValue);
    hasAnimatedRef.current = false;
  }, [initialValue]);

  const startAnimation = useCallback(() => {
    if (!shouldAnimate || hasAnimatedRef.current) {
      return;
    }

    // Extract numeric part and suffix
    const match = targetValue.match(/^([\d,]+)(.*)/);
    if (!match) {
      return;
    }

    const numericPart = parseInt(match[1].replace(/,/g, ''));
    const suffix = match[2];
    let currentValue = 0;

    // Calculate increment based on duration and target
    const duration = 1500; // 1.5 seconds animation
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    const increment = numericPart / totalFrames;

    let frame = 0;
    const animate = () => {
      frame++;
      currentValue = Math.min(Math.floor(increment * frame), numericPart);

      // Format with commas
      const formattedValue = currentValue.toLocaleString();
      setDisplayValue(formattedValue + suffix);

      if (frame < totalFrames) {
        animationRef.current = setTimeout(animate, 1000 / fps);
      } else {
        hasAnimatedRef.current = true;
      }
    };

    animate();
  }, [targetValue, shouldAnimate]);

  useEffect(() => {
    if (shouldAnimate && !hasAnimatedRef.current) {
      // Start animation after a brief delay to ensure component is mounted
      const timeoutId = setTimeout(startAnimation, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [shouldAnimate, startAnimation]);

  return displayValue;
}
