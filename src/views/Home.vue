<template>
  <v-container fill-height>
    <v-row class="text-center">
      <h1>{{ titleview }}</h1>
    </v-row>
    <v-row class="text-center">
      <h2>{{ numberOfCards }} restaurantes listados</h2>
      <v-app-bar-nav-icon icon @click="store.commit('changeOrder')">
        <v-icon>mdi-shuffle</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon icon @click="store.dispatch('getWords')">
        <v-icon>mdi-plus</v-icon>
      </v-app-bar-nav-icon>
    </v-row>
    <v-content fill-height>
      <v-row class="text-center">
        <v-row>
          <v-col v-for="(n, i) in myCards" :key="i" cols="12" sm="4">
            <Card :id="i" :name="n" />
          </v-col>
        </v-row>
      </v-row>
    </v-content>
  </v-container>
</template>
<script>
import Card from "@/components/Card";
export default {
  name: "Home",
  data() {
    return {
      titleview: this.$store.state.title,
      store: this.$store,
    };
  },
  beforeCreate() {
    this.$store.dispatch("getWords");
  },
  computed: {
    myCards() {
      return this.$store.state.cards;
    },
    numberOfCards() {
      return this.$store.getters.numberOfCards;
    },
    createCards() {
      return this.$store.dispatch("getWords");
    },
  },
  mutations: {
    changeOrder() {
      this.$store.commit("changeOrder");
    },
  },
  components: {
    Card,
  },
};
</script>