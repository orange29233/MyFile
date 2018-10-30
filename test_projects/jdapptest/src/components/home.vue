<template>
	<div class="home">
		<!--头部-->
		<div class="hometop">
			<div class="top_left"></div>
			<div class="searchbox">
				<span></span>
				<input type="text"  />
				<div class="clear"></div>
			</div>
			<div class="top_right">
				<a href="#">登录</a>
			</div>
			<div class="clear"></div>
		</div>	
		<!--轮播-->
		<div class="lunbo">
			<div class="swiper-container">
			  	<div class="swiper-wrapper">
				    <div class="swiper-slide"><img src="../../static/img/home/home-headerSlide-1.jpg"  /></div>
				    <div class="swiper-slide"><img src="../../static/img/home/home-headerSlide-2.jpg"  /></div>
				    <div class="swiper-slide"><img src="../../static/img/home/home-headerSlide-3.jpg"  /></div>
				    <div class="swiper-slide"><img src="../../static/img/home/home-headerSlide-4.jpg"  /></div>
				    <div class="swiper-slide"><img src="../../static/img/home/home-headerSlide-5.jpg"  /></div>
			 	 </div>
			</div>			
		</div>
		
		<home-cont></home-cont>
		<p class="jdtt"><img src="../../static/img/home/home-toutiao.jpg" height="30px" /> 规格即使燕麦片超值装1782g</p>
		
		<!--轮播2-->
		<div class="lunbo2">
			<div class="swiper-container">
			  	<div class="swiper-wrapper">
				    <div class="swiper-slide"><img src="../../static/img/home/home-ad-1.jpg"  /></div>
				    <div class="swiper-slide"><img src="../../static/img/home/home-ad-2.jpg"  /></div>
				    <div class="swiper-slide"><img src="../../static/img/home/home-ad-3.jpg"  /></div>
			 	 </div>
			</div>			
		</div>
		
		</div>
			
		
		
	</div>
</template>

<script>
	import homeCont from '@/components/home/homeCont'
	export default{
		name:"home",
		components:{
			homeCont
		},
		mounted:function(){
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,//可选选项，自动滑动
				autoplay:{
					delay:2000
				}
			})
		}

	}
</script>

<style>
	.hometop{
		width: 100%;
		height: 50px;
		background: #140212;
	}
	.top_left{
		width: 23%;
		height: 50px;
		float: left;
		background: url(../../static/img/home/sprites.png) 11px -125px no-repeat;
		background-size:250px ;
	}
	.searchbox span{
		display: inline-block;
		width: 30px;
		height: 30px;
		background:url(../../static/img/home/sprites.png) -75px -133px no-repeat ;
		background-size:250px ;
		float: left;
	}
	.searchbox{
		width: 60%;
		height: 30px;
		margin-top:10px ;
		float: left;
		padding-left: 10px;
		box-sizing: border-box;
		float: left;
		background: white;
		border-radius: 15px ;
		
	}
	.searchbox input{
		width: 75%;
		height: 30px;
		border: none;
		outline: none;	
	}
	.top_right{
		float: left;
		width: 15%;
		height: 50px;
		line-height: 50px;
	}
	.top_right a{
		color: white;
		font-size: 20px;
		text-decoration: none;
	}
	.lunbo{
		width: 100%;
		
	}
	.lunbo img{
		width: 100%;
	}
	
	
	.jdtt{
		height: 30px;
		line-height: 30px;
		margin-top: 15px;
		text-align: left;
		text-indent: 5px;
	}
	.jdtt img{
		float: left;
	}

</style>