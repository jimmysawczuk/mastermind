<script lang="ts">
  import { toggleColor } from "./utils"

  let {
    value = $bindable(""),
    readonly = false,
    lg = false,
  } = $props<{
    value: string
    readonly?: boolean
    lg?: boolean
  }>()

  function togglePeg() {
    if (readonly) {
      return
    }

    value = toggleColor(value)
  }
</script>

<button
  class="block rounded-full p-0 transition-colors shadow-md"
  class:size-8={!lg}
  class:size-10={lg}
  class:cursor-pointer={!readonly}
  class:bg-slate-300={value == ""}
  class:dark:bg-slate-600={value == ""}
  class:bg-red-500={value == "red"}
  class:bg-orange-500={value == "orange"}
  class:bg-yellow-300={value == "yellow"}
  class:bg-emerald-500={value == "green"}
  class:bg-blue-500={value == "blue"}
  class:bg-violet-600={value == "purple"}
  onclick={togglePeg}
  type="button"
  title={`${value} peg`}
></button>
