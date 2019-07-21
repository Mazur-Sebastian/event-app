<template>
	<div>
		<Carousel/>
		<HomeButtons/>
		<v-divider/>
		<PopularEvenets/>
		<PopularGroups/>
		<Categories/>
		<Footer/>
	</div>
</template>

<script>
	import Carousel from '../components/dashboard/Carousel';
	import HomeButtons from '../components/dashboard/HomeButtons.vue';
	import PopularEvenets from '../components/dashboard/PopularEvents.vue';
	import PopularGroups from '../components/dashboard/PopularGroups.vue';
	import Categories from '../components/dashboard/Categories.vue';
	import Footer from '../components/Footer.vue';

	export default {
		components: {
			Carousel,
			HomeButtons,
			PopularEvenets,
			PopularGroups,
			Categories,
			Footer,
		},
	};
</script>
