<template>
	<GoogleLogin :callback="callback" />
</template>
<script setup lang="ts">
import { useStore } from "vuex";

import router from "../routes";
import type { DataGoogleInterface } from "../types";

const newStore = useStore();

const saveToLocalStorage = (key: string) => {
	localStorage.setItem("key", key);
};

const callback = (response: DataGoogleInterface) => {
	if (response.credential) {
		newStore.dispatch("execute_set_datagoogle", response);
		router.push("/play");
		saveToLocalStorage(response.credential);
	}
};
</script>
