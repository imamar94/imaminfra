<script lang="ts">
  import { Darkmode } from "svelte-5-ui-lib";
</script>
  
<header class="flex flex-row w-full px-4 py-8 md:px-6">
  <div class="flex items-center content-center">
    <a href="/" class=" text-lg md:text-xl font-semibold">Imam's Site</a>
  </div>

  
  <div class="flex grow justify-center">
    <div class="flex px-8 gap-4 lg:gap-8 content-center items-center shadow-xl rounded-full dark:ring-1 dark:ring-slate-500 dark:bg-slate-700">
      <a href="/">about</a>
      <a href="https://blog.imam-ar.com">blog</a>
      <a href="/projects">portofolio</a>
      <a href="/about">contact</a>
    </div>
  </div>

  <div>
    <Darkmode />
  </div>
</header>
  