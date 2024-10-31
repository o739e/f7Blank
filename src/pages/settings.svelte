<!-- maybe delete everything and just have the else if's here and the page stuff in the other elements-->
<Page name="settings">
  <Navbar title="Settings" transparent/>
  {#if f7route.params.setting == undefined}  
    <AllSettings/>
  {:else if f7route.params.setting == "theme"}
    <ThemeSelector/>
  {/if}
</Page>
<script>
  const colors = Object.keys(f7.colors).filter(
    (c) => c !== 'primary' && c !== 'white' && c !== 'black',
  );
  import AllSettings from './settings/AllSettings.svelte';
  import ThemeSelector from './settings/ThemeSelector.svelte';
  import {
    f7,
    Page,
    Navbar,
  } from 'framework7-svelte';
  export let f7route;
</script>