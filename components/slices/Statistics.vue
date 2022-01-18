<template>
  <section class="Statistics">
    <div class="flex flex-wrap">
      <div
        class="Statistics__card pt-60 pl-40 pb-30 pr-40" 
        v-for="(item, index) in data.items" 
        :key="`stat-${index}`"
        :class="`bg-${item.bg}`"
      >
        <p
          class="text-sm font-sans tracking-widest mb-10 uppercase" 
          :class="`text-${item.subcolor}`"
        >
          {{ $prismic.asText(item.subheading) }}
        </p>
        <p :class="`text-${item.maincolor}`"
          class="font-heading text-2xl mb-10 lg:text-4xl leading-none"
        >
          {{ $prismic.asText(item.heading) }}
        </p>
        <p :class="`text-${item.bodycolor}`"
        >
          {{ $prismic.asText(item.body_text) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statistics',
  props:[
    'data'
  ],
  components:{
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
.Statistics {
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.25); 
  width: calc(100% - 40px);
  @apply mx-auto;
  @apply max-w-screen-xl;
  @apply mb-80;

  &__card {
    @apply w-full;
  }

  @media (min-width: 768px) {
    &__card {
      width: 50%;
    }
  }
  @media (min-width: 1024px) {
    width: calc(100% - 100px);
    @apply mb-100;
    
    &__card {
      width: 25%;
    }
  }

  @media (min-width: 1440px) {
  }
}
</style>