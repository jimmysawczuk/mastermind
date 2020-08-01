<style>
  .empty-row {
    display: grid;
    grid-template-columns: 50px 50px 50px 50px 40px;
    grid-template-rows: 50px;
    justify-items: center;
    align-items: center;
  }

  .slot {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--peg-slot);
  }
</style>

<div class="empty-row">
  <div class="slot " />
  <div class="slot" />
  <div class="slot" />
  <div class="slot" />
  <div />
</div>
