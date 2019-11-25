<template>
	<div>
	<div class="header">
		<div class="header_center">
			<h1 class="header_logo"></h1>
			<ul class="header_title">
				<li :class="headerCss==index?'active':''" v-for="(item,index) in title" @click="active(index)">{{item}}</li>
			</ul>
			<div class="header_login">
			<span>登录</span>
			<img />
			</div>
			<div class="header_creation">创作者中心</div>
			<div class="header_seach">
				<div class="header_seach_logo"></div>
				<input type="text" placeholder="音乐/视频/电台/用户"/>
			</div>
		</div>
	</div>
	<div class="header_red">
		<div v-if="headerCss==0">
			<ul>
			<li :class="titleCss==index?'listactive':''" v-for="(item,index) in headerTitle" @click="titleActive(index)">
				<router-link :to="{path:goRouter[index]}" class="a">{{item}}</router-link>
			</li>
			</ul>
		</div>
	</div>
	</div>
</template>

<script>
export default{
	data() {
		return {
			title:['发现音乐','我的音乐','朋友','商城','音乐人','下载客户端'],
			headerTitle:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
			headerCss:0,
			titleCss:0,
			goRouter:["/","/Ranking","/songSheet","/anchor","/singer","/newCD"]
		}
	},
	methods: {
		active(index){
			if(index <3){
				this.headerCss = index
			}
		},
		titleActive(index){
			this.titleCss = index
		}
	},
	
}
</script>

<style scoped>
	.header{
		width:100%;
		background:#242424;
		color:#333333;
	}
	.header_center{
		width:1100px;
		height:70px;
		margin:0 auto;
	}
	.header_logo{
		width:176px;
		height:60px;
		float:left;
		background-position:0 0;
		background:url(../../static/image/topbar.png)
	}
	.header_title{
		float:left;
	}
	.header_title li{
		padding:0 19px;
		line-height:70px;
		color:#cccccc;
		float:left;
		position:relative;
	}
	.header_title li:hover{
		color:white;
		background:#000;
	}
	.header_title li:last-child::before{
		content:"";
		display:block;
		position:absolute;
		width:28px;
		height:19px;
		z-index:999;
		top:5px;
		right:-5px;
		background:url(../../static/image/topbar.png);
		background-position:-190px 5px;
	}
	.header_title .active{
		background:#000;
		position:relative;
		color:white;
	}
	.active:before{
		content:'';
		position:absolute;
		display: block;
		left: 50%;
		top: 64px;
		width: 12px;
		height: 7px;
		margin-left: -6px;
		overflow: hidden;
		background:url(../../static/image/topbar.png) no-repeat -226px 0;
	}
	.header_seach{
		float:right;
		border-radius:18px;
		width:158px;
		height:32px;
		overflow:hidden;
		background:white;
		margin-top:18px;
		margin-left:20px;
	}
	.header_seach_logo{
		float:left;
		height:32px;
		width:32px;
		background:url(../../static/image/topbar.png) 0 -99px white;
	}
	.header_seach input{
		width:77%;
		border:none;
		float:left;
		margin-top:8px;
		font-size:12px;
		outline:none;
	}
	.header_creation{
		float:right;
		margin-top:18px;
		margin-left:10px;
		color:#cccccc;
		font-size:12px;
		border:1px solid #cccccc;
		padding:8px 13px;
		border-radius:20px;
	}
	.header_login{
		float:right;
		margin-top:18px;
		margin-left:10px;
		font-size:14px;
		color:#cccccc;
		line-height:30px;
	}
	.header_red{
		width:100%;
		padding:2px 0px;
		background:#c20c0c;
	}
	.header_red>div{
		width:1100px;
		margin:0 auto;
	}
	.header_red>div>ul{
		margin-left:200px;
	}
	.header_red li{
		display:inline-block;
		color:white;
		border-radius:10px;
		padding:3px 15px;
		margin-right:30px;
		margin-bottom:5px;
		margin-top:5px;
		font-size:11px;
	}
	.a{
		color: white;
	}
	.listactive{
		background:#9b0909;
	}
</style>