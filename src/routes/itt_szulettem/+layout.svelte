<script lang="ts">
  import NewStory from "$lib/components/new_story.svelte";
  import type { LayoutData } from "./$types";
  import "$lib/styles/index.css";
    import { links } from "$lib/utils/links";

  export let data: LayoutData;
</script>

<h2>Történetek amik itt születtek</h2>
<p id="description">
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
       {data.data?.map((story) => story.id).join(", ")}  
       <!-- //egy compenensbe integrálni -->
      {:else}
      Még nincsenek sztorik!
    {/if}  
    
    </p>
  </div>
</aside>
<NewStory />
<slot />

<style>
  
  @media (max-width: 680px) {
    aside {
      position: fixed;
      top: 2rem;
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
    h2 {
      margin-left: 2rem;
    }

    #description {
      margin-left: 1.35rem;
      min-width: 10rem;
      width: 42%;
      
      text-align: justify;
    }
  }

  @media (min-width: 681px) {
    aside {
      position: fixed;
      top: 2rem;
      right: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: rgba(255, 192, 203, 0.8);
      border-radius: 0.5rem;
      padding: 0.5rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      max-width: 300px;
    }

    h2 {
      margin-left: 2rem;
    }

    #description {
      font-size: larger;
      margin-left: 1.5rem;
      text-align: justify;
      width: 30%;
    }
  }
  </style>
