<template>
	<v-container fill-height>
		<v-layout
			align-center
			justify-center
			row
		>
			<Loader v-if="isLoading"></Loader>
			<LoginForm v-if="!isLoading"/>
		</v-layout>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex';

	import LoginForm from '../components/LoginForm';

	export default {
		components: {
			LoginForm,
		},
		computed: {
			...mapGetters(['isLoading']),
		},
	};
</script> 
