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
							<ValidationObserver ref="obs">
								<v-form>
									<FormInput
										rules="required"
										v-model="username"
										label="User"
									/>
									<FormInput
										rules="required|email"
										v-model="email"
										label="E-mail"
									/>
									<PasswordInput
										rules="required"
										v-model="password"
										label="Password"
									/>
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
										<FlatButton
											color="accent"
											@onClick="onSubmit"
											text="ok"
										/>
										<FlatButton
											color="primary"
											@onClick="clear"
											text="Cancel"
											goTo="/"
										/>
									</v-layout>
								</v-form>
							</ValidationObserver>
						</v-flex>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import { ValidationObserver } from 'vee-validate';

	import { REGISTER } from '@/store/actions.type';
	import FormInput from './elements/FormInput.vue';
	import PasswordInput from './elements/PasswordInput.vue';

	export default {
		components: {
			FormInput,
			ValidationObserver,
			PasswordInput,
		},
		data: () => ({
			email: '',
			password: '',
			username: '',
			checkbox: false,
		}),
		methods: {
			async clear() {
				this.password = this.email = this.checkbox = '';
				this.$nextTick(() => {
					this.$refs.obs.reset();
				});
			},
			async onSubmit() {
				const result = await this.$refs.obs.validate();

				if (result) {
					this.$store.dispatch(REGISTER, {
						username: this.username,
						email: this.email,
						password: this.password,
					});
				}
			},
		},
	};
</script>