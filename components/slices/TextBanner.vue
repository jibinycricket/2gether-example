<template>
  <section class="TextBanner">
    <Heading class="TextBanner__subheading" :text="data.primary.subheading"/>
    <Heading class="TextBanner__heading" :text="data.primary.heading"/>
    <RichText class="TextBanner__body" :text="data.primary.body_text" />
  </section>
</template>

<script>
import Heading from '../global/Heading';
import RichText from '../global/RichText';

export default {
  name: 'TextBanner',
  props:[
    'data'
  ],
  components:{
    Heading,
    RichText
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
.TextBanner {
  @apply text-center;
  @apply max-w-full;
  @apply mx-auto;
  width: 800px;
  @apply px-20;
  @apply mb-80;

  &__subheading {
    @apply text-sm;
    @apply text-red;
    @apply tracking-wider;
    @apply uppercase;
    @apply font-sans;
    @apply font-semibold;
    @apply mb-20;
  }

  &__heading {
    @apply font-heading;
    @apply text-purple;
    @apply font-medium;
    @apply text-2xl;
    @apply mb-25;
    line-height: 4.8rem;
  }

  @media (min-width: 1024px) {
    @apply mb-100;

    &__heading {
      font-size: 4.2rem;
    }
  }
}
</style>