<template>
  <prismic-link
    v-if="isLink"
    :field="field"
  >
    <slot></slot>
  </prismic-link>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ConditionalLink',
  props:[
    'field'
  ],
  computed:{
    isLink() {
      if (this.field) {
        return this.field.link_type !== 'Any';
      }

      return false;
    }
  }
}
</script>
