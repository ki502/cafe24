import HeaderView from "./layout/HeaderView.vue";
import LeftView from "./layout/LeftView.vue";
import CenterView from "./layout/CenterView.vue";
import RightView from "./layout/RightView.vue";

var app = new Vue({
    vuetify: new Vuetify(),
    el: '#app',
    components: {
        HeaderView,
        LeftView,
        CenterView,
        RightView
    },
    data: {}
});