import React, {useEffect, useRef, useState, useMemo} from 'react';
import './image.css';

export default () => {
  const dom = useRef(null);
  const [load1, setLoad1] = useState(false);
  const [load2, setLoad2] = useState(false);

  const backToTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    window.onscroll = e => {
      e.preventDefault();
      e.stopPropagation();
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 5000) {
        setLoad1(true);
      }
      if (scrollTop >= 14000) {
        setLoad2(true);
      }
    };
  }, []);

  return (
    <div className="image" ref={dom}>
      <img src="./static/image/1.jpg" alt=""/>
      {
        useMemo(() => {
          if (load1) return (<img src="./static/image/2.jpg" alt=""/>)
        }, [load1])
      }
      {
        useMemo(() => {
          if (load2) return (<img src="./static/image/3.jpg" alt=""/>)
        }, [load2])
      }
      <div className="back" onClick={backToTop}>返回顶部</div>
    </div>
  )
};
