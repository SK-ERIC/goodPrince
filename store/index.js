import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		shopInfo: {},
		config: {}, 
		redirectPage: '',
		uuid:'',//当前客户端
		building_id: 0
	},
    mutations: {
		 shopConfig(state, payload) {
			state.shopInfo = payload
		 },
		config (state, payload) {
			state.config = payload
		},		
		redirect (state, payload) {
			state.redirectPage = payload.page
		},
		building_id(state, payload){
			state.building_id = payload
		}
		
	},
	actions: {

	},
	getters: {
		shopConfig: state => state.config,
		uuid: state	=>	state.uuid,
	}
})

export default store
