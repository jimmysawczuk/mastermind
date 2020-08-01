<script>
  export let color
</script>

<style>
  div {
    display: block;
    height: 2px;
    width: 2px;
    border-radius: 50%;
    background: silver;
  }

  .filled {
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }

  .black {
    background: #000;
    border: 1px solid #000;
  }

  .white {
    background: #fff;
    border: 1px solid #000;
  }
</style>

<div
  class:peg={true}
  class:filled={color == 'white' || color == 'black'}
  class={color} />
