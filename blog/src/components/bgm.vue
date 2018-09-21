<template>
  <div class="bgm">
    <div class="bgm-model">
      <img :src="autoplayMusic.img" alt="author" width="80" height="80">
      <div class="bgm-content">
        <div class="bgm-row">
          <span class="bgm-p1">{{autoplayMusic.name}}-{{autoplayMusic.singer}}</span>
          <svg aria-hidden="true" width="20" height="20">
            <use xlink:href="#icon-x"></use>
          </svg>
        </div>
        <div class="bgm-row1">
          <svg aria-hidden="true" width="30" height="30" fill="#bba477" @click="isPre">
            <use xlink:href="#icon-shangyishou"></use>
          </svg>
          <svg aria-hidden="true" width="30" height="30" fill="#bba477" v-if="showStop" @click="isPlay">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg aria-hidden="true" width="30" height="30" fill="#bba477" v-if="!showStop" @click="isPlay">
            <use xlink:href="#icon-pause"></use>
          </svg>
          <svg aria-hidden="true" width="30" height="30" fill="#bba477" @click="isNext">
            <use xlink:href="#icon-xiayishou"></use>
          </svg>
          <svg aria-hidden="true" width="30" height="30" fill="#bba477" @click="showList">
            <use xlink:href="#icon-more"></use>
          </svg>
        </div>
        <audio id="myAudio" :src="autoplayMusic.url" preload autoplay @ended="isNext"></audio>
      </div>
    </div>
    <transition name='fade'>
      <div class="bgm-musicList" v-show="showMusicList">
        <ul class="bgm-musicList-ul">
          <li class="bgm-musicList-list" v-for="(item , key) in musicList" :key="key" @click="playMusic(key)">
            <span style="color: rgb(178, 178, 174);">{{key}}</span>
            <span>{{item.name}}-{{item.singer}}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      musicList: [
        {
          id: '1',
          name: '腐草为萤',
          singer: '昼夜',
          img: '/static/img/index/1.jpg',
          url: '/static/music/bgm/fucaoweiying.mp3'
        },
        {
          id: '2',
          name: 'that girl',
          singer: '摩登兄弟',
          img: '/static/img/index/2.jpg',
          url: '/static/music/bgm/thatgirl.mp3'
        },
        {
          id: '3',
          name: '岁月神偷',
          singer: '金玟岐',
          img: '/static/img/index/3.jpg',
          url: '/static/music/bgm/suiyueshentou.mp3'
        },
        {
          id: '3',
          name: '动物世界',
          singer: '薛之谦',
          img: '/static/img/index/4.jpg',
          url: '/static/music/bgm/dongwushijie.mp3'
        }
      ],
      index: 0,
      autoplayMusic: [],
      showStop: false,
      showMusicList: false
    }
  },
  mounted () {
    this.getAutoplayMusic(this.index)
  },
  methods: {
    // 首先根据传进来的p为0，自动播放第一首歌曲,当p大于musicList.length时，重新赋值为0
    getAutoplayMusic (p) {
      if (p < this.musicList.length) {
        this.autoplayMusic = this.musicList[p]
        // console.log(this.autoplayMusic)
      } else {
        this.index = 0
        this.autoplayMusic = this.musicList[this.index]
      }
      if (p < 0) {
        this.index = this.musicList.length
        this.autoplayMusic = this.musicList[this.index]
      }
    },
    // 定义播放，暂停
    isPlay () {
      this.showStop = !this.showStop
      const myAudio = document.getElementById('myAudio')
      this.showStop ? myAudio.pause() : myAudio.play()
    },
    isNext () {
      this.index++
      this.showStop = false
      this.getAutoplayMusic(this.index)
    },
    isPre () {
      this.index--
      this.showStop = false
      this.getAutoplayMusic(this.index)
    },
    // 点击哪首歌曲就播放哪首
    playMusic (key) {
      this.index = key
      this.getAutoplayMusic(this.index)
    },
    // 弹出歌曲列表
    showList () {
      this.showMusicList = !this.showMusicList
    }
  }
}
</script>
<style>
  .bgm-model{
    position: fixed;
    bottom: 30px;
    left: 0;
    width:250px;
    height: 80px;
    background-color: hsla(0,0%,100%,.7);
    display: flex;
    flex-direction: row;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,.15);
    z-index: 10;
  }
  .bgm-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    /*justify-content: space-between*/
  }
  .bgm-p1{
    margin: 0 10px 0 10px;
    font-size: 13px;
    font-weight: 600;
    color: #bba477;
    width:120px;
  }
  .bgm-row1 svg{
    cursor: pointer;
  }
  .bgm-row1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:20px;
  }
  .bgm-musicList{
    position: fixed;
    bottom:116px;
    z-index: 10;
    width: 250px;
    height:auto;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,.15);
    background-color: hsla(0,0%,100%,.7);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  @keyframes myfirst {
    0% {
      width: 0;
    }
    100% {
      width: 250px;
    }
  }
  @keyframes mysecond {
    0% {
      width: 250px;
    }
    100% {
      width: 0;
    }
  }
  .bgm-musicList-ul{
    padding:0;
    margin: 0;
    width:100%;
  }
  .bgm-musicList-list{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;
    color: inherit;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    align-items: center;
  }
  .bgm-musicList-list:hover{
    color: #c1866a;
  }
  .bgm-musicList-list span{
    font-size: 14px;
    line-height: 20px;
    margin-right:10px;
  }
</style>
