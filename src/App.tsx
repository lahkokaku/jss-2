import Router from '@/Router'
import components from '@/data/components'
import useEventListener from './hooks/useEventListener'

const {
  NavBar,
  ScrollToTop,
  Footer
} = components

function App() {
  const bodyElement: HTMLBodyElement | null = document.querySelector('body')
  const updateMousePosition = (e: MouseEventInit): void => {
    if (bodyElement) {
      const { clientX, clientY } = e
      bodyElement.style.setProperty('--gradient-pos', `${clientX}px ${clientY}px`)
    }
  }
  useEventListener(bodyElement, 'mousemove', updateMousePosition)

  return (
    <>
      <NavBar />
      <Router />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
