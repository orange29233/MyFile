<template>
	<div class="appindex">
		<router-view></router-view>
		<foot></foot>
	</div>
</template>

<script>
	import foot from '@/components/public/foot'
	export default{
		name:"appindex",
		components:{
			foot
		}
	}
</script>

<style>
</style>