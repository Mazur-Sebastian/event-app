<template>
	<ValidationProvider
		:name="$attrs.label"
		:rules="rules"
	>
		<v-text-field
			slot-scope="{ errors, valid }"
			v-model="innerValue"
			:error-messages="errors"
			:success="valid"
			v-bind="$attrs"
			v-on="$listeners"
			outline
		></v-text-field>
	</ValidationProvider>
</template>

<script>
	import { ValidationProvider } from 'vee-validate';

	export default {
		components: {
			ValidationProvider,
		},
		props: {
			rules: {
				type: [Object, String],
				default: '',
			},
			value: {
				type: null,
			},
		},
		data: () => ({
			innerValue: '',
		}),
		watch: {
			innerValue(newVal) {
				this.$emit('input', newVal);
			},
			value(newVal) {
				this.innerValue = newVal;
			},
		},
		created() {
			if (this.value) {
				this.innerValue = this.value;
			}
		},
	};
</script>