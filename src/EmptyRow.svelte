<style lang="scss">
  @use "_scss/variables" as *;

  .empty-row {
    display: grid;
    grid-template-columns: repeat(5, 3rem);
    grid-template-rows: 3rem;
    justify-items: center;
    align-items: center;

    @media (max-width: $screen-sm-max) {
      grid-template-columns: repeat(5, 2.5rem);
      grid-template-rows: 2.5rem;
    }
  }

  .slot {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: $peg-slot;
  }
</style>

<div class="empty-row">
  <div class="slot " />
  <div class="slot" />
  <div class="slot" />
  <div class="slot" />
  <div />
</div>
