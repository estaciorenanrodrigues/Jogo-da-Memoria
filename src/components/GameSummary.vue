<template>
	<div class="flex flex-col justify-center items-center">
		<h1 class="font-bold text-4xl py-12 dark:bg-black dark:text-amber-50">
			Parabéns! 🎉
		</h1>
		<h2 class="font-bold text-3xl dark:bg-black dark:text-amber-50">
			🎊 Jogo concluído 🎈
		</h2>
		<p class="dark:bg-black dark:text-amber-50">Tempo gasto: {{ timer }}s</p>
		<p class="dark:bg-black dark:text-amber-50">Tentativas: {{ count }}</p>
		<Button
			class="w-[200px]"
			label="Jogar novamente"
			:onButtonClick="onButtonClick"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import store from "../store";
import { useServices } from "../services";
import Button from "./Button.vue";

const { formatTime } = useServices();
const props = defineProps<{
	onButtonClick?: () => void;
}>();

const timer = computed(() => formatTime(store?.getters.getTime));
const count = computed(() => store?.getters.getCount);
</script>
