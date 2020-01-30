<template>
  <a :href="url" :class="staticClassNames">
    <p>{{api.name.snakeCase}}</p>
  </a>
</template>

<script>
export default {
  name: "doc-sidebar-api",
  props: {
    api: Object
  },
  data: function() {
    return {
      staticClassNames: "regular block sidebar-link",
      url: `#${this.api.module.kebabCase}${
        this.api.subpath.kebabCase.length > 0
          ? "-" + this.api.subpath.kebabCase
          : ""
      }-${this.api.name.kebabCase}`
    };
  }
};
</script>

<style scoped>
.sidebar-link {
  white-space: nowrap;
  font-size: 15px;
  color: #222;
}
.sidebar-link p {
  margin: 0;
  padding-left: 1em;
  padding-bottom: 0.4em;
}
</style>
