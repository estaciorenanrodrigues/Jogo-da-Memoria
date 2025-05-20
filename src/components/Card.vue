<template>
	<div
		class="flex w-12 h-12 items-center justify-center text-2xl cursor-pointer rounded-md"
		:class="{
			'bg-[#fff]': props.isFlipped,
			'bg-[#E6F0F5]': !props.isFlipped,
		}"
		@click="handleClick"
	>
		<div
			:class="{
				block: props.isFlipped,
				hidden: !props.isFlipped,
			}"
		>
			{{ card.value }}
		</div>
		<div
			:class="{
				hidden: props.isFlipped,
				block: !props.isFlipped,
			}"
		>
			?
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps<{
	card: { value: string; id: number };
	isFlipped: boolean;
	onFlip: (id: number) => void;
}>();

const handleClick = () => {
	if (!props.isFlipped) props.onFlip(props.card.id);
};
</script>
