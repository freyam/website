<template>
  <header>
    <div
      class="
        container
        mx-auto
        px-8
        py-4
        md:px-12 md:py-10
        flex
        items-center
        min-h-screen
        max-w-6xl
      "
    >
      <main v-if="about">
        <h1 class="text-6xl md:text-7xl lg:text-8xl font-light">
          {{ about.name }}
        </h1>
        <h2
          class="
            text-6xl
            md:text-7xl
            lg:text-8xl
            font-bold
            text-gray-500
            dark:text-gray-400
          "
        >
          {{ about.title }}
        </h2>
        <p class="mt-4 max-w-2xl text-gray-500 dark:text-gray-400 leading-1">
          {{ about.bio }}
        </p>
      </main>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      about: {}
    };
  },
  created() {
    this.getAbout();
  },
  methods: {
    async getAbout() {
      const about = await this.$content('about').fetch();

      this.about = about;
    }
  }
};
</script>
