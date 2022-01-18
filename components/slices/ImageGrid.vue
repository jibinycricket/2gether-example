<template>
<section class="ImageGrid px-50">
  <div class="ImageGrid__content">
    <Heading :text="data.primary.section_heading" class="ImageGrid__heading lg:mb-50" />
    <div 
    v-for="(group, index) in groups"
    :key="index"
    class="ImageGrid__gallery -mx-20 lg:-mx-20 text-center sm:mb-50">
      <figure class="ImageGrid__item" v-for="(item, index) of group" :key="index">
        <prismic-link 
          v-if="item.url.url"
          :field="item.url"
        >
          <prismic-image :field="item.image" />
          <figcaption>{{ item.heading }}<br><p>{{item.subheading}}</p></figcaption>
        </prismic-link>
        <div v-else>
          <prismic-image :field="item.image" />
          <figcaption>{{ item.heading }}<br><p>{{item.subheading}}</p></figcaption>
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
  name: 'ImageGrid',
  props:[
    'data'
  ],
  components:{
    Heading,
    RichText,
    Btn
  },
  computed: {
    groups() {
      const size = this.data.primary.num_of_row || 5; 
      let arrayOfArrays = [];
      for (let i=0; i<this.data.items.length; i+=size) {
        arrayOfArrays.push(this.data.items.slice(i,i+size));
      }
      return arrayOfArrays
    }
  },
}
</script>

<style lang="scss" scoped>
.ImageGrid {
  @apply mb-80;

  &__heading {
    @apply font-heading;
    @apply text-2xl;
    line-height: 4.8rem;
    @apply text-purple;
    @apply mb-20;
  }

  &__content {
    @apply px-20;
    @apply max-w-screen-xl;
    @apply mx-auto;
    @apply text-center;
  }

  &__gallery {
    @apply flex;
    @apply flex-wrap;
    @apply justify-center;
  }

  &__item {
    @apply w-1/2;
    @apply text-center;

    img {
      @apply w-full;
      @apply mb-10;
      @apply rounded-full;
      max-width: 125px;
      width: 100%;
      @apply mx-auto;
    }

    figcaption {
      @apply font-sans;

      p {
        @apply font-serif;
      }
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 25vh;

    &__item {
      @apply w-1/4;
    }

    &__gallery {
      @apply flex-nowrap;
    }
  }

  @media (min-width: 1280px) {
    &__item {
      @apply w-1/5;
    }
  }
}
</style>
