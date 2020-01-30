<template>
  <b-form @submit="onSubmit" :id="'jinja-form'" :novalidate="true">
    <div class="flex-container">
      <b-form-textarea
        :rows="getRows"
        :name="'jinja-input'"
        v-model="inputValue"
        :placeholder="getInputPlaceholder"
        :class="'form-control'"
      />
      <b-form-textarea
        :rows="getRows"
        :name="'jinja-output'"
        v-model="outputValue"
        :placeholder="getOutputPlaceholder"
        :class="'form-control'"
        :disabled="true"
        :no-resize="true"
      />
    </div>
    <div class="flex-container options-container">
      <div class="options">
        <label class="checkbox">
          <b-form-checkbox :name="'jinja-minify'" v-model="minifyValue" />
          <span>{{ label }}</span>
        </label>
        <b-form-group label="Append command:">
          <b-form-radio-group
            id="append-command-options"
            name="jinja-append-command"
            v-model="selected"
            :options="appendOptions"
            @change="onAppendCommandChange"
          ></b-form-radio-group>
        </b-form-group>
      </div>
      <div>
        <b-button :type="'submit'" :name="'jinja-submit'" variant="primary btn-lg">{{ buttonText }}</b-button>
      </div>
      <div></div>
    </div>
  </b-form>
</template>

<script>
import { initPowerjinja } from "./lib/powerjinja.js";

import {
  BButton,
  BForm,
  BFormCheckbox,
  BFormRadioGroup,
  BFormGroup,
  BFormTextarea
} from "bootstrap-vue";

export default {
  name: "jinjaForm",
  components: {
    BButton,
    BForm,
    BFormCheckbox,
    BFormRadioGroup,
    BFormGroup,
    BFormTextarea
  },
  props: {
    rows: Number,
    inputPlaceholder: String,
    outputPlaceholder: String,
    checkboxLabel: String
  },
  data: function() {
    return {
      powerjinja: initPowerjinja(),
      powerjinjaConfig: {},
      inputValue: "",
      outputValue: "",
      minifyValue: false,
      defaultInputPlaceholder:
        "Place your Jinja with PowerJinja macros here...\n\nWhy won't you try something like:\n\n{{ powerjinja.math.cos(1.5) }}",
      defaultOutputPlaceholder:
        "Compiled PowerJinja will be rendered here...\n\nReady to be pasted into a Jinja template!",
      label: "Minify output",
      buttonText: "Powerjinjize!",
      selected: "with-do",
      appendOptions: [
        {
          text: "<code>do <i>list</i>.append(<i>item</i>)</code>",
          value: "with-do"
        },
        {
          text: "<code>append <i>item</i> to <i>list</i></code>",
          value: "with-append"
        }
      ]
    };
  },
  computed: {
    getInputPlaceholder: function() {
      return this.inputPlaceholder || this.defaultInputPlaceholder;
    },
    getOutputPlaceholder: function() {
      return this.outputPlaceholder || this.defaultOutputPlaceholder;
    },
    getRows: function() {
      return this.rows || 1;
    }
  },
  methods: {
    onAppendCommandChange: function(val) {
      if (!this.powerjinjaConfig.command) {
        this.powerjinjaConfig.command = {};
      }
      if (val === "with-append") {
        this.powerjinjaConfig.command.append = (list, item) =>
          `append ${item} to ${list}`;
      } else if (val === "with-do") {
        this.powerjinjaConfig.command.append = (list, item) =>
          `do ${list}.append(${item})`;
      }
      this.updatePowerjinja();
    },
    onSubmit: function(event) {
      event.preventDefault();
      this.outputValue = this.powerjinja.compile(this.inputValue, {
        minify: this.minifyValue
      });
    },
    updatePowerjinja: function() {
      this.powerjinja = initPowerjinja(this.powerjinjaConfig);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* CSS declarations go here */

form {
  margin-top: 10px;
  margin-bottom: -10px;
  position: relative;
}

textarea {
  display: inline-block;
  font-family: monospace;
  margin: 0 0.25em;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-container > * {
  flex: 1 0 400px;
}
.options-container {
  margin: 1em;
}
.options {
  text-align: left;
}
.custom-checkbox {
  margin: 0;
  padding-top: 0.5em;
}
</style>
