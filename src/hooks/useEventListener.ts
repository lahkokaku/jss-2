import { useEffect } from "react"

const useEventListener = (
  element: HTMLBodyElement | HTMLElement | null,
  eventName: string,
  fn: (e: Event) => void
): void => {

  const el = element ?? window

  useEffect((): (() => void) => {
    el.addEventListener(eventName, fn)
    return () => el.removeEventListener(eventName, fn)
  }, [element, eventName, fn])
}

export default useEventListener