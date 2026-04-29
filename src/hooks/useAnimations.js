import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

export function useTypewriter(words, speed = 80, pause = 2200) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout
    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => { setText(word.slice(0, charIdx)); setCharIdx(c => c + 1) }, speed)
    } else if (!deleting && charIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setText(word.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, speed / 2)
    } else {
      timeout = setTimeout(() => {
        setDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
      }, 50)
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return text
}
