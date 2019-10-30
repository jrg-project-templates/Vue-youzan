import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'

new Vue({
    el: '.container',
    data: {
        lists: null,
    },
    computed: {

    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            axios.get(url.cartLists).then(res => {
                let lists = res.data.cartList
                lists.forEach(shop => {
                    shop.checked = true
                    shop.goodsList.forEach(good => {
                        good.checked = true
                    })
                })
                this.lists = lists
            })
        },
        selectGood(good) {
            good.checked = !good.checked
        },
        selectShop(shop) {
            shop.checked = !shop.checked
        },
    },

    mixin: [mixin],

})
















// import Mock from 'mockjs'
// let Random = Mock.Random

// let data = Mock.mock({
//     'cartList':[{
//         goodsList:[{
//             id: Random.integer(10000-99999),
//             img: Mock.mock('@image(90x90,@color)'),

//         }]
//     }]
// })
