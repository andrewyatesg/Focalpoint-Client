<template>
  <div class="container">
  <header>
    <slot name="header">Page Title</slot>
  </header>
  <main>
    <slot>There should be page content here, but something wrong has ocurred.</slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    
  }
</script>

<style scoped>
  .container {
    
  }
</style>
