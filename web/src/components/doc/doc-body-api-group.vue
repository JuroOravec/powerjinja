<template>
  <div class="doc-body-api-group">
    <h3 :id="id" class="doc-body-api-group-name">{{apiGroup.subgroup.snakeCase}}</h3>
      <doc-body-api v-for="(api, index) in apiGroup.api" :api="api" :key="'api-' + index" />
      <doc-body-api-group v-for="(apiSubgroup, index) in apiGroup.children" :apiGroup="apiSubgroup" :key="'subgroup-' + index" />
  </div>
</template>

<script>
import docBodyApi from "./doc-body-api.vue";

export default {
  name: "doc-body-api-group",
  components: {
    docBodyApi
  },
  props: {
    apiGroup: Object
  },
  data: function() {
    return {
      id:
        this.apiGroup.module.kebabCase +
        (this.apiGroup.subpath.kebabCase.length > 0
          ? "-" + this.apiGroup.subpath.kebabCase
          : "")
    };
  }
};
</script>


<style scoped>
.doc-body-api-group {
  padding-left: 2em;
}
.doc-body-api-group-name {
  padding-top: 0.4em;
}
</style>
