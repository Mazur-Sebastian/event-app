<template>
	<v-btn
		round
		depressed
		:color="color"
		@click="onAction"
		:to="goTo ? goTo : null"
	>{{ text }}</v-btn>
</template>

<script>
	export default {
		props: ['text', 'color', 'goTo'],
		methods: {
			onAction() {
				this.$emit('onClick');
			},
		},
	};
</script>
