<template>
	<GoogleLogin :callback="callback" />
</template>
<script setup lang="ts">
import { useStore } from "vuex";

import router from "../routes";
import type { DataGoogleInterface } from "../types";
import { useServices } from "../services";

const newStore = useStore();
const { setDataStorage, getUserInfo } = useServices();

const callback = (response: DataGoogleInterface) => {
	if (response.credential) {
		newStore.dispatch("execute_set_datagoogle", response);
		router.push("/play");
		setDataStorage("key", response.credential);
		getUserInfo(
			response.clientId,
			import.meta.env.VITE_KEY_SECRET,
			response.credential
		);
	}
};
</script>
