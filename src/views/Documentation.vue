<template>
    <div>
        <v-row class="text-center">
            <v-col>
                <h1>Tudo aquilo que foi necessário para construir esse projeto</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(n,i) in techCards"
            :key="i"
            cols=12
            sm="4"
            >    
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-card-text>
                    <div>Ferramenta</div>
                    <p class="text-h4 text--primary">
                        {{n.name}}
                    </p>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="n.reveal = true"
                    >
                        Links
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <v-card
                        v-if='n.reveal'
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                    >
                        <v-card-text class="pb-0">
                        <p class="text-h4 text--primary">
                            Site
                        </p>
                        <a>{{n.site}}</a>
                        <p class="text-h4 text--primary">
                            Documentação
                        </p>
                        <a>{{n.docs}}</a>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="teal accent-4"
                            @click="n.reveal = false"
                        >
                            Fechar
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
  export default {
    data: () => ({
      reveal: false,
    }),
    computed:{
    techCards(){
      return this.$store.state.techCards
    }
  },
  }
</script>