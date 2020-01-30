<template>
  <div class="doc-body-wrap">
    <div class="doc-body">
      <div class="doc-body-intro"></div>
      <doc-body-module v-for="(apiModule, index) in docData" :key="index" :apiModule="apiModule" />
    </div>
  </div>
</template>

<script>
import docBodyModule from "./doc-body-module";

export default {
  name: "doc-body",
  components: {
    docBodyModule
  },
  props: {
    docData: Object
  }
};
</script>


<style scoped>
.doc-body-wrap {
  position: fixed;
  overflow: auto;
  width: 100%;
  top: 55px;
  bottom: 0px;
  /* left: 350px; */
  right: 0;
}
.doc-body {
  margin-left: 50px;
  margin-right: 20px;
  text-align: left;
}
.doc-body-intro {
  padding-bottom: 50px;
}

@media (min-width: 900px) {
  .doc-body {
    margin-left: 400px;
  }
}
</style>
