<template>
	<div class="flex flex-col">
		<div
			class="flex flex-col justify-center items-center"
			v-if="!level && !playEnd"
		>
			<div>
				<span class="font-bold dark:text-amber-50"
					>Ecolhas a quantidade de pares de cartas</span
				>
			</div>
			<div class="flex flex-row w-[250px] justify-between py-9 gap-2 font-bold">
				<button
					@click="DefineGrid(16)"
					class="flex w-[90px] h-[40px] justify-center items-center rounded-md cursor-pointer bg-[#E6F0F5]"
				>
					(8) Pares
				</button>
				<buttton
					@click="DefineGrid(36)"
					class="flex w-[90px] h-[40px] justify-center items-center rounded-md cursor-pointer bg-[#E6F0F5]"
					>(16) Pares</buttton
				>
			</div>
		</div>
		<div
			v-if="playEnd"
			class="flex flex-col justify-center items-center"
		>
			<GameSummary :onButtonClick="playAgain" />
		</div>
		<div
			v-if="level"
			class="grid gap-2"
			:class="{
				'grid-cols-4 [grid-template-columns:repeat(4,120px)]': level === 16,
				'grid-cols-6 [grid-template-columns:repeat(6,120px)]': level === 36,
			}"
		>
			<Card
				v-for="card in shuffledCards"
				:key="card.id"
				:card="card"
				:isFlipped="
					flippedCards.includes(card.id) || matchedCards.includes(card.value)
				"
				:onFlip="handleFlip"
			/>
		</div>
		<div
			v-if="level"
			class="flex justify-between py-6"
		>
			<Timer />
			<AttemptsCounter />
		</div>

		<div
			v-if="level"
			class="flex justify-center items-center mt-1"
		>
			<button
				@click="restart()"
				class="w-[90px] h-[35px] font-bold bg-[#e6ebeb] rounded-md cursor-pointer"
			>
				Reiniciar
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import Card from "./Card.vue";
import type { CardInterface } from "../types";
import Timer from "./Timer.vue";
import AttemptsCounter from "./AttemptsCounter.vue";
import store from "../store";
import GameSummary from "./GameSummary.vue";

const level = ref<number>(0);
const shuffleTrigger = ref(0);
const playEnd = ref<boolean>(false);
const flippedCards = ref<number[]>([]);
const matchedCards = ref<string[]>([]);

const statGame = computed(() => store.getters.getStartGame);
const grid = computed(() => cards.value.slice(0, level.value));

const cards = ref<CardInterface[]>([
	{ value: "🍎", id: 1 },
	{ value: "🍎", id: 2 },
	{ value: "🍌", id: 3 },
	{ value: "🍌", id: 4 },
	{ value: "🍇", id: 5 },
	{ value: "🍇", id: 6 },
	{ value: "🍒", id: 7 },
	{ value: "🍒", id: 8 },
	{ value: "🍉", id: 9 },
	{ value: "🍉", id: 10 },
	{ value: "🍍", id: 11 },
	{ value: "🍍", id: 12 },
	{ value: "🥭", id: 13 },
	{ value: "🥭", id: 14 },
	{ value: "🍋", id: 15 },
	{ value: "🍋", id: 16 },
	{ value: "🍑", id: 17 },
	{ value: "🍑", id: 18 },
	{ value: "🍊", id: 19 },
	{ value: "🍊", id: 20 },
	{ value: "🥝", id: 21 },
	{ value: "🥝", id: 22 },
	{ value: "🍈", id: 23 },
	{ value: "🍈", id: 24 },
	{ value: "🍐", id: 25 },
	{ value: "🍐", id: 26 },
	{ value: "🫐", id: 27 },
	{ value: "🫐", id: 28 },
	{ value: "🍏", id: 29 },
	{ value: "🍏", id: 30 },
	{ value: "🍓", id: 31 },
	{ value: "🍓", id: 32 },
	{ value: "🍄", id: 33 },
	{ value: "🍄", id: 34 },
	{ value: "🌰", id: 35 },
	{ value: "🌰", id: 36 },
]);

function DefineGrid(value: number): void {
	shuffleTrigger.value++;
	level.value = value;
}

const shuffledCards = computed<CardInterface[]>(() => {
	shuffleTrigger.value;
	return [...grid.value].sort(() => Math.random() - 0.5);
});

function restart() {
	matchedCards.value = [];
	flippedCards.value = [];
	shuffleTrigger.value++;
	if (!statGame.value) {
		store.dispatch("startGame", true);
		store.dispatch("incremenTimer");
	}
	store.dispatch("actionResetGame");
}

const playAgain = () => {
	console.log("chamo board");
	restart();
	playEnd.value = false;
	level.value = 0;
};
const handleFlip = (id: number) => {
	if (flippedCards?.value.length < 2) {
		flippedCards?.value.push(id);
	}

	if (flippedCards.value.length === 2) {
		const [first, second] = flippedCards.value;
		const firstCard = cards?.value.find((card) => card?.id === first);
		const secondCard = cards?.value.find((card) => card?.id === second);

		store.commit("increaseAttempts");

		if (firstCard?.value === secondCard?.value) {
			matchedCards.value.push(firstCard?.value);
			matchedCards.value = [...new Set(matchedCards.value)];
		}

		if (shuffledCards.value.length / 2 === matchedCards.value.length) {
			store.dispatch("actionStopInterval");
			setTimeout(() => {
				level.value = 0;
				playEnd.value = true;
			}, 1000);
		}

		setTimeout(() => {
			flippedCards.value = [];
		}, 500);
	}
};
</script>
