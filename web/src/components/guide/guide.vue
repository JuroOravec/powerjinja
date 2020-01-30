<template>
  <section class="px2">
    <div class="clearfix flex flex-stretch mxn2">
      <!-- <doc-sidebar :doc-data="docData"></doc-sidebar> -->
      <div class="guide-body-wrap">
        <div class="guide-body">
          <div class="guide-body-intro"></div>
          <div class="guide-section">
            <h3 id="what-is-powerjinja" class="guide-section-name">What is PowerJinja?</h3>
            <div class="guide-section-content">
              <p>
                PowerJinja is an in-template data manipulation library for
                Jinja2 templating language.
              </p>
              <p>What does this mean?</p>
              <p>
                In its core, PowerJinja is a library of Jinja macros. To use
                these macros, just use the macros in your template as if they
                were defined, and compile the template with PowerJinja.
                Compiled text then contains all necessary macros and is
                ready to be used in Jinja.
              </p>
              <p>
                This way, PowerJinja expands the data manipulation
                capabilities within Jinja2 templates without the need to add
                extensions.
              </p>
              <p>
                PowerJinja is great for rapid template prototyping in cases
                where the access to the Jinja2 setup is not available or if
                certain functionalities need to be accessed ad-hoc.
              </p>
              <p>
                With PowerJinja you can utilize many functionalities known
                from other languages for manipulation of arrays, objects,
                strings, numbers, etc. In addition, PowerJinja modules may
                provide additional macros like common math functions or
                vendor prefixing for CSS attributes.
              </p>
              <p>
                <router-link :to="'docs'">For full list of available macros, see the documentation.</router-link>
              </p>
            </div>
          </div>
          <div class="guide-section">
            <h3 id="installing-powerjinja" class="guide-section-name">Installing PowerJinja</h3>
            <div class="guide-subsection">
              <h4 id="installing-powerjinja-npm" class="guide-subsection-name">NPM</h4>
              <div class="guide-subsection-content">
                <h5>Install PowerJinja:</h5>
                <pre v-pre><code>npm install powerjinja</code></pre>
                <p>This installs the main package with all modules.</p>
                <br />
                <p>To install only a specific module, use:</p>
                <pre v-pre>
                    <code>npm install powerjinja-*module-name*</code>
                  </pre>
                <br />
                <p>So in case of math module, this would be:</p>
                <pre v-pre><code>npm install powerjinja-math</code></pre>
                <br />
                <p>
                  Individual modules can be used the same way as the main
                  module, but provide only core's and module's own
                  functionalities.
                </p>
                <br />
                <h5>Import PowerJinja into project:</h5>
                <p>Using the import statement.</p>
                <pre v-pre>
                    <code>import { powerjinja } from 'powerjinja';</code>
                  </pre>
                <br />
                <p>Or using the require statement:</p>
                <pre v-pre>
                    <code>const powerjinja = require('powerjinja').powerjinja;</code>
                  </pre>
                <h5>Usage</h5>
                <p>
                  To process a file that contains PowerJinja use
                  <code>powerjinja.compile()</code>.
                </p>
                <p>
                  <code>powerjinja.compile</code> produces Jinja-ready text
                  enriched with the PowerJinja macros.
                </p>
                <pre v-pre>
                    <code>powerjinja.compile(text: string, options: object)</code>
                  </pre>
                <span>
                  Params:
                  <ul>
                    <li>
                      <code>text: string</code> string to be processed.
                    </li>
                    <li>
                      <code>options.minify: boolean</code> whether the
                      inserted Jinja should be minified
                    </li>
                    <li>
                      <code>options.delimeter: string</code> if minify is
                      false, delimeter is the string that is inserted between
                      individual PowerJinja macros
                    </li>
                    <li>
                      <code>options.separator: string</code> string that is
                      inserted between the original text and the text
                      inserted by PowerJinja.
                    </li>
                  </ul>
                </span>
                <pre><code v-text="jinjaExample1"></code></pre>
                <pre><samp v-text="jinjaExample2"></samp></pre>
              </div>
            </div>
          </div>
          <div class="guide-section">
            <h3
              id="using-powerjinja"
              class="guide-section-name"
            >Using PowerJinja inside a Jinja template</h3>
            <div class="guide-subsection">
              <h4
                id="calling-powerjinja-macros"
                class="guide-subsection-name"
              >Calling PowerJinja macros</h4>
              <div class="guide-subsection-content">
                <p>Calling a PowerJinja macro in Jinja is as simple as:</p>
                <pre><code v-text="jinjaExample3"></code></pre>
                <p>
                  However, return value from PowerJinja macro CANNOT be
                  assigned to a variable, because Jinja macros do not allow
                  macros to return data.
                </p>
                <br />
                <p>That means that the following will not work:</p>
                <pre><code v-text="jinjaExample4"></code></pre>
              </div>
            </div>
            <div class="guide-subsection">
              <h4 id="chaining-macros" class="guide-subsection-name">Chaining macros</h4>
              <div class="guide-subsection-content">
                <p>
                  To overcome this limitation, all PowerJinja macros allow
                  you to chain up macros that will transform the data and
                  pass the transformed data down the macro chain.
                </p>
                <p>
                  To chain up a macro, simply add a
                  <code>macros</code>
                  argument with a list of macros that should process the data
                  further.
                </p>
                <p>So to print the result in the template, you could write:</p>
                <pre><code v-text="jinjaExample5"></code></pre>
                <pre><samp>True</samp></pre>
                <p>
                  In the example above, the data will be first passed to
                  <code>powerjinja.array.all</code>. The result will be then
                  passed to the next macro in the
                  <code>macro_chain</code>,
                  which is
                  <code>powerjinja.core.print</code>.
                </p>
                <br />
                <p>
                  You can also easily chain up more macros just by adding
                  macros to the list of macros.
                </p>
                <pre><code v-text="jinjaExample6"></code></pre>
                <pre v-pre><samp>False</samp></pre>
                <p>
                  In this example, the data will be first passed to
                  <code>powerjinja.array.all</code>, then to
                  <code>powerjinja.boolean.not</code>, and finally to
                  <code>powerjinja.core.print</code>.
                </p>
              </div>
            </div>
            <div class="guide-subsection">
              <h4
                id="adding-own-macros-to-macros-chain"
                class="guide-subsection-name"
              >Adding own macros to the macros chain</h4>
              <div class="guide-subsection-content">
                <p>
                  To process the data yourself, you need to define a macro
                  that can be passed to the macro chain. Each such macro must
                  have the following structure:
                </p>
                <pre><code v-text="jinjaExample7"></code></pre>
                <p>Example</p>
                <pre><code v-text="jinjaExample8"></code></pre>
                <pre><samp>Hello Anne</samp></pre>
                <p>
                  In the example above, we've defined a macro
                  <code>hello</code>, which accepts the data, prepends
                  <code>'Hello '</code> to the first argument, and then
                  passes the data down the chain.
                </p>
                <br />
                <p>
                  You can also easily chain up more macros just by adding
                  macros to the list of macros.
                </p>
              </div>
            </div>
            <div class="guide-subsection">
              <h4 id="how-chaining-works" class="guide-subsection-name">How chaining works</h4>
              <div class="guide-subsection-content">
                <p>Each PowerJinja macro implements following structure:</p>
                <pre><code v-text="jinjaExample9"></code></pre>
                <span>
                  where:
                  <ul>
                    <li>
                      <code>arg1</code>,
                      <code>arg2</code>, …
                      <code>argN</code> are arguments that may be processed
                      in the macro.
                    </li>
                    <li>
                      <code>result1</code>,
                      <code>result2</code>, …
                      <code>resultN</code> are return values generated by the
                      macro. If the number of return values is fewer than N,
                      the macros actually still return N values, however, the
                      remaining slots just pass on the arguments (e.g.
                      <code>return3 = arg3</code>,
                      <code>return4 = arg4</code>, ...).
                    </li>
                    <li>
                      <code>macros</code> is the list of macros in the
                      current chain of macros, where
                      <code>macros[index]</code> is the next macro that will
                      be called
                    </li>
                    <li>
                      <code>index</code> is the 0-indexed position of the
                      next macro within the macro chain. Note that this is
                      not the same as the current index within the macros
                      list. To get the current macro from the macro list, use
                      <code>macros[index - 1]</code>. Also note that the very
                      first macro which initiates the chain is not within the
                      <code>macros</code> list and cannot be accessed via the
                      index.
                    </li>
                  </ul>
                </span>
                <p class="warn">
                  NOTE: Current implementation supports N = 5 (This will
                  become configurable in the future)
                </p>
                <p>This setup has several implications:</p>
                <ol>
                  <li>
                    Each macro will accept agruments, process them, and send
                    them down the macro chain via
                    <code>powerjinja.core.handle_queue</code>
                  </li>
                  <li>
                    If you want to make a macro that terminates the chain,
                    simply omit the
                    <code>powerjinja.core.handle_queue</code>
                    call
                  </li>
                  <li>
                    You can pass more arguments to the macro than required,
                    up to total of N. These extra arguments will be passed
                    down the chain. so they will remain there until a macro
                    within the chain will overwrite them with its return
                    values
                  </li>
                  <li>
                    PowerJinja macros know which macro to call next by
                    passing all necessary information (macros chain and the
                    index) through the macros
                  </li>
                </ol>
                <p>
                  The last point allows us to modify the behaviour of the
                  macro chain. Therefore, two types of modifications are
                  possible:
                </p>
              </div>
            </div>
            <div class="guide-subsection">
              <h4 id="modifying-index-value" class="guide-subsection-name">
                Creating loops or skipping chain members by modifying index
                value
              </h4>
              <div class="guide-subsection-content">
                <p>
                  Since the index value in the macro chain is modifiable,
                  this means that you can skip or repeat macros, or create
                  loop within the macros chain simply by changing the index
                  value passed down the macro chain.
                </p>
                <p>Example</p>
                <pre><code v-text="jinjaExample10"></code></pre>
                <pre><samp>0</samp></pre>
                <p>
                  In the example above, data is loaded onto
                  <code>powerjinja.core.hande_queue</code> and then passed
                  through
                  <code>powerjinja.math.add</code>. Then, the macro
                  <code>repeat_upstream_if_negative</code> repeatedly calls
                  upstream macro
                  <code>powerjinja.math.add</code>, until the
                  first argument is positive.
                </p>
                <p>
                  NOTE: Changing index values can be potentially dangerous.
                  Beware of the infinite loop! Always think before changing
                  index values and running Jinja.
                </p>
              </div>
            </div>
            <div class="guide-subsection">
              <h4
                id="modifying-macros-value"
                class="guide-subsection-name"
              >Creating decision trees by modifying macros value</h4>
              <div class="guide-subsection-content">
                <p>
                  Since you can change the macro chain by changing the
                  <code>macros</code> list and resetting the index to 0, you
                  can pass the data through a new set of macros.
                </p>
                <p>
                  This way you can build up a decision tree with each path
                  transforming the data with different macros.
                </p>
                <pre><code v-text="jinjaExample11"></code></pre>
                <pre><samp>['fun', 'fun', 'fun']</samp></pre>
                <p>
                  In the example above, the list of names is passed to the
                  decision tree. There, if the list is empty, the macro chain
                  and index are reset such that next in the chain is
                  <code>powerjinja.boolean.false</code> and nothing would be
                  printed to the template. If the array is not empty, the
                  macro will next call
                  <code>powerjinja.array.fill</code>,
                  which fills the array with value of second argument, and
                  then print out the result.
                </p>
              </div>
            </div>
          </div>
          <div class="guide-section">
            <h3 id="documentation" class="guide-section-name">Documentation</h3>
            <div class="guide-section-content">
              <p>
                <router-link :to="'docs'">Full documentation can be found here</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "guide",
  data: () => ({
    jinjaExample1: `const myJinjaText = '{{ powerjinja.math.cos(0) }}'
const powerjinjized = powerjinja.compile( myJinjaText , {minify: true});
console.log(powerjinjized);`,
    jinjaExample2: `{%macro _handle_queue0(arg1=None,arg2=None,arg3=None,arg4=None,arg5=None,macros=[],index=0)-%}{%if macros|count>0 and macros|count>index-%}{{[macros][0][index](arg1,arg2,arg3,arg4,arg5,macros,index+1)-}}{%endif-%}{%endmacro-%}{%macro _pi0(arg1=None,arg2=None,arg3=None,arg4=None,arg5=None,macros=[],index=0)-%}{%set result=3.141592653589793-%}{{_handle_queue0(result,arg2,arg3,arg4,arg5,macros,index)-}}{%endmacro-%}{%macro _cos0(arg1=None,arg2=None,arg3=None,arg4=None,arg5=None,macros=[],index=0)-%}{%macro _cos_callback(pi=None,_2=None,_3=None,_4=None,_5=None,_6=[],_7=0)-%}{%set val_2pi=arg1 % (pi*2)-%}{%if val_2pi>pi-%}{%set val_pi=(2*pi)-val_2pi-%}{%else-%}{%set val_pi=val_2pi-%}{%endif-%}{%if val_pi>(pi/2)-%}{%set val_pi2=pi-val_pi-%}{%else-%}{%set val_pi2=val_pi-%}{%endif-%}{%set val_pi2_sq=val_pi2*val_pi2-%}{%set result=(val_pi2_sq*-0.000000000011080716368)+0.0000000020858327958707-%}{%set result=(val_pi2_sq*result)-0.0000002755693576863181-%}{%set result=(val_pi2_sq*result)+0.000024801582876042427-%}{%set result=(val_pi2_sq*result)-0.001388888886113613522-%}{%set result=(val_pi2_sq*result)+0.04166666666581174292-%}{%set result=(val_pi2_sq*result)-0.4999999999998996568-%}{%set result=(val_pi2_sq*result)+0.99999999999999806767-%}{%if (val_2pi>pi/2 and val_2pi<(3/2*pi)) or (val_2pi<-pi/2 and val_2pi>(-3/2*pi))-%}{%set result=-1*result-%}{%endif-%}{{_handle_queue0(result,arg2,arg3,arg4,arg5,macros,index)-}}{%endmacro-%}{{_pi0(macros=[_cos_callback])-}}{%endmacro-%}{%set powerjinja={"core":{"handle_queue":_handle_queue0},"math":{"pi":_pi0,"cos":_cos0}}-%}

{{ powerjinja.math.cos(0) }}`,
    jinjaExample3: `{% set arr = [1,2,3] %}
{{ powerjinja.array.all(arr) }}`,
    jinjaExample4: `{% set arr = [1,2,3] %}
{% set result = powerjinja.array.all(arr) %}`,
    jinjaExample5: `{% set arr = [1,2,3] %}
{% set macro_chain = [powerjinja.core.print] %}
{{ powerjinja.array.all(arr, macros=macro_chain) }}`,
    jinjaExample6: `{% set arr = [1,2,3] %}
{% set macro_chain = [powerjinja.boolean.not, powerjinja.core.print] %}
{{ powerjinja.array.all(arr, macros=macro_chain) }}`,
    jinjaExample7: `{% macro example(arg1, arg2, ..., argN, macros=[], index=0) %}
  // do something
  {{- powerjinja.core.handle_queue(arg1, arg2, ..., argN, macros=macros, index=index) -}}
{% endmacro %}`,
    jinjaExample8: `{% macro hello(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) %}
    {% set hello = 'Hello ' ~ arg1 %}
    {{- powerjinja.core.handle_queue(hello, arg2, arg3, arg4, arg5, macros=macros, index=index) -}}
{% endmacro %}

{% set macro_chain = [powerjinja.array.first, hello, powerjinja.core.print] %}
{{ powerjinja.string.split('Anne_Bob_Cynth', '_', macros= macro_chain) }}`,
    jinjaExample9: `{% macro macro_name(arg1=None, arg2=None, ..., argN=None, macros=[], index=0) %}
  // do something
  // e.g. assign value to return1 and return2
  {{- powerjinja.core.handle_queue(result1, result2, ..., resultN, macros=macros, index=index) -}}
{% endmacro %}`,
    jinjaExample10: `{%- macro repeat_upstream_if_negative(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) %}
  {%- if arg1 < 0 %}
    {%- set new_index = index - 2 %}
  {%- else -%}
    {% set new_index = index %}
  {%- endif %}
  {{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros=macros, index=new_index) -}}
{% endmacro %}
{% set macro_chain = [powerjinja.math.add, repeat_upstream_if_negative, powerjinja.core.print1] %}
{{ powerjinja.core.handle_queue(-3, 1, macros=macro_chain) }}`,
    jinjaExample11: `{%- macro decision_tree(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) %}
  {%- if arg1 | count %}
    {%- set new_macro_chain = [powerjinja.array.fill, powerjinja.core.print1 ] %}
    {%- set new_index = 0 -%}
  {%- else -%}
    {%- set new_macro_chain =[powerjinja.boolean.false] %}
    {%- set new_index = 0 %}
  {%- endif %}
  {{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros=new_macro_chain, index=new_index) -}}
{%- endmacro %}
{%- set macro_chain = [decision_tree] %}
{{ decision_tree(['Anne', 'Bob', 'Cynth'], 'fun', macros= macro_chain) }}
{{ decision_tree([], 'fun', macros= macro_chain) }}`
  }),
  methods: {
    printJinja: text => text
  }
};
</script>


