<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import foot from '@/components/public/foot'
export default {
  name: 'App',
	components:{
		foot
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /* margin-top: 60px;*/
}
*{
	margin: 0;
	padding: 0;
}
.claer{
	clear:both;
}
</style>
