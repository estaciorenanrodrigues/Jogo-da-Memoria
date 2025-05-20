<template>
	<p class="dark:bg-black dark:text-amber-50">Tentativas: {{ count }}</p>
</template>

<script setup lang="ts">
import { computed } from "vue";
import store from "../store";

const count = computed(() => store.getters.getCount);
</script>
