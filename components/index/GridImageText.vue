<template>
  <a :href="$prismic.asLink(fields[0].link)" class="GridImageText" :style="bgStyle">
    <div class="GridImageText__content">
      <div v-if="fields[0].subheading" class="GridImageText__subheading" :class="`${subcolor}`">{{ $prismic.asText(fields[0].subheading) }}</div>
      <div v-if="fields[0].heading" class="GridImageText__heading" :class="`${maincolor}`">{{ $prismic.asText(fields[0].heading) }}</div>
      <p v-if="fields[0].body" class="GridImageText__body" :class="`${maincolor}`">{{ $prismic.asText(fields[0].body) }}</p>
    </div>
  </a>
</template>

<script>

export default {
  name: 'GridImageText',
  props: [
    'fields',
    'maincolor',
    'subcolor'
  ],
  computed:{
    bgStyle() {
      return {
        background:`url('${this.fields[0].image.url}`,
        backgroundSize:'cover'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.GridImageText {
  @apply flex;
  @apply items-end;
  min-height: 43vw;

  &__content {
    @apply p-20;
  }

  &__subheading {
    @apply uppercase;
    @apply font-sans;
    @apply mb-20;
    @apply text-sm;
  }

  &__heading {
    font-size: 4.2rem;
    @apply font-heading;
    @apply font-medium;
    @apply leading-tight;
    @apply mb-10;
  }

  @media (min-width: 1024px) {
    min-height: initial;
    height: calc(80vw - 350px);

    &__content {
      @apply px-40;
      @apply pb-30;
    }
  }
}

</style>


