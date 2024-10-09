<script lang="ts">
  import { reg_email, reg_name, reg_tel, validInputs } from "$lib/utils/regex";
  import {
    NameValidator,
    checkFormat,
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

  let storyTipp: HTMLParagraphElement;

  let storyChars: string = "";

  $: validation = validInputs.name && validInputs.tel;

  onMount(() => {
    form = document.querySelector("form") as HTMLFormElement;
    dialog = document.getElementById("story-dialog") as HTMLDialogElement;

    nameInput = form?.querySelector('input[name="name"]') as HTMLInputElement;
    nameLabel = form?.querySelector('label[for="name"]') as HTMLLabelElement;

    emailLabel = form?.querySelector('label[for="email"]') as HTMLLabelElement;
    emailInput = form?.querySelector('input[name="email"]') as HTMLInputElement;

    telLabel = form?.querySelector('label[for="tel"]') as HTMLLabelElement;
    telInput = form?.querySelector('input[type="tel"]') as HTMLInputElement;

    storyTipp = form?.querySelector("#story-tipp") as HTMLParagraphElement;
  });
</script>

<div>
  <button id="opener" on:click={() => dialog?.showModal()}
    >Van egy történeted?</button
  >
  <dialog id="story-dialog">
    <button
      on:click={() => {
        dialog?.close();
        form?.reset();
      }}>&#10006;</button
    >

    <h2>Mutasd meg a ti történeteket, hogy ezzel is bátoríts másokat!</h2>

    <form method="POST" action="?/story">
      <label for="story">Mi a ti történetetek? (opcionális)</label>
      <textarea
        rows="15"
        id="story"
        name="story"
        bind:value={storyChars}
        on:blur={() => checkFormat(storyTipp, storyChars)}
      />
      <span>{storyChars.length}/200</span>
      <p id="story-tipp"></p>

      <fieldset>
        <span>
          <label for="name">Add meg kérlek a teljes neved*</label>
          <input
            required
            type="text"
            name="name"
            autocomplete="name"
            id="storyteller"
            title="(Dr.) Vezetéknév Keresztnév Harmadiknév"
            pattern={reg_name}
            on:change={() => {
              validInputs.name = NameValidator(nameInput.value, nameLabel);
            }}
          />
        </span>
      </fieldset>
      <fieldset>
        <span>
          <label for="telephone">Kérlek add meg a telefonszámod*</label>
          <input
            required
            type="tel"
            name="telephone"
            maxlength="12"
            pattern={reg_tel}
            on:input={() => {
              validInputs.tel = telephoneValidator(telInput.value, telLabel);
            }}
          />
        </span>
      </fieldset>
      <fieldset>
        <label for="picture"
          >Kérlek tölts fel egy képet rólad és/vagy a kisbabádról*</label
        >
        <input
        required
          accept="image/*"
          type="file"
          name="picture"
          id="picture"
        />
      </fieldset>
      <fieldset>
        <span>
          <label for="email">Kérlek add meg az emailed</label>
          <input
            type="email"
            name="email"
            autocomplete="email"
            id="email"
            pattern={reg_email}
            on:change={() => {
              validInputs.email = emailValidator(emailInput.value, emailLabel);
            }}
          />
        </span>
      </fieldset>
      <fieldset>
        <button type="submit" disabled={!validation}>Küldés</button>
      </fieldset>
      <p>Kötelező mező*</p>
    </form>
  </dialog>
</div>

<style>
  div {
    width: 20rem;
  }
  #story-tipp {
    display: none;
  }
  p {
    font-size: 1.25rem;
    width: fit-content;
    margin-left: auto;
  }
  /* .show-tipp{
    display: block;
  } */

  fieldset:invalid ~ fieldset {
    display: none;
    animation: fade-in 1s;
  }

  fieldset {
    border: none;
  }

  #opener {
    position: relative;
    font-size: 3.2rem;
    font-family: "Dancing Script", cursive;
    background-color: #f2b09e;
    padding: 1rem 1.85rem;
    margin: 0 1rem;
    border: none;
    cursor: pointer;
    border-radius: 0.85rem;
    z-index: 1;
  }
  #opener:hover {
    background-color: #ffc5c5;
  }
  @media (max-width: 620px) {
    dialog[open] {
      height: 70vh;
      width: 70vw;
    }
    dialog textarea {
      height: 12rem;
    }
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
    background-color: rgb(233, 229, 229);
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

  dialog input[type="text"]:focus,
  dialog input[type="email"]:focus,
  dialog input[type="tel"]:focus,
  dialog textarea:focus {
    border-style: double;
  }

  dialog input[type="text"],
  dialog input[type="email"],
  dialog input[type="tel"],
  dialog textarea {
    padding: 0.5em;
    margin-bottom: 1em;
    border-radius: 0.5rem;
  }

  dialog input[type="text"]:valid,
  dialog input[type="email"]:valid,
  dialog input[type="tel"]:valid,
  dialog textarea:valid {
    border: green 2px solid;
  }

  dialog input[type="text"]:invalid,
  dialog input[type="email"]:invalid,
  dialog input[type="tel"]:invalid,
  dialog textarea:invalid {
    border: black 1px double;
  }

  dialog textarea {
    width: 90%;
    font-size: 1rem;
  }

  dialog button[type="submit"] {
    padding: 0.5em 1em;
    background-color: #f19b9b;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  dialog button[type="submit"]:disabled {
    display: none;
  }

  dialog button[type="submit"]:enabled:hover {
    background-color: #f19b9b;
  }
</style>