<style scoped>
/*

    Basscss v5.2.0
    Low-level CSS toolkit
    http://basscss.com

*/

body,
button {
  margin: 0;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}

img {
  max-width: 100%;
}
svg {
  max-height: 100%;
}
/* Basscss Base Forms */

input,
select,
textarea,
fieldset {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="datetime"],
input[type="datetime-local"],
input[type="email"],
input[type="month"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
input[type="week"] {
  box-sizing: border-box;
  height: 2.25rem;
  padding: 0.5rem 0.5rem;
  vertical-align: middle;
  -webkit-appearance: none;
}

select {
  box-sizing: border-box;
  line-height: 1.75;
  padding: 0.5rem 0.5rem;
}

select:not([multiple]) {
  height: 2.25rem;
  vertical-align: middle;
}

textarea {
  box-sizing: border-box;
  line-height: 1.75;
  padding: 0.5rem 0.5rem;
}

.fieldset-reset {
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  border: 0;
}
.fieldset-reset legend {
  padding: 0;
}
/* Basscss Base Buttons */

button,
.button {
  font-size: inherit;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  line-height: 1.125rem;
  padding: 0.4rem 0.6rem;
  margin: 0;
  height: auto;
  border: 1px solid transparent;
  vertical-align: middle;
  -webkit-appearance: none;
}

::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.button:hover {
  text-decoration: none;
}
/* Basscss Base Tables */

table {
  border-collapse: separate;
  border-spacing: 0;
  max-width: 100%;
  width: 100%;
}

th {
  text-align: left;
  font-weight: bold;
}

th,
td {
  padding: 0.25rem 1rem;
  line-height: inherit;
}

th {
  vertical-align: bottom;
}
td {
  vertical-align: top;
}
/* Basscss Base Typography */

body {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  line-height: 1.5;
  font-size: 100%;
}

h1,
h3,
h3,
h4,
h5,
h6 {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-weight: bold;
  line-height: 1.25;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

p,
dl,
ol,
ul {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

ol,
ul {
  padding-left: 2rem;
}

pre,
code,
samp {
  font-family: Consolas, "Source Code Pro", monospace;
  font-size: inherit;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow-x: scroll;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.03125);
}

hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

blockquote {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 0;
  padding-left: 1rem;
  padding-right: 1rem;
}
blockquote,
blockquote p {
  font-size: 1.25rem;
  font-style: italic;
}

.list-reset {
  list-style: none;
  padding-left: 0;
}

/* Basscss Utility Layout */

.inline {
  display: inline;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}

.overflow-hidden {
  overflow: hidden;
}
.overflow-scroll {
  overflow: scroll;
}
.overflow-auto {
  overflow: auto;
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}

.left {
  float: left;
}
.right {
  float: right;
}

.fit {
  max-width: 100%;
}

.half-width {
  width: 50%;
}
.full-width {
  width: 100%;
}
/* Basscss Utility Typography */

.bold {
  font-weight: bold;
}
.regular {
  font-weight: normal;
}
.italic {
  font-style: italic;
}
.caps {
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.left-align {
  text-align: left;
}
.center {
  text-align: center;
}
.right-align {
  text-align: right;
}
.justify {
  text-align: justify;
}

.nowrap {
  white-space: nowrap;
}
/* Basscss Utility White Space */

.m0 {
  margin: 0;
}
.mt0 {
  margin-top: 0;
}
.mr0 {
  margin-right: 0;
}
.mb0 {
  margin-bottom: 0;
}
.ml0 {
  margin-left: 0;
}

.m1 {
  margin: 0.5rem;
}
.mt1 {
  margin-top: 0.5rem;
}
.mr1 {
  margin-right: 0.5rem;
}
.mb1 {
  margin-bottom: 0.5rem;
}
.ml1 {
  margin-left: 0.5rem;
}

.m2 {
  margin: 1rem;
}
.mt2 {
  margin-top: 1rem;
}
.mr2 {
  margin-right: 1rem;
}
.mb2 {
  margin-bottom: 1rem;
}
.ml2 {
  margin-left: 1rem;
}

.m3 {
  margin: 2rem;
}
.mt3 {
  margin-top: 2rem;
}
.mr3 {
  margin-right: 2rem;
}
.mb3 {
  margin-bottom: 2rem;
}
.ml3 {
  margin-left: 2rem;
}

.m4 {
  margin: 4rem;
}
.mt4 {
  margin-top: 4rem;
}
.mr4 {
  margin-right: 4rem;
}
.mb4 {
  margin-bottom: 4rem;
}
.ml4 {
  margin-left: 4rem;
}

.mxn1 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
.mxn2 {
  margin-left: -1rem;
  margin-right: -1rem;
}
.mxn3 {
  margin-left: -2rem;
  margin-right: -2rem;
}
.mxn4 {
  margin-left: -4rem;
  margin-right: -4rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.p1 {
  padding: 0.5rem;
}
.py1 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px1 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.p2 {
  padding: 1rem;
}
.py2 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px2 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.p3 {
  padding: 2rem;
}
.py3 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.px3 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.p4 {
  padding: 4rem;
}
.py4 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.px4 {
  padding-left: 4rem;
  padding-right: 4rem;
}
/* Basscss Utility Responsive States */

.sm-show,
.md-show,
.lg-show {
  display: none !important;
}

@media (min-width: 40em) {
  .sm-show {
    display: block !important;
  }
}

@media (min-width: 52em) {
  .md-show {
    display: block !important;
  }
}

@media (min-width: 64em) {
  .lg-show {
    display: block !important;
  }
}

@media (min-width: 40em) {
  .sm-hide {
    display: none !important;
  }
}

@media (min-width: 52em) {
  .md-hide {
    display: none !important;
  }
}

@media (min-width: 64em) {
  .lg-hide {
    display: none !important;
  }
}

.display-none {
  display: none !important;
}

.hide {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
/* Basscss Positions */

.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
}

.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.bottom-0 {
  bottom: 0;
}
.left-0 {
  left: 0;
}

.z1 {
  z-index: 1;
}
.z2 {
  z-index: 2;
}
.z3 {
  z-index: 3;
}
.z4 {
  z-index: 4;
}

.absolute-center {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: table;
}
/* Basscss UI Utility Button Sizes */

.button-small {
  padding: 0.25rem 0.5rem;
}

.button-big {
  padding: 1rem 1.25rem;
}

.button-narrow {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* Basscss Grid */

.container {
  max-width: 64em;
  margin-left: auto;
  margin-right: auto;
}
.col {
  float: left;
  box-sizing: border-box;
}

.col-right {
  float: right;
  box-sizing: border-box;
}

.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

.col-3 {
  width: 25%;
}

.col-4 {
  width: 33.33333%;
}

.col-5 {
  width: 41.66667%;
}

.col-6 {
  width: 50%;
}

.col-7 {
  width: 58.33333%;
}

.col-8 {
  width: 66.66667%;
}

.col-9 {
  width: 75%;
}

.col-10 {
  width: 83.33333%;
}

.col-11 {
  width: 91.66667%;
}

.col-12 {
  width: 100%;
}
@media (min-width: 40em) {
  .sm-col {
    float: left;
    box-sizing: border-box;
  }

  .sm-col-right {
    float: right;
    box-sizing: border-box;
  }

  .sm-col-1 {
    width: 8.33333%;
  }

  .sm-col-2 {
    width: 16.66667%;
  }

  .sm-col-3 {
    width: 25%;
  }

  .sm-col-4 {
    width: 33.33333%;
  }

  .sm-col-5 {
    width: 41.66667%;
  }

  .sm-col-6 {
    width: 50%;
  }

  .sm-col-7 {
    width: 58.33333%;
  }

  .sm-col-8 {
    width: 66.66667%;
  }

  .sm-col-9 {
    width: 75%;
  }

  .sm-col-10 {
    width: 83.33333%;
  }

  .sm-col-11 {
    width: 91.66667%;
  }

  .sm-col-12 {
    width: 100%;
  }
}
@media (min-width: 52em) {
  .md-col {
    float: left;
    box-sizing: border-box;
  }

  .md-col-right {
    float: right;
    box-sizing: border-box;
  }

  .md-col-1 {
    width: 8.33333%;
  }

  .md-col-2 {
    width: 16.66667%;
  }

  .md-col-3 {
    width: 25%;
  }

  .md-col-4 {
    width: 33.33333%;
  }

  .md-col-5 {
    width: 41.66667%;
  }

  .md-col-6 {
    width: 50%;
  }

  .md-col-7 {
    width: 58.33333%;
  }

  .md-col-8 {
    width: 66.66667%;
  }

  .md-col-9 {
    width: 75%;
  }

  .md-col-10 {
    width: 83.33333%;
  }

  .md-col-11 {
    width: 91.66667%;
  }

  .md-col-12 {
    width: 100%;
  }
}
@media (min-width: 64em) {
  .lg-col {
    float: left;
    box-sizing: border-box;
  }

  .lg-col-right {
    float: right;
    box-sizing: border-box;
  }

  .lg-col-1 {
    width: 8.33333%;
  }

  .lg-col-2 {
    width: 16.66667%;
  }

  .lg-col-3 {
    width: 25%;
  }

  .lg-col-4 {
    width: 33.33333%;
  }

  .lg-col-5 {
    width: 41.66667%;
  }

  .lg-col-6 {
    width: 50%;
  }

  .lg-col-7 {
    width: 58.33333%;
  }

  .lg-col-8 {
    width: 66.66667%;
  }

  .lg-col-9 {
    width: 75%;
  }

  .lg-col-10 {
    width: 83.33333%;
  }

  .lg-col-11 {
    width: 91.66667%;
  }

  .lg-col-12 {
    width: 100%;
  }
}
/*
 * Basscss Flex Object
 */

.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.flex-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.flex-wrap {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.flex-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.flex-baseline {
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
}
.flex-stretch {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.flex-start {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.flex-end {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.flex-first {
  -webkit-box-ordinal-group: 0;
  -webkit-order: -1;
  -ms-flex-order: -1;
  order: -1;
}
.flex-last {
  -webkit-box-ordinal-group: 1025;
  -webkit-order: 1024;
  -ms-flex-order: 1024;
  order: 1024;
}

.flex-auto {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
.flex-grow {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}
.flex-none {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
}

.flex > div {
  box-sizing: border-box;
}
@media (min-width: 40em) {
  .sm-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .sm-flex > div {
    box-sizing: border-box;
  }
}
@media (min-width: 52em) {
  .md-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .md-flex > div {
    box-sizing: border-box;
  }
}
@media (min-width: 64em) {
  .lg-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .lg-flex > div {
    box-sizing: border-box;
  }
} /* New */

/* Basscss Color Base */

/*

   COLOR VARIABLES

   - Cool
   - Warm
   - Gray Scale

*/

:root {
  /* Cool */

  /* Warm */

  /* Gray scale */
}

body {
  color: #222;
  background-color: white;
}

a {
  color: #0074d9;
  color: #0074d9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

hr {
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.125);
}

.button {
  color: white;
  background-color: #0074d9;
  background-color: #0074d9;
  border-radius: 3px;
  /*
  -webkit-transition-duration: .05s;
          transition-duration: .05s;
  -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
  -webkit-transition-property: box-shadow, background-color;
          transition-property: box-shadow, background-color;
          */
}

.button:hover {
  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, 0.0625);
}

.button:focus {
  outline: none;
  border-color: rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25);
}

.button:active,
.button.is-active {
  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, 0.125),
    inset 0 3px 4px 0 rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.125);
}

.button:disabled,
.button.is-disabled {
  opacity: 0.5;
}
/* Basscss Color Forms */

/*

   COLOR VARIABLES

   - Cool
   - Warm
   - Gray Scale

*/

:root {
  /* Cool */

  /* Warm */

  /* Gray scale */
}

.field-light {
  background-color: white;
  -webkit-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.125);
  border-radius: 3px;
}

.field-light:focus {
  outline: none;
  border-color: #0074d9;
  box-shadow: 0 0 2px rgba(0, 116, 217, 0.5);
}

.field-light:disabled {
  color: #aaa;
  background-color: rgba(0, 0, 0, 0.125);
}

.field-light:read-only:not(select) {
  background-color: rgba(0, 0, 0, 0.125);
}

.field-light:invalid {
  border-color: #ff4136;
}

.field-light.is-success {
  border-color: #2ecc40;
}

.field-light.is-warning {
  border-color: #ffdc00;
}

.field-light.is-error {
  border-color: #ff4136;
}

.radio-light,
.checkbox-light {
  -webkit-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
}

.radio-light {
  border-radius: 50%;
}

.radio-light:focus,
.checkbox-light:focus {
  outline: none;
  box-shadow: 0 0 2px rgba(0, 116, 217, 0.5);
}
/* Basscss Color Forms Dark */

/*

   COLOR VARIABLES

   - Cool
   - Warm
   - Gray Scale

*/

:root {
  /* Cool */

  /* Warm */

  /* Gray scale */
}

.field-dark {
  color: white;
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.0625);
  border-radius: 3px;
  border-radius: 3px;
}

.field-dark::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.75);
}

.field-dark::-moz-placeholder {
  color: rgba(255, 255, 255, 0.75);
}

.field-dark:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.75);
}

