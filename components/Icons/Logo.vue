<template>
  <div class="h-12 w-12">
    <nuxt-link
      to="/"
      class="text-blue-500 dark:text-cyan-400 transform scale-90"
    >
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="tranition-all"
          d="M265 20.2073L441.506 122.113C450.788 127.472 456.506 137.376 456.506 148.094V351.906C456.506 362.624 450.788 372.528 441.506 377.887L265 479.793C255.718 485.152 244.282 485.152 235 479.793L58.4937 377.887C49.2116 372.528 43.4937 362.624 43.4937 351.906V148.094C43.4937 137.376 49.2116 127.472 58.4937 122.113L235 20.2073C244.282 14.8483 255.718 14.8483 265 20.2073Z"
          stroke="currentColor"
          stroke-width="20"
        />
        <path
          class="tranition-all"
          d="M320.379 140.52C323 140.52Z"
          fill="currentColor"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Logo'
};
</script>
