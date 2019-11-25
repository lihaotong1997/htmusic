<template>
	<div class="left">
		<div class="g-mn1">
			<div class="g-wrap3">
				<!--第一部分：热门推荐-->
				<div>
					<div class="v-hd2">
						<a href="javascript:;" class="f-ff2">热门推荐</a>
						<div class="tab">
							<a href="javascript:;" class="s-fc3">华语</a>
							<span class="line">|</span>
							<a href="javascript:;" class="s-fc3">流行</a>
							<span class="line">|</span>
							<a href="javascript:;" class="s-fc3">摇滚</a>
							<span class="line">|</span>
							<a href="javascript:;" class="s-fc3">民谣</a>
							<span class="line">|</span>
							<a href="javascript:;" class="s-fc3">电子</a>
						</div>
						<div class="more">
							<a href="javascript:;" class="s-fc3">更多</a>
							<i class="cor">&nbsp;</i>
						</div>
					</div>
					<!--数据-->
					<ul class="m-cvrlst">
						<li v-for="(item,index) in contentOne">
							<div class="u-cover">
								<img :src="item.image"/>
								<a href="javascript:;" class="msk"></a>
								<div class="bottom">
									<a href="javascript:;" class="icon-play"></a>
									<span class="icon-headset"></span>
									<span class="nb">{{item.num}}</span>
								</div>
							</div>
							<p class="dec">
								<a href="javascript:;" class="s-fc0">{{item.title}}</a>
							</p>
						</li>
					</ul>
				</div>
				<!--第二部分：新碟上架-->
				<div>
					<div class="v-hd2">
						<a href="javascript:;" class="f-ff2">新碟上架</a>
						<div class="more">
							<a href="javascript:;" class="s-fc3">更多</a>
							<i class="cor">&nbsp;</i>
						</div>
					</div>
					<!--数据-->
					<div class="swiper-container inner">
					    <div class="swiper-wrapper f-pr">
						    <div class="swiper-slide f-cb">
						    	<div class="li" v-for="(item,index) in contentTwo1">
							   		<div class="u-cover1">
							   			<img :src="item.image"/>
							  			<a href="" class="Lovepoem"></a>
						    			<a href="" class="icon-play1"></a>
						    		</div>
						    		<p class="f-thide">
						    			<a href="" class="s-fc0">{{item.title}}</a>
						    		</p>
						    		<p class="f-thide">
						    			<a href="" class="s-fc3">{{item.singer}}</a>
						    		</p>
						    	</div>
						    </div>
						    <div class="swiper-slide f-cb">
					    		<div class="li" v-for="(item,index) in contentTwo2">
						    		<div class="u-cover1">
						    			<img :src="item.image"/>
						    			<a href="" class="Lovepoem"></a>
						    			<a href="" class="icon-play1"></a>
						    		</div>
						    		<p class="f-thide">
						    			<a href="" class="s-fc0">{{item.title}}</a>
							   		</p>
							   		<p class="f-thide">
							   			<a href="" class="s-fc3">{{item.singer}}</a>
							   		</p>
							    </div>
						    </div>
						</div>
						<div class="swiper-button-prev pre"></div>
    					<div class="swiper-button-next nxt"></div>
					</div>
				</div>
				<!--第三部分：榜单-->
				<div>
					<div class="v-hd2">
						<a href="javascript:;" class="f-ff2">榜单</a>
						<div class="more">
							<a href="javascript:;" class="s-fc3">更多</a>
							<i class="cor">&nbsp;</i>
						</div>
					</div>
					<!--数据-->
					<div class="n-bilst">
						<dl class="blk" v-for="(item,index) in list">
							<dt class="top">
								<div class="u-cover-4">
									<img :src="item.logo"/>
								</div>
								<div class="tit">
									<div class="f-thide">{{item.title}}</div>
									<div class="btn">
										<a href="" class="s-bg-9"></a>
										<a href="" class="s-bg-10"></a>
									</div>
								</div>
							</dt>
							<dd>
								<ol>
									<li v-for="(item,index) in item.text">
										<span class="no-top">{{index+1}}</span>
										<a href="" class="s-fc0">{{item}}</a>
										<div class="oper">
											<a href="" class="s-bg-11"></a>
											<a href="" class="u-icn-81"></a>
											<a href="" class="s-bg-12"></a>
										</div>
									</li>
								</ol>
								<div class="more">
									<a href="" class="s-fc0" style="text-align: right;">查看全部></a>
								</div>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
