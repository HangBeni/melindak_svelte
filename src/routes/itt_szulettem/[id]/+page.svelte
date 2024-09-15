<script lang="ts">
    import { page } from "$app/stores";
    import type { Stories } from "$lib/utils/types";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;

$: index = parseInt($page.params.id)

</script>


<main>
<nav>
    {#if data.stories}
    <a href={`/itt_szulettem/${data.stories.find(story => story.id === index-1)?.story}`}>Előző</a> 
    <a href={`/itt_szulettem/${data.stories.find(story => story.id === index+1)?.story}`}>Kövi</a> 
    {/if}

</nav>
{#if data.stories}
<p>
    {data.stories.find(story => story.id === index)?.story}
</p>
{/if}
</main>

<style>

</style>