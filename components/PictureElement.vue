<template>
  <picture v-if="path">
    <source
      :srcSet="`
        ${require(`~/assets/img/${path}?webp`)} 1x,
        ${
          path2x
            ? require(`~/assets/img/${path2x}?webp`)
            : require(`~/assets/img/${path}?webp`)
        } 2x
      `"
      type="image/webp"
    />
    <source
      :srcSet="`
        ${require(`~/assets/img/${path}`)} 1x,
        ${
          path2x
            ? require(`~/assets/img/${path2x}`)
            : require(`~/assets/img/${path}`)
        } 2x
      `"
      type="image/png"
    />
    <img
      :src="require(`~/assets/img/${path}`)"
      :srcSet="`
        ${require(`~/assets/img/${path}`)} 1x,
        ${
          path2x
            ? require(`~/assets/img/${path2x}`)
            : require(`~/assets/img/${path}`)
        } 2x
      `"
      :alt="`${alt}`"
      loading="lazy"
      :width="width"
      :height="height"
    />
  </picture>
</template>
<script>
export default {
  props: {
    path: { type: String, default: '' },
    path2x: { type: String, default: '' },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    alt: { type: String, default: '' },
  },
}
</script>
