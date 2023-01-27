<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
button {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: none;
}

button:active {
  scale: 0.97
}
</style>