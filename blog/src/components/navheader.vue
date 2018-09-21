<template>
  <div class="header">
    <button class="nav_toggle" @click="showScale">
      <div class="toggle_body" :class="{'active': checkFlag?true:false}">
        <div class="toggle-item" style="left: 0px; top: 0px;"></div><div class="toggle-item" style="left: 10px; top: 0px;"></div><div class="toggle-item" style="left: 20px; top: 0px;"></div><div class="toggle-item" style="left: 0px; top: 10px;"></div><div class="toggle-item" style="left: 10px; top: 10px;"></div><div class="toggle-item" style="left: 20px; top: 10px;"></div><div class="toggle-item" style="left: 0px; top: 20px;"></div><div class="toggle-item" style="left: 10px; top: 20px;"></div><div class="toggle-item" style="left: 20px; top: 20px;"></div>
      </div>
    </button>
    <div class="bg-mack mack-center" v-show="checkFlag" @click="closeMack">
      <div class="mack-box" @click.stop="toLink">
        <ul class="mack-ul">
          <li class="mack-list" v-for="(item , key) in toLinkList" :key="key">
            <router-link :to="item.link" class="mack-link">
              <svg aria-hidden="true" class="icon">
                <use :xlink:href="'#' + item.icon"></use>
              </svg>
              <p class="mack-list-p1">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkFlag: false,
      toLinkList: [
        {
          link: {name: 'home'},
          icon: 'icon-index',
          title: 'Home'
        },
        {
          link: {name: 'message'},
          icon: 'icon-xiaoxi-copy',
          title: 'Message'
        },
        {
          link: {name: ''},
          icon: 'icon-sheji-youxiang',
          title: 'Email'
        },
        {
          link: {name: ''},
          icon: 'icon-redian',
          title: 'Hot'
        },
        {
          link: {name: ''},
          icon: 'icon-wode',
          title: 'Me'
        },
        {
          link: {name: ''},
          icon: 'icon-yinle1',
          title: 'Music'
        },
        {
          link: {name: ''},
          icon: 'icon-github',
          title: 'Github'
        },
        {
          link: {name: 'blog'},
          icon: 'icon-weibo',
          title: 'Blog'
        },
        {
          link: {name: ''},
          icon: 'icon-qita',
          title: 'More'
        }
      ]
    }
  },
  methods: {
    showScale () {
      this.checkFlag = !this.checkFlag
    },
    closeMack () {
      this.checkFlag = false
    },
    toLink (e) {
      console.log('阻止冒泡事件')
    }
  }
}
</script>
<style scoped>
  .header{
    position: fixed;
    z-index: 99;
    top: 20px;
    left: 20px;
  }
  .nav_toggle{
    margin: 20px;
    outline: none;
    border: none;
    background: none;
    position: relative;
    z-index: 10;
  }
  .toggle_body{
    width: 24px;
    height: 24px;
    position: relative;
  }
  .toggle-item{
    height: 4px;
    width: 4px;
    background-color: #c1866a;
    position: absolute;
  }
  .active{
    transform: scale(-0.5,-0.5);
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .bg-mack{
    background-color: rgba(0,0,0,0.65);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .mack-center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mack-box{
    width: 390px;
    height: 390px;
    /*background: red*/
  }
  .mack-ul{
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
  }
  .mack-list{
    height: 100px;
    width: 30%;
    border: 1px solid hsla(0,0%,86%,.1);
    text-align: center;
  }
  .icon{
    height: 25px;
    width: 25px;
    margin-top: 25px;
  }
  .mack-list-p1{
    margin-top: 10px;
    color: #fff;
  }
  .mack-list-p1:hover{
    color: #c1866a;
  }
</style>
