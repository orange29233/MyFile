<template>
	<div class="list">
		<div class="list_top">
			<input type="text" />
			<span></span>
		</div>
		<ul class="goodslist">
			<li>潮流女装</li>
			<li>潮流女装</li>
			<li>潮流女装</li>
			<li>潮流女装</li>
			<li>潮流女装</li>
			<li>潮流女装</li>
			<li>潮流女装</li>
			<li>潮流女装</li>
			<li>潮流女装</li>
		</ul>
		<div class="goods">
			
		</div>
	</div>
</template>

<script>

	export default{
		name:"list",

	}
</script>

<style>
	.list{
		width: 100%;
	}
	.list_top{
		width: 100%;
		height: 40px;
		background:#f8f8f8 ;
		padding-top: 5px;
		box-sizing: border-box;
		margin-bottom: 10px;
	}
	.list_top input{
		width: 60%;
		height: 30px;
		border-radius: 3px;
		border: 1px solid #ccc;
		outline: none;
	}
	.list_top span{
		display: inline-block;
		width: 50px;
		height: 30px;
		float: right;
		background: url(../../static/img/common/sprites.png) -117px 1px no-repeat;
	}
	.goodslist{
		width: 30%;
		float: left;
	}
	.goodslist li{
		height: 60px;
		border-top:1px solid #ccc ;
		border-right:1px solid #ccc ;
		text-align: center;
		line-height: 60px;
	}
	.goods{
		width: 70%;
	}
</style>