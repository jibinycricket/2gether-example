<template>
  <prismic-link class="Btn" :field="url" v-if="url.url">
    {{$prismic.asText(text)}}
  </prismic-link>
</template>

<script>
export default {
  name: 'Btn',
  props:[
    'url',
    'text',
  ]
}
</script>

<style lang="scss" scoped>
  .Btn {
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
    transition-duration: .3s;

    &:hover {
      @apply text-blue;
      @apply border-white;
      @apply bg-white;
    }
  }
</style>


