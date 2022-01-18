<template>
<section class="Team">
  <div class="Team__content  px-20 lg:px-50">
    <div class="text-center mb-30 lg:mb-50">
      <Heading class=" font-heading text-2xl" :text="data.primary.heading" />
      <RichText :text="data.primary.body_text" />
      <Btn
        :url="data.primary.link_url"
        :text="data.primary.link_text"
      />
    </div>
    <div class="flex flex-wrap justify-center">
      <div 
        class="w-1/3 lg:w-1/5 mb-80"
        v-for="member in teamMembers" :key="member.uid"
      >
        <ProfileCard
          :name="$prismic.asText(member.data.title)"
          :url="`/our-team/${member.uid}`"
          :image="member.data.image"
        />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Prismic from 'prismic-javascript';
const prismicEndpoint = 'https://2gether-international.cdn.prismic.io/api/v2';
import Heading from '../global/Heading';
import RichText from '../global/RichText';
import Btn from '../global/Btn';
import ProfileCard from '../global/ProfileCard';

export default {
  name: 'Team',
  data() {
    return {
      teamMembers:[]
    }
  },
  props:[
    'data'
  ],
  components:{
    Heading,
    RichText,
    Btn,
    ProfileCard
  },
  computed: {
  },
  async mounted () {
    const client = await Prismic.api(prismicEndpoint, (err, api) => api);
    const response = await client.query(Prismic.Predicates.at("document.type", "team")
      ).then(res => {
        return res;
      });
    this.teamMembers = response.results;
  }
}
</script>

<style lang="scss" scoped>
.Team {
  @apply mb-80;

  &__content {
    @apply px-20;
    @apply max-w-screen-lg;
    @apply mx-auto;
  }
}
</style>