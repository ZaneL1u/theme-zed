import { createSignal } from 'solid-js'
import { drawBg } from './CyberBackground'

export function CyberBackground() {
  const wrapper = createSignal<HTMLElement | null>(null)

  const context = createSignal<HTMLCanvasElement | null>(null)

  // onMounted(() => {
  //   nextTick(() => {
  //     if (wrapper.value && context.value) {
  //       drawBg(context.value)
  //     }
  //   })
  // })

  // const isMounted = useMounted()

  return (
    <>
      <div>123123</div>
    </>
  )
}
