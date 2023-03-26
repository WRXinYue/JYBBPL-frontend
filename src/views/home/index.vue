<template>
  <h1>Hello 奈亚子,奈子大大滴</h1>
  <h2>sss</h2>
  <h3>奈亚子吃了一个小饼干</h3>
  <h3>666666666666666666</h3>
  <p>If you click on me, I will disappear.</p>
  <p>Click me away!</p>
  <p>Click me too!</p>
</template>

<script setup>
import $ from 'jquery';

$(document).ready(function () {
  $('p').click(function () {
    $(this).hide();
  });
});
</script>

<style lang="scss" scoped></style>
