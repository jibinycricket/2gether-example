<template>
  <footer class="Footer">
    <div class="Footer__top">
      <div class="Footer__top__content">
        <div class="lg:w-2/3 lg:flex lg:items-start">
          <div class="relative flex flex-wrap">
            <Icon icon="logo-short-white" className="Footer__logo"/>
            <div class="Newsletter w-full">
              <p class="Newsletter__heading">Stay Informed</p>
              <form action="https://2gether-international.us13.list-manage.com/subscribe/post?u=6e9c681d386f3e8c2868f0c8e&amp;id=ce060913dc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="Newsletter__form validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <input type="email" value="" name="EMAIL" class="Newsletter__input placeholder-white" id="mce-EMAIL" placeholder="Your e-mail address">
                  <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="Newsletter__submit">Sign Up</button>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_6e9c681d386f3e8c2868f0c8e_ce060913dc" tabindex="-1" value="">
                  </div>
                </div>
              </form>

<!--End mc_embed_signup-->
            </div>
          </div>
        </div>      
        <div class="lg:w-1/3 lg:flex lg:items-end lg:justify-end">
          <ul class="Footer__social lg:mb-30 lg:mb-50">
            <li v-for="platform in socialPlatforms" :key="platform">
              <a class="Footer__social__link" :href="$prismic.asLink(footer[`social_${platform}`])">
                <Icon class="Footer__social__icon" :icon="`social-${platform}`"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Footer__bottom">
      <div class="Footer__bottom__content">
        <div class="Footer__bottom__column" v-for="n in 3" :key="n">
          <h5 class="Footer__bottom__column__heading">{{ $prismic.asText(footer[`menulinks_heading${n}`]) }}</h5>
          <ul>
            <li v-for="(link, index) in footer[`menu_links${n}`]" :key="`footer${n}-${index}`">
              <a :href="$prismic.asLink(link.link)">{{ $prismic.asText(link.label) }}</a>
            </li>
          </ul>
        </div>
        <div class="border-t border-grey lg:w-full">
          <p class="pt-20 font-sans uppercase text-blue text-sm">2Gether-International is a 501 (c) (3) organization.</p>
        </div>
      </div>
    </div>
    <StickyCta 
      v-if="footer.stickycta_enable"
      :text="footer.stickycta_text"
      :url="footer.stickycta_url"
    />
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';
import Icon from './global/Icon';
import StickyCta from './global/StickyCta';

export default {
  name: 'Footer',
  data() {
    return {
      socialPlatforms:[
        'facebook',
        'twitter',
        'youtube',
        'instagram'
      ]
    }
  },
  components:{
    Icon,
    StickyCta
  },
  computed: {
    ...mapGetters([
      "footer"
    ])
  },
}
</script>

<style lang="scss" scoped>
.Footer {
  @apply text-white;
  @apply text-center;
  background-color: #3b2447;

  &__top {
    @apply pt-70;
    @apply px-20;
    @apply pb-80;

    &__content {
      width: 100%;
    }
  }
  
  &__logo {
    width: 50px;
    @apply mx-auto;
    @apply mb-50;
  }

  &__social {
    @apply flex;
    @apply justify-center;
    @apply mb-30;

    &__link {
      @apply mx-10;
      @apply inline-block;
      border-width: 1px;
      @apply border-white;
      @apply rounded-full;
      @apply p-10;
    }

    &__icon {
      width: 15px;
    }
  }

  &__bottom {
    @apply bg-purple;
    @apply py-50;
    @apply px-20;

    &__column {
      @apply mb-30;
      @apply text-sm;
            
      &__heading {
        @apply text-red;
        @apply mb-20;
        @apply uppercase;
        @apply font-sans;
      }
    }
  }

  @media (min-width: 1024px) {
    @apply text-left;

    &__top {
      @apply px-150;

      &__content {
        @apply flex;
        @apply mx-auto;
      }
    }

    &__logo {
      @apply mx-0;
      @apply absolute;
      left: -100px;
    }

    &__social {
      @apply mb-0;

      &__icon {
        width: 20px;
      }
    }

    &__bottom {
      @apply pt-80;
      @apply px-150;
      @apply pb-20;
      
      &__content {
        @apply flex;
        @apply flex-wrap;
        @apply mx-auto;
      }

      &__column {
        @apply w-1/3;
        @apply mb-100;
        @apply text-base;
      }
    }
  }
}

.Newsletter {
  @apply mb-50;
  @apply w-full; 
  
  &__heading {
    @apply text-xl;
    @apply font-heading;
    @apply mb-30;
  }

  &__form {
    @apply inline-block;
    @apply pb-5;
    @apply relative;
    @apply border-b-2;
    @apply border-white;
    @apply text-left;
  }

  &__input {
    background: transparent;
    @apply text-md;
  }

  &__submit {
    @apply uppercase;
    @apply font-sans;
    @apply text-sm;
    @apply text-red;
  }

  @media (min-width: 1024px) {
    @apply mb-0;
    @apply ml-0;

    &__heading {
      font-size: 4.2rem;
      line-height: 4.8rem;
    }

    &__input,
    &__submit {
      @apply text-base;
    }
  }
}
</style>
