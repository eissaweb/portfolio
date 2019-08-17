<template>
	<div>
		<h5 class="display-4">Welcome to Eissaweb Blog</h5>
		<div v-for="post in posts" :key="post.id">
			<div class="blog-list bg-white rounded-lg py-1 px-2 mb-1">{{ post.title }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				posts: []
			}
		},
		created() {
			this.$axios.get('http://localhost/api/api/read.php')
			.then(res => {
				this.posts = res.data;
				console.log(this.posts);
			})
			.catch(error => console.log("Error Eissa"));
		}
	}
</script>
<style scoped="">
	.blog-list {
		width: 400px;
	}
</style>