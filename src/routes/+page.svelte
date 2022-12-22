<script>
    import Grid from "$lib/Components/Grid.svelte";
	import MapComponent from "$lib/Components/MapComponent.svelte";

  </script>
  


  <svelte:head>
    <title>Listings</title>
  </svelte:head>
  
  <div class="wrapper antialiased">
    <article class="content">
      <Grid />
    </article>
  
    <div class="sidebar">
      <MapComponent/>
    </div></div>
  
  <style>
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
  
    .wrapper {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 60% 40%;
      grid-gap: 16px;
    }
  
    .wrapper > * {
      background-color: rgba(0, 0, 0, 0);
      border-radius: 5px;
      font-size: 16px;
      margin-bottom: 10px;
    }
  
    .sidebar {
      background-color: #fafafa;
      height: 86vh;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
    }
  
    .content {
      padding: 8px;
      display: grid;
      margin: 0 auto;
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      grid-auto-rows: minmax(264px, auto);
      grid-gap: 16px;
    }
  
    @media (max-width: 1100px) {
      .wrapper {
        grid-template-columns: 1fr;
      }
  
      .sidebar {
        display: none;
      }
  
      .content {
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: minmax(300px, auto);
      }
    }
  
    @supports (display: grid) {
      .wrapper > * {
        width: auto;
        margin: 0;
      }
    }
  </style>
  