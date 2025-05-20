<template>
	<div class="flex flex-col min-h-screen bg-[#FAF5F1] dark:bg-black">
		<div class="flex min-h-1/12 justify-end">
			<ButtonModeDark />
		</div>

		<div class="flex flex-1 flex-col justify-center items-center">
			<Title label="Jogo da Memoria" />
			<div class="flex justify-center"><LoginGoogle /></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import ButtonModeDark from "../components/ButtonModeDark.vue";
import LoginGoogle from "../components/Login-google.vue";
import Title from "../components/Title.vue";
</script>

<style></style>