.field-dark::placeholder {
  color: rgba(255, 255, 255, 0.75);
}

.field-dark:focus {
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.field-dark:read-only:not(select) {
  background-color: rgba(255, 255, 255, 0.25);
}

.field-dark:invalid {
  border-color: #ff4136;
}

.field-dark.is-success {
  border-color: #2ecc40;
}

.field-dark.is-warning {
  border-color: #ffdc00;
}

.field-dark.is-error {
  border-color: #ff4136;
}
/* Basscss Input Range */

input[type="range"] {
  vertical-align: middle;
  background-color: transparent;
}

.range-light {
  color: inherit;
  -webkit-appearance: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.range-light::-webkit-slider-thumb {
  -webkit-appearance: none;
  position: relative;
  width: 0.5rem;
  height: 1.25rem;
  border-radius: 3px;
  background-color: currentcolor;
  cursor: pointer;
  margin-top: -0.5rem;
}

/* Touch screen friendly pseudo element */
.range-light::-webkit-slider-thumb:before {
  content: "";
  display: block;
  position: absolute;
  top: -0.5rem;
  left: -0.875rem;
  width: 2.25rem;
  height: 2.25rem;
  opacity: 0;
}

.range-light::-moz-range-thumb {
  width: 0.5rem;
  height: 1.25rem;
  border-radius: 3px;
  border-color: transparent;
  border-width: 0;
  background-color: currentcolor;
  cursor: pointer;
}

.range-light::-webkit-slider-runnable-track {
  height: 0.25rem;
  cursor: pointer;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.25);
}

.range-light::-moz-range-track {
  height: 0.25rem;
  cursor: pointer;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.25);
}

