<template>
  <div class="home">
    <navheader></navheader>
    <section class="home-main">
      <div class="col-left" v-for="(item, key1) in messagelist" :key="key1">
        <div class="left-item">
          <img :src="item.img" alt="tu">
          <div class="post-icon">
            <router-link :to="item.link">
              <svg aria-hidden="true" class="col-left-icon">
                <use :xlink:href="'#'+item.icon"></use>
              </svg>
              <p class="col-left-p1">{{item.title}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navheader from '@/components/navheader'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      messagelist: [
        {
          link: {name: 'blog'},
          icon: 'icon-blog',
          title: 'blog',
          img: '/static/img/index/1.jpg'
        },
        {
          link: {name: ''},
          icon: 'icon-music',
          title: 'Music',
          img: '/static/img/index/2.jpg'
        },
        {
          link: {name: ''},
          icon: 'icon-me',
          title: 'Me',
          img: '/static/img/index/3.jpg'
        },
        {
          link: {name: 'message'},
          icon: 'icon-msg',
          title: 'Message',
          img: '/static/img/index/4.jpg'
        },
        {
          link: {name: ''},
          icon: 'icon-example',
          title: 'Example',
          img: '/static/img/index/5.jpg'
        },
        {
          link: {name: ''},
          icon: 'icon-study',
          title: 'Study',
          img: '/static/img/index/6.jpg'
        }
      ]
    }
  },
  components: {
    navheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    background: #e6c1af;
    width: 100%;
  }
  .home-main{
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    margin: 0 auto;
    padding-top: 40px;
  }
  .col-left{
    overflow: hidden;
  }
  .col-left:nth-child(even){
    margin-top: 70px;
  }
  .col-left:nth-child(odd){
    margin-top: -30px;
  }
  .left-item{
    width: 320px;
    height: 400px;
    background: rgb(217, 135, 25);
    position: relative;
    margin-bottom:50px;
    box-shadow: 0 8px 16px hsla(40,33%,60%,.99);
  }
  .col-left img{
    height:200px;
    width:100%;
  }
  .post-icon{
    width: 140px;
    height: 140px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -70px;
    margin-top: -70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .col-left-icon{
    width: 80px;
    height: 135px;
    color: red;
  }
  .col-left-icon:hover{
    transform: scale(1.2,1.2);
    transition: all 0.5s ease-out;
  }
  @media screen and (max-width: 760px){
    .home-main{
      display: flex;
      flex-direction: colum;
      margin: 0 auto;
      width: 100%;
    }
    .left-item{
      width: 100%;
      height: 400px;
      background: rgb(217, 135, 25);
      position: relative;
      margin-bottom:50px;
      box-shadow: 0 8px 16px hsla(40,33%,60%,.99);
    }
  }
</style>
