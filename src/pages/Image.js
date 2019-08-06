import React, {useEffect, useRef, useState, useMemo} from 'react';
import './image.css';

export default () => {
  const dom = useRef(null);
  const [show, setShow] = useState(false);
  const [load1, setLoad1] = useState(false);
  const [load2, setLoad2] = useState(false);

  const backToTop = () => {
    setShow(false);
    window.scroll(0, 0);
  };

  useEffect(() => {
    window.onscroll = e => {
      e.preventDefault();
      e.stopPropagation();
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 1000) {
        setShow(true);
      } else {
        setShow(false);
      }
      if (scrollTop >= 3000) {
        setLoad1(true);
      }
      if (scrollTop >= 8000) {
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
      <div className="back" onClick={backToTop} style={{display: show ? 'block' : 'none'}}>返回顶部</div>
    </div>
  )
};
