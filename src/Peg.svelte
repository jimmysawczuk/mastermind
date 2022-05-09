<script>
  import { toggleColor } from "./utils"

  export let value = ""
  export let readonly = false

  function togglePeg() {
    if (readonly) {
      return
    }

    value = toggleColor(value)
  }
</script>

<div
  class="block w-7 h-7 rounded-full p-0 transition-colors shadow-md"
  class:cursor-pointer={!readonly}
  class:bg-slate-300={value == ""}
  class:dark:bg-slate-600={value == ""}
  class:bg-red-500={value == "red"}
  class:bg-orange-500={value == "orange"}
  class:bg-yellow-300={value == "yellow"}
  class:bg-green-500={value == "green"}
  class:bg-blue-500={value == "blue"}
  class:bg-violet-600={value == "purple"}
  on:click={togglePeg}
/>
