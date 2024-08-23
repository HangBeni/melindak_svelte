<script lang="ts">
  import NewStory from "$lib/components/new_story.svelte";
  import { links } from "$lib/utils/links";
  import type { LayoutData } from "./$types";
  import "$lib/styles/index.css";
  import { count } from "drizzle-orm";

  export let data: LayoutData;
</script>

<h2>Történetek amik itt születtek</h2>
<p>
  <em
    >A szülésfelkészítés keretein belül született gyermekek és édasannyuk
    történeteit olvashatjátok itt</em
  >
</p>

<aside>
  <nav>
    {#each links.slice(0, 3) as link}
      <a href={link.url}>{link.name}</a>
    {/each}
  </nav>
  <div>
    <p>Kismama történetek: <br /> 
    
    {#if typeof data.count === "number" && data.count > 0}
       {data.count}
      {:else}
      "Még nincsenek sztorik!  "
    {/if}  
    
    </p>
  </div>
</aside>
<NewStory />
<slot />

<style>
  aside {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: rgba(255, 192, 203, 0.8);
    border-radius: 0.5rem;
    padding: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  aside a {
    display: block;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }

  </style>
