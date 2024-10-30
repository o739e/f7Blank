<Page name="home">
  <!-- Top Navbar -->
  <Navbar title="Home" transparent/>
  <div class="page-title">Home</div>
  <BlockTitle>Recent</BlockTitle>
  <swiper-container pagination={false} slides-per-view={'auto'} space-between={10}>
    <swiper-slide>
      <Card>
        <CardContent>w</CardContent>
        <CardFooter>12:00PM - Oct. 30</CardFooter>
      </Card>
    </swiper-slide>
    <swiper-slide>
      <Card
        content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
      />
    </swiper-slide>
    <swiper-slide>
      <Card
        content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
      />
    </swiper-slide>
  </swiper-container>
</Page>
<script>
  import {
    Page,
    Navbar,
    BlockTitle,
    Card,
    CardHeader,
    CardContent,
    CardFooter
  } from 'framework7-svelte';
</script>