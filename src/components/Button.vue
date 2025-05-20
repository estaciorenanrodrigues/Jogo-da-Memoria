<template>
	<button
		class="flex justify-center items-center w-14 h-[30px] my-4 mr-4 rounded-xl cursor-pointer bg-[#c5cccf] font-bold"
		@click="props.onButtonClick"
	>
		{{ label }}
	</button>
</template>
<script setup lang="ts">
const props = defineProps<{
	label: string;
	onButtonClick?: () => void;
}>();
</script>
