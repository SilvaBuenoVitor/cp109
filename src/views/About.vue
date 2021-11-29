<template>
    
  <v-container fill-height>
    <v-content fill-height>
      <v-row class="text-center">
        <v-col>
          <h1>Sobre o projeto:</h1>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-row>
          <v-col v-for="(n,i) in techs"
          :key="i"
          cols=12
          sm="4"
          >
            {{n}}
          </v-col>
        </v-row>
      </v-row>
    </v-content>
  </v-container>
</template>
<script>

export default {
  name: "Home",
  components:{
  },
  computed:{
    techs(){
      return this.$store.state.techs
    }
  },
};
</script>