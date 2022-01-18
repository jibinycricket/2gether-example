<template>
  <ConditionalLink v-if="fields" :field="fields.link" class="GridImage">
    <div class="GridImage__inner">
      <div class="Grid__content">
        <prismic-image :field="fields.image" />
      </div>
    </div>
  </ConditionalLink>
</template>

<script>
import ConditionalLink from '../global/ConditionalLink';

export default {
  name: 'GridImage',
  props: [
    'fields'
  ],
  components:{
    ConditionalLink
  }
}
</script>

<style lang="scss" scoped>
.GridImage__inner {
  height: 100%;
}
.GridImage .Grid__content {
  height: 100%;
}
.GridImage img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  object-fit: cover;
}
</style>


