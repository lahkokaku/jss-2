import { useEffect } from 'react'
import Router from '@/Router'
import components from '@/data/components'

const {
  NavBar,
  Footer
} = components

function App() {
  useEffect((): (() => void) => {
    const bodyElement: HTMLBodyElement | null = document.querySelector('body')
    const updateMousePosition = (e: MouseEventInit): void => {
      if (bodyElement) {
        const { clientX, clientY } = e
        bodyElement.style.setProperty('--gradient-pos', `${clientX}px ${clientY}px`)
      }
    }
    window.addEventListener('mousemove', updateMousePosition)
    return (): void => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  )
}

export default App
