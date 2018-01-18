<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <router-link
    v-bind:to="href"
    v-bind:class="{ active: isActive, vlink: true }"
  >
    <slot></slot>
  </router-link>
</template>

<script>
  import routes from '../routes'

  export default {
    props: {
      href: {
        type:String,
        required: true
      }
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
