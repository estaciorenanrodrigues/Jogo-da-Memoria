<template>
	<div
		class="flex flex-col min-h-screen justify-items-start bg-[#FAF5F1] dark:bg-black"
	>
		<div class="flex h-[50px] justify-end w-full">
			<ButtonModeDark />
			<Button
				label="Sair"
				:onButtonClick="removeUseLogin"
			/>
		</div>
		<div class="flex justify-center h-[60px] py-1 pb-16 font-bold">
			<Title label="Jogo da Memoria" />
		</div>
		<div class="flex justify-center">
			<GameBoard />
		</div>
	</div>
</template>
<script setup lang="ts">
import Button from "../components/Button.vue";
import GameBoard from "../components/GameBoard.vue";
import Title from "../components/Title.vue";
import ButtonModeDark from "../components/ButtonModeDark.vue";

import { useServices } from "../services";

const { deleteDataStorage } = useServices();

const removeUseLogin = () => {
	deleteDataStorage();
	window.location.reload();
};
</script>
