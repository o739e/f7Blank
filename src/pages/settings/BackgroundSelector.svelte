<div class="page-title">Background</div>
<Block>
  <BlockTitle>Static</BlockTitle>
  <div class="grid grid-cols-3 medium-grid-cols-4 grid-gap"> <!-- change for responsive possibly -->
    {#each Object.entries(staticWallpaperData) as [key, value]}
      <div class="bgCard" style="background-image: url({value})">
        <p>Image {key}</p>
      </div>
    {/each}
  </div>
</Block>
<Block>
  <BlockTitle>Dynamic</BlockTitle>
</Block>
<BlockTitle>Advanced</BlockTitle>
<List inset>
  <ListItem title="Change on every launch" link="#"></ListItem>
</List>
<style>
  .bgCard {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
  }
</style>
<script>
  const staticWallpaperData = {
    "1s": "https://picsum.photos/700/950",
    "2s": "https://picsum.photos/700/950",
    "3s": "https://picsum.photos/700/950",
    "4s": "https://picsum.photos/700/950",
    "5s": "https://picsum.photos/700/950",
    "6s": "https://picsum.photos/700/950",
  }
  const dynamicWallpaperData = {
    "1d": "",
    "2d": "",
    "3d": "",
    "4d": "",
    "5d": "",
    "6d": "",
  }
  import {
    Block,
    BlockTitle,
    List,
    ListItem,
    Icon
  } from 'framework7-svelte';
</script>