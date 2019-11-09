// 使用vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Address from 'js/addressService.js'

//创建Store实例
const store = new Vuex.Store({
    state: {
        lists: null,
    },
    mutations: {
        init(state, lists) {
            state.lists = lists
        },
        add(state, instance) {
            state.lists.push(instance)
        },
        remove(state, id) {
            let lists = state.lists
            let index = lists.findIndex(item => {
                return item.id == id
            })
            lists.splice(index, 1)
        },
        update(state, instance) {
            let lists = state.lists
            let index = lists.findIndex(item => {
                return item.id == id
            })
            lists[index] = instance
        },
        setDefault(state, id) {
            let lists = state.lists
            lists.forEach(item => {
                item.isDefault = item.id == id ? true : false
            })
        }
    },
    actions: {
        getLists({ commit }) {
            Address.list().then(res => {
                // store.commit('init', res.data.lists)
                commit('init', res.data.lists)
            })
        },
        addAction({ commit }, instance) {
            Address.add(instance).then(res => {
                commit('add', instance)
            })
        },
        removeAction({ commit }, id) {
            Address.remove(id).then(res => {
                commit('remove', id)
            })
        },
        setDefaultAction({ commit }, id) {
            Address.setDefault(id).then(res => {
                commit('setDefault', id)
            })
        }
    },
})

export default store