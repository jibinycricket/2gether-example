<template>
  <header class="CTABanner">
    <prismic-image v-if="data.primary.image.url" :field="data.primary.image" />
    <div class="CTABanner__text">
      <Heading :text="data.primary.heading" />
      <RichText :text="data.primary.body_text" />
      <Btn
        :url="data.primary.link_url"
        :text="data.primary.link_text"
      />
    </div>
  </header>
</template>

<script>
import Heading from '../global/Heading';
import Btn from '../global/Btn';
import RichText from '../global/RichText';

export default {
  name: 'CTABanner',
  props:[
    'data'
  ],
  components:{
    Btn,
    Heading,
    RichText
  },
  computed: {
  },
}
</script>


<style lang="scss" scoped>
.CTABanner {
  @apply border-t-4;
  @apply border-blue;
  @apply relative;
  @apply text-white;
  @apply text-center;
  @apply mb-80;

  img {
    min-height: 90vh;
    @apply w-full;
    @apply object-cover;  
  }
  
  &__text {
    @apply w-full;
    @apply px-20;
    @apply absolute;
    @apply z-2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ::v-deep h1 {
      @apply uppercase;
      @apply font-bold;
      @apply text-2xl;
      @apply max-w-full;
      @apply mx-auto;
      @apply font-heading;
      @apply mb-25;
      @apply leading-none;
      width: 450px;
    }

    ::v-deep p {
      width: 350px;
      @apply mx-auto;
    }
  }

  &:after {
    @apply absolute;
    content:'';
    @apply block;
    @apply top-0;
    @apply left-0;
    @apply w-full;
    @apply h-full;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  @media (min-width: 1024px) {
    @apply mb-100;

    &__text {
      ::v-deep h1 {
        @apply text-3xl;
        @apply mb-40;
        width: 1000px;
      }

      ::v-deep p {
        width: 550px;
      }
    }
  }

  @media (min-width: 1440px) {
    &__text {
      ::v-deep h1 {
        @apply text-4xl;
      }
    }
  }
}
</style>