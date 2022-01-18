<template>
  <prismic-link class="StickyCta" :field="url">
    {{$prismic.asText(text)}}
  </prismic-link>
</template>

<script>
export default {
  name: 'StickyCTA',
  props:[
    'text',
    'url'
  ]
}
</script>

<style lang="scss" scoped>
  .StickyCta {
    @apply fixed;
    bottom: 20px;
    right: 20px;
    @apply bg-blue;
    @apply text-white;
    @apply px-30;
    @apply py-5;
    @apply transition-all;
    @apply rounded-full;
    @apply inline-block;
    @apply text-sm;
    @apply border-solid;
    @apply border-2;
    @apply border-blue;
    @apply uppercase;
    @apply font-sans;
    @apply z-3;
    transition-duration: .3s;

    &:hover {
      @apply text-blue;
      @apply border-white;
      @apply bg-white;
    }
  }
</style>


