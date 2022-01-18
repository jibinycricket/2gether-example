<template>
  <a :href="$prismic.asLink(fields[0].link)" class="GridLink" :class="`${bg}`">
    <div class="GridLink__content" :class="`${maincolor}`">
      <div v-if="fields[0].text" class="GridLink__text">{{ $prismic.asText(fields[0].text) }}</div>
      <Icon icon="line"/>
    </div>
  </a>
</template>

<script>
import Icon from '../global/Icon';

export default {
  name: 'GridLink',
  components:{
    Icon
  },
  props: [
    'fields',
    'bg',
    'maincolor'
  ],
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.GridLink {
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply font-heading;
  @apply tracking-tighter;
  @apply text-xl;
  @apply text-center;

  &__content {
    width: 80%;
    @apply mx-auto;
  }
  &__text {
    width: 190px;
    @apply mx-auto;
    @apply max-w-full;
    @apply leading-tight;
  }
  svg {
    @apply mt-30;
    width: 70px;
    @apply mx-auto;
  }

  @media (min-width: 1024px) {
    @apply text-2xl;
  }

  @media (min-width: 1440px) {
    font-size: 4.2rem;
  }
}
</style>


