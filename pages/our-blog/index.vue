<template>
  <div class="py-150 max-w-screen-lg mx-auto">
    <Heading
      :text="doc.heading"
      class="font-heading mb-50 text-2xl text-center leading-none uppercase text-purple"
    />
    <ul class="flex flex-wrap">
      <li class="w-full mb-30 sm:w-1/2" v-for="article in articles.results" :key="article.uid">
        <nuxt-link
          :to="`/our-blog/${article.uid}`"
          class="inline-block px-20"
        >
          <Date class="inline-block text-sm text-red font-sans" :date="article.data.published_date"/> 
          <h2 class="leading-tight lg:text-xl mb-20 text-purple font-heading">{{ $prismic.asText(article.data.title) }}</h2>
          <prismic-image :field="article.data.image" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Heading from '~/components/global/Heading';
import Date from '~/components/global/Date';

export default {
  head () {
    return {title:this.title};
  },
  components: {
    Heading,
    Date
  },

  layout:'default-dark',
  async asyncData ({ params, error, $prismic }) {
    try {
      const doc = (await $prismic.api.getSingle('blog')).data;
      const articles = await $prismic.api.query(
        $prismic.predicates.at("document.type", "blog_post")
      ).then(res => {
        return res;
      });
      return {
        doc,
        articles,
        title: `${$prismic.asText(doc.heading)} - 2Gether International`
      };

    } catch (e) {
      error({ message: 'Page not found', statusCode: 404 })
    }
  }
};
</script>

<style>
</style>
