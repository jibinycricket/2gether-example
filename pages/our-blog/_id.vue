<template>
<div class="py-80 lg:py-150">
  <div class="max-w-screen-md mx-auto">
    <div class="px-20">
      <Date class="inline-block text-sm text-red font-sans" :date="doc.published_date" />
      <Heading class="font-heading text-2xl text-purple leading-none mb-30" :text="doc.title"/>
      <prismic-image class="mb-30" :field="doc.image" />
      <RichText :text="doc.body"/>
    </div>
  </div>
</div>
</template>

<script>
import Heading from '~/components/global/Heading.vue';
import RichText from '~/components/global/RichText.vue';
import Date from '~/components/global/Date.vue';

export default {
  components:{
    Heading,
    RichText,
    Date
  },
  data() {
    return {
      title:'Blog Post'
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
      const doc = (await $prismic.api.getByUID('blog_post', params.id)).data;
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
