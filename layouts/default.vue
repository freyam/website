<template>
  <div
    class="
      font-sourcesans
      text-gray-800
      bg-white
      dark:text-gray-200 dark:bg-gray-900
      leading-6
      transition-all
    "
  >
    <navbar />
    <mobile-menu />
    <social-handles />
    <email-handle />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar.vue';
import MobileMenu from '@/components/Navigation/MobileMenu.vue';
import SocialHandles from '@/components/Navigation/SocialHandles.vue';
import EmailHandle from '@/components/Navigation/EmailHandle.vue';
import Footer from '@/components/Sections/Footer.vue';

export default {
  components: {
    Navbar,
    MobileMenu,
    SocialHandles,
    EmailHandle,
    Footer
  }
};
</script>