.range-light:focus {
  outline: none;
}

.range-light:focus::-webkit-slider-thumb {
  outline: none;
  border: 0;
  box-shadow: 0 0 1px 2px currentcolor;
}

.range-light:focus::-moz-range-thumb {
  outline: none;
  border: 0;
  box-shadow: 0 0 1px 2px currentcolor;
}
/* Basscss Progress */

.progress {
  display: block;
  width: 100%;
  height: 0.5625rem;
  margin: 0.5rem 0;
  background-color: rgba(0, 0, 0, 0.125);
  border: 0;
  border-radius: 10000px;
  overflow: hidden;
  -webkit-appearance: none;
  cursor: pointer;
}

.progress::-webkit-progress-bar {
  -webkit-appearance: none;
  background-color: rgba(0, 0, 0, 0.125);
}

.progress::-webkit-progress-value {
  -webkit-appearance: none;
  background-color: currentColor;
}

.progress::-moz-progress-bar {
  background-color: currentColor;
}
/* Basscss Color Tables */

.table-light th,
.table-light td {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.125);
}

.table-light tr:last-child td {
  border-bottom: 0;
}

/* Basscss Button Outline */

.button-outline {
  position: relative;
  z-index: 2;
  color: inherit;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid currentcolor;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-transition-property: box-shadow, background-color;
  transition-property: box-shadow, background-color;
}

