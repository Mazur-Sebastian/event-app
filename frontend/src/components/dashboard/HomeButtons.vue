<template>
	<v-container
		pt-3
		pb-3
	>
		<v-layout
			justify-space-between
			align-center
		>
			<FlatButton
				v-for="item in buttonItems"
				:key="item.name"
				color="accent"
				@onClick="item.func"
				:text="item.name"
			/>
		</v-layout>
	</v-container>
</template>


<script>
	export default {
		data() {
			return {
				buttonItems: [
					{
						name: 'item1',
						func: () => {},
					},
					{
						name: 'item2',
						func: () => {},
					},
					{
						name: 'item4',
						func: () => {},
					},
					{
						name: 'item3',
						func: () => {},
					},
					{
						name: 'item5',
						func: () => {},
					},
					{
						name: 'item6',
						func: () => {},
					},
				],
			};
		},
	};
</script>