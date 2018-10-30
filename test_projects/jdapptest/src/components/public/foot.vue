<template>
	<div class="foot">
		<ul>
			<li v-for="(v,k) in arr" @click="setpage(k)" >
				<router-link :to="v.to" >
					<img :src="v.src"  /><br />
					<a :class="{foot_action:v.bol}">{{v.pagename}}</a>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"foot",
		data(){
			return{
				arr:[{pagename:"首页",src:"../../../static/img/1_aaa.png",bol:true,to:"/home"},
					 {pagename:"分类",src:"../../../static/img/2_bbb.png",bol:false,to:"/list"},
					 {pagename:"购物车",src:"../../../static/img/3_bbb.png",bol:false,to:"/shopping"},
					 {pagename:"我的",src:"../../../static/img/4_bbb.png",bol:false,to:"/myfile"},			
				]
			}
		},
		methods:{
			setpage:function(e){
				for(var i in this.arr){
					this.arr[i].bol = false
					this.arr[i].src = this.arr[i].src.replace("aaa","bbb")
				}
				this.arr[e].bol=true;
				this.arr[e].src = this.arr[e].src.replace("bbb","aaa")
			}
		}
	}
</script>

<style>
	.foot{
		width: 100%;
		height: 70px;
		background: #f8f8f8;
		position: fixed;
		bottom: 0;
		padding-top:10px;
		box-sizing: border-box;
	}
	.foot img{
		width: 35px;
		height: 30px;
	}
	.foot li{
		list-style: none;
		float: left;
		width: 25%;
		font-size: 14px;
		text-align: center;
	}
	.foot a{
		text-decoration: none;
		color: black;
	}
	a.foot_action{
		color: #387ef5;
	}
</style>