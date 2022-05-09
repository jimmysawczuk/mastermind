<script>
  export let color

  $: filled = color == "white" || color == "black"
</script>

<div
  class="block h-1 w-1 rounded-full shadow"
  class:peg={true}
  class:h-3={filled}
  class:w-3={filled}
  class:bg-black={color == "black"}
  class:bg-white={color == "white"}
/>
