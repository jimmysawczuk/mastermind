<script lang="ts">
  import type { BlackOrWhite } from "./types"

  const { color = "" } = $props<{
    color: BlackOrWhite | ""
  }>()

  const bg = $derived.by(() => {
    switch (color) {
      case "white":
        return "bg-white"
      case "black":
        return "bg-black"
      default:
        return "bg-slate-200 dark:bg-slate-700"
    }
  })

  const filled = $derived(color !== "")
</script>

<div
  class={[
    "block",
    "rounded-full",
    "shadow",
    "transition-colors",
    bg,
    filled ? "size-3" : "size-1",
  ]}
></div>
