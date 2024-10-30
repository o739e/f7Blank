<Page name="settings">
  <Navbar title="Settings" transparent/>
  <div class="page-title">Settings</div>
  <!-- Page content -->
  {#if f7route.params.settings === undefined}
    <BlockTitle>General</BlockTitle>
    <List dividersIos outlineIos strongIos inset>
      <ListItem title="Current Theme" link="/settings/theme" after="theme"><Icon slot="media" material="palette"/></ListItem>
      <ListItem title="Link 2" link="#" />
      <ListItem title="Link 3" link="#" />
    </List>
  {/if}  
</Page>
<script>
  import {
    Page,
    Block,
    List,
    ListItem,
    BlockTitle,
    Navbar,
    Icon
  } from 'framework7-svelte';
  export let f7route;
</script>