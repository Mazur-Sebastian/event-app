<template>
	<v-container fill-height>
		<v-layout
			align-center
			justify-center
			row
		>
			<Loader v-if="isLoading"></Loader>
			<RegisterForm v-if="!isLoading"/>
		</v-layout>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex';

	import RegisterForm from '../components/RegisterForm';
	import Loader from '../components/elements/Loader.vue';

	export default {
		components: {
			RegisterForm,
			Loader
		},
		computed: {
			...mapGetters(['isLoading'])
		}
	};
</script>
