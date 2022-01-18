<template>
  <div class="py-100 lg:py-150 max-w-screen-md mx-auto">
    <h1 class="font-heading mb-50 lg:mt-50 text-2xl text-center leading-none uppercase text-purple">
      <Heading :text="doc.heading"/>
    </h1>
    <div class="flex px-20 mb-50 justify-between flex-wrap w-full">
      <div v-for="(contact, index) in doc.contact_method" class="w-full mb-10" :key="index">
        <span class="text-red font-sans text-sm block">{{ $prismic.asText(contact.contact_heading) }}:</span>
        <prismic-link :field="contact.contact_link">
          {{ $prismic.asText(contact.contact_link_text) }}
        </prismic-link>
      </div>
    </div>
    <form
      action="https://formspree.io/meqrdglq"
      method="POST"
      class="px-20"
    >
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2">
          <div class="lg:pr-10">
            <label for="first_name">
              First Name:
            </label>
            <input type="text" name="First Name">
          </div>
        </div>

        <div class="w-full lg:w-1/2">
          <div class="lg:pl-10">
            <label for="last_name">
              Last Name:
            </label>
            <input type="text" name="Last Name">
          </div>
        </div>
      </div>
      <div>
        <label for="_replyto">
          Your email:
        </label>
        <input type="text" name="_replyto">
      </div>

      <div>
        <label for="message">
          Your message:
        </label>
        <textarea name="message" rows="7"></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import Heading from '~/components/global/Heading';

export default {
  head () {
    return {title:this.title};
  },
  components: {
    Heading,
  },

  layout:'default-dark',
  async asyncData ({ params, error, $prismic }) {
    try {
      const doc = (await $prismic.api.getSingle('contact_us')).data;
      return {
        doc,
        title: `${$prismic.asText(doc.heading)} - 2Gether International`
      };

    } catch (e) {
      error({ message: 'Page not found', statusCode: 404 })
    }
  }
};
</script>

<style lang="scss" scoped>
  form {
    @apply mx-auto;
    @apply max-w-full;
  }

  label {
    display: block;
    @apply font-sans;
    @apply text-sm;
    @apply uppercase;
  }

  input,
  textarea {
    @apply w-full;
    @apply p-10;
    @apply mb-15;
    border: 2px solid #d8d8d8;
    &:focus {
      @apply border-blue;
    }
  }

  button {
    @apply bg-blue;
    @apply text-white;
    @apply px-30;
    @apply py-5;
    @apply transition-all;
    @apply rounded-full;
    @apply inline-block;
    @apply text-sm;
    @apply border-solid;
    @apply border-2;
    @apply border-blue;
    @apply uppercase;
    @apply font-sans;
    transition-duration: .3s;

    &:hover {
      @apply text-blue;
      @apply border-blue;
      @apply bg-white;
    }
  }
</style>>
