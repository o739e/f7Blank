<div class="page-title">Theme</div>
<BlockTitle>Layout</BlockTitle>
<Block>
  <div class="grid grid-cols-2 grid-gap">
    <Card class="bg-color-white"/>
    <div class="bg-color-white">asd</div>
    <div class="bg-color-black">asd</div>
  </div>
</Block>
<BlockTitle>Color</BlockTitle>
<Block>
  <div class="grid grid-cols-3 medium-grid-cols-4 large-grid-cols-5 grid-gap">
    <!-- {#each colors as color, index}
      <div key={index}>
        <Button
          fill
          round
          small

          {color}
          onClick={() => setColorTheme(color)}
        >
          {color}
        </Button>
      </div>
    {/each} -->
  </div>
</Block>

<script>
  import {
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem,
    Icon,
    Card,
    Block
  } from 'framework7-svelte';
</script>