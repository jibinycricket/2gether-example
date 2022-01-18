<template>
  <div class="CTABanner">
    <a :href="$prismic.asLink(homepage.cta_link)" class="CTABanner__button" v-html="$prismic.asText(homepage.cta_text)"></a>
  </div>
</template>

<script>
export default {
  name: 'CTABanner',
  props:[
    'homepage',
  ]
}
</script>

<style lang="scss" scoped>
.CTABanner {
  @apply bg-blue;
  @apply text-white;
  @apply text-center;
  @apply py-65;
  @apply px-20;
  
  &__button {
    @apply inline-block;
    @apply border-solid;
    @apply border-2;
    @apply border-white;
    @apply py-15;
    @apply px-20;
    @apply font-sans;
    @apply uppercase;
    @apply font-semibold;
    @apply text-sm;
    border-radius: 50px;
    transition: background-color .3s, border-color .3s, color .3s;

    &:hover {
      @apply bg-white;
      @apply border-white;
      @apply text-blue;
    }
  }
}
</style>


