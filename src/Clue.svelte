<script>
  export let color
</script>

<style>
  div {
    display: block;
    height: 2px;
    width: 2px;
    border-radius: 50%;
    background: var(--peg-slot);
  }

  .filled {
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }

  .black {
    background: var(--peg-black);
    border: 1px solid var(--peg-black);
  }

  .white {
    background: var(--peg-white);
    border: 1px solid var(--peg-black);
  }
</style>

<div
  class:peg={true}
  class:filled={color == 'white' || color == 'black'}
  class={color} />
