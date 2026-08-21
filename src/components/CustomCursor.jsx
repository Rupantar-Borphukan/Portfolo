import { useEffect, useRef, useState } from 'react'

/**
 * Site-wide custom cursor: a small snowflake that tracks the pointer and
 * pulses with a glow ping wherever the user clicks. Only active on
 * fine-pointer (mouse/trackpad) devices — falls back to the native cursor
 * on touch.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const [glows, setGlows] = useState([])
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    function handleMove(e) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }
    }

    function handleDown(e) {
      const id = `${Date.now()}-${Math.random()}`
      setGlows((g) => [...g, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => {
        setGlows((g) => g.filter((glow) => glow.id !== id))
      }, 650)
      dotRef.current?.classList.add('cursor-click')
    }

    function handleUp() {
      dotRef.current?.classList.remove('cursor-click')
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="snow-cursor" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="#E8F6FF" strokeWidth="1.7" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="4" y1="7" x2="20" y2="17" />
          <line x1="20" y1="7" x2="4" y2="17" />
        </svg>
      </div>
      {glows.map((glow) => (
        <span
          key={glow.id}
          className="cursor-glow-ping"
          style={{ left: glow.x, top: glow.y }}
          aria-hidden="true"
        />
      ))}
    </>
  )
}