.button-outline:before {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  border: 1px solid transparent;
  background-color: currentcolor;
  border-radius: 3px;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  opacity: 0;
}

.button-outline:hover {
  box-shadow: none;
}

.button-outline:hover:before {
  opacity: 0.125;
}

.button-outline:focus {
  outline: none;
  border: 1px solid currentcolor;
  box-shadow: 0 0 3px 1px;
}

.button-outline:active,
.button-outline.is-active {
  box-shadow: inset 0 1px 5px 0, 0 0 1px;
}

.button-outline:disabled,
.button-outline.is-disabled {
  opacity: 0.5;
} /* New */
/* Basscss Button Transparent */

.button-transparent {
  position: relative;
  z-index: 2;
  color: inherit;
  background-color: transparent;
  border-radius: 0;
  border: 1px solid transparent;
  /*
  -webkit-transition-duration: .1s;
          transition-duration: .1s;
  -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
  -webkit-transition-property: box-shadow;
          transition-property: box-shadow;
          */
}

.button-transparent:before {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  border: 1px solid transparent;
  background-color: currentcolor;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  opacity: 0;
}

.button-transparent:hover {
  box-shadow: none;
}

.button-transparent:hover:before {
  opacity: 0.0625;
  opacity: 0.09375;
}

.button-transparent:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 3px;
}

