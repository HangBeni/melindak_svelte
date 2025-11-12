<script lang="ts">
    import NewStory from "$lib/components/birth/new_story.svelte";
    import "$lib/styles/index.css";
    import { inject } from "@vercel/analytics";
    import { dev } from "$app/environment";
    import Footer from "$lib/components/footer.svelte";
    inject({ mode: dev ? "development" : "production" });
</script>

<h2>Történetek amik itt születtek</h2>
<p id="description">
    <em
        >A szülésfelkészítés keretein belül született gyermekek és édasanyjuk
        történeteit olvashatjátok itt</em
    >
</p>

<NewStory />
<slot />
<Footer />

<style>
    h2 {
        font-size: 6rem;
        margin-inline: auto;
        margin-bottom: 1rem;
        width: fit-content;
    }

    @media (max-width: 620px) {
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
        #description {
            font-size: 3.5rem;
            margin-left: 2.5rem;
            text-align: justify;
            width: 45%;
        }
    }
</style>
