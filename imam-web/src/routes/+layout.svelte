<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Alert from '$lib/components/alertUnderConstruction.svelte';

	let { children } = $props();
</script>
<div class="app">
	<main class="flex flex-row dark:ring-1 dark:ring-slate-500">
		<div class="flex-none w-2 sm:w-16 md:w-32 lg:w-60 xl:w-96"> </div>
		<div class="grow min-h-screen bg-white dark:bg-slate-800 dark:border-slate-200">
			<Header	/>
			<Alert />
			{@render children()} 
			<Footer	/>
		</div>
		<div class="flex-none w-2 sm:w-16 md:w-32 lg:w-60 xl:w-96"> </div>
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>
