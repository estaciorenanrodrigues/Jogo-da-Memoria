<template>
	<div class="flex min-h-screen justify-center bg-[#FAF5F1]">
		<div class="text-4xl pb-10 font-bold">
			<span>Jogo da Memória</span>
		</div>
		<div></div>
	</div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const newStore = useStore();
const getDataGoogle = computed(() => newStore.getters.get_datagoogle);
</script>
