<template>
	<div
		class="text-center text-3xl font-bold mb-14 text-[#0E0B0D] dark:bg-black dark:text-amber-50"
	>
		{{ props.label }}
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	label: string;
}>();
</script>
