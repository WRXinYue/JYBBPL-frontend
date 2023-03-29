<template>
  <div class="container">
    <video autoplay muted loop plays-inline class="back-video" src="./s/he1.mp4"></video>
  </div>
</template>

<script lang="ts" setup>
import $ from 'jquery';
import './js/s.js';

$(document).ready(function () {
  $('p').click(function () {
    $(this).hide();
  });
});
</script>

<style lang="scss" scoped>
@import './css/s.scss';
// @import './bootstrap-4.4.1-dist/css/bootstrap.min.css';
</style>
