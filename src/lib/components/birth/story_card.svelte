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
        return diffDays;
    }

    export let story: Stories;
</script>

<div class="card">
    <h1>{story.name}</h1>
    <p class="story">{story.story}</p>

    <p class="date">{diffDate(story.created_at)}</p>
</div>

<style>
    .card {
        border: 1px red solid;
        padding: 14px 20px;
        margin: 0 1rem;
        cursor: pointer;
    }
    .story {
        font-size: large;
        width: 30rem;
        margin-inline: auto;
    }
    .date {
        width: max-content;
        margin-left: auto;
        margin-top: auto;
        font-style: oblique;
    }
</style>
