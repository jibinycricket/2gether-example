<template>
  <div class="BannerCaption">
    <div class="BannerCaption__content">
      <div class="BannerCaption__column-1" v-if="data.primary.layout == 'Left Image - Right Text'">
        <prismic-image 
          v-if="data.primary.image_type === 'Single Image'"
          :field="data.primary.image" 
        />
        <div class="BannerCaption__image-grid" v-else>
          <figure
            v-for="(item, index) in data.items"
            :key="index"
            class="BannerCaption__image" 
          >
            <prismic-image 
              class="w-full" 
              :field="item.image" 
            />
          <figcaption class="text-center mt-10 mb-20" v-if="item.title">
            <span class="text-purple font-heading">{{ item.title }}</span>
            <br><p>{{item.subtitle}}</p></figcaption>
        </figure>
        </div>
      </div>
      <div class="BannerCaption__column-2">
        <div class="BannerCaption__text">
          <Heading class="BannerCaption__heading" :text="data.primary.heading" />
          <RichText :text="data.primary.body_text" />
          <Btn
            :url="data.primary.link_url"
            :text="data.primary.link_text"
          />
        </div>
      </div>
      <div class="BannerCaption__column-1" v-if="data.primary.layout == 'Left Text - Right Image'">
        <prismic-image 
          v-if="data.primary.image_type === 'Single Image'"
          class="BannerCaption__image" 
          :field="data.primary.image" 
        />
        <div class="BannerCaption__image-grid" v-else>
          <figure
            v-for="(item, index) in data.items"
            :key="index"
            class="BannerCaption__image" 
          >
            <prismic-image
              class="w-full" 
              :field="item.image" 
            />
            <figcaption class="text-center mt-10 mb-20" v-if="item.title">
              <span class="text-purple font-heading">{{ item.title }}</span>
              <br><p>{{item.subtitle}}</p></figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '../global/Heading';
import RichText from '../global/RichText';
import Btn from '../global/Btn';

export default {
  name: 'BannerCaption',
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
.BannerCaption {
  @apply mb-80;

  &__content {
    @apply px-50;
    @apply max-w-screen-xl;
    @apply mx-auto;
    @apply flex;
    @apply flex-wrap;
  }

  &__column-2 {
    order: 1;
    @apply w-full;
    @apply mb-20;
  }

  &__column-1 {
    order: 2;
    @apply w-full;
    @apply mb-30;
    img {
      width: 100%;
    }
  }

  &__image-grid {
    @apply flex;
    @apply flex-wrap;
    @apply items-start;

    .BannerCaption__image {
      margin-left: 10px;
      margin-right: 10px;
      width: calc(50% - 20px);
    }
  }

  &__text {
    width: 450px;
    @apply max-w-full;
    @apply mx-auto;
  }

  &__heading {
    @apply font-heading;
    @apply text-2xl;
    line-height: 4.8rem;
    @apply text-purple;
    @apply mb-20;
  }

  @media (min-width: 1024px) {
    @apply mb-120;
    
    &__content {
      @apply flex;
      @apply justify-between;
      @apply items-center;
    }

    &__column-1,
    &__column-2 {
      @apply w-1/2;
      order: initial;
    }

    &__heading {
      font-size: 4.2rem;
    }
  }
}
</style>