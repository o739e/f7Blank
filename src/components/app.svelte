<App { ...f7params }>

  <!-- Your main view, should have "view-main" class -->
  <Views tabs>
    <View id="tab-1" main tab tabActive url="/"/>
    <View id="tab-2" main tab tabActive url="/settings/theme/"/>
    <View id="tab-3" tab url="/settings/"/>
    <Toolbar tabbar icons bottom>
      <Link tabLink="#tab-1" tabLinkActive text="Home" iconIos="f7:envelope_fill" iconMd="material:home"/>
      <Link tabLink="#tab-2" text="Tab 2" iconIos="f7:calendar_fill" iconMd="material:today" />
      <Link tabLink="#tab-3" text="Settings" iconIos="f7:cloud_upload_fill" iconMd="material:settings"/>
    </Toolbar>
  </Views>
</App>
<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    View,
    Toolbar,
    Link,
    Views
  } from 'framework7-svelte';


  import routes from '../js/routes';
  import store from '../js/store';


  // Framework7 Parameters
  let f7params = {
    name: 'f7', // App name
    theme: 'auto', // Automatic theme detection
    colors: {
      primary: '#007aff',
    },
    darkMode: true,


    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
  };

  onMount(() => {
    f7ready(() => {


      // Call F7 APIs here
    });
  })
</script>