.button-transparent:active:before,
.button-transparent.is-active:before {
  opacity: 0.0625;
}

.button-transparent:disabled,
.button-transparent.is-disabled {
  opacity: 0.5;
} /* New */
/* Basscss Background Images */

.bg-cover {
  background-size: cover;
}
.bg-contain {
  background-size: contain;
}

.bg-center {
  background-position: center;
}
.bg-top {
  background-position: top;
}
.bg-right {
  background-position: right;
}
.bg-bottom {
  background-position: bottom;
}
.bg-left {
  background-position: left;
} /* New */
/* Basscss Color Borders */

.border {
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.125);
}

.border-top {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.125);
}

.border-right {
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.125);
}

.border-bottom {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.125);
}

.border-left {
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.125);
}

.rounded {
  border-radius: 3px;
}
.circle {
  border-radius: 50%;
}

.rounded-top {
  border-radius: 3px 3px 0 0;
}
.rounded-right {
  border-radius: 0 3px 3px 0;
}
.rounded-bottom {
  border-radius: 0 0 3px 3px;
}
.rounded-left {
  border-radius: 3px 0 0 3px;
}

.not-rounded {
  border-radius: 0;
}

/* Basscss Colors */

/* Color */

.black,
.dark-gray {
  color: #222;
}
.gray,
.mid-gray {
  color: #aaa;
}
.silver,
.light-gray {
  color: #ddd;
}
.white {
  color: #fff;
}

