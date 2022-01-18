<template>
  <BannerCaption 
    v-if="data.slice_type === 'banner_with_caption'"
    :data="data"
  />
  <CTABanner 
    v-else-if="data.slice_type === 'cta_banner'"
    :data="data"
  />
  <HeadingBanner 
    v-else-if="data.slice_type === 'heading'"
    :data="data"
  />
  <MiniGrid 
    v-else-if="data.slice_type === 'mini_grid'"
    :data="data"
  />
  <ImageGallery 
    v-else-if="data.slice_type === 'image_gallery'"
    :data="data"
  />
  <ImageGrid 
    v-else-if="data.slice_type === 'image_grid'"
    :data="data"
  />
  <RichTextSlice 
    v-else-if="data.slice_type === 'richtext'"
    :data="data"
  />
  <Team 
    v-else-if="data.slice_type === 'team'"
    :data="data"
  />
  <TextBanner 
    v-else-if="data.slice_type === 'text_banner'"
    :data="data"
  />
  <TextBlocks 
    v-else-if="data.slice_type === 'text_blocks'"
    :data="data"
  />
  <Statistics 
    v-else-if="data.slice_type === 'statistics'"
    :data="data"
  />
  <div v-else>
    Component doesnt exist for {{data.slice_type}}. Contact developer
  </div>
</template>

<script>
import BannerCaption from './BannerCaption';
import CTABanner from './CTABanner';
import ImageGallery from './ImageGallery';
import RichTextSlice from './RichTextSlice';
import Team from './Team';
import HeadingBanner from './HeadingBanner';
import MiniGrid from './MiniGrid';
import TextBanner from './TextBanner';
import TextBlocks from './TextBlocks';
import Statistics from './Statistics';
import ImageGrid from './ImageGrid.vue';

export default {
  name: 'Slices',
  props:[
    'data'
  ],
  components:{
    BannerCaption,
    CTABanner,
    HeadingBanner,
    MiniGrid,
    ImageGallery,
    ImageGrid,
    RichTextSlice,
    Statistics,
    Team,
    TextBanner,
    TextBlocks
  }
}
</script>