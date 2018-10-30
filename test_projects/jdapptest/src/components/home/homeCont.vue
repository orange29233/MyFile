<template>
	<div class="homecont">
	<ul>
		<li v-for=" v in arr">
			<img :src="v.src"  />
			<p>{{v.title}}</p>
		</li>
		
	</ul>
	<div class="clear"></div>
	</div>
</template>

<script>
	export default{
		name:"homeCont",
		data(){
			return{
				arr:[{title:"分类查询",src:"../../../static/img/home/nav0.png"},
					 {title:"物流查询",src:"../../../static/img/home/nav1.png"},
					 {title:"分类查询",src:"../../../static/img/home/nav2.png"},
					 {title:"分类查询",src:"../../../static/img/home/nav3.png"},
					 {title:"分类查询",src:"../../../static/img/home/nav4.png"},
					 {title:"分类查询",src:"../../../static/img/home/nav5.png"},
					 {title:"分类查询",src:"../../../static/img/home/nav6.png"},
					 {title:"分类查询",src:"../../../static/img/home/nav7.png"}
				
				]
			}
		}
	}
</script>

<style>
	.homecont{
		width: 100%;
		text-align: center;
	}
	.homecont li{
		width: 25%;
		float: left;
		list-style: none;
		text-align: center;
		padding-top:15px ;
	}
	.homecont img{
		width: 50px;
	}
	.clear{
		clear: both;
	}
</style>