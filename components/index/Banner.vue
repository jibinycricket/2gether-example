<template>
  <header class="Banner">
    <img :src="homepage.banner_image.url" :alt="homepage.banner_image.alt">
    <div class="Banner__text">
      <h1>{{ $prismic.asText(homepage.banner_heading) }}</h1>
      <p>{{ $prismic.asText(homepage.banner_body) }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Banner',
  props:[
    'homepage',
  ]
}
</script>

<style lang="scss">
.Banner {
  @apply relative;
  @apply text-white;
  @apply text-center;

  img {
    height: 90vh;
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

    h1 {
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

    p {
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
    &__text {
      h1 {
        @apply text-3xl;
        @apply mb-40;
        width: 500px;
      }
    }
  }

  @media (min-width: 1440px) {
    &__text {
      h1 {
        @apply text-4xl;
        width: 750px;
      }
    }
  }
}
</style>


