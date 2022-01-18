<template>
  <div>
    <Header type="light" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      title: `2Gether-International`,
      link:[
        {
          href:'https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&family=Source+Serif+Pro:ital@0;1&family=Work+Sans:wght@600&display=swap',rel:'stylesheet'
        }
      ]
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchNav", $prismic);
    await store.dispatch("fetchFooter", $prismic);
  }
};
</script>

<style lang="scss">
html {
  @apply font-serif;
  font-size: 10px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  @apply text-base;
  @apply text-grey;
  line-height: 25px;

  @media (min-width: 1024px) {
    @apply text-md;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
