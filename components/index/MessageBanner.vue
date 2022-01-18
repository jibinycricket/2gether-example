<template>
  <div class="MessageBanner">
    <div class="MessageBanner__content">
      <h2 class="MessageBanner__heading">{{ $prismic.asText(homepage.message_heading) }}</h2>
      <div class="MessageBanner__subheading" v-html="$prismic.asHtml(homepage.message_subheading)"></div>
      <div class="MessageBanner__subheading hidden"><em></em></div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBanner',
  props:[
    'homepage',
  ]
}
</script>

<style lang="scss">
/* purgecss start ignore */
.MessageBanner {
  @apply text-center;
  @apply px-20;
  @apply block;
  @apply mb-100;

  &__content {
    width: 580px;
    @apply max-w-full;
    @apply mx-auto;

    br {
      display: none;
    }
  }
  &__heading {
    @apply font-sans;
    @apply text-red;
    @apply uppercase;
    @apply text-sm;
    @apply mb-10;
  }

  &__subheading {
    @apply font-heading;
    @apply font-medium;
    @apply text-2xl;
    @apply text-purple;
    @apply tracking-tighter;
    @apply leading-tight;

    em {
      font-style: normal;
      position: relative;
  
      &:after {
        bottom: 0;
        left: 0;
        position: absolute;
        content:'';
        display: block;
        height: 2px;
        width: 100%;
        @apply bg-blue;
      }
    }
  }
  
  @media (min-width: 1024px) {
    br {
      display: block;
    }

    &__content {
      width: 80%;
    }

    &__subheading {
      font-size: 4.2rem;
      line-height: 4.8rem;
    }
  }
}
/* purgecss end ignore */
</style>


