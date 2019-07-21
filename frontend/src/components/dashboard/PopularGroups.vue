<template>
	<v-container>
		<v-layout
			align-center
			mt-3
			mb-3
		>
			<div>
				<h2>Groups nearby</h2>
				<p>Find local groups connecting people with common passions.</p>
			</div>
		</v-layout>
		<v-layout
			align-center
			mt-3
			mb-3
		>
			<GroupCard
				v-for="group in groups"
				:key="group.id"
				:group="group"
			/>
		</v-layout>
	</v-container>
</template>

<script>
	import { mockGroups } from '../../config/mockGroups.js';
	import GroupCard from '../GroupCard';

	export default {
		components: {
			GroupCard,
		},
		data() {
			return {
				groups: mockGroups,
			};
		},
	};
</script>