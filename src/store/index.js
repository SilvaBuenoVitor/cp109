import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: [],
        title: "Lista dos melhores restaurantes",
        techs: ["Feito em Vue", "Feito para CP109LPIN1", "Desenvolvido em aula", "Treino para desenvolvimento web moderno", "Responsividade nativa", "Alternativa ao HTML, CSS puro"],
        techCards: [
            {
                name: "Vue",
                site: "https://vuejs.org/",
                reveal: false,
                docs: "https://vuejs.org/v2/guide/installation.html"
            },
            {
                name: "Vuex",
                site: "https://vuex.vuejs.org/ptbr/",
                reveal: false,
                docs: "https://vuex.vuejs.org/ptbr/installation.html"
            },
            {
                name: "Vue Router",
                site: "https://router.vuejs.org/",
                reveal: false,
                docs: "https://router.vuejs.org/installation.html"
            },
            {
                name: "HTML",
                site: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                reveal: false,
                docs: "https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
            },
            {
                name: "CSS",
                site: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                reveal: false,
                docs: "https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps"
            },
            {
                name: "Javascript",
                site: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                reveal: false,
                docs: "https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
            },
            {
                name: "Node",
                site: "https://nodejs.org/en/",
                reveal: false,
                docs: "https://nodejs.org/en/docs/"
            },
            {
                name: "Visual Studio Code IDE",
                site: "https://code.visualstudio.com/",
                reveal: false,
                docs: "https://code.visualstudio.com/docs"
            }
        ]
    },
    mutations: {
        changeOrder(state) {
            var last = state.cards.pop()
            state.cards = [last, ...state.cards]
        },
        createCard(state, words) {

            for (let index = 0; index < words.length; index++) {
                state.cards = state.cards.concat('Restaurante ' + words[index])

            }

        }
    },
    actions: {
        getWords({ commit }) {

            axios.get('https://random-word-api.herokuapp.com/word?number=6').then(response => { commit('createCard', response.data) })
            return true
        }
    },
    getters: {
        numberOfCards: state => {
            return state.cards.length
        }
    }
});