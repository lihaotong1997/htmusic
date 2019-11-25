<template>
  <div>
    <div id="footer">
      <div class="footContainer">
        <div class="content_left" style="margin-top: 21px;">
          <p style="display:block;margin-top:10px;">
            <a href="JavaScript:;" class="link">服务条款</a>
            <span class="line">|</span>
            <a href="JavaScript:;" class="link">隐私政策</a>
            <span class="line">|</span>
            <a href="JavaScript:;" class="link">儿童隐私政策</a>
            <span class="line">|</span>
            <a href="JavaScript:;" class="link">版权投诉指引</a>
            <span class="line">|</span>
            <a href="JavaScript:;" class="link">意见反馈</a>
            <span class="line">|</span>
          </p>
          <p class="link1" style="display:block;margin-top:8px;">
            <span style="margin-right:14px;float:left;">网易公司版权所有©1997-2019</span>
            <span style="float:left;">杭州乐读科技有限公司运营：</span>
            <a href="JavaScript:;" class="link2">浙网文[2018]3506-263号</a>
          </p>
          <p class="link1" style="display:block;margin-top:8px;">
            <span style="margin-right:14px;float:left;">违法和不良信息举报电话：0571-89853516</span>
            <span style="float:left;">举报邮箱：</span>
            <a href="JavaScript:;" class="link2">ncm5990@163.com</a>
          </p>
        </div>
        <ul class="content_right" style="float:right;width: 330px; margin-top: 21px;">
          <li class="unit">
            <div class="img1"></div>
            <span class="tt tt_auth"></span>
          </li>
          <li class="unit">
            <div class="img2"></div>
            <span class="tt tt_auth1"></span>
          </li>
          <li class="unit">
            <div class="img3"></div>
            <span class="tt tt_auth2"></span>
          </li>
          <li class="unit">
            <div class="img4"></div>
            <span class="tt tt_auth3"></span>
          </li>
        </ul>
      </div>
    </div>
    <div id="btmbar">
      <div class="playerbar">
        <div class="updn">
          <div class="updn_left">
            <a href="javascript:;" class="btn"></a>
          </div>
          <div class="updn_right"></div>
        </div>
      
      <div class="bg"></div>
      <div class="hand" title="展开播放条"></div>
      <div id="g_player">
        <div class="btns">
          <a href="javascript:;" class="btns1 prv" title="上一首(ctrl+←)">上一首</a>
          <a href="javascript:;" class="btns1 ply" title="上一首(ctrl+←)">播放/暂停</a>
          <a href="javascript:;" class="btns1 next" title="上一首(ctrl+←)">下一首</a>
        </div>
        <div class="head">
          <img
            src="http://p2.music.126.net/q0pAbNpw5OA6yo3RFMvAxQ==/109951164194081148.jpg?param=34y34"
          />
        </div>
        <div class="play">
          <div class="words">
            <a href="javaScript:;" class="thide name1">相信你的人</a>
            <div class="mv"></div>
            <span class="by">陈奕迅</span>
            <div class="lian"></div>

            <div class="block">
              <span class="demonstration"></span>
              <el-slider v-model="value1"></el-slider>
            </div>
          </div>
        </div>

        <div class="oper">
          <div class="si"></div>
          <div class="si1"></div>
        </div>
        <div class="flag">
          <div class="d1"></div>
          <div class="d2"></div>
          <span class="addfor">
            <span class="trip"></span>
          </span>
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
      value1: 0
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
	},
	
  }
};

</script>

<style scope>
#btmbar:hover .playerbar{
	top:-53px
}
.trip:hover {
  background-position: -42px -98px;
}
.d1:hover {
  background-position: -2px -248px;
}
.d2:hover {
  background-position: -3px -344px;
}
.si:hover {
  background-position: -88px -189px;
}
.si1:hover {
  background-position: -114px -189px;
}
.trip {
  display: block;
  float: none;
  width: 38px;
  padding-left: 21px;
  line-height: 27px;
  text-align: center;
  color: #666;
  text-shadow: 0 1px 0 #080707;
  text-indent: 0;
  text-decoration: none;
  height: 25px;
  margin: 11px 2px 0 0;
  background: url(../../static/image/playbar.png) no-repeat 0 9999px;
  background-position: -42px -68px;
}
.addfor {
  float: left;
  width: 59px;
  height: 36px;
}
.d1 {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  background: url(../../static/image/playbar.png);
  background-position: -2px -248px;
}
.d2 {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  background: url(../../static/image/playbar.png);
  background-position: -3px -344px;
}
/* .m-vl{
	    visibility: hidden; 
	    position: absolute;
    top: -113px;
    left: 9px;
    clear: both;
    width: 32px;
    height: 113px;
} */
.flag {
  float: left;
  position: relative;
  z-index: 10;
  width: 113px;
  padding-left: 13px;
  background-position: -147px -238px;
}
.si {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  background: url(../../static/image/playbar.png);
  background-position: -88px -163px;
}
.si1 {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  background: url(../../static/image/playbar.png);
  background-position: -114px -163px;
}
.oper {
  width: 60px;
  float: left;
}
.el-slider__button {
  border: none;
}
.el-slider__bar {
  background-color: rgb(197, 12, 17);
}
.el-slider__button-wrapper .el-tooltip {
  position: relative;
  top: 8px;
  left: 0px;
}
.el-slider__button-wrapper::after {
  /* visibility: hidden; */
  content: "";
  position: absolute;
  border-radius: 50%;
  left: 14px;
  top: 14px;
  width: 8px;
  height: 8px;
  background: rgb(197, 12, 17);
}
.block {
  width: 493px;
  position: relative;
  top: 13px;
  left: 0px;
}
.lian {
  background: url(../../static/image/playbar.png);
  float: left;
  width: 14px;
  height: 15px;
  margin: 7px 0 0 13px;
  background-position: -110px -103px;
}
.by {
  float: left;
  max-width: 220px;
  margin-left: 15px;
  color: #9b9b9b;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.mv {
  float: left;
  width: 19px;
  height: 17px;
  margin: 6px 0 0 3px;
  background: url(../../static/image/playbar.png);
  background-position: 0 -57px;
}

