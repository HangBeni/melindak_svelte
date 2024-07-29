<script lang="ts">
    import { onMount } from "svelte";

    let dialog: HTMLDialogElement | null;
    onMount(() => {
        dialog = document.getElementById("story-dialog") as HTMLDialogElement;
    });
   
</script>

<div>
    <button on:click={() => dialog?.showModal()}>Van egy történeted?</button>
    <dialog id="story-dialog">
        <h2>Írd meg a te és kicsid történetét!</h2>
        <form action="">
            <label for="story-plot"></label>
            <textarea id="story-plot"/>

            <input type="text" name="name" id="storyteller">
            <input type="file">
            <input type="email" name="email" id="email">
            <input type="tel">
        </form>
    </dialog>
</div>

<style>
    dialog {
        border-radius: 5px;
        border-width: 1px;
        transition: all 2s;
    }
    dialog::backdrop {
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
        animation: fade-in 1s;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
