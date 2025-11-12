<script lang="ts">
    import { page } from "$app/stores";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;

    $: index = parseInt($page.params.id ?? "0");
</script>

<main>
    {#if data.stories?.length}
        <nav>
            <div>
                {#if data.stories.find((story) => story.id === index - 1 && story.public === true)}
                    <a
                        id="left_btn"
                        href={`/itt_szulettem/${data.stories.find((story) => story.id === index - 1)?.id}`}
                        >Előző</a
                    >
                {/if}
                {#if data.stories.find((story) => story.id === index + 1 && story.public === true)}
                    <a
                        id="right_btn"
                        href={`/itt_szulettem/${data.stories.find((story) => story.id === index + 1)?.id}`}
                        >Kövi</a
                    >
                {/if}
            </div>
        </nav>
    {:else}
        Nincs több történet
    {/if}
    {#if data.stories}
        <div class="story-container">
            <h1>{data.stories.find((story) => story.id === index)?.name}</h1>
            <p>
                {data.stories.find((story) => story.id === index)?.story}
            </p>
        </div>
    {/if}
    <nav>
        <div>
            <a id="back" href="/itt_szulettem">{"<"} Vissza a történetekhez</a>
        </div>
    </nav>
</main>

<style>
    nav:nth-of-type(2) {
        width: 50%;
        height: 6rem;
        border-bottom-right-radius: 0;
        margin-left: 0;
    }

    div > a {
        padding-top: 0.5rem;
        padding-left: 1rem;
        font-size: 1.5rem;
        animation: appear 1s;
    }

    #left_btn {
        margin-right: auto;
        border-bottom-left-radius: 66%;
        border-top-right-radius: 5rem;
        border-bottom-right-radius: 5rem;
        text-align: left;
        padding-left: 2rem;
    }
    #right_btn {
        margin-left: auto;
        border-bottom-right-radius: 66%;
        border-top-left-radius: 5rem;
        border-bottom-left-radius: 5rem;
        text-align: right;
        padding-right: 2rem;
    }
    #back {
        width: fit-content;
        border-bottom-left-radius: 80%;
        border-top-right-radius: 5rem;
        border-bottom-right-radius: 5rem;
        text-align: left;
        padding-right: 2rem;
        margin-left: 1rem;
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
