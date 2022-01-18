<template>
<div class="Member py-80 lg:py-150 lg:mt-50">
  <div class="Member__content flex flex-wrap justify-center">
    <div class="lg:w-1/2 flex justify-center">
      <div class="max-w-3xl">
        <Heading class="font-heading text-2xl leading-none mb-20 lg:mb-50 text-purple" :text="doc.title" />
        <prismic-image class="mb-20 lg:hidden" :field="doc.image" />
        <RichText :text="doc.body" />
      </div>
    </div>
    <div class="hidden lg:w-1/2 lg:flex justify-center items-start">
      <prismic-image :field="doc.image" />
    </div>
  </div>
</div>
</template>

<script>
import RichText from '~/components/global/RichText';
import Heading from '~/components/global/Heading';

export default {
  components:{
    Heading,
    RichText
  },
  data() {
    return {
      title:'Member'
    }
  },
  validate ({ params }) {
    return isNaN(+params.id)
  },
  head () {
    return {title: this.title};
  },
  layout:'default-dark',
  async asyncData ({ params, error, $prismic }) {
    try {
      const doc = (await $prismic.api.getByUID('team', params.id)).data;
      return {
        doc,
        title: `${$prismic.asText(doc.title)} - 2Gether International`
      };

    } catch (e) {
      error({ message: 'Document not found', statusCode: 404 })
    }
  }
}
</script>

<style lang="scss" scoped>
.Member {
  &__content {
    @apply px-20;
    @apply max-w-screen-xl;
    @apply mx-auto;
  }
}
</style>
