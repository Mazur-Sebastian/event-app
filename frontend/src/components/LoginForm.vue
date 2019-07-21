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
							<ValidationObserver ref="obs">
								<v-form>
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

	import PasswordInput from './elements/PasswordInput';
	import { LOGIN } from '@/store/actions.type';
	import FormInput from './elements/FormInput.vue';

	export default {
		components: {
			PasswordInput,
			FormInput,
			ValidationObserver,
		},
		data: () => ({
			email: '',
			password: '',
			checkbox: false,
			showPassword: false,
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
					this.$store.dispatch(LOGIN, {
						email: this.email,
						password: this.password,
					});
				}
			},
		},
	};
</script>