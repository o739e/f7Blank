<Page name="settings">
  <Navbar title="Settings" transparent/>
    <div class="page-title">Settings</div>
    <!-- Page content -->
    <BlockTitle>General</BlockTitle>
    <!-- appearance -->
    <BlockTitle>Appearance</BlockTitle>
    <List inset>
      <ListItem title="Current Theme" link="/settings/theme" after="theme"><Icon slot="media" material="palette"/></ListItem>
      <ListItem title="Background" link="#"><Icon slot="media" material="wallpaper"/></ListItem>
    </List>
    <!-- info -->
    <BlockTitle>Information</BlockTitle>
    <List inset>
      <ListItem title="Connection" link="#"><Icon slot="media" material="cloud"/></ListItem>
      <ListItem title="Version" after="0.0.0" link="#"><Icon slot="media" material="info"/></ListItem>
    </List>
</Page>

<script>
  import {
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem,
    Icon
  } from 'framework7-svelte';
</script>