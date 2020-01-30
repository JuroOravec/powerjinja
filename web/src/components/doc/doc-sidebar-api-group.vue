<template>
  <div class="sidebar-group">
    <a :href="url" class="sidebar-link sidebar-group-title regular block">
      <p>{{apiGroup.subgroup.snakeCase}}</p>
    </a>
    <doc-sidebar-api v-for="(api, index) in apiGroup.api" :api="api" :key="index" />
    <doc-sidebar-api-group v-for="(apiSubgroup, index) in apiGroup.children" :apiGroup="apiSubgroup" :key="index" />
  </div>
</template>

<script>
import docSidebarApi from "./doc-sidebar-api.vue";

export default {
  name: "doc-sidebar-api-group",
  components: {
    docSidebarApi
  },
  props: {
    apiGroup: Object
  },
  data: function() {
    return {
      url: `#${this.apiGroup.module.kebabCase}-${
        this.apiGroup.subpath.kebabCase
      }`
    };
  }
};
</script>

<style scoped>
.sidebar-group {
  display: block;
  padding-left: 1.5em;
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
