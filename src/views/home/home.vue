<template>
  <el-container class="">
    <el-header class="DaTableup d">
      <el-row :gutter="20" class="Tableup" style="margin-right: 0">
        <el-col :lg="10">
          <div class="grid-content ep-bg-purple yangshizuo">
            <span>健身</span>
            <span>培训</span>
          </div>
        </el-col>
        <el-col :lg="10">
          <div class="grid-content ep-bg-purple yangshiyou">
            <!-- 导航按钮循环 -->
            <div v-for="(button, index) in buttons" :key="index">
              <el-button style="color: #ffb113" link @click="goPage">
                {{ button }}
              </el-button>
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
          <img src="@/assets/img/fitness.webp" alt="aa" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/fitness2.jpg" alt="aa" />
        </swiper-slide>
      </swiper>
      <div class="fom">
        <el-form :model="form" label-width="120px">
          <el-form-item label="姓名">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.shouji" />
          </el-form-item>
          <el-form-item label="入班时间">
            <el-col :span="11">
              <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
            </el-col>
          </el-form-item>
          <el-form-item label="留言">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <!-- <el-button>Cancel</el-button> -->
          </el-form-item>
        </el-form>
      </div>
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
import { useRouter } from 'vue-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
// import { Navigation } from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Color from 'element-plus/es/components/color-picker/src/color';
// 表单引入
import { reactive } from 'vue';

const form = reactive({
  name: '',
  shouji: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const onSubmit = () => {
  console.log('submit!');
};
const modules = ref([Autoplay, Pagination, Navigation]);
const router = useRouter();

const buttons = ['首页', '关于我们', '私课教练', '在线报名', '行业'];

const goPage = () => {
  router.push({ name: 'home2' });
};
</script>
<style lang="scss" scoped>
.bg-dx {
  img {
    width: 100%;
  }
}
.d {
  // width: 2117px;
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
      button {
        color: #eae880;
        @apply text-lg;
        :hover {
          color: #ffb113;
        }
      }
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
    width: 100%;
    margin: 0 auto;
    div {
      width: 100%;
      height: 935px;
    }
  }
}
.fom {
  z-index: 2;
  width: 100%;
  height: 467px;
  background-color: #ffb113;
  position: relative;
  form {
    position: absolute;
    margin: 0 auto;
  }
}
</style>
