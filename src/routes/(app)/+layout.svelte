<script lang="ts">
  import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import "$lib/styles/index.css";
    import { inject } from '@vercel/analytics'
    inject({mode:'production'})
</script>


<Navbar />
<slot />
<Footer/>