.aqua {
  color: #7fdbff;
}
.blue {
  color: #0074d9;
}
.navy {
  color: #001f3f;
}
.teal {
  color: #39cccc;
}
.green {
  color: #2ecc40;
}
.olive {
  color: #3d9970;
}
.lime {
  color: #01ff70;
}

.yellow {
  color: #ffdc00;
}
.orange {
  color: #ff851b;
}
.red {
  color: #ff4136;
}
.fuchsia {
  color: #f012be;
}
.purple {
  color: #b10dc9;
}
.maroon {
  color: #85144b;
}

/* Background Color */

.bg-black,
.bg-dark-gray {
  background-color: #222;
}
.bg-gray,
.bg-mid-gray {
  background-color: #aaa;
}
.bg-silver,
.bg-light-gray {
  background-color: #ddd;
}
.bg-white {
  background-color: #fff;
}

.bg-aqua {
  background-color: #7fdbff;
}
.bg-blue {
  background-color: #0074d9;
}
.bg-navy {
  background-color: #001f3f;
}
.bg-teal {
  background-color: #39cccc;
}
.bg-green {
  background-color: #2ecc40;
}
.bg-olive {
  background-color: #3d9970;
}
.bg-lime {
  background-color: #01ff70;
}

.bg-yellow {
  background-color: #ffdc00;
}
.bg-orange {
  background-color: #ff851b;
}
.bg-red {
  background-color: #ff4136;
}
.bg-fuchsia {
  background-color: #f012be;
}
.bg-purple {
  background-color: #b10dc9;
}
.bg-maroon {
  background-color: #85144b;
}

