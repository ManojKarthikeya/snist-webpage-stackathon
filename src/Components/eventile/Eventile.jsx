import React from 'react'
import './evtile.css'
import { useSpring, animated, config } from 'react-spring'

export default function Eventile({name}) {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        delay: 1500,
        config: config.molasses,
      })
  return (
    <animated.div style={props} className='event-tile'>
        <div className="evtext">{name}</div>
    </animated.div>
  )
}
