<template>
  <el-container class="d">
    <el-header class="DaTableup">
      <el-row :gutter="20" class="Tableup" style="margin-right: 0">
        <el-col :lg="10">
          <div class="grid-content ep-bg-purple yangshizuo">
            <span>健身</span>
            <span>培训</span>
          </div>
        </el-col>
        <el-col :lg="10">
          <div class="grid-content ep-bg-purple yangshiyou">
            <div>
              <router-link to="/index" style="color: aliceblue">aa</router-link>
              <router-link to="index">
                <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{
                  button.text
                }}</el-button>
              </router-link>
            </div>
            <div>
              <router-link to="/" style="color: aliceblue">aaaa</router-link>
              <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{
                button.text
              }}</el-button>
            </div>
            <div>
              <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{
                button.text
              }}</el-button>
            </div>
            <div>
              <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{
                button.text
              }}</el-button>
            </div>
            <div>
              <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{
                button.text
              }}</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main style="padding: 0">
      <swiper
        :space-between="30"
        :centered-slides="true"
        :autoplay="{ delay: 2500 }"
        :navigation="true"
        :modules="modules"
        class="mySwiper bg-auto bg-dx"
        style="height: 90vh"
      >
        <swiper-slide>
          <img src="./views/home/img/AD0I2PHaBhACGAAgr-2IygUomor7ugIwgA840gY.jpg.webp" alt="aa" />
        </swiper-slide>
        <swiper-slide>
          <img src="./views/home/img/AD0I2PHaBhACGAAgsf2IygUo5JaJPjCADzjSBg.jpg" alt="aa" />
        </swiper-slide>
      </swiper>
    </el-main>
  </el-container>
  <div class="main2">
    <div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
// import { Navigation } from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper';

const modules = ref([Autoplay, Pagination, Navigation]);

// 按钮
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
];
</script>
<style lang="scss" scoped>
.bg-dx {
  img {
    width: 100%;
  }
}

。d {
  min-width: 1600px;
}

.Tableup {
  height: 100%;
  @apply flex bg-dark-900 text-6xl;
  .yangshizuo {
    span:nth-child(1) {
      @apply text-orange-400;
    }

    @apply text-light-100 ml-[25rem] mt-4;
  }

  .yangshiyou {
    @apply flex justify-between items-center mt-4;

    div {
      background-color: aqua;
      @apply w-16 h-[55px];
    }
  }
}

.DaTableup {
  padding: 0;
  height: 90px;
}
.main2 {
  height: 100%;
  width: 100%;
  div {
    height: 5134px;
    width: 1200px;
    margin: 0 auto;
    div {
      width: 100%;
      height: 935px;
    }
  }
}
</style>
