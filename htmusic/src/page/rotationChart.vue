<template>
  <div>
    <div class="bj" style="">
      <div class="n-swper" >
        <swiper :options="swiperOption">
          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/ERrZy5EpcwJnyZaWtEs0xw==/109951164501993643.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>

          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/BY1gL1RGAVSHxP6-9d3Mqw==/109951164501999516.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>

          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/fd7plFDXoxo6zDcd8xiFDg==/109951164503074726.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/tpVSE42INFhD-WGfCfT-6g==/109951164502783505.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/RtOkvM3Y4521BETYJGnung==/109951164501938448.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/558UH6GafPpJIhtt_veWyw==/109951164502890194.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/hYxQ0Agi5QWY2us4TpkOhw==/109951164501977658.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/yI5Bzm8MOx2aDboAxmVn7w==/109951164502009550.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img"
              src="http://p1.music.126.net/4AQ-neZ5OYjQ331CkA_I5g==/109951164503082619.jpg?imageView&quality=89"
              alt
            />
          </swiper-slide>
        </swiper>
        <div class="dots swiper-pagination" id="dots"></div>
        <div class="prev swiper-button-prev"></div>
        <div class="next swiper-button-next"></div>
        <div class="download f-pr">
          <router-link :to="{path:'/download'}" class="btn"></router-link>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span class="shadow"></span>
          <span class="shadowr"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "../../static/swiper.min.css";

export default {
  name: "",
  data() {
    return {
		
      swiper: null,
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        speed: 600,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        autoplayDisableOnInteraction: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        //开启循环模式
        loop: true
      }
    };
  },

  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="less" scoped>
div{
	outline: none;
}
span{
	outline: none;
	
}
button {
  outline: none;
}
.prev {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  text-indent: -9999px;
  left: -68px;
  background-position: 0 -360px;
  background-image: url(../../static/image/banner.png);
  color: transparent;
  
}
.prev:hover {
  background-position: 0 -430px;
}
.next {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  text-indent: -9999px;
  right: -68px;
  background-position: 0 -508px;
  background-image: url(../../static/image/banner.png);
}
.next:hover {
  background-image: url(../../static/image/arrr_hvr.png);

  background-position: 0 -438px;
}

.download p {
  margin: 10px auto;
  text-align: center;
  color: #8d8d8d;
  font-size: 12px;
}
.btn {
  display: block;
  width: 215px;
  height: 56px;
  margin: 186px 0 0 19px;
  background: url(../../static/image/download.png) no-repeat 0 0;
  background-position: 0 9999px;
  text-indent: -9999px;
}
.btn:hover {
  background-position: 0 -290px;
  text-decoration: none;
}
.img {
  width: 730px;
}
.swiper-container {
  width: 730px;
  height: 100%;
  float: left;
}
#dots {
  position: absolute;
  top: 259px;
  left: 0;
  width: 730px;
  height: 20px;
  text-align: center;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
.swiper-container {
  --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
.n-swper {
  position: relative;
  width: 982px;
  height: 285px;
  margin: 0 auto;
}
.download {
  position: absolute;
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 285px;
  background: url(../../static/image/download.png) no-repeat 0 0;
}
.shadow,
.shadowr {
  display: block;
  _display: none;
  position: absolute;
  top: 0;
  left: -20px;
  width: 20px;
  height: 285px;
  background-position: -1px 0;
}
.shadowr {
  left: auto;
  right: -20px;
  background-position: -20px 0;
}
.shadow,
.shadowr {
  background: url(../../static/image/banner.png) no-repeat 0 9999px;
}
.bj {
  background-size: 6000px;
  background-image: url("http://p1.music.126.net/ERrZy5EpcwJnyZaWtEs0xw==/109951164501993643.jpg?imageView&blur=40x20");
  background-position: center center;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  display: inline-block !important;
  width: 20px !important;
  height: 20px !important;
  background-image: url(../../static/image/banner.png) !important;
  background-position: 3px -343px !important;
  --swiper-theme-color: transparent;
  background: transparent;
}
#dots .swiper-pagination-bullet-active {
  display: inline-block !important;
  width: 20px !important;
  height: 20px !important;
  background-image: url(../../static/image/banner.png) !important;
  background-position: -16px -343px !important;
}
</style>