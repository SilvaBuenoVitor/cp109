<template>
  <v-container fill-height>
    <v-row class="text-center">
      <h1>{{titleview}}</h1>
    </v-row>
    <v-content fill-height>
      <v-row class="text-center">
        <v-row>
          <v-col v-for="(n,i) in myCards"
          :key="i"
          cols=12
          sm="4"
          >
            <Card :id="i" :name="n"/>
          </v-col>
        </v-row>
      </v-row>
    </v-content>
  </v-container>
</template>
<script>

import Card from "@/components/Card"
export default {
  name: "Home",
  data(){
    return{
      titleview: this.$store.state.title
    }
  },
  computed:{
    myCards(){
      return this.$store.state.cards
    }
  },
  components:{
    Card,
  },
};
</script>