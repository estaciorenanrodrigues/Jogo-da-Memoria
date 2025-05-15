<template>
	<div class="bg-black">
		<p>Contador: {{ contador }}</p>
		<button
			class="text"
			@click="incrementar"
		>
			Incrementar
		</button>
		<h1 class="text-3xl font-bold underline text-amber-300">Hello world!</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "LoginPage",

	setup() {
		const store = useStore();
		const contador = computed(() => store.getters.getContador);

		const incrementar = () => {
			store.dispatch("incrementar");
		};

		return {
			contador,
			incrementar,
		};
	},
});
</script>

<style></style>
