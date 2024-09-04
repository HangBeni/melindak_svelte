<script lang="ts">
  import {
    EditedValidator,
    emailValidator,
    telephoneValidator,
  } from "$lib/validators";
  import { onMount } from "svelte";
  let form: HTMLFormElement | null;
  let dialog: HTMLDialogElement | null;
  let nameInput: HTMLInputElement;
  let nameLabel: HTMLLabelElement;

  let emailLabel: HTMLLabelElement;
  let emailInput: HTMLInputElement;

  let telLabel: HTMLLabelElement;
  let telInput: HTMLInputElement;

  let plotLabel: HTMLLabelElement;
  let plotTextarea: HTMLTextAreaElement;

  onMount(() => {
    form = document.querySelector("form") as HTMLFormElement;
    dialog = document.getElementById("story-dialog") as HTMLDialogElement;

    nameInput = form?.querySelector('input[name="name"]') as HTMLInputElement;
    nameLabel = form?.querySelector('label[for="name"]') as HTMLLabelElement;

    emailLabel = form?.querySelector('label[for="email"]') as HTMLLabelElement;
    emailInput = form?.querySelector('input[name="email"]') as HTMLInputElement;

    telLabel = form?.querySelector('label[for="tel"]') as HTMLLabelElement;
    telInput = form?.querySelector('input[type="tel"]') as HTMLInputElement;

    plotLabel = form?.querySelector('label[for="plot"]') as HTMLLabelElement;
    plotTextarea = form?.querySelector("textarea") as HTMLTextAreaElement;
  });

  function validateForm() {
    if (
      !EditedValidator(nameInput.value, nameLabel) ||
      !emailValidator(emailInput.value, emailLabel) ||
      !telephoneValidator(telInput.value, telLabel) ||
      !EditedValidator(plotTextarea.value, plotLabel)
    ) {
      return false;
    }
    return true;
  }
</script>

<div>
  <button id="opener" on:click={() => dialog?.showModal()}>Van egy történeted?</button>
  <dialog id="story-dialog">
    <button on:click={() => dialog?.close()}>&#10006;</button>
    <h2>Írd meg a te és kicsid történetét!</h2>
    <form action="">
      <label for="story-plot">Mi a ti történetetek?</label>
      <textarea rows="15" id="story-plot" minlength="50" name="story-plot" />
      <span>
        <label for="name">Add meg kérlek a neved</label>
        <input type="text" name="name" id="storyteller" />
      </span>
      <span>
        <label for="email">Kérlek add meg az emailed</label>
        <input type="email" name="email" id="email" />
      </span>
      <span>
        <label for="tel">Add meg a telefonszámod!</label>
        <input type="tel" name="tel" />
      </span>
      <button type="submit" on:click={validateForm}>Küldés</button>
    </form>
  </dialog>
</div>

<style>
  #opener {
    background-color: #f2b09e;
    color: white;
    padding: 14px 20px;
    margin: 0 1rem;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  #opener:hover {
    background-color: #ffc5c5;
  }

  dialog[open] {
    animation: appear 0.5s cubic-bezier(0.3, 1, 0.47, 1);
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

  dialog {
    margin-top: 3.6rem;
    background-color: white;
    padding: 2em;
    border-radius: 2px;
    width: 50%;
  }
  dialog h2 {
    font-size: 1.5em;
  }

  dialog button {
    float: right;
  }

  dialog form {
    margin-top: 1em;
  }
  dialog span {
    display: block;
  }
  dialog input[type="text"],
  dialog input[type="email"],
  dialog input[type="tel"],
  dialog textarea {
    width: 50%;
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
  dialog textarea {
    width: 100%;
  }
  dialog button[type="submit"] {
    padding: 0.5em 1em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  dialog button[type="submit"]:hover {
    background-color: #0056b3;
  }
</style>
