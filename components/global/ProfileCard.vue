<template>
  <div class="ProfileCard">
    <nuxt-link 
      :to="url"
    >
      <prismic-image :field="image" class="w-full"/>
    </nuxt-link>
    <p class="text-purple font-heading">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props:[
    'url',
    'name',
    'image'
  ]
}
</script>

<style lang="scss">
  .ProfileCard {
    @apply text-center;
    a {
      @apply inline-block;
      @apply mx-auto;
      @apply rounded-full;
      max-width: 120px;
      max-height: 120px;
      @apply mb-10;
      overflow: hidden;
    }
    
    img {
      width: 100%;
    }
  }
</style>