import { createStore } from "vuex";
import type { StateInterface } from "../types/TipagemJogoMemoria";


const state: StateInterface = {
    count: 0,
};

const mutations = {
    increment(state: StateInterface) {
        state.count++;
    },
};

const actions = {
    incrementar({ commit }: { commit: Function }) {
        commit("increment");
    },
};

const getters = {
    getContador: (state: StateInterface): number => state.count,
};

const store = createStore<StateInterface>({
    state,
    mutations,
    actions,
    getters,
});

export default store;