<template>
	<v-container>
		<v-layout>
			<v-flex
				xs12
				sm6
				offset-sm3
			>
				<v-card
					class="pa-4 elevation-5"
					flat
				>
					<v-card-title primary-title>
						<div>
							<h3 class="headline mb-0">Register</h3>
						</div>
					</v-card-title>
					<v-container>
						<v-flex sm10>
							<v-form>
								<v-text-field
									name="username"
									v-model="username"
									label="username"
									:error-messages="errors.collect('username')"
									v-validate="'required'"
									data-vv-name="username"
									type="text"
									required
									solo
								></v-text-field>
								<v-text-field
									name="email"
									v-model="email"
									label="email"
									:error-messages="errors.collect('email')"
									v-validate="'required|email'"
									data-vv-name="email"
									type="text"
									required
									solo
								></v-text-field>
								<v-text-field
									name="password"
									v-model="password"
									:error-messages="errors.collect('password')"
									v-validate="'required'"
									:append-icon="showPassword ? 'visibility' : 'visibility_off'"
									label="Password"
									:type="showPassword ? 'text' : 'password'"
									required
									solo
									@click:append="showPassword = !showPassword"
									ref="password"
								></v-text-field>
								<v-text-field
									name="passwordCheck"
									v-model="passwordCheck"
									:error-messages="errors.collect('passwordCheck')"
									v-validate="'required|confirmed:password'"
									data-vv-name="passwordCheck"
									data-vv-as="password"
									:append-icon="showPasswordCheck ? 'visibility' : 'visibility_off'"
									label="Re-enter Password"
									:type="showPasswordCheck ? 'text' : 'password'"
									required
									solo
									@click:append="showPasswordCheck = !showPasswordCheck"
								></v-text-field>
								<v-checkbox
									v-model="checkbox"
									:rules="[v => !!v || 'You must agree to continue!']"
									label="Do you agree?"
									required
								></v-checkbox>
								<v-layout
									align-center
									justify-end
									row
									fill-height
								>
									<v-btn
										color="accent"
										@click="onSubmit"
									>Submit</v-btn>
									<v-btn
										color="primary"
										@click="clear"
									>Cancel</v-btn>
								</v-layout>
							</v-form>
						</v-flex>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import { REGISTER } from '@/store/actions.type';

	export default {
		data: () => ({
			email: '',
			password: '',
			passwordCheck: '',
			username: '',
			select: null,
			checkbox: false,
			showPassword: false,
			showPasswordCheck: false
		}),
		methods: {
			onSubmit() {
				this.$validator.validateAll().then(
					res =>
						res &&
						this.$store.dispatch(REGISTER, {
							username: this.username,
							email: this.email,
							password: this.password
						})
				);
			},
			clear() {
				this.email = '';
				this.password = '';
				this.username = '';
				this.$validator.reset();
			}
		}
	};
</script>