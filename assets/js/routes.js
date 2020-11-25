/**
 * 設定路由, 把url路徑與 Vue Component 相配
 * 詳情請參閱 https://router.vuejs.org/
 */

//TODO: use path alias
import VueRouter from 'vue-router';
import App from './components/App';

//TODO: Handle 404 and 301
const router =  new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '',
            component: App,
            name:'App'
        }
    ]
});

/**
 * Global route guard
 */
/*
router.beforeEach((to, from, next) => {


});
*/

export default router;
