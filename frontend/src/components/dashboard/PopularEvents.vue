<template>
	<v-container>
		<v-layout
			align-center
			mt-3
			mb-3
		>
			<div>
				<h2>Nearby events</h2>
				<p>Check what will happen soon in your area.</p>
			</div>
		</v-layout>
		<v-layout
			align-center
			mt-3
			mb-3
		>
			<EventCard
				v-for="event in events"
				:key="event.id"
				:event="event"
			/>
		</v-layout>
	</v-container>
</template>

<script>
	import { mockEvents } from '../../config/mockEvents.js';
	import EventCard from '../EventCard';
	console.log(mockEvents);
	export default {
		components: {
			EventCard,
		},
		data() {
			return {
				events: mockEvents,
			};
		},
	};
</script>