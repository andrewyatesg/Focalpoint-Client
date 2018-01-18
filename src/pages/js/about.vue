<style src="../styles/about.css"></style>
<template src="../templates/about.html"></template>
<script>
    import MainLayout from '../../layouts/Main.vue'

    export default {
        data () {
            return {
                display: 'About',
                headerType: 'header-one',
                footerType: 'footer-one'
            }
        },
        components: {
            MainLayout
        }
    }
</script>
