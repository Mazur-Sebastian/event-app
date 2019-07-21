<template>
	<v-layout>
		<v-flex xs11>
			<v-hover>
				<v-card
					slot-scope="{ hover }"
					:class="`elevation-${hover ? 8 : 3}`"
				>
					<v-card-title primary-title>
						<div>
							<p class="accent--text font-weight-medium subheading">{{ event.eventDate }}</p>
							<h3 class="headline mb-0">{{ event.eventTitle }}</h3>
							<h4 class="subheading mb-2">{{ event.eventOrganizer }}</h4>
							<p class="body-2 font-weight-light">{{ event.eventPlace }}</p>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-layout
							align-center
							justify-space-between
							mb-2
							mr-2
							ml-2
						>
							<h4 class="subheading">{{ event.eventParticipants }} participiants</h4>
							<FlatButton
								flat
								color="primary"
								text="more"
							/>
						</v-layout>
					</v-card-actions>
				</v-card>
			</v-hover>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		props: ['event'],
	};
</script>