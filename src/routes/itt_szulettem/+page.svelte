<script lang="ts">
    import StoryCard from "$lib/components/birth/story_card.svelte";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<!--történetek felsorolása adatbázisból-->
<main>
    {#each data.stories as story}
        {#if story.public}
            <StoryCard {story} />
        {/if}
    {/each}
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 5rem;
        margin-inline: auto;
        margin-top: 10rem;
        margin-bottom: 10rem;
        width: 80%;
    }
</style>
