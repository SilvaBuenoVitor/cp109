<template>
  <div>
    <v-app-bar
      app
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-app-bar-nav-icon icon @click="router.push('/')">
        <v-icon>mdi-home</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon icon @click="router.push('/credits')">
        <v-icon>mdi-account</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon icon @click="router.push('/documentation')">
        <v-icon>mdi-card-search</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon icon @click="router.push('/about')">
        <v-icon>mdi-information</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>CP109</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="router.push('/')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="router.push('/credits')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Creditos</v-list-item-title>
          </v-list-item>

          <v-list-item @click="router.push('/documentation')">
            <v-list-item-icon>
              <v-icon>mdi-card-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Documentação</v-list-item-title>
          </v-list-item>

          <v-list-item @click="router.push('/about')">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sobre</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    router() {
      return this.$router;
    },
  },
};
</script>