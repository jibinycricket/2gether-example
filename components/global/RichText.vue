<template>
  <div>
    <div class="RichText" v-html="$prismic.asHtml(text)"></div>
    <div class="hidden">
      <h1></h1><h2></h2><h3></h3><h4></h4><h5></h5><h6></h6>
      <p></p>
      <ol></ol>
      <ul></ul>
      <strong></strong>
      <a href=""></a>
      <em></em>
      <b></b>
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'RichText',
  props:[
    'text'
  ]
}
</script>

<style lang="scss" scoped>
  /* purgecss start ignore */
  .RichText {
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3 {
      @apply font-heading;
      @apply mb-10;
      @apply text-purple;
      line-height: 4rem;
    }

    ::v-deep h1 {
      @apply text-2xl;
    }

    ::v-deep h2 {
      @apply text-lg;
    }

    ::v-deep h3 {
      @apply text-lg;
    }

    ::v-deep p {
      @apply mb-10;
    }

    ::v-deep strong {
      @apply mt-10;
      @apply inline-block;
    }

    ::v-deep ol {
      list-style-type: decimal;
      list-style-position: inside;
      @apply pl-0;
      @apply mb-20;
    }

    ::v-deep ul {
      @apply pl-0;
      list-style-type: disc;
      list-style-position: inside;
      @apply mb-20;
    }

    ::v-deep a {
      text-decoration: underline;
      @apply text-blue;
    }

    ::v-deep img {
      @apply max-w-full;
      @apply mx-auto;
    }

    @media (min-width: 1024px) {
      ::v-deep p {
        @apply mb-20;
      }
    }

  }
  /* purgecss end ignore */
</style>


