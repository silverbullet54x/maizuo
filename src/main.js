import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App";
import "./assets/styles/base.scss";

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
}); 