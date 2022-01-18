<template>
  <div class="GridSocial" :class="`${bg}`">
    <div class="GridSocial__content">
      <span class="GridSocial__date">
        <Icon icon="facebook" v-if="fields[0].show_facebook_icon"/>
        {{date}}
      </span>
      <div v-html="$prismic.asHtml(fields[0].body)"></div>
    </div>
  </div>

</template>

<script>
import { Date } from 'prismic-dom';
import Icon from '../global/Icon';

export default {
  name: 'GridSocial',
  props: [
    'fields',
    'bg'
  ],
  components:{
    Icon
  },
  computed:{
    date() {
      let date = Date(this.fields[0].date);
      var formattedDate = new Intl.DateTimeFormat('en-US',{
        
        year: "numeric",
        
        month: "short",
        
        day: "2-digit"
        
      }).format(date);

      return formattedDate;
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.GridSocial {
  &__content {
    @apply p-20;
  
    a {
      @apply text-blue;
    }
  }

  &__date {
    display: flex;
    align-items: center;
    @apply pb-10;
    height: 100%;
    @apply font-sans;
    color: #989898;
  }
  
  img {
    width: 25px;
    @apply mr-10;
  }
  
  svg {
    @apply mr-10;
  
    path {
      fill: #1778f2;
    }
  }

  @media (min-width: 1024px) {
    &__content {
      @apply p-40;
    }

    &__date {
      @apply mb-20;
    }
  }
}
</style>


