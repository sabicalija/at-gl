<template>
  <div class="sketchfab-embed-wrapper">
    <iframe
      title="A 3D model"
      width="640"
      height="480"
      src="https://sketchfab.com/models/468e2039bde34a3fabb9e90bff9cd56b/embed"
      frameborder="0"
      allow="autoplay; fullscreen; vr"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>

    <p>
      <a
        href="https://sketchfab.com/3d-models/ear-anatomy-468e2039bde34a3fabb9e90bff9cd56b?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
        target="_blank"
        >Ear Anatomy</a
      >
      by
      <a
        href="https://sketchfab.com/holoxica?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
        target="_blank"
        >holoxica</a
      >
      on
      <a
        href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
        target="_blank"
        >Sketchfab</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "SketchFabEarAnatomy"
};
</script>

<style lang="stylus" scoped>
div
  & > iframe
    width 100%
  & > p
    font-size 13px
    font-weight normal
    margin 5px
    color #4A4A4A
    & > a
      font-weight bold
      color #1CAAD9
</style>
