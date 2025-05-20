scri
<template>
	<button
		@click="toggleDarkMode"
		class="flex justify-center items-center w-14 h-[30px] my-4 mr-4 rounded-xl cursor-pointer bg-[#D1D5DC] font-bold"
	>
		{{ isDark ? "☀️" : " 🌙" }}
	</button>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDark = ref<boolean>(false);

const toggleDarkMode = () => {
	isDark.value = !isDark.value;
	document.documentElement.classList.toggle("dark", isDark.value);
	localStorage.setItem("darkMode", JSON.stringify(isDark.value));
};

onMounted(() => {
	isDark.value = JSON.parse(localStorage.getItem("darkMode") || "false");
	document.documentElement.classList.toggle("dark", isDark.value);
});
</script>
