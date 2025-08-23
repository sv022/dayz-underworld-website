export function smoothScrollTo(element: HTMLElement, targetY: number, duration = 800) {
  const startY = element.scrollTop
  const diff = targetY - startY
  let startTime: number | null = null

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)

    const easing =
      progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

    element.scrollTop = startY + diff * easing

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
