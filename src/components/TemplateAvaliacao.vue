<template>
  <v-container fill-height>
    <!-- <v-system-bar app>
      <v-row class="text-center" align="center" justify="center">
        <v-col cols="12"> {{ navegacaoSuperior[0].text }} </v-col>
      </v-row>
    </v-system-bar> -->
    <!-- <v-app-bar app clipped-left>
      <v-row class="text-center">
        <v-col cols="12"> {{ navegacaoSuperior[1].text }} </v-col>
      </v-row>
    </v-app-bar> -->
    <!-- <v-navigation-drawer v-model="drawer" clipped permanent app>
      <v-container fluid fill-height>
        <v-row class="text-center">
          <v-col cols="12"> {{ navegacaoCentral[0].text }} </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer> -->
    <v-content fill-height>
      <!-- <v-container fill-height></v-container> -->
      <v-row class="text-center">
        <!-- <v-col cols="12"> {{ navegacaoCentral[1].text }} </v-col> -->
        <v-row>
          <v-col v-for="n in 3"
          :key="n"
          cols=12
          sm="4"
          >
            <Card/>
          </v-col>
        </v-row>
      </v-row>
    </v-content>
    <v-footer app>
      <v-row class="text-center">
        <v-col cols="12"> {{ navegacaoInferior[0].text }} </v-col>
      </v-row>
    </v-footer>
    <v-bottom-navigation app>
      <v-container fluid fill-height>
        <v-row class="text-center">
          <v-col cols="12"> {{ navegacaoInferior[1].text }} </v-col>
        </v-row>
      </v-container>
    </v-bottom-navigation>
  </v-container>
</template>
<script>
import Card from "@/components/Card"
export default {
  name: "TemplateAvaliacao",
  components:{
    Card,
  },
  data: () => ({
    navegacaoSuperior: [
      {
        text: "v-system-bar",
      },
      {
        text: "v-app-bar",
      },
    ],
    navegacaoCentral: [
      {
        text: "v-navigation-drawer",
      },
      {
        text: "v-content",
      },
    ],
    navegacaoInferior: [
      {
        text: "v-footer",
      },
      {
        text: "v-bottom-navigation",
      },
    ],
  }),
};
</script>
