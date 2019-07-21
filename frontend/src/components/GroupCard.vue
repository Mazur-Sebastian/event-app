<template>
	<v-layout>
		<v-flex xs11>
			<v-hover>
				<v-card
					slot-scope="{ hover }"
					:class="`elevation-${hover ? 8 : 3}`"
					:to="group.id.toString()"
				>
					<v-img
						:src="group.groupImage"
						aspect-ratio="2.25"
					></v-img>
					<v-card-title primary-title>
						<div>
							<p class="font-weight-medium subheading mb-1">{{ group.groupCategory }}</p>
							<h3 class="headline mb-0">{{ group.groupTitle }}</h3>
							<p class="body-2 font-weight-light group-card__description">{{ group.groupDesc }}</p>
							<p class="font-weight-regular subheading mb-0">{{ group.groupMembers}} members</p>
						</div>
					</v-card-title>
				</v-card>
			</v-hover>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		props: ['group'],
	};
</script>

<style lang="scss" scoped>
	.group-card {
		&__description {
			white-space: nowrap;
			text-overflow: ellipsis;
			width: 200px;
			overflow: hidden;
		}
	}
</style>
