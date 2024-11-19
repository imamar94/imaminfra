<script lang="ts">
    import { Alert } from 'svelte-5-ui-lib';
    import { InfoCircleSolid } from "flowbite-svelte-icons";
  </script>
  
  <div class="mb-4 w-full">
    <Alert class="!items-start rounded-none dark:bg-slate-400 dark:text-red-800">
        {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
        {/snippet}
      <p class="font-medium">Site are still under construction</p>
    </Alert>
  </div>
  