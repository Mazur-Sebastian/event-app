<template>
	<v-text-field
		name="changedPassword"
		v-model="changedPassword"
		:error-messages="errors.collect('changedPassword')"
		v-validate="'required'"
		data-vv-name="changedPassword"
		:append-icon="showPassword ? 'visibility' : 'visibility_off'"
		label="password"
		:type="showPassword ? 'text' : 'password'"
		required
		solo
		@click:append="showPassword = !showPassword"
		@change="onInput"
	></v-text-field>
</template>

<script>
	export default {
		props: ['password'],
		data() {
			return {
				showPassword: false,
				changedPassword: this.password
			};
		},
		watch: {
			password(value) {
				this.changedPassword = value;
			}
		},
		methods: {
			onInput() {
				this.$emit('update:password', this.changedPassword);
			}
		}
	};
</script>