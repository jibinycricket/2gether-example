<template>
<div>
  <Slices v-for="(slice, index) in doc.body" :key="`slice${index}`" :data="slice"/>
</div>
</template>

<script>
import Slices from '~/components/slices/Slices';

export default {
  components:{
    Slices
  },
  data() {
    return {
      title:'Page'
    }
  },
  validate ({ params }) {
    return isNaN(+params.id)
  },
  head () {
    return {title: this.title};
  },
  layout:'default',
  async asyncData ({ params, error, $prismic }) {
    try {
      const doc = (await $prismic.api.getByUID('page', params.id)).data;
      return {
        doc,
        title: `${$prismic.asText(doc.page_title)} - 2Gether International`
      };

    } catch (e) {
      error({ message: 'Page not found', statusCode: 404 })
    }
  }
}
</script>
