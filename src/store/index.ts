import { createStore } from "vuex";
import type { DataGoogleInterface } from "../types";

const state: any = {
    dataGoogle: null,
};

const mutations = {
    set_datagoogle(state: any, value: DataGoogleInterface) {
        state.dataGoogle = value;
    },
};

const actions = {
    execute_set_datagoogle({ commit }: { commit: Function }, value: DataGoogleInterface) {
        commit("set_datagoogle", value);
    },
};

const getters = {
    get_credential: (dataGoogle: DataGoogleInterface): DataGoogleInterface => dataGoogle,
};

const store = createStore({
    state,
    mutations,
    actions,
    getters,
});

export default store;