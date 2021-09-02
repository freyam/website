<template>
  <footer>
    <div class="container mx-auto py-4">
      <ul
        class="
          mx-auto
          p-4
          max-w-sm
          lg:hidden
          flex
          items-center
          justify-between
          text-gray-500
          dark:text-gray-400
        "
      >
        <li>
          <a
            href="mailto:frey77mehta@gmail.com"
            target="_blank"
            rel="noreferrer"
            class="
              h-8
              w-8
              grid
              place-items-center
              hover:text-blue-500
              focus:text-blue-500
              dark:hover:text-cyan-400 dark:focus:text-cyan-400
              rounded-full
              transform
              transition
              duration-300
              hover:-translate-y-1
              focus:-translate-y-1
            "
          >
            <envelope class="h-2/3 w-2/3" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/freyam"
            target="_blank"
            rel="noreferrer"
            class="
              h-8
              w-8
              grid
              place-items-center
              hover:text-blue-500
              focus:text-blue-500
              dark:hover:text-cyan-400 dark:focus:text-cyan-400
              rounded-full
              transform
              transition
              duration-300
              hover:-translate-y-1
              focus:-translate-y-1
            "
          >
            <git-hub class="h-2/3 w-2/3" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/fre7am"
            target="_blank"
            rel="noreferrer"
            class="
              h-8
              w-8
              grid
              place-items-center
              hover:text-blue-500
              focus:text-blue-500
              dark:hover:text-cyan-400 dark:focus:text-cyan-400
              rounded-full
              transform
              transition
              duration-300
              hover:-translate-y-1
              focus:-translate-y-1
            "
          >
            <twitter class="h-2/3 w-2/3" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/freyam-mehta/"
            target="_blank"
            rel="noreferrer"
            class="
              h-8
              w-8
              grid
              place-items-center
              hover:text-blue-500
              focus:text-blue-500
              dark:hover:text-cyan-400 dark:focus:text-cyan-400
              rounded-full
              transform
              transition
              duration-300
              hover:-translate-y-1
              focus:-translate-y-1
            "
          >
            <linked-in class="h-2/3 w-2/3" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/freyam.mehta.5"
            target="_blank"
            rel="noreferrer"
            class="
              h-8
              w-8
              grid
              place-items-center
              hover:text-blue-500
              focus:text-blue-500
              dark:hover:text-cyan-400 dark:focus:text-cyan-400
              rounded-full
              transform
              transition
              duration-300
              hover:-translate-y-1
              focus:-translate-y-1
            "
          >
            <facebook class="h-2/3 w-2/3" />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@freyam"
            target="_blank"
            rel="noreferrer"
            class="
              h-8
              w-8
              grid
              place-items-center
              hover:text-blue-500
              focus:text-blue-500
              dark:hover:text-cyan-400 dark:focus:text-cyan-400
              rounded-full
              transform
              transition
              duration-300
              hover:-translate-y-1
              focus:-translate-y-1
            "
          >
            <medium class="h-2/3 w-2/3" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCVLGcsaluzmK-4-ZL4DnPuw"
            target="_blank"
            rel="noreferrer"
            class="
              h-8
              w-8
              grid
              place-items-center
              hover:text-blue-500
              focus:text-blue-500
              dark:hover:text-cyan-400 dark:focus:text-cyan-400
              rounded-full
              transform
              transition
              duration-300
              hover:-translate-y-1
              focus:-translate-y-1
            "
          >
            <you-tube class="h-2/3 w-2/3" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Envelope from '../Icons/Envelope.vue';
import Facebook from '../Icons/Facebook.vue';
import GitHub from '../Icons/GitHub.vue';
import LinkedIn from '../Icons/LinkedIn.vue';
import Medium from '../Icons/Medium.vue';
import Twitter from '../Icons/Twitter.vue';
import YouTube from '../Icons/YouTube.vue';

export default {
  name: 'Footer',
  components: {
    Envelope,
    GitHub,
    Twitter,
    LinkedIn,
    Facebook,
    Medium,
    YouTube
  }
};
</script>
