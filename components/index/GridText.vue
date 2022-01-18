<template>
  <ConditionalLink :field="fields.link" class="GridText" :class="`${bg} ${mainsizing ? 'GridText--small' :''}`">
    <div class="GridText__content">
      <div
        v-if="fields.subheading"
        class="GridText__subheading"
        :class="`${subcolor}`"
      >
        {{ $prismic.asText(fields.subheading) }}
      </div>
      <div
        v-if="fields.heading"
        class="GridText__heading"
        :class="`${maincolor}  ${maincasing}`"
      >
        {{ $prismic.asText(fields.heading) }}
      </div>
      <p
        v-if="fields.body"
        class="GridText__body"
        :class="`${bodycolor}`"
      >
        {{ $prismic.asText(fields.body) }}
      </p>
    </div>
  </ConditionalLink>
</template>

<script>
import ConditionalLink from '../global/ConditionalLink';

export default {
  name: 'GridText',
  components:{
    ConditionalLink
  },
  props: [
    'fields',
    'bg',
    'subcolor',
    'maincolor',
    'bodycolor',
    'maincasing',
    'mainsizing'
  ]
}
</script>

<style lang="scss" scoped>
.GridText {
  display: flex;
  align-items: flex-end;
  min-height: 43vw;
  &__content {
    @apply p-20;
    @apply pt-50;
  }

  &__subheading {
    @apply uppercase;
    @apply font-sans;
    @apply text-sm;
    @apply mb-5;
  }

  &__heading {
    @apply font-heading;
    @apply font-semibold;
    @apply text-2xl;
    @apply mb-10;
    @apply leading-none;
  }

  @media (min-width: 1024px) {
    min-height: initial;

    &__content {
      @apply px-40;
      @apply pb-30;
    }

    &__heading {
      @apply text-3xl;
      @apply mb-20;
    }

    &__subheading {
      @apply mb-20;
    }

    &--small .GridText {
      &__content {
        width: 600px;
        @apply max-w-full;
      }

      &__heading {
        @apply text-2xl;
        line-height: 4.2rem;
      }
    }
  }

  @media (min-width: 1440px) {
    &__heading {
      @apply text-4xl;
    }

    &--small .GridText {
      &__heading {
        font-size: 4.2rem;
        line-height: 4.8rem;
      }

    }
  }


}


</style>


