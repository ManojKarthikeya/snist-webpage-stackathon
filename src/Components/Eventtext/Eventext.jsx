import React, { useEffect, useState } from "react";
import { useTrail, animated as a } from "react-spring";
import './event-text.css'

const items = ["We never", "remember", "days, only", "moments."];
const config = { mass: 8, tension: 1000, friction: 400 };

function EventText() {
  const [toggle, set] = useState(false);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0, color: 'rgb(66, 61, 63)'}
  });

  useEffect(()=>{
    set(state => !state);
  },[])

  return (
    <div className="trails-main" >
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={items[index] === 'moments.' ? {
                ...rest,
                color: '#781414',
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
              } : {
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
              }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default EventText;
