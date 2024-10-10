<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
  let url = data.storie?.picture;

</script>

<main>

  {#if data.storie}
    <img
    src="{url}"
    alt="Kép a kisgyermekról és/vagy édesannyáról"/> 
    <div class="story-container">
      <h1>{data.storie?.name}</h1>
      <p>
        {data.storie?.story}
      </p>
    </div>
  {/if}
  <nav>
    <div class="nav-container">
      <a id="back" href="/itt_szulettem">Vissza a történetekhez</a>
    </div>
  </nav>
</main>

<style>

  div > a {
    padding-top: 0.5rem;
    padding-left: 1rem;
    font-size: 2rem;
    height: 4rem;
    width: 25%;
    animation: appear 1s;
  }

  #back {
    width: fit-content;
    border-bottom-left-radius: 80%;
    border-top-right-radius: 5rem;
    border-bottom-right-radius: 5rem;
    text-align: left;
    padding-right: 2rem;
  }
  p {
    font-size: 1.5rem;
    text-align: justify;
    line-height: 2rem;
  }
  h1 {
    font-size: 3rem;
    margin-left: -5rem;
  }
  .story-container {
    width: 60%;
    margin-inline: auto;
    margin-top: 5rem;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(10px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>
