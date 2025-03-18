import Router from '@/Router'
import components from '@/data/components'
import useEventListener from '@/hooks/useEventListener'
import AutoScrollToTop from '@/components/common/AutoScrollToTop'

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
      <AutoScrollToTop />
      <Router />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
