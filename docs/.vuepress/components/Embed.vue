<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Embed",
  props: {
    src: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="stylus" scoped></style>
