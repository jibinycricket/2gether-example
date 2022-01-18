<template>
  <div class="Heading" v-html="$prismic.asHtml(text)"></div>
</template>

<script>
export default {
  name: 'Heading',
  props:[
    'text'
  ]
}
</script>