<script>
  import Peg from "./Peg.svelte"
  import { createEventDispatcher, onMount } from "svelte"
  import { toggleColor } from "./utils.js"

  let dispatch = createEventDispatcher()
  let guess = initialGuess()

  function initialGuess() {
    return ["", "", "", ""]
  }

  onMount(() => {
    document.addEventListener("keyup", handleKeyUp)
  })

  function handleSubmit() {
    dispatch("guess", { guess: guess })
    guess = initialGuess()
  }

  function handleKeyUp(evt) {
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

  $: submittable = guess.filter((s) => s == "").length == 0
</script>

<div />

{#each guess as peg}
  <div>
    <Peg bind:value={peg} lg />
  </div>
{/each}

<div>
  <button
    on:click={handleSubmit}
    disabled={!submittable}
    class="block w-10 h-10 p-2 bg-blue-500 text-white rounded-md disabled:bg-slate-400 shadow-lg disabled:shadow transition-all"
  >
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="check"
      class="svg-inline--fa fa-check fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M435.848 83.466L172.804
          346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284
          28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686
          12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284
          0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
      />
    </svg>
  </button>
</div>

<div />

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
