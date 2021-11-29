<template>
  <v-app>
    <Appbar/>
    <v-main>
      <v-container fluid>
      <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import TemplateAvaliacao from "./components/TemplateAvaliacao.vue";
import Appbar from "@/components/Appbar"
import store from './store'
export default {
  name: "App",
  store,
  components: {
    Appbar,
  },

  data: () => ({
    //
  }),
};
</script>
