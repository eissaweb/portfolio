<template>
	<div class="containerr">
		<h4 class="display-4 text-secondary">Get In touch with me</h4>
		<form action="" class="w-75 w-md-100">
			<div class="form-group">
				<input type="text" class="form-control" placeholder="Name" v-model="contact.name">
			</div>
			<div class="form-group">
				<input type="email" class="form-control" placeholder="Email " v-model="contact.email">
			</div>
			<div class="form-group">
				<textarea class="form-control" rows="6" placeholder="Message" v-model="contact.message"></textarea>
			</div>
			<div class="alert alert-danger" v-if="contact.error">{{ contact.errorMessage }}</div>
			<div class="alert alert-success" v-if="contact.sent">Message has been sent, Thanks you will hear back.</div>
			<button class="btn btn-success d-sm-block" v-on:click="sendMessage">
				<i class="fas fa-paper-plane"></i> Send</button>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contact: {
					name: '',
					email: '',
					message: '',
					error: false,
					errorMessage: '',
					sent: false
				}
			}
		},
		methods: {
			sendMessage() {
				let contact = this.contact;
				this.contact.sent = false;
				if (contact.name == '' || contact.email == '' || contact.message == '') {
					this.contact.error = true;
					this.contact.errorMessage = 'Please Fill up all these inputs.';
					return;
				}
				this.contact.error = false;
				

				let url = 'http://sendmail.com';
				this.$axios.get('http://localhost/sendmail/')
				.then(res => {
					this.contact.sent = true;
					this.contact.message = '';
					this.contact.name = '';
					this.contact.email = '';
				})
				.catch(error => {
					this.contact.error = true;
					this.contact.errorMessage = 'and Error occured while sending message, please try again.';
				});
				
			}
		}
	}
</script>