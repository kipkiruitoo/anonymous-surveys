require("./base");

window.Vue = require("vue");

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";
import App from "./App";
import VueToastr from "vue-toastr";
import router from "./router";
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.component("survey-show", "./components/SurveyShow.vue");
Vue.use(VueToastr, {
    /* OverWrite Plugin Options if you need */
});
new Vue({
    router,
    data() {
        return {
            snackbar: false,
            snackbarMsg: ""
        };
    },
    render: h => h(App)
}).$mount("#survey-manager");
