
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n'
import {store} from './assets/js/store/store';
import router from './assets/js/routes';
import "jquery-ui/ui/effects/effect-slide";
import Vue2TouchEvents from "vue2-touch-events";
import AxiosPlugin from 'vue-axios-cors';
import App from './assets/js/components/App';

window.jQuery = require('jquery');
require('jquery.scrollto');
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch');
require('jquery-touch-events');

require('./assets/js/bootstrap');
require('./assets/js/lib/bootstrap.bundle.min');
require('@fancyapps/fancybox');

/**
 * Vue.use() will make the plugin globally available in the project
 */
//Use Vuex Store
Vue.use(Vuex);
//Use Vue Router
Vue.use(VueRouter);
//Use Vue i18n
Vue.use(VueI18n);

Vue.use(Vue2TouchEvents);

Vue.use(AxiosPlugin);


/**
 * Register components globally.
 * You can choose to register components only when needed (i.e. import them inside the parent components,
 * but since the scale of NSW frontend isn't large, we simply register most components globally here to make it more convenient.
 */
Vue.component('app', App);


//Define data to be passed to the Vue instance

Vue.prototype.$getDir = function(path) {
    if (path.charAt(0) !== "/") {
        return default_uri+"/"+path;

    } else {
        return default_uri+path;

    }
};


/**
 * Initialize the Vue instance.
 * Pass variables so that we can access them like this.$myVar in the Vue components
 */
// const app = new Vue({
//     el: '#app',
//     store,
//     router
// });
document.addEventListener('deviceready', function() {
    const app = new Vue({
        el: '#app',
        store,
        router
    });

    window.open = cordova.InAppBrowser.open;

    if(MobileAccessibility){
        MobileAccessibility.usePreferredTextZoom(false);
    }

    document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );

    setTimeout(function() {


        navigator.splashscreen.hide();
        if (isSmallScreen) {
            // screen.orientation.unlock();
            // screen.orientation.lock('portrait-primary');
        } else {

          if (screen.orientation.type !== "landscape-primary") {
            // screen.orientation.unlock();
            //
            // screen.orientation.lock('portrait-primary');
            // screen.orientation.lock('landscape-primary');
          }

        }

    }, 1000);

});