.name1 {
  max-width: 300px;
  float: left;
  color: #e8e8e8;
}
.thide {
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.words {
  font-size: 12px;
  height: 28px;
  /* overflow: hidden; */
  color: #e8e8e8;
  text-shadow: 0 1px 0 #171717;
  line-height: 28px;
}
.play {
  width: 608px;
  position: relative;
  float: left;
}
.head {
  margin: 6px 15px 0 0;
  position: relative;
  float: left;
  width: 34px;
  height: 34px;
}
.updn {
  position: relative;
  z-index: 11;
}
.updn_left {
  background: url(../../static/image/playbar.png);
  position: absolute;
  top: -14px;
  right: 15px;
  width: 52px;
  height: 67px;
  background-position: 0 -380px;
}
.updn_right {
  background: url(../../static/image/playbar.png);
  position: absolute;
  top: -1px;
  right: 0;
  width: 15px;
  height: 54px;
  background-position: -52px -393px;
  pointer-events: none;
}
.updn_left a {
  display: block;
  width: 18px;
  height: 18px;
  margin: 6px 0 0 17px;
  background: url(../../static/image/playbar_8.png);
  background-position: -80px -380px;
}

#footer a {
  text-decoration: none;
}
#footer li {
  list-style: none;
}
.content_left p {
  font-size: 12px;
  margin-top: -6px;
  overflow: hidden;
}
#footer {
  position: relative;
  height: 148px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
}
.footContainer {
  width: 980px;
  margin: 0 auto;
}
.content_left {
  float: left;
  width: 520px;
}
.link {
  float: left;
  color: #999;
  cursor: pointer;
}
.line {
  float: left;
  margin: 0 8px 0 10px;
  color: #c2c2c2;
}
.link:hover {
  text-decoration: underline;
}
.link1 {
  color: #666;
}
.link2 {
  cursor: pointer;
  display: block;
  float: left;
  color: #666;
}
.link2:hover {
  text-decoration: underline;
}
.unit {
  float: left;
  width: 60px;
  height: 70px;
  margin-left: 30px;
  text-align: center;
  color: #666;
}
.unit div {
  float: none;
  width: 50px;
  height: 45px;
  margin: 0 auto;
  background-image: url(../../static/image/foot_enter_new.png);
  background-size: 110px 450px;
}
.img1 {
  background-position: -60px -101px;
}
.img2 {
  background-position: 0px 0px;
}
.img3 {
  background-position: -60px -50px;
}
.img4 {
  background-position: 0 -101px;
}
.tt {
  display: inline-block;
  margin: 5px 5px 0;
  width: 52px;
  height: 9px;
  background-image: url(../../static/image/foot_enter_tt.png);
  background-size: 180px 100px;
}
.tt_auth {
  background-position: -1px -91px;
}
.tt_auth1 {
  background-position: 0 0;
}
.tt_auth2 {
  background-position: 0 -54px;
}
.tt_auth3 {
  background-position: -1px -72px;
}
.content_right .unit:first-child {
  margin-left: 0;
}
#btmbar {
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  /* height: 0; */
  width: 100%;
  z-index: 1002;
}
.move{
	top:53px;
}
.playerbar {
  position: absolute;
  zoom: 1;
  top: -7px;
  left: 0;
  width: 100%;
  height: 53px;
  margin: 0 auto;
  transition: all 0.5s;
}
.bg {
  background: url(../../static/image/playbar_8.png);
  height: 53px;
  zoom: 1;
  margin-right: 67px;
  background-position: 0 0;
  background-repeat: repeat-x;
}
.hand {
  position: absolute;
  top: -10px;
  width: 100%;
  height: 20px;
  cursor: pointer;
}
#g_player {
  position: absolute;
  left: 50%;
  top: 6px;
  z-index: 15;
  width: 980px;
  height: 47px;
  margin: 0 auto;
  margin-left: -490px;
}
.btns {
  z-index: 999;
  width: 137px;
  padding: 6px 0 0 0;
  float: left;
}
.btns1 {
  display: block;
  float: left;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  margin-top: 5px;
  text-indent: -9999px;
  background: url(../../static/image/playbar_8.png);
}
.prv {
  background-position: 0 -130px;
}
.ply {
  width: 36px;
  height: 36px;
  margin-top: 0;
  background-position: 0 -204px;
}
.next {
  background-position: -80px -130px;
}
</style>