export default{
	data(){
		return{
			contentOne:[],
			contentTwo1:[],
			contentTwo2:[],
			list:[]
		}
	},
	mounted(){
		this.$http.get("../../static/data/Popular.json").then((res)=>{
			for(let i=0;i<res.data.length;i++){
				this.contentOne.push(res.data[i])
			}
		})
		this.$http.get("../../static/data/newCD.json").then((res)=>{
			for(let i=0;i<res.data.length;i++){
				if(i<5){
					this.contentTwo1.push(res.data[i])
				}else{
					this.contentTwo2.push(res.data[i])
				}
			}
		})
		this.$http.get("../../static/data/List.json").then((res)=>{
			for(let i=0;i<res.data.length;i++){
				this.list.push(res.data[i])
			}
		})
		new Swiper ('.swiper-container', {
		    loop: true,
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
	  	}) 
	}
}
</script>

<style scoped>
	li{list-style: none;}
	span{
		display: block;
	}
	em, i {
	    font-style: normal;
	    text-align: left;
	    font-size: inherit;
	}
	a{
		text-decoration: none;
		color: #333;
		cursor: pointer;
		display: block;
	}
	.g-mn1{
		width: 729px;
		margin-right: 251px;
	}
	.g-wrap3{
		padding: 20px 20px 40px;
	}
	.v-hd2{
		height: 33px;
	    padding: 0 10px 0 34px;
	    background: url(../../static/image/index.png) no-repeat 0 9999px;
	    background-position: -225px -156px;
	    border-bottom: 2px solid #C10D0C;
	}
	.f-ff2{
		float: left;
	    font-size: 20px;
	    font-weight: normal;
	    line-height: 28px;
	}
	.tab{
		float: left;
    	margin: 7px 0 0 20px;
	}
	.s-fc3{
		color: #666;
		float: left;
		font-size: 12px;
	}
	.s-fc3:hover{
		text-decoration: underline;
	}
	.line {
	    margin: 0 10px;
	    color: #ccc;
	    float: left;
	    font-size: 12px;
	}
	.more{
		float: right;
    	margin-top: 9px;
	}
	.cor{
		display: inline-block;
	    width: 12px;
	    height: 12px;
	    margin-left: 4px;
	    vertical-align: middle;
	    background: url(../../static/image/index.png) no-repeat 0 9999px;
	    background-position: 0 -240px;
	    float: left;
	    margin-top: 2px;
	}
	.m-cvrlst{
		margin: 20px 0 0 -42px;
		overflow: hidden;
	}
	.m-cvrlst li{
		width: 140px;
	    height: 204px;
	    padding: 0 0 30px 50px;
	    padding-left: 42px;
	    float: left;
	    display: inline-block;
	    overflow: hidden;
	    line-height: 1.4;
	}
	.u-cover{
		width: 140px;
    	height: 140px;
    	position: relative;
	}
	.msk{
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}
	.bottom{
		position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 27px;
	    background: url(../../static/image/coverall.png) no-repeat;
	    background-position: 0 -537px;
	    color: #ccc;
	}
	.icon-play{
		position: absolute;
	    right: 10px;
	    bottom: 5px;
	    width: 16px;
	    height: 17px;
	    background: url(../../static/image/iconall.png) no-repeat;
	    background-position: 0 0;
	}
	.icon-play:hover{
		background-position: 0 -60px;
	}
	.icon-headset{
		float: left;
	    width: 14px;
	    height: 11px;
	    background: url(../../static/image/iconall.png) no-repeat;
	    background-position: 0 -24px;
	    margin: 9px 5px 9px 10px;
	}
	.nb{
		float: left;
    	margin: 7px 0 0 0;
    	color: #ccc;
    	line-height: 1.4;
    	font-size: 12px;
	}
	.dec{
		margin: 8px 0 3px;
    	font-size: 14px;
    	width: 100%;
	}
	.s-fc0{
		color: #000;
	}
	.s-fc0:hover{
		text-decoration: underline;
	}
	.left{
		float: left;
		width: 100%;
		margin-right: -250px;
	}
	.swiper-container {
        position: relative;
	    zoom: 1;
	    height: 186px;
	    margin: 20px 0 37px;
	    border: 1px solid #d3d3d3;
    }
    .inner{
    	height: 184px;
	    padding-left: 16px;
	    background: #f5f5f5;
	    border: 1px solid #fff;
    }
    .pre{
    	position: absolute;
	    top: 100px;
	    width: 17px;
	    height: 17px;
	    left:4px;
	    background: url(../../static/image/index.png) no-repeat 0 9999px;
	    background-position: -260px -75px;
    }
    .pre:after{
    	content: "";
    }
    .nxt{
    	position: absolute;
	    top: 100px;
	    width: 17px;
	    height: 17px;
	    right:4px;
	    background: url(../../static/image/index.png) no-repeat 0 9999px;;
	    background-position: -300px -75px;
    }
    .nxt:after{
    	content: "";
    }
    .f-cb{
    	width: 645px;
    	height: auto;
    	margin: 28px 0 0 0;
    }
    .f-pr{
    	width: 645px;
    	height: 180px;
    }
    .li{
    	float: left;
	    display: inline;
	    width: 118px;
	    height: 150px;
	    margin-left: 11px;
	    background: url(../../static/image/index.png) no-repeat 0 9999px;
	    background-position: -260px 100px;
    }
	.u-cover1{
		margin-bottom: 7px;
		width: 100px;
    	height: 100px;
    	position: relative;
    	display: block;
	}
	.Lovepoem{
		width: 118px;
	    height: 100px;
	    background: url(../../static/image/coverall.png) no-repeat;
	    background-position: 0 -570px;
	    position: absolute;
	    top: 0;
	    left: 0;
	}
	.icon-play1{
		display: none;
		left: 72px;
	    width: 22px;
	    height: 22px;
	    background: url(../../static/image/iconall.png) no-repeat;
	    background-position: 0 -85px;
	    position: absolute;
	    right: 10px;
	    bottom: 5px;
	}
	.u-cover1:hover .icon-play1{
		display: block;
	}
	.f-thide{
		width: 90%;
    	line-height: 18px;
    	overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	}
	.n-bilst{
		height: 472px;
	    margin-top: 20px;
	    padding-left: 1px;
	    background: url(../../static/image/index_bill.png) no-repeat;
	}
	.blk{
		float: left;
    	width: 229px;
	}
	.top{
		height: 100px;
    	padding: 20px 0 0 19px;
	}
	.u-cover-4{
		float: left;
	    display: inline;
	    width: 80px;
	    height: 80px;
	    position: relative;
	}
	.u-cover-4 img{
		width: 100%;
		height: 100%;
	}
	.tit{
		float: left;
	    width: 116px;
	    margin: 6px 0 0 10px;
	}
	.f-thide{
		width: 100%;
		font-size: 14px;
		font-weight: 700;
	}
	.f-thide:hover{
		text-decoration: underline;
    	color: #333;
    	cursor: pointer;
	}
	.btn{
		margin-top: 10px;
	}
	.s-bg-9{
		display: block;
	    float: left;
	    width: 22px;
	    height: 22px;
	    margin-right: 10px;
	    text-indent: -9999px;
	    background: url(../../static/image/index.png) no-repeat 0 9999px;
	    background-position: -267px -205px;
	}
	.s-bg-9:hover {
	    background-position: -267px -235px;
	}
	.s-bg-10{
		display: block;
	    float: left;
	    width: 22px;
	    height: 22px;
	    margin-right: 10px;
	    text-indent: -9999px;
	    background: url(../../static/image/index.png) no-repeat 0 9999px;
	    background-position: -300px -205px;
	}
	.s-bg-10:hover {
	    background-position: -300px -235px;
	}
	.n-bilst ol {
	    height: 319px;
	    margin-left: 50px;
	    line-height: 32px;
	}
	.n-bilst ol li {
	    height: 32px;
	    position: relative;
	}
	.no-top{
		color: #c10d0c;
		float: left;
	    position: relative;
	    width: 35px;
	    height: 32px;
	    margin-left: -35px;
	    text-align: center;
	    font-size: 16px;
	}
	.s-fc0{
		float: left;
	    width: 170px;
	    height: 32px;
	    font-size: 12px;
	}
	.oper{
		display: none;
	    float: right;
	    width: 82px;
	    margin-top: 7px;
	    position: absolute;
	    right: 0;
	}
	.n-bilst ol li:hover .oper{
		display: block;
	}
	.n-bilst ol .oper a {
	    float: left;
	    width: 17px;
	    height: 17px;
	    margin-right: 10px;
	    background: url(../../static/image/index.png) no-repeat 0 9999px;
	    background-position: -267px -268px;
	}
	.s-bg-11:hover {
	    background-position: -267px -288px;
	}
	.n-bilst ol .oper .u-icn-81 {
	    margin: 2px 6px 0 0;
	    float: left;
	    width: 17px;
	    height: 17px;
	    background: url(../../static/image/icon.png) no-repeat 0 9999px;
	    background-position: 0 -700px;
	}
	.n-bilst ol .oper .u-icn-81:hover {
	    background-position: -22px -700px;
	}
	.n-bilst ol .oper .s-bg-12 {
		float: left;
	    width: 17px;
	    height: 17px;
	    margin-right: 10px;
		background: url(../../static/image/index.png) no-repeat 0 9999px;
	    background-position: -297px -268px;
	}
	.n-bilst ol .oper .s-bg-12:hover{
	    background-position: -297px -288px;
	}
</style>