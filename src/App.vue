<template>
  <v-app>
    <template-avaliacao />
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import TemplateAvaliacao from "./components/TemplateAvaliacao.vue";

export default {
  name: "App",

  components: {
    TemplateAvaliacao,
  },

  data: () => ({
    //
  }),
};
</script>
