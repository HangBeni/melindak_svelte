<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import "$lib/styles/index.css";
    import { inject } from '@vercel/analytics'
    inject({mode:'production'})
</script>


<Navbar />
<slot />
<footer>
    <p>Melindák szülésfelkészítés</p>
</footer>