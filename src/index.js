import HeaderView from "./layout/HeaderView.vue";
import CenterView from "./layout/CenterView.vue";
import isElectron from 'is-electron';

import Game from "./pages/Game.vue";
import Lotto from "./pages/Lotto.vue";
import Coupang from "./pages/Coupang.vue";

const router = new VueRouter({
    routes: [
        { path: "/game", component: Game  },
        { path: "/lotto", component: Lotto },
        { path: "/coupang", component: Coupang  }
    ]
});

new Vue({
    router: router,
    store: new Vuex.Store({
        state: {
            axios: isElectron() ? "http://localhost:8001" : ""
        }
    }),
    vuetify: new Vuetify(),
    el: '#app',
    components: {
        HeaderView,
        CenterView
    },
    data: {
        CONSTANTS: {
            isElectron: isElectron
        }
    }
});