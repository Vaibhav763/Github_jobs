import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const LoadingFile = () => {
    const container = useRef(null);
  
    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('./loading.json'),
      });
      animate.setSpeed(0.5);
    }, []);
  
    return (
          <div className="loading-container" ref={container}></div>
    );
  };
  
  export default LoadingFile;