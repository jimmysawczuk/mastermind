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

<style lang="scss">
  @use "_scss/variables" as *;

  .guess-picker {
    display: grid;
    grid-template-columns: 5 * 3rem;
    grid-template-rows: 3rem 3rem;
    justify-items: center;
    align-items: center;

    @media (max-width: $screen-sm-max) {
      grid-template-columns: 5 * 2.5rem;
      grid-template-rows: 2.5rem 2.5rem;
    }
  }

  .ops {
    display: grid;
    grid-template-columns: 4 * 3rem 3rem;
    grid-template-rows: 3rem;
    justify-items: center;
    align-items: center;

    @media (max-width: $screen-sm-max) {
      grid-template-columns: 4 * 2.5rem 2.5rem;
      grid-template-rows: 2.5rem;
    }
  }

  .pegs {
    display: grid;
    grid-template-columns: repeat(4, 3rem);
    grid-template-rows: 3rem;
    justify-items: center;
    align-items: center;

    @media (max-width: $screen-sm-max) {
      grid-template-columns: repeat(4, 2.5rem);
      grid-template-rows: 2.5rem;
    }
  }

  button {
    display: block;
    width: 40px;
    height: 40px;
    background-color: $success-btn;
    color: #fff;
    border: 1px solid $success-btn;
    border-radius: 4px;

    @media (max-width: $screen-sm-max) {
      width: 34px;
      height: 34px;
    }
  }

  button:disabled {
    background-color: $peg-slot;
    border: 1px solid $peg-slot;
    color: silver;
  }

  .shortcuts {
    display: grid;
    grid-template-columns: repeat(4, 3rem) 3rem;
    grid-template-rows: 3rem;
    justify-items: center;
    align-items: center;

    @media (max-width: $screen-sm-max) {
      grid-template-columns: repeat(4, 2.5rem) 2.5rem;
      grid-template-rows: 2.5rem;
    }
  }

  .shortcuts .key {
    display: grid;
    align-content: center;
    justify-content: center;

    border: 1px solid #555;
    border-radius: 3px;
    color: #777;
    font-size: 0.9rem;
    font-family: monospace;
    width: 2rem;
    height: 2rem;

    @media (max-width: $screen-sm-max) {
      display: none;
    }
  }
</style>

<div class="guess-picker">
  <div class="ops">
    <div class="pegs">
      {#each guess as peg}
        <Peg bind:value={peg} />
      {/each}
    </div>

    <button on:click={handleSubmit} disabled={!submittable}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="check"
        class="svg-inline--fa fa-check fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M435.848 83.466L172.804
          346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284
          28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686
          12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284
          0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" />
      </svg>
    </button>
  </div>

  <div class="shortcuts">
    <div class="key">1</div>
    <div class="key">2</div>
    <div class="key">3</div>
    <div class="key">4</div>
    <div class="key">⮐</div>
  </div>
</div>
