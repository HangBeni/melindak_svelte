<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import "$lib/styles/index.css";
    import { inject } from "@vercel/analytics";
    inject({ mode: "production" });
</script>

<div class="content-container">
    <Navbar />
    <slot />
    <Footer />
</div>
