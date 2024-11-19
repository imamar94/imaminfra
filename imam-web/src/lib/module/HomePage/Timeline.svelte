<script lang="ts">
    import { Timeline, TimelineItem, Avatar } from 'svelte-5-ui-lib';
    import { Heading } from "svelte-5-ui-lib";
	import type { ExperienceType } from '$lib/types.js';

    let exps: ExperienceType[] = [
        {
            title: "Data Engineer @ Microsoft",
            date: "Aug 2024",
            location: "Tallinn, Estonia"        
        },
        {
            title: "Data Analyst @ Bolt",
            date: "Jan 2023",
            location: "Tallinn, Estonia"
        },
        {
            title: "Data Scientist @ Eftax",
            date: "Sep 2022",
            location: "Osaka, Estonia"
        },
        {
            title: "Product Data Specialist @ Unilever",
            date: "Jul 2018",
            location: "Tangerang, Indonesia"
        },
        {
            title: "Data Analyst @ Traveloka",
            date: "Aug 2016",
            location: "Jakarta, Indonesia"
        }
    ];
</script>

<section class="flex flex-col w-full justify-start bg-slate-50 dark:bg-slate-600">
    <div class="flex flex-row gap-4 w-full justify-center pt-8 pb-16">
        <Avatar />
        <Heading tag="h2" class=" text-primary-600 dark:text-slate-200">
            Experiences
        </Heading>
    </div>
    <div class="flex w-full justify-start px-8">
        <Timeline>
            {#each exps as exp}
            <TimelineItem title={exp.title} date={exp.date} timeClass="text-gray-500 dark:text-gray-400">
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    {exp.location}
                </p>        
            </TimelineItem>
            {/each}
        </Timeline>
    </div>
</section>