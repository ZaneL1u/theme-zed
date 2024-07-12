import { createSignal } from 'solid-js'
import { drawBg } from './CyberBackground'

export function CyberBackground() {
  let context: HTMLCanvasElement
  let wrapper: HTMLDivElement

  // const wrapper = createSignal<HTMLElement | null>(null)

  // const context = createSignal<HTMLCanvasElement | null>(null)

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
      <div ref={wrapper} />
      <canvas
      // v-if="isMounted"
        ref={context}
      />
    </>
  )
}

// <script lang="ts" setup>
// import { drawBg } from "./CyberBackground";
// const wrapper = ref<HTMLElement | null>(null);

// const context = ref<HTMLCanvasElement | null>(null);

// onMounted(() => {
//   nextTick(() => {
//     if (wrapper.value && context.value) {
//       drawBg(context.value);
//     }
//   });
// });

// const isMounted = useMounted();
// </script>

// <template>
//   <div
//     class="fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden z--1"
//     ref="wrapper"
//   >
//     <canvas
//       v-if="isMounted"
//       ref="context"
//       :width="wrapper.clientWidth"
//       :height="wrapper.clientHeight"
//     ></canvas>
//   </div>
// </template>
