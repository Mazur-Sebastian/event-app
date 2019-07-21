<template>
	<v-card
		class="elevation-0 pr-1 category"
		:to="index"
	>
		<v-img
			:src="categoryImage"
			aspect-ratio="2.25"
		></v-img>
		<v-card-title
			primary-title
			class="pa-1"
		>
			<h4 class="subheading mb-1 mt-1 p-0">{{ categoryName }}</h4>
		</v-card-title>
	</v-card>
</template>

<script>
	export default {
		props: ['categoryName', 'categoryImage', 'index'],
	};
</script>

<style lang="scss">
	.category {
		cursor: pointer;
	}
</style>
