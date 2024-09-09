<script lang="ts">
    import StoryCard from "$lib/components/birth/story_card.svelte";
    import type { PageServerData } from "./$types";



export let data: PageServerData;
</script>

<!--történetek felsorolása adatbázisból-->
<main>
{#each data.stories as story}
    <StoryCard {story} />
{/each}
</main>


<style>
    main{
        display: grid;
        grid-template-columns: repeat(minmax(300px, 1fr), auto-fit);
        margin-inline: auto;
        margin-top: 10rem;
        width: 50rem;
        padding: 0.75rem;
        background-color: rgba(255, 192, 203, 0.88);
        border-radius: 0.75rem;
    }
</style>