<template>
  <div id="app">
    <navbar />
    <main>
     <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  name: "app",
  components: {
    navbar
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 5em;
}
body {
  font-family: sans-serif;
  background-attachment: fixed;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 0;
  margin: 0;

  font-size: 14px;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  min-height: 100%;
  background: white;
  width: calc(100% - 50px);
}

.table.b-table > thead > tr > th,
table.b-table > tfoot > tr > th {
  position: inherit;
}
</style>
