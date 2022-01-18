<template>
  <header 
    class="Header"
    :class="[
      isScrolled ? 'is-scrolled' : '',
      type == 'light' ? 'Header--light' : 'Header--dark'
    ]"
  >
    <a href="/">
      <prismic-image class="Header__logo" v-if="type === 'light'" :field="nav.logo" aria-label="Homepage" />
      <prismic-image class="Header__logo" v-else :field="nav.logo_dark" aria-label="Homepage" />
    </a>
    <button v-if="!navIsOpen" class="Nav__open" @click="openNav">
      <Icon v-if="type === 'light'" icon="hamburger" class="lg:hidden"/>
      <Icon v-else icon="hamburger-dark" class="lg:hidden"/>
    </button>
    <transition name="fade">
      <div class="Nav" v-if="navIsOpen">
        <button class="Nav__close" @click="closeNav">
          <Icon icon="close"/>
        </button>
        <nav class="z-2">
          <ul class="lg:flex items-center">
            <li class="Nav__main-link-wrapper mb-20 relative lg:ml-40 lg:mb-0 xl:ml-60" v-for="(menuLink, index) in nav.nav" :key="index">
              <div @click="closeNav">
                <prismic-link 
                  
                  :field="menuLink.primary.link"
                  class="Nav__main-link"
                  :class="[
                    index === nav.nav.length - 1 ? 'is-last' :'',
                    type === 'light' ? 'lg:text-white border-white' : 'lg:text-blue border-blue'
                  ]"
                >
                  {{ $prismic.asText(menuLink.primary.label) }}
                </prismic-link>
              </div>
              <ul class="Nav__dropdown" v-if="menuLink.items.length > 0">
                <li class="w-full" v-for="(item, index2) in menuLink.items" :key="index2">
                  <prismic-link 
                    class="Nav__dropdown-link"
                    :field="item.sub_nav_link"
                  >
                    {{ $prismic.asText(item.sub_nav_link_label) }}
                  </prismic-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="Nav__overlay" @click="closeNav"></div>
      </div>
    </transition>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Icon from './global/Icon';

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      "nav"
    ])
  },
  props: [
    'type'
  ],
  data() {
    return {
      isScrolled: false,
      navIsOpen:false
    }
  },
  mounted() {
    this.closeNav();

    window.addEventListener('resize', () => {
      this.closeNav();
    });

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    })
  },
  components:{
    Icon
  },
  methods:{
    openNav() {
      this.navIsOpen = true;
    },
    closeNav() {
      if (window.innerWidth > 1023) {
        this.navIsOpen = true;
      } else {
        this.navIsOpen = false;
      }
    }
  }
}
</script>

<style lang="scss">
.Header {
  @apply border-t-4;
  @apply border-blue;
  @apply flex;
  @apply justify-between;
  @apply items-center;
  @apply p-20;
  @apply fixed;
  @apply top-0;
  @apply left-0;
  @apply w-full;
  @apply z-10;
  @apply text-white;
  transition: padding .5s;

  &--light.is-scrolled {
    background: #004e94;
    @apply py-10;

    .Nav {
      &__main-link {
        &:hover {
          @apply text-white;
        }

        &.is-last {
          &:hover {
            @apply border-white;
          }
        }
      }
    }
  }

  &--dark.is-scrolled {
    @apply border-b;
    @apply border-b-2;
    @apply border-blue;
    @apply bg-white;
    @apply py-10;

    .Nav {
      &__main-link {
        &:hover {
          @apply text-blue;
        }

        &.is-last {
          &:hover {
            @apply border-blue;
          }
        }
      }
    }
  }
  
  &__logo {
    height: 30px;
  }

  .Nav {
    @apply fixed;
    @apply top-0;
    @apply left-0;
    @apply w-full;
    @apply h-full;
    @apply text-center;
    @apply flex;
    @apply items-center;
    @apply justify-center;

    &__open {
      @apply absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }

    &__close {
      @apply absolute;
      top: 20px;
      right: 20px;
      @apply z-2;

      svg {
        width: 30px;

        path {
          fill: white;
        }

      }
    }

    &__overlay {
      @apply absolute;
      @apply top-0;
      @apply left-0;
      @apply right-0;
      @apply bottom-0;
      background-color: rgba(#004e94, .95);
    }

    &__main-link {
      @apply uppercase;
      @apply block;
      @apply font-sans;
      @apply text-lg;
      @apply relative;
      @apply mb-5;
    }

    &__dropdown-link {
      @apply block;
      @apply text-md;
      @apply whitespace-nowrap;
    }
    
  }

  @media (min-width: 1024px) {
    @apply p-50;

    &__logo {
      height: 50px;
    }

    .Nav {
      @apply block;
      @apply static;
      @apply w-auto;
      
      &__close {
        @apply hidden;
      }
      
      &__overlay {
        @apply hidden;
      }

      &__main-link-wrapper {
        &:hover {
          .Nav__dropdown {
            display: block;
          }
        }
      }

      &__main-link {
        @apply mb-0;
        @apply text-sm;

        &.is-last {
          @apply border-solid;
          @apply rounded-full;
          @apply px-45;
          @apply py-10;
          @apply border-2;
          &:hover {
            @apply border-blue;
            transition: color .3s, border-color .3s;
          }
        }


        &:hover {
          @apply text-blue;
          transition: color .3s;
        }
      }

      &__dropdown {
        @apply bg-white;
        @apply rounded-md;
        @apply text-blue;
        @apply px-20;
        @apply py-10;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: none;
        box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.25); 
      }

      &__dropdown-link {
        @apply my-5;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


