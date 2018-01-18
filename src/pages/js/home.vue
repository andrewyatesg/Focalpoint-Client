<style src="../styles/home.css"></style>
<template src="../templates/home.html"></template>
<script>
  import MainLayout from '../../layouts/Main.vue'

  export default {
    data () {
      return {
        display: 'Home',
        headerType: 'header-two',
        footerType: 'footer-one'
      }
    },
    components: {
      MainLayout
    }
  }
</script>
