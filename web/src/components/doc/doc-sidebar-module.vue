<template>
  <div class="sidebar-group">
    <a :href="url" class="regular block sidebar-link sidebar-group-title">
      <p>{{name}}</p>
    </a>
    <doc-sidebar-api v-for="(api, index) in apiModule.api" :api="api" :key="'api-' + index" />
    <doc-sidebar-api-group v-for="(apiGroup, index) in apiModule.children" v-bind:key="'apiGroup-' + index" :apiGroup="apiGroup"></doc-sidebar-api-group>
    <hr/>
  </div>
</template>

<script>
import docSidebarApi from "./doc-sidebar-api.vue";
import docSidebarApiGroup from "./doc-sidebar-api-group";

export default {
  name: "doc-sidebar-module",
  components: {
    docSidebarApi,
    docSidebarApiGroup
  },
  props: {
    apiModule: Object
  },
  data: function() {
    return {
      name: this.apiModule.module.snakeCase,
      url: `#${this.apiModule.module.kebabCase}`
    };
  }
};
</script>

<style scoped>
.sidebar-group {
  display: block;
}
.sidebar-group-title {
  font-weight: bold;
}
.sidebar-link {
  white-space: nowrap;
  font-size: 15px;
  color: #222;
}
.sidebar-link p {
  margin: 0;
  padding-bottom: 0.4em;
}
</style>
