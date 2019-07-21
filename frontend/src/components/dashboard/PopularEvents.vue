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
			<EventCard/>
			<EventCard/>
			<EventCard/>
		</v-layout>
	</v-container>
</template>

<script>
	import EventCard from '../EventCard';

	export default {
		components: {
			EventCard,
		},
		data() {
			return {};
		},
	};
</script>