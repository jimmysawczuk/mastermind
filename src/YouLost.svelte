<script>
  import { onMount, onDestroy } from "svelte"
  import { closeModal } from "svelte-modals"
  import Peg from "./Peg.svelte"

  export let isOpen

  export let answer
  export let onConfirm

  onMount(() => {
    document.addEventListener("keyup", handleKeyUp)
  })

  onDestroy(() => {
    document.removeEventListener("keyup", handleKeyUp)
  })

  function handleConfirm() {
    onConfirm()
    closeModal()
  }

  function handleKeyUp(evt) {
    switch (evt.key) {
      case "Enter":
        handleConfirm()
        break

      case "Escape":
        closeModal()
        break
    }
  }
</script>

{#if isOpen}
  <div
    role="dialog"
    class="fixed inset-0 flex justify-center items-center pointer-events-none z-20"
  >
    <div
      class="min-w-[20rem] max-w-[40ch] rounded-md bg-slate-100 dark:bg-slate-700 p-6 z-20 pointer-events-auto"
    >
      <h2 class="text-xl font-bold mb-2">You lost! 😢</h2>
      <p class="my-4">The answer was:</p>

      <div class="flex flex-row gap-4 my-4 place-content-center">
        {#each answer as color}
          <Peg readonly value={color} />
        {/each}
      </div>

      <div class="mt-6 text-center">
        <button
          type="button"
          on:click={handleConfirm}
          class="bg-blue-500 text-white rounded py-2 px-4 pointer">OK</button
        >
      </div>
    </div>
  </div>
{/if}
