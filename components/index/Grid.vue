<template>
<div class="Grid">

  <!---------- Row 1 -------------->
  <GridImage 
    v-if="homepage.item_1_1[0].type === 'Image'" 
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_1_1[0]"
  />
  <GridText 
    v-else
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_1_1[0]" 
    :bg="`bg-${homepage.item_1_1[0].bg}`" 
    :subcolor="`text-${homepage.item_1_1[0].subcolor}`" 
    :maincolor="`text-${homepage.item_1_1[0].maincolor}`" 
    :bodycolor="`text-${homepage.item_1_1[0].bodycolor}`" 
    maincasing="uppercase"
  />

  <GridImage 
    v-if="homepage.item_1_2[0].type === 'Image'" 
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_1_2[0]"
  />
  <GridText 
    v-else
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_1_2[0]" 
    :bg="`bg-${homepage.item_1_2[0].bg}`" 
    :subcolor="`text-${homepage.item_1_2[0].subcolor}`" 
    :maincolor="`text-${homepage.item_1_2[0].maincolor}`" 
    :bodycolor="`text-${homepage.item_1_2[0].bodycolor}`" 
    maincasing="uppercase"
  />

  <GridImage 
    v-if="homepage.item_1_3[0].type === 'Image'" 
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_1_3[0]"
  />
  <GridText 
    v-else
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_1_3[0]" 
    :bg="`bg-${homepage.item_1_3[0].bg}`" 
    :subcolor="`text-${homepage.item_1_3[0].subcolor}`" 
    :maincolor="`text-${homepage.item_1_3[0].maincolor}`" 
    :bodycolor="`text-${homepage.item_1_3[0].bodycolor}`" 
    maincasing="uppercase"
  />

  <GridSocial class=" w-1/2 md:w-1/4" :fields="homepage.grid_1_4" bg="bg-white"/>

  <!------------ Row 2 ------------>
  <GridText 
    class="w-full md:w-1/2" 
    :fields="homepage.grid_2_1[0]" 
    subcolor="text-red" 
    maincolor="text-purple" 
    bg="bg-white" 
    mainsizing="text-4xl"
  />

  <GridImage 
    v-if="homepage.item_2_2[0].type === 'Image'" 
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_2_2[0]"
  />
  <GridText 
    v-else
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_2_2[0]" 
    :bg="`bg-${homepage.item_2_2[0].bg}`" 
    :subcolor="`text-${homepage.item_2_2[0].subcolor}`" 
    :maincolor="`text-${homepage.item_2_2[0].maincolor}`" 
    :bodycolor="`text-${homepage.item_2_2[0].bodycolor}`" 
    maincasing="uppercase"
  />

  <GridImage 
    v-if="homepage.item_2_3[0].type === 'Image'" 
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_2_3[0]"
  />
  <GridText 
    v-else
    class="w-1/2 md:w-1/4" 
    :fields="homepage.item_2_3[0]" 
    :bg="`bg-${homepage.item_2_3[0].bg}`" 
    :subcolor="`text-${homepage.item_2_3[0].subcolor}`" 
    :maincolor="`text-${homepage.item_2_3[0].maincolor}`" 
    :bodycolor="`text-${homepage.item_2_3[0].bodycolor}`" 
    maincasing="uppercase"
  />

  <!----------- Row 3 - Col 1 ----->
  <div class="Grid__large-column w-full md:w-1/2 flex flex-wrap">
    <GridText 
      class="Grid__item--large w-full" 
      :fields="homepage.grid_3_1[0]" 
      subcolor="text-purple" 
      maincolor="text-white" 
      bodycolor="text-white" 
      bg="bg-red" 
      maincasing="uppercase"
    />

  <GridImage 
    v-if="homepage.item_4_1[0].type === 'Image'" 
    class="Grid__item--small w-1/2" 
    :fields="homepage.item_4_1[0]"
  />
  <GridText 
    v-else
    class="Grid__item--small w-1/2" 
    :fields="homepage.item_4_1[0]" 
    :bg="`bg-${homepage.item_4_1[0].bg}`" 
    :subcolor="`text-${homepage.item_4_1[0].subcolor}`" 
    :maincolor="`text-${homepage.item_4_1[0].maincolor}`" 
    :bodycolor="`text-${homepage.item_4_1[0].bodycolor}`" 
    maincasing="uppercase"
  />

  <GridImage 
    v-if="homepage.item_4_2[0].type === 'Image'" 
    class="Grid__item--small w-1/2" 
    :fields="homepage.item_4_2[0]"
  />
  <GridText 
    v-else
    class="Grid__item--small w-1/2" 
    :fields="homepage.item_4_2[0]" 
    :bg="`bg-${homepage.item_4_2[0].bg}`" 
    :subcolor="`text-${homepage.item_4_2[0].subcolor}`" 
    :maincolor="`text-${homepage.item_4_2[0].maincolor}`" 
    :bodycolor="`text-${homepage.item_4_2[0].bodycolor}`" 
    maincasing="uppercase"
  />
  </div>

  <!----------- Row 3 - Col 2 ----->
  <div class="Grid__large-column w-full md:w-1/2 flex flex-wrap">
    <GridLink 
      class="Grid__item--small w-1/2" 
      :fields="homepage.grid_3_2" bg="bg-blue" 
      maincolor="text-white"/>
  <GridImage 
    v-if="homepage.item_3_3[0].type === 'Image'" 
    class="Grid__item--small w-1/2" 
    :fields="homepage.item_3_3[0]"
  />
  <GridText 
    v-else
    class="Grid__item--small w-1/2" 
    :fields="homepage.item_3_3[0]" 
    :bg="`bg-${homepage.item_3_3[0].bg}`" 
    :subcolor="`text-${homepage.item_3_3[0].subcolor}`" 
    :maincolor="`text-${homepage.item_3_3[0].maincolor}`" 
    :bodycolor="`text-${homepage.item_3_3[0].bodycolor}`" 
    maincasing="uppercase"
  />
    <GridImageText 
      class="Grid__item--large w-full md:h-4/5" 
      :fields="homepage.grid_4_3" 
      maincolor="text-white" 
      subcolor="text-white"/>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import GridImage from "~/components/index/GridImage.vue";
import GridText from "~/components/index/GridText.vue";
import GridSocial from "~/components/index/GridSocial.vue";
import GridLink from "~/components/index/GridLink.vue";
import GridImageText from "~/components/index/GridImageText.vue";

export default {
  name: 'Grid',
  components:{
    GridImage,
    GridText,
    GridSocial,
    GridLink,
    GridImageText
  },
  props:[
    'homepage',
  ]
}
</script>

<style lang="scss" scoped>
.Grid {
  @apply flex;
  @apply flex-wrap;
  @apply items-stretch;
  @apply mx-auto;
  @apply -mt-50;
  @apply mb-100;
  @apply relative;
  @apply z-2;
  width: calc(100% - 40px);
  max-width: 1400px;
  box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.25); 
  
  @media (min-width: 768px) {
    width: calc(100% - 100px);
  }

  @media (min-width: 1280px) {
    .Grid__item {
      &--small {
        height: 24.4vw;
        max-height: 350px;
      }

      &--large {
        height: 55.6vw;
        max-height: 750px;
      }
    }
  }
}
</style>


