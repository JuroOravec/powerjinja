<template>
  <div class="doc-body-api">
    <h4 :id="id" class="doc-body-api-name">{{api.name.snakeCase}}</h4>
    <h5 class="pad-b-05">
      <code>{{ getFunctionSigniture() }}</code>
    </h5>
    <div class="pad-b-05 desc" v-for="(desc, index) in api.desc" :key="'desc-' + index">
      <p>{{desc.desc}}</p>
    </div>
    <div v-if="api.param" class="pad-b-05 params">
      <h5 class="params-title">Params</h5>
      <b-table striped hover :items="api.param"></b-table>
    </div>
    <div v-if="api.returns" class="pad-b-05">
      <h5 class="returns-title">Returns</h5>
      <b-table striped hover :items="api.returns"></b-table>
    </div>
    <h5 v-if="api.example" class="pad-b-05">Examples</h5>
    <div class="example" v-for="(example, index) in api.example" :key="'example-' + index">
      <h6>Example {{index + 1}}</h6>
      <pre>
        <code>{{example.desc}}</code>
      </pre>
    </div>
    <hr />
  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";

export default {
  name: "doc-body-api",
  components: {
    BTable
  },
  props: {
    api: Object
  },
  data: function() {
    return {
      id:
        this.api.module.kebabCase +
        (this.api.subpath.kebabCase.length > 0
          ? "-" + this.api.subpath.kebabCase
          : "") +
        "-" +
        this.api.name.kebabCase,
      getFunctionSigniture: () => {
        const functionPath =
          "powerjinja." +
          this.api.module.snakeCase +
          (this.api.subpath.snakeCase.length > 0
            ? "." + this.api.subpath.dotCase.replace(/-/g, "_")
            : "") +
          "." +
          this.api.name.snakeCase;
        const functionParams = this.api.param
          ? this.api.param
              .map(param => {
                return param.name + ": " + param.type;
              })
              .join(", ")
          : "";

        const returns = this.api.returns
          ? this.api.returns
              .map(ret => {
                return ret.type;
              })
              .join(", ")
          : "";

        return functionPath + "(" + functionParams + "): " + returns;
      }
    };
  }
};
</script>


<style scoped>
pre {
  overflow: scroll;
}
pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
  overflow: scroll;
}
.doc-body-api {
  padding-left: 2em;
}
.desc {
  font-size: 16px;
}
.pad-b-05 {
  padding-bottom: 0.5em;
}
.doc-body-api-name {
  word-break: break-all;
  padding-top: 0.4em;
}
</style>
