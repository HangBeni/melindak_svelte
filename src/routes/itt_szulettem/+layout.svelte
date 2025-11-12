<script lang="ts">
    import NewStory from "$lib/components/birth/new_story.svelte";
    import "$lib/styles/index.css";
    import { inject } from "@vercel/analytics";
    import { dev, browser } from "$app/environment";
    import Footer from "$lib/components/footer.svelte";
 if (browser && !dev) {
    inject({ mode: "production" });
  }
</script>

<div
    style="display: flex; align-items: center; width: 90%; justify-content: space-around; margin-inline: auto;"
    id="header"
>
    <div>
        <h2>Történetek amik itt születtek</h2>
        <p id="description">
            <em
                >A szülésfelkészítés keretein belül született gyermekek és
                édasanyjuk történeteit olvashatjátok itt</em
            >
        </p>
    </div>
    <NewStory />
</div>

<slot />

<style>
    h2 {
        font-size: 3.75rem;
        margin-bottom: 1rem;
        width: fit-content;
    }

    @media (max-width: 620px) {
        #header {
            flex-direction: column;
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
            font-size: 1.75rem;
        }
    }

    @media (min-width: 620px) {
        #header {
            display: flex;
            align-items: center;
            width: 90%;
            justify-content: space-around;
            margin-inline: auto;
        }
        #description {
            font-size: 1.5rem;
            text-align: justify;
            width: 65%;
        }
    }
</style>
