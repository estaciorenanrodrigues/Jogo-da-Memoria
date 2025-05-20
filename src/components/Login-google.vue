<template>
	<GoogleLogin :callback="callback" />
</template>
<script setup lang="ts">
import { useStore } from "vuex";

import router from "../routes";
import { useServices } from "../services";
import type { DataGoogleInterface } from "../types";

const newStore = useStore();
const { setDataStorage } = useServices();

const callback = (response: DataGoogleInterface) => {
	if (response.credential) {
		newStore.dispatch("execute_set_datagoogle", response);
		router.push("/play");
		setDataStorage("key", response.credential);
	}
};
</script>
