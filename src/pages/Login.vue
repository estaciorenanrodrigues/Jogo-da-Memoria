<template>
	<div class="flex min-h-screen justify-center items-center bg-[#FAF5F1]">
		<div class="flex flex-col w-[400px] h-[300px] justify-center">
			<Title label="Jogo da Memoria" />
			<div class="flex justify-center"><LoginGoogle /></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import LoginGoogle from "../components/Login-google.vue";
import Title from "../components/Title.vue";
</script>

<style></style>
