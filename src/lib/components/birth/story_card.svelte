<script lang="ts">
    import type { Stories } from "$lib/utils/types";

    function diffDate(dateISO: string) {
        const today = new Date();
        const date = new Date(dateISO);
        const diffTime = today.getTime() - date.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays >= 30) {
            return (
                Math.floor(diffDays / 30) +
                " hónapja és " +
                (diffDays % 30) +
                " napja"
            );
        }
        return `${diffDays} napja`;
    }

    export let story: Stories;
</script>

<a href={`/itt_szulettem/${story.id}`}>
    <div class="card">
        <h1>{story.name}</h1>
        <p class="story">{story.story}</p>

        <p class="date">{diffDate(story.created_at)}</p>
    </div>
</a>

<style>
    h1 {
        margin-bottom: 2rem;
    }
    a {
        text-decoration: none;
        font-family: inherit;
        color: inherit;
        padding: 0;
    }
    .card {
        position: relative;
        height: 6rem;
        border: black 1px solid;
        cursor: pointer;
        width: 30rem;
        background-color: rgba(255, 192, 203, 0.88);
        padding: 1.5rem 1rem;
        padding-top: 0.5rem;
        border-radius: 0.75rem;
    }
    .story {
        position: relative;
        margin-bottom: auto;
        font-size: larger;
        line-height: 1.5rem;
        height: calc(2 * 1.5rem);
        width: 30rem;
        margin-top: -1.5rem;
        margin-inline: auto;
        overflow-wrap: break-word;
        overflow: hidden;
    }
    .story::after {
        content: "";

        position: absolute;
        bottom: 0;
        right: 0;
        height: 1.5rem;
        width: 75%;

        background: linear-gradient(
            to right,
            transparent,
            rgba(255, 192, 203, 0.88)
        );
    }
    .date {
        position: absolute;
        right: 1rem;
        bottom: -0.8rem;
        font-style: italic;
    }
</style>
