<template>
	<div>
		<div class="container-f bg-white mt-3 py-3 rounded-lg text-dark side-container">
			<div class="side-menu text-dark mt-3">
				<div class="side-profile text-center">
					<img src="../assets/thumb.png" alt="" class="rounded-circle">
					<p class="d-block text-dark mt-1">Eissaweb</p>
				</div>
				<div class="side-list px-3 mt-5">
					<div class="side-link mb-3 rounded-lg"
					v-for="route in routes" :key="route.path">
						<router-link :to="route.path" class="d-block py-1">
							<i class="fas" :class="route.icon"></i>
							<span class="d-sm-inline-block ml-3 d-none">{{ route.name }}</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				routes:  this.$router.options.routes,
				currentRoute: this.$router.currentRoute
			}
		}
	}
</script>
<style scoped="">
	.side-profile img {
		width: 70px;
		height: 70px;
	}
	.router-link-exact-active {
		color: #555;
	}
	
</style>