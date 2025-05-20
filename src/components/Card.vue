<template>
	<div
		class="flex w-24 h-24 items-center justify-center text-2xl cursor-pointer rounded-md 2xl:w-24 2xl:h-24 sm:w-14 sm:h-14"
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
import { defineProps } from "vue";

const props = defineProps<{
	card: { value: string; id: number };
	isFlipped: boolean;
	onFlip: (id: number) => void;
}>();

const handleClick = () => {
	if (!props.isFlipped) props.onFlip(props.card.id);
};
</script>
