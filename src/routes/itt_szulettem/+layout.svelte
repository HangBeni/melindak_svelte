<script lang="ts">
    import NewStory from "$lib/components/new_story.svelte";
 import {links} from "$lib/utils/links";
</script>
<h2>
    Történetek amik itt születtek
</h2>
<p><em>A szülésfelkészítés keretein belül született gyermekek és édasannyuk történeteit olvashatjátok itt</em></p>

<aside>
 {#each links as link}
    <a href={link.url}>{link.name}</a>
  {/each}
</aside>
<NewStory/>
<slot/>