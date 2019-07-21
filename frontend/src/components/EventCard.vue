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
							<p class="accent--text font-weight-medium subheading">12.03.2107</p>
							<h3 class="headline mb-0">Title</h3>
							<h4 class="subheading mb-2">Subtitle</h4>
							<p class="body-2 font-weight-light">{{ card_text }}</p>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-layout
							justify-end
							mb-2
							mr-2
						>
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
		data() {
			return {
				card_text:
					'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui.',
			};
		},
	};
</script>