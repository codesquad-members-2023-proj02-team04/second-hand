import { useState, useEffect, useRef } from 'react';

interface PullToRefreshProps {
  apiCallback: () => void;
  startDistance?: number;
  maximumDistance?: number;
  refreshDistance?: number;
  transitionDuration?: number;
  minimumLoadingTime?: number;
}

let startY: number;

const usePullToRefresh = ({
  apiCallback,
  startDistance = 0,
  maximumDistance = 150,
  refreshDistance = 100,
  transitionDuration = 200,
  minimumLoadingTime = 1000,
}: PullToRefreshProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [distance, setDistance] = useState(startDistance);
  const loadingIndicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resetState = () => {
      setIsRefreshing(false);
      setDistance(startDistance);
    };

    const onRefresh = () => {
      if (loadingIndicatorRef.current) {
        loadingIndicatorRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        loadingIndicatorRef.current.style.transform = `translateY(${refreshDistance}px)`;
      }

      setTimeout(() => {
        apiCallback();
        setDistance(startDistance);
        setIsRefreshing(false);

        if (loadingIndicatorRef.current) {
          loadingIndicatorRef.current.style.transition = '';
          loadingIndicatorRef.current.style.transform = `translateY(${startDistance}px)`;
        }
      }, minimumLoadingTime);
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const distance = touchY - startY;
      const spinnerY = startDistance + distance;

      if (spinnerY > maximumDistance) {
        return;
      }

      if (loadingIndicatorRef.current) {
        loadingIndicatorRef.current.style.opacity = `${spinnerY / 100}`;
        loadingIndicatorRef.current.style.transform = `translateY(${spinnerY}px)`;
      }

      setIsRefreshing(true);
      setDistance(spinnerY);
    };

    const handleTouchEnd = () => {
      if (isRefreshing && distance >= refreshDistance) {
        onRefresh();
      } else {
        resetState();
      }
    };

    const container = document.documentElement;

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [distance]);

  return {
    isRefreshing,
    loadingIndicatorRef,
  };
};

export default usePullToRefresh;
