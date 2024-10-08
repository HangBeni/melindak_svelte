<script lang="ts">
  import NewStory from "$lib/components/birth/new_story.svelte";
  import type { LayoutData } from "./$types";
  import "$lib/styles/index.css";
  import { links } from "$lib/utils/links";
  import { inject } from "@vercel/analytics";
  import { dev } from "$app/environment";
  inject({ mode: dev ? "development" : "production" });
  export let data: LayoutData;
</script>

<h2>Történetek amik itt születtek</h2>
<p id="description">
  <em
    >A szülésfelkészítés keretein belül született gyermekek és édasanyjuk
    történeteit olvashatjátok itt</em
  >
</p>

<aside>
  <nav>
    {#each links.slice(0, 3) as link}
      <a href={link.url}>{link.name}</a>
    {/each}
  </nav>

  <div class="storyCountContainer">
    <h4 id="storyTitle">
      Kismama történetek: <br />

      {#if typeof data.count === "number" && data.count > 0}
        <span id="storyc">{data.count}</span>
        <!-- //egy compenensbe integrálni -->
      {:else}
        <span> Még nincsenek sztorik! </span>
      {/if}
    </h4>
  </div>
</aside>
<NewStory />
<slot />
<footer>
  <p>Melindák szülésfelkészítés</p>
</footer>

<style>
  aside{
    position: relative;
    z-index: 0;
  }
  h2 {
    font-size: 6rem;
    margin-inline: auto;
    margin-bottom: 1rem;
    width: fit-content;
  }
  nav {
    margin-bottom: 1rem;
    text-align: center;
    margin-inline: auto;
  }
  #storyTitle {
    margin-bottom: 0;
  }
  .storyCountContainer {
    font-size: 1.25rem;
    font-family: "Pacifico", cursive;
    width: fit-content;
    height: min-content;
    margin-inline: auto;
    border-top: 2px black solid;
    padding-top: 1rem;
    text-align: center;
  }
  #storyc {
    display: block;
    font-size: 1.75rem;
    width: fit-content;
    height: min-content;
    margin-inline: auto;
  }

  @media (max-width: 620px) {
    aside {
      position: sticky;
      top: 1rem;
      right: 1rem;
      margin-left: auto;
      display: flex;
      width: 10rem;
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

    #description {
      display: block;
      margin-left: 1.35rem;
      width: 90%;
      min-width: 10rem;
      font-size: larger;
      text-align: justify;
    }
    h2 {
      font-size: 3.75rem;
    }
  }

  @media (min-width: 620px) {
    aside {
      position: absolute;
      top: 7rem;
      right: 1rem;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      background-color: rgba(255, 192, 203, 0.8);
      border-radius: 0.5rem;
      padding: 0.5rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      max-width: 300px;
    }

    #description {
      font-size: 3.5rem;
      margin-left: 2.5rem;
      text-align: justify;
      width: 45%;
    }
  }
</style>
