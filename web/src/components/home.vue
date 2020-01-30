<template>
  <section id="content" class="container">
    <welcome />
    <jinjaForm :rows="30"/>
  </section>
</template>

<script>
import jinjaForm from "./jinja-form/jinja-form.vue";
import welcome from "./welcome.vue";

export default {
  name: "home",
  components: {
    jinjaForm,
    welcome
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
  margin-top: 70px;
}
</style>
