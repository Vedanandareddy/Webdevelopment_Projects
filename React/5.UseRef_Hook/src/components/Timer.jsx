import React from 'react'
import { useState, useRef } from 'react'

const Timer = () => {
  const [starttime, setstarttime] = useState(null)
  const [presenttime, setpresenttime] = useState(null)
  const tid = useRef(null)

  function start(before) {
    if (before != 0) {
      setstarttime(Date.now() - (before * 1000))
    }
    else {
      setstarttime(Date.now())
    }
    clearInterval(tid.current)
    tid.current = setInterval(() => {
      setpresenttime(Date.now())
    }, 200);
  }

  function end() {
    clearInterval(tid.current)
    console.log(timer)
  }

  function resume() {
    start(timer)
  }

  let timer = 0;
  if (starttime != null && presenttime != null) {
    timer = (presenttime - starttime) / 1000;
  }
  return (
    <div>
      <h2>{timer.toFixed(2)}</h2>
      <button onClick={() => start(0)}>Start</button>
      <button onClick={end}>Stop</button>
      <button onClick={resume}>Resume</button>
    </div>
  )
}

export default Timer

