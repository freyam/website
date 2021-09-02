<template>
  <div>
    <Header />
    <about />
    <skill />
    <experience />
    <modal />
    <project />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '@/components/Sections/Header.vue';
import About from '@/components/Sections/About.vue';
import Skill from '@/components/Sections/Skill.vue';
import Experience from '@/components/Sections/Experience.vue';
import Modal from '@/components/Widgets/Modal.vue';
import Project from '@/components/Sections/Project.vue';

export default {
  components: {
    Header,
    About,
    Skill,
    Experience,
    Modal,
    Project
  },
  mounted() {
    this.closeMenu();
  },
  methods: mapActions({
    closeMenu: 'closeMenu'
  })
};
</script>
