<template>
<div class="RichTextSlice">
  <div class="RichTextSlice__content">
    <RichText :text="data.primary.text" />
  </div>
</div>
</template>

<script>
import RichText from '../global/RichText';

export default {
  name: 'RichTextSlice',
  props:[
    'data'
  ],
  components:{
    RichText
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
.RichTextSlice {
  @apply mb-80;

  &__content {
    @apply px-20;
    @apply max-w-screen-md;
    @apply mx-auto;
    @apply flex;
    @apply justify-center;
  }

  @media (min-width: 1024px) {
    margin-bottom: 25vh;
  }
}
</style>