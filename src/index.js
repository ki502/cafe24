import HeaderView from "./layout/HeaderView.vue";
import LeftView from "./layout/LeftView.vue";
import CenterView from "./layout/CenterView.vue";
import RightView from "./layout/RightView.vue";
import isElectron from 'is-electron';

new Vue({
    store: new Vuex.Store({
        state: {
            axios: isElectron ? "http://localhost:8001" : ""
        }
    }),
    vuetify: new Vuetify(),
    el: '#app',
    components: {
        HeaderView,
        LeftView,
        CenterView,
        RightView
    },
    data: {
        CONSTANTS: {
            isElectron: isElectron
        }
    }
});