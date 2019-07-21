<template>
	<v-container>
		<v-layout
			align-center
			mt-3
			mb-3
		>
			<div>
				<h2>Categories</h2>
				<p>Browse groups by topics you care about.</p>
			</div>
		</v-layout>
		<v-container
			fluid
			grid-list-sm
			pa-0
		>
			<v-layout
				row
				wrap
			>
				<v-flex
					v-for="item in categoriesItems"
					:key="item.index"
					xs3
				>
					<CategoryCard
						:categoryName="item.categoryName"
						:categoryImage="item.categoryImage"
						:index="item.index"
					/>
				</v-flex>
			</v-layout>
		</v-container>
	</v-container>
</template>

<script>
	import { categories } from '../../config/categories.js';
	import CategoryCard from '../CategoryCard';

	export default {
		components: {
			CategoryCard,
		},
		data() {
			return {
				categoriesItems: categories,
			};
		},
	};
</script>