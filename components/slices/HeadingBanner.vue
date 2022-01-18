<template>
  <Heading 
    class="HeadingBanner"
    :text="data.primary.heading"
  />
</template>

<script>
import Heading from '../global/Heading';
import RichText from '../global/RichText';

export default {
  name: 'HeadingBanner',
  props:[
    'data'
  ],
  components:{
    Heading
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
.HeadingBanner {
  @apply text-2xl;
  @apply font-heading;
  @apply text-purple;
  @apply mb-80;
  @apply text-center;
  width: 700px;
  @apply max-w-full;
  @apply mx-auto;
  @apply px-20;
  line-height: 4.8rem;


  @media (min-width: 1024px) {
    font-size: 4.2rem;
    @apply mb-100;
  }
}
</style>