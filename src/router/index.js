import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/homeView'
import recharge from '../view/rechargeView'
import payResult from '../view/payResultView'
import record from '../view/recordView'
import detail from '../view/orderDetailView'
import oil from '../view/oilRechargeView'




Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: home,
    }, {
      path: '/oil',
      name: 'oil',
      component: oil,
    },
    {
      path: '/recharge/:type/:choose/:pay',
      name: 'recharge',
      component: recharge,
    },
    {
      path: '/result',
      name: 'result',
      component: payResult,
    },
    {
      path: '/record',
      name: 'record',
      component: record,
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
    },
    {
      path: '/',
      redirect: '/detail'
    }
  ]
})
