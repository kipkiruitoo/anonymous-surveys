require("./base")
import VueToastr from "vue-toastr";
window.Vue = require("vue")

Vue.component('survey-show', require('./components/SurveyShow.vue'))


Vue.use(VueToastr, {
    /* OverWrite Plugin Options if you need */
});
new Vue({
    el: "#surveyElement"
})