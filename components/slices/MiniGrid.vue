<template>
<section class="MiniGrid">
  <div 
    v-for="(item, index) in data.items" 
    :key="`grid-${index}`"
    class="w-full sm:w-1/2"
  >
    <GridImage 
      v-if="item.type === 'Image'" 
      :fields="item"
      class="h-full"
    />
    <GridText 
      class="h-full"
      v-else
      :fields="item" 
      :bg="`bg-${item.bg}`" 
      :subcolor="`text-${item.subcolor}`" 
      :maincolor="`text-${item.maincolor}`" 
      :bodycolor="`text-${item.bodycolor}`" 
      maincasing="uppercase"
      mainsizing="text-4xl"
    />
  </div>
</section>
</template>

<script>
import GridImage from "~/components/index/GridImage.vue";
import GridText from "~/components/index/GridText.vue";

export default {
  name: 'MiniGrid',
  props:[
    'data'
  ],
  components:{
    GridImage,
    GridText
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
.MiniGrid {
  @apply flex;
  @apply flex-wrap;
  @apply items-stretch;
  @apply mx-auto;
  margin-top: -150px;
  @apply mb-120;
  @apply relative;
  @apply z-2;
  width: calc(100% - 40px);
  max-width: 1400px;
  box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.25); 
  
  @media (min-width: 768px) {
    width: calc(100% - 100px);
  }
}
</style>