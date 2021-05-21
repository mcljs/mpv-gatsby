import React, { useState, useEffect } from 'react'
import Loaded from './Loaded'

const DelayedFallback = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {show && <Loaded />}
    </>
  )
}
export default DelayedFallback
