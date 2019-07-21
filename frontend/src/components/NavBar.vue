<template>
	<v-toolbar
		dark
		color="white"
	>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn
				color="accent"
				flat
				to="/"
			>Event world</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn
				v-for="item in navBarItems"
				:key="item.name"
				color="accent"
				flat
				:to="item.route"
			>{{ item.name }}</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
	export default {
		data: () => ({
			navBarItems: [
				{
					name: 'Create new group',
					route: '/create-group',
				},
				{
					name: 'Login',
					route: '/login',
				},
				{
					name: 'Register',
					route: '/register',
				},
			],
		}),
	};
</script>