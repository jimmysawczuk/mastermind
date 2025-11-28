<script lang="ts">
  import { onMount, onDestroy } from "svelte"
  import Peg from "./Peg.svelte"
  import type { Answer } from "./types"

  const { isOpen, close, answer, guesses } = $props<{
    isOpen: boolean
    close: () => void
    answer?: Answer
    guesses?: number
  }>()

  onMount(() => {
    document.addEventListener("keyup", handleKeyUp)
  })

  onDestroy(() => {
    document.removeEventListener("keyup", handleKeyUp)
  })

  function handleKeyUp(evt: KeyboardEvent) {
    switch (evt.key) {
      case "Enter":
        close()
        break

      case "Escape":
        close()
        break
    }
  }
</script>

{#if isOpen}
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    class="fixed inset-0 flex justify-center items-center pointer-events-none z-20"
  >
    <div
      class="min-w-[20rem] max-w-[40ch] rounded-md bg-slate-100 dark:bg-slate-700 p-6 z-20 pointer-events-auto"
    >
      <h2 class="text-xl font-bold mb-2" id="modal-title">You won! 🎉</h2>
      <p class="my-4">The answer was:</p>

      <div class="flex flex-row gap-4 my-4 place-content-center">
        {#each answer as color}
          <Peg readonly value={color} />
        {/each}
      </div>

      <p>
        It took you {guesses}
        {guesses > 1 ? "guesses" : "guess"}. Nice job!
      </p>
      <div class="mt-6 text-center">
        <button
          type="button"
          onclick={close}
          class="bg-blue-500 text-white rounded py-2 px-4 pointer">OK</button
        >
      </div>
    </div>
  </div>
{/if}
