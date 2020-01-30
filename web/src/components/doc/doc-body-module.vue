<template>
  <div class="module">
    <h2 :id="id" class="module-title">{{title}}</h2>
    <doc-body-api v-for="(api, index) in apiModule.api" :api="api" :key="'api-' + index" />
    <doc-body-api-group v-for="(apiSubgroup, index) in apiModule.children" :apiGroup="apiSubgroup" :key="'subgroup-' + index" />
  </div>
</template>

<script>
import docBodyApi from "./doc-body-api";
import docBodyApiGroup from "./doc-body-api-group";

export default {
  name: "doc-body-module",
  components: {
    docBodyApi,
    docBodyApiGroup
  },
  props: {
    apiModule: Object
  },
  data: function() {
    return {
      id: this.apiModule.module.kebabCase,
      title: this.apiModule.module.snakeCase
    };
  }
};
</script>


<style scoped>
.module {
  padding-bottom: 3em;
}
.module-title {
  padding-bottom: 1em;
}
</style>
