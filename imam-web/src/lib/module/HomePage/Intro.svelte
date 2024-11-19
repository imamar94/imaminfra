<script lang="ts">
    import { Heading, Gallery , P } from "svelte-5-ui-lib";
    import { onMount } from "svelte";
    import ImgMe from "$lib/images/me.jpg";

    let role_rotation: string[] = ["Data Engineer", "Data Analyst", "Data Scientist"];
    let role: string = $state(role_rotation[0]);
    let currentIndex: number = 0;
    
    const images1 = [
        {
        alt: "erbology",
        src: ImgMe
        }
    ];

    onMount(() => {
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % role_rotation.length;
            role = role_rotation[currentIndex];
        }, 1000); 

        // Cleanup interval on component destroy
        return () => clearInterval(interval); 
    });
</script>

<section class="flex flex-row w-full min-h-96 justify-center items-center p-4 pb-8">
    <div class=" grid gap-2 w-2/3 px-10 py-10">
        <Heading
            tag="h2"
            class=" text-primary-600 dark:text-slate-200"
        >Hello!</Heading>

        <P class=" text-2xl  text-slate-600 dark:text-slate-200">
            I'm Imam, a versatile <span class=" bg-primary-400 dark:bg-slate-200 dark:text-slate-800">{role}</span>
        </P>
    </div>
    <div class=" flex-grow">
        <Gallery items={images1} divClass="gap-4 grid-cols-1" />
    </div>
</section>