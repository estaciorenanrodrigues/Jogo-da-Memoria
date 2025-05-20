<template>
	<p>Tempo: {{ timer }}</p>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useServices } from "../services";
import store from "../store";

const { formatTime } = useServices();

const timer = computed(() => formatTime(store.getters.getTime));
const statGame = computed(() => store.getters.getStartGame);

onMounted(() => {
	store.commit("startTimer", true);
	if (statGame) {
		store.commit("incremenTimer");
	}
});
</script>