.bg-darken-0 {
  background-color: rgba(0, 0, 0, 0.03125);
}
.bg-darken-1 {
  background-color: rgba(0, 0, 0, 0.0625);
}
.bg-darken-2 {
  background-color: rgba(0, 0, 0, 0.125);
}
.bg-darken-3 {
  background-color: rgba(0, 0, 0, 0.25);
}
.bg-darken-4 {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Border Color */

.border-aqua {
  border-color: #7fdbff;
}
.border-blue {
  border-color: #0074d9;
}
.border-navy {
  border-color: #001f3f;
}
.border-teal {
  border-color: #39cccc;
}
.border-green {
  border-color: #2ecc40;
}
.border-olive {
  border-color: #3d9970;
}
.border-lime {
  border-color: #01ff70;
}

.border-yellow {
  border-color: #ffdc00;
}
.border-orange {
  border-color: #ff851b;
}
.border-red {
  border-color: #ff4136;
}
.border-fuchsia {
  border-color: #f012be;
}
.border-purple {
  border-color: #b10dc9;
}
.border-maroon {
  border-color: #85144b;
}

.border-black {
  border-color: #222;
}
.border-gray {
  border-color: #aaa;
}
.border-silver {
  border-color: #ddd;
}
.border-white {
  border-color: #fff;
}

.border-darken-1 {
  border-color: rgba(0, 0, 0, 0.0625);
}
.border-darken-2 {
  border-color: rgba(0, 0, 0, 0.125);
}
.border-darken-3 {
  border-color: rgba(0, 0, 0, 0.25);
}
.border-darken-4 {
  border-color: rgba(0, 0, 0, 0.5);
}

/* Opacity */
.muted {
  opacity: 0.5;
}

/* Variables */
/* Basscss Defaults */

:root {
  /* Legacy support */
}

.documentation a {
  color: #416381;
}

.container-small {
  max-width: 58rem;
  margin-left: auto;
  margin-right: auto;
}

.font-smaller {
  font-size: 80%;
}

.fade {
  opacity: 0.5;
}

.button-indent {
  padding: 0.25rem 1.5rem;
  font-size: 90%;
}

.section-indent {
  border-left: 2px solid #eee;
}

.bg-cloudy {
  background: rgba(230, 235, 237, 1);
}

.bg-cloudy-light {
  background: rgba(230, 235, 237, 0.5);
}

.keyline-top {
  border-top: 5px solid #eee;
}

.keyline-top:first-child {
  border-top: 0;
}

.force-inline * {
  display: inline;
}

section:target {
  background: #fcfbf2;
}

.documentation-sidebar a:active {
  background: #fcfbf2;
}
/*

github.com style (c) Vasily Polovnyov <vast@whiteants.net>

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #333;
  background: #f8f8f8;
  -webkit-text-size-adjust: none;
}

.hljs-comment,
.diff .hljs-header,
.hljs-javadoc {
  color: #998;
  font-style: italic;
}

.hljs-keyword,
.css .rule .hljs-keyword,
.hljs-winutils,
.nginx .hljs-title,
.hljs-subst,
.hljs-request,
.hljs-status {
  color: #333;
  font-weight: bold;
}

.hljs-number,
.hljs-hexcolor,
.ruby .hljs-constant {
  color: #008080;
}

.hljs-string,
.hljs-tag .hljs-value,
.hljs-phpdoc,
.hljs-dartdoc,
.tex .hljs-formula {
  color: #d14;
}

.hljs-title,
.hljs-id,
.scss .hljs-preprocessor {
  color: #900;
  font-weight: bold;
}

.hljs-list .hljs-keyword,
.hljs-subst {
  font-weight: normal;
}

.hljs-class .hljs-title,
.hljs-type,
.vhdl .hljs-literal,
.tex .hljs-command {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-tag .hljs-title,
.hljs-rules .hljs-property,
.django .hljs-tag .hljs-keyword {
  color: #000080;
  font-weight: normal;
}

.hljs-attribute,
.hljs-variable,
.lisp .hljs-body {
  color: #008080;
}

.hljs-regexp {
  color: #009926;
}

.hljs-symbol,
.ruby .hljs-symbol .hljs-string,
.lisp .hljs-keyword,
.clojure .hljs-keyword,
.scheme .hljs-keyword,
.tex .hljs-special,
.hljs-prompt {
  color: #990073;
}

.hljs-built_in {
  color: #0086b3;
}

.hljs-preprocessor,
.hljs-pragma,
.hljs-pi,
.hljs-doctype,
.hljs-shebang,
.hljs-cdata {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.diff .hljs-change {
  background: #0086b3;
}

.hljs-chunk {
  color: #aaa;
}

.guide-body-wrap {
  position: fixed;
  overflow: auto;
  width: 100%;
  top: 55px;
  bottom: 0px;
  /* left: 350px; */
  right: 0;
}
.guide-body {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5em;
  text-align: left;
}
.guide-body-intro {
  padding-bottom: 50px;
}

pre {
  overflow: scroll;
}
pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
  overflow: scroll;
  font-size: 14px;
}
pre samp {
  overflow: scroll;
  font-size: 14px;
  display: block;
}
.guide-section {
  padding-top: 0.4em;
}
.guide-section-name {
}
.guide-section-content {
  font-size: 16px;
  padding-left: 2em;
}
.guide-subsection {
  padding-bottom: 0.5em;
  padding-left: 2em;
}
.guide-subsection-name {
  word-break: break-all;
  padding-top: 0.4em;
}
.guide-subsection-content {
  font-size: 16px;
}
.warn {
  background-color: #fff78b;
  padding: 1em;
  border-radius: 0.3em;
}

@media (min-width: 900px) {
}
</style>
