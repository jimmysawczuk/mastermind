<script lang="ts">
  import { onMount } from "svelte"

  import Peg from "./Peg.svelte"

  import { toggleColor } from "./utils.js"
  import { Color, type Answer } from "./types"

  let { canGuess = true, submitGuess } = $props<{
    canGuess: boolean
    submitGuess: (answer: Answer) => Promise<void>
  }>()

  let guess = $state<Answer>(initialGuess())

  function initialGuess(): Answer {
    return Array(4).fill(Color.Empty) as Answer
  }

  onMount(() => {
    document.addEventListener("keyup", handleKeyUp)
  })

  async function handleSubmit() {
    await submitGuess(guess)
    guess = initialGuess()
  }

  function handleKeyUp(evt: KeyboardEvent) {
    if (!canGuess) {
      return
    }

    switch (evt.key) {
      case "1":
      case "a":
        guess[0] = toggleColor(guess[0])
        break

      case "2":
      case "s":
        guess[1] = toggleColor(guess[1])
        break

      case "3":
      case "d":
        guess[2] = toggleColor(guess[2])
        break

      case "4":
      case "f":
        guess[3] = toggleColor(guess[3])
        break

      case "Enter":
        if (!submittable) {
          break
        }

        handleSubmit()
        break

      default:
      // console.log(evt.key)
    }
  }

  let submittable = $derived(
    canGuess && guess.filter((s) => s == "").length == 0,
  )
</script>

<div></div>

{#each guess as peg, i}
  <div>
    <Peg bind:value={guess[i]} lg />
  </div>
{/each}

<div>
  <button
    onclick={handleSubmit}
    disabled={!submittable}
    class="block size-10 p-2 bg-blue-500 text-white rounded-md disabled:bg-slate-400 shadow-lg disabled:shadow transition-all cursor-pointer fill-current"
    title="Submit guess"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path
        d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
      />
    </svg>
  </button>
</div>

<div></div>

<div
  class="grid place-items-center border border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-500 transition-colors rounded text-sm font-mono w-6 h-6 select-none"
>
  1
</div>
<div
  class="grid place-items-center border border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-500 transition-colors rounded text-sm font-mono w-6 h-6 select-none"
>
  2
</div>
<div
  class="grid place-items-center border border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-500 transition-colors rounded text-sm font-mono w-6 h-6 select-none"
>
  3
</div>
<div
  class="grid place-items-center border border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-500 transition-colors rounded text-sm font-mono w-6 h-6 select-none"
>
  4
</div>
<div
  class="grid place-items-center border border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-500 transition-colors rounded text-sm font-mono w-6 h-6 select-none"
>
  ⮐
</div>
