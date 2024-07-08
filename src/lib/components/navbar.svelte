<script lang="ts">
  import { links } from "$lib/utils/links";

  
</script>


<nav>
  <h1>Melindák</h1>
  {#each links as link} 
    <a href={link.url}>{link.name}</a>
  {/each}
</nav>
