<template>
  <div class="page index">
    <div class="index-container">
      <my-banner />
      <movie-recommend />
      <recommend />
      <guess-you-like />
      <mt-navigation />
    </div>
  </div>
</template>

<script>
import MyBanner from '@/components/home/banner/index'
import MovieRecommend from '@/components/home/movieRecommend/index'
import MtNavigation from '@/components/home/mtNavigation/index'
import Recommend from '@/components/home/recommend/index'
import GuessYouLike from '@/components/home/guessYouLike/index'

export default {
  components: {
    MyBanner,
    MovieRecommend,
    Recommend,
    GuessYouLike,
    MtNavigation
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
