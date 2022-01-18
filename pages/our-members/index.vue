<template>
  <div class="py-150 max-w-screen-lg mx-auto">
    <Heading class="my-50 text-center font-heading text-2xl text-purple" :text="doc.heading" />
    <div class="flex flex-wrap px-20 lg:px-50">
      <div 
        class="w-1/3 lg:w-1/5 mb-30 -mx-20"
        v-for="member in members.results" :key="member.uid"
      >
        <ProfileCard
          class="px-20"
          :name="$prismic.asText(member.data.title)"
          :url="`/our-members/${member.uid}`"
          :image="member.data.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '~/components/global/Heading';
import RichText from '~/components/global/RichText';
import ProfileCard from '~/components/global/ProfileCard';

export default {
  head () {
    return {title:this.title};
  },
  components: {
    Heading,
    ProfileCard
  },
  layout:'default-dark',
  async asyncData ({ params, error, $prismic }) {
    try {
      const doc = (await $prismic.api.getSingle('members_page')).data;
      const members = await $prismic.api.query(
        $prismic.predicates.at("document.type", "member")
      ).then(res => {
        return res;
      });
      return {
        doc,
        members,
        title: `${$prismic.asText(doc.heading)} - 2Gether International`
      };

    } catch (e) {
      error({ message: 'Page not found', statusCode: 404 })
    }
  }
};
</script>

<style>
</style>
