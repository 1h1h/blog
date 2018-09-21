<template>
  <div class="blog">
    <navheader></navheader>
    <blogs></blogs>
    <bgm></bgm>
  </div>
</template>
<script>
import navheader from '@/components/navheader'
import blogs from '@/components/blogs'
import bgm from '@/components/bgm'
export default {
  data () {
    return {
    }
  },
  components: {
    navheader,
    blogs,
    bgm
  }
}
</script>
<style scoped>
  .blog{
    width:100%;
    background: #eae3d5;
  }
</style>
