<template>
  <div>
    <Banner :homepage="doc"/>
    <Grid :homepage="doc"/>
    <MessageBanner :homepage="doc"/>
    <CTABanner :homepage="doc"/>
  </div>
</template>

<script>
import Banner from "~/components/index/Banner.vue";
import Grid from "~/components/index/Grid.vue";
import MessageBanner from "~/components/index/MessageBanner.vue";
import CTABanner from "~/components/index/CTABanner.vue";

export default {
  components: {
    Banner,
    Grid,
    MessageBanner,
    CTABanner
  },

  async asyncData ({ params, error, $prismic }) {
    try {
      const doc = (await $prismic.api.getSingle('homepage')).data;
      return {
        doc
      };

    } catch (e) {
      error({ message: 'Page not found', statusCode: 404 })
    }
  }
};
</script>

<style>
</style>
