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
							<h3 class="headline mb-0">Login</h3>
						</div>
					</v-card-title>
					<v-container>
						<v-flex sm10>
							<v-form>
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
									data-vv-name="password"
									:append-icon="showPassword ? 'visibility' : 'visibility_off'"
									label="password"
									:type="showPassword ? 'text' : 'password'"
									required
									solo
									@click:append="showPassword = !showPassword"
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
	import PasswordInput from './elements/PasswordInput';
	import { LOGIN } from '@/store/actions.type';

	export default {
		components: {
			PasswordInput
		},
		data: () => ({
			email: '',
			password: '',
			email: '',
			select: null,
			checkbox: false,
			showPassword: false
		}),
		methods: {
			onSubmit() {
				this.$validator.validateAll().then(res => {
					if (res) {
						this.$store.dispatch(LOGIN, { email: this.email, password: this.password });
					}
				});
			},
			clear() {
				this.email = '';
				this.password = '';
				this.$validator.reset();
			}
		}
	};
</script>