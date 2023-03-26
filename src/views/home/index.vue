<template>
  <div class="a">sssssss</div>
</template>

<script setup>
import $ from 'jquery';

$(document).ready(function () {
  $('p').click(function () {
    $(this).hide();
  });
});
</script>

<style lang="scss" scoped>
@import './css/s.scss';
</style>