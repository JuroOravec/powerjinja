<template>
  <b-navbar :toggleable="'md'" :type="'dark'" :fixed="'top'" :variant="'info'">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand :to="'/'">PowerJinja</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="'/'">Try it Out</b-nav-item>
        <b-nav-item :to="'docs'">Docs</b-nav-item>
        <b-nav-item :to="'/how-it-works'">How it Works?</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          href="https://github.com/JuroOravec/powerjinja"
          target="_blank"
          rel="noopener"
        >GitHub</b-nav-item>
        <b-nav-item
          href="https://www.npmjs.com/search?q=powerjinja"
          target="_blank"
          rel="noopener"
        >NPM</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BCollapse,
  BNavItem,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle
} from "bootstrap-vue";

export default {
  name: "navbar",
  components: {
    BCollapse,
    BNavItem,
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-dark .nav-item .nav-link {
  color: white;
}
nav {
  z-index: 100;
  font-size: 14px;
}
</style>
