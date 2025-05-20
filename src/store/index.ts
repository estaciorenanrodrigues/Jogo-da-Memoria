import { createStore } from "vuex";
import type { stateInterface } from "../types";

const state: stateInterface = {
    attempts: 0,
    timer: 0,
    gameStarted: false,
    interval: null,
};

const mutations = {
    startTimer(state: any) {
        if (!state.interval) {
            state.interval = setInterval(() => {
                state.timer++;
            }, 1000);
        }
    },
    stopTimer(state: any): void {
        clearInterval(state.interval);
        state.gameStarted = false
        state.interval = null;
    },
    resetTimer(state: any) {
        state.timer = 0;
        if (state.interval) {
            clearInterval(state.interval);
            state.interval = null;
        }
    },
    setGameStarted(state: stateInterface, value: boolean) {
        state.gameStarted = value;
    },
    resetGame(state: stateInterface) {
        state.timer = 0;
        state.attempts = 0;
    },
    increaseAttempts(state: any) {
        state.attempts++;
    },
    interval(state: any) {
        state.interval = true;
    },
};

const actions = {
    startGame({ commit }: { commit: (mutation: string, payload?: any) => void }) {
        commit("setGameStarted", true);
    },
    incrementAttempts({ commit }: { commit: (mutation: string) => void }) {
        commit("increaseAttempts");
    },
    incremenTimer({ commit }: { commit: (mutation: string) => void }) {
        commit("startTimer");
    },
    actionInterval({ commit }: { commit: (mutation: string) => void }) {
        commit("interval");
    },
    actionStopInterval({ commit }: { commit: (mutation: string) => void }) {
        commit("stopTimer");
    },
    actionResetGame({ commit }: { commit: (mutation: string) => void }) {
        commit("resetGame");
    },

};

const getters = {
    getStartGame: (state: stateInterface): boolean | undefined => state.gameStarted,
    getTime: (state: stateInterface): number | undefined => state.timer,
    getCount: (state: stateInterface): number | undefined => state.attempts
}

const store = createStore({
    state,
    mutations,
    actions,
    getters,
});

export default store;