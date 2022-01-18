<template>
<section class="ImageGallery">
  <div class="ImageGallery__content">
    <Heading :text="data.primary.heading" class="lg:mb-50" />
    <div class="ImageGallery__gallery -mx-20 lg:-mx-20">
      <figure class="ImageGallery__item mb-40" v-for="(item, index) of data.items" :key="index">
        <div class="px-20 lg:px-20">
          <prismic-link 
            v-if="item.url.url"
            :field="item.url"
          >
            <prismic-image :field="item.gallery_image" />
            <figcaption>{{ $prismic.asText(item.image_captions) }}</figcaption>
          </prismic-link>
          <div v-else>
            <prismic-image :field="item.gallery_image" />
            <figcaption>{{ $prismic.asText(item.image_captions) }}</figcaption>
          </div>
        </div>
      </figure>
    </div>
  </div>
</section>
</template>

<script>
import Heading from '../global/Heading';
import RichText from '../global/RichText';
import Btn from '../global/Btn';

export default {
  name: 'ImageGallery',
  props:[
    'data'
  ],
  components:{
    Heading,
    RichText,
    Btn
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
.ImageGallery {
  @apply mb-80;

  &__content {
    @apply px-20;
    @apply max-w-screen-xl;
    @apply mx-auto;
    @apply text-center;
  }

  &__gallery {
    @apply flex;
    @apply flex-wrap;
  }

  &__item {
    @apply w-1/2;
    @apply text-center;

    img {
      @apply w-full;
      @apply mb-10;
    }

    figcaption {
      @apply font-sans;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 25vh;

    &__item {
      @apply w-1/4;
    }
  }
}
</style>
