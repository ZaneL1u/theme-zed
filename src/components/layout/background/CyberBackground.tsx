import { Show } from 'solid-js'
import { drawBg } from './CyberBackground'

export function CyberBackground() {
  const [context, setContext] = createSignal<HTMLCanvasElement>()
  const [wrapper, setWrapper] = createSignal<HTMLElement>()
  const [isMounted, setMounted] = createSignal(false)
  const [size, setSize] = createSignal({ width: 0, height: 0 })

  onMount(() => {
    setSize(wrapper().getBoundingClientRect())

    console.log(size())

    setMounted(true)
  })

  createEffect(() => {
    const { width, height } = size()

    if (context() && width && height)
      drawBg(context())
  })

  return (
    <>
      <div
        class="fixed inset-0 pointer-events-none print:hidden z--1 bg-black"
        ref={setWrapper}
      >
        <Show when={isMounted()}>
          <canvas
            ref={setContext}
            class="w-full h-full"
            width={size().width}
            height={size().height}
          />
        </Show>
      </div>
    </>
  )
}
