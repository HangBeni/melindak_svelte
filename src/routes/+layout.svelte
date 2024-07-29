<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import "$lib/styles/index.css";
</script>


<Navbar />
<slot />
<footer>
    <p>Melindák szülésfelkészítés</p>
</footer>