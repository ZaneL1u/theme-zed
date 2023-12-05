<script lang="ts" setup>
const dark = useDark();
const toggle = useToggle(dark);
</script>

<template>
  <div
    :key="dark ? 'dark' : 'light'"
    @click="toggle()"
    :class="
      dark ? 'i-material-symbols-dark-mode' : 'i-material-symbols-light-mode'
    "
  />
</template>
