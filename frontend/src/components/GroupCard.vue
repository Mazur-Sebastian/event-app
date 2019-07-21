<template>
	<v-layout>
		<v-flex xs11>
			<v-hover>
				<v-card
					slot-scope="{ hover }"
					:class="`elevation-${hover ? 8 : 3}`"
				>
					<v-img
						src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
						aspect-ratio="2.25"
					></v-img>
					<v-card-title primary-title>
						<div>
							<p class="font-weight-medium subheading mb-1">Category</p>
							<h3 class="headline mb-0">Title</h3>
							<p class="body-2 font-weight-light">{{ card_text }}</p>
							<p class="font-weight-regular subheading mb-0">100 members</p>
						</div>
					</v-card-title>
				</v-card>
			</v-hover>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		data() {
			return {
				card_text:
					'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui.',
			};
		},
	};
</script>