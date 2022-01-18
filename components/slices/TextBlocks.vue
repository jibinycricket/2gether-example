<template>
<section class="TextBlocks">
  <div class="TextBlocks__content">
    <div class="text-left flex flex-wrap">
      <div class="TextBlocks__card" v-for="(item, index) in data.items" :key="`team-${index}`">
        <div class="TextBlocks__card__content">
          <p class="font-sans text-sm mb-10 text-red">{{ $prismic.asText(item.heading) }}</p>
          <RichText :text="item.body_text" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Heading from '../global/Heading';
import RichText from '../global/RichText';
import Btn from '../global/Btn';

export default {
  name: 'TextBlocks',
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
.TextBlocks {
  @apply mb-80;

  &__content {
    width: calc(100% - 40px);
    @apply max-w-screen-xl;
    @apply mx-auto;
  }

  &__card {
    @apply px-20;
    @apply mb-30;
    @apply w-full;

    &__content {
      width: 240px;
      @apply max-w-full;
      @apply mx-auto;
    }
  }

  @media (min-width: 768px) {
    &__card {
      @apply w-1/2;
    }
  }

  @media (min-width: 1024px) {
    @apply mb-100;

    &__content {
      width: calc(100% - 100px);
    }
    
    &__card {
      @apply w-auto;
      @apply flex-1;
      @apply px-0;

      &__content {
        @apply ml-0;
      }
    }
  }
}
</style>