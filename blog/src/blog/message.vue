<template>
  <div class="message">
    <navheader></navheader>
    <div class="message-btn">
      <a href="javascript:void(0)" @click="showPost">发表留言</a>
    </div>
    <div class="model" @click="closeModel" v-show="showFlag">
      <div class="message-post" @click.stop="toPost">
        <input type="text" id="name" placeholder="name" v-model="name" autocomplete="off">
        <input type="email" id="email" v-model="email" placeholder="email不会被公开" autocomplete="off">
        <textarea name="votico" v-model="text" cols="30" rows="10" id="votico" placeholder="Say something"></textarea>
        <button class="post-btn" @click="toPostMessage">发表留言</button>
      </div>
    </div>
    <div class="biaoqian">
      <div class="biaoqian-list" v-for="(item , key) in messageList" :key="key" :style="{left: item.left,top: item.top}" @mousedown="toggle(key , $event)">
        <img :src="item.headersrc" alt="" width="200" height="40">
        <p class="biaoqian-p1" :class="{sock:item.bc,mock:!item.bc}">{{item.text}}</p>
        <p class="biaoqian-p2" :class="{sock:item.bc,mock:!item.bc}">{{item.time}}</p>
        <img :src="item.footersrc" alt="" width="200" height="30">
      </div>
    </div>
  </div>
</template>
<script>
import navheader from '@/components/navheader'
import bgm from '@/components/bgm'
import axios from 'axios'
export default {
  data () {
    return {
      showFlag: false,
      biaoqianList: [
        {
          headersrc: '/static/img/message/1.png',
          text: '你真棒',
          time: '2018-04-08',
          footersrc: '/static/img/message/1-1.png',
          bc: true
        },
        {
          headersrc: '/static/img/message/2.png',
          text: '人间自有真情',
          time: '2018-04-09',
          footersrc: '/static/img/message/2-2.png',
          bc: false
        },
        {
          headersrc: '/static/img/message/1.png',
          text: '路飞会不会成为海贼王',
          time: '2018-04-08',
          footersrc: '/static/img/message/1-1.png',
          bc: true
        },
        {
          headersrc: '/static/img/message/2.png',
          text: '中国队LOL冠军',
          time: '2018-04-08',
          footersrc: '/static/img/message/2-2.png',
          bc: false
        },
        {
          headersrc: '/static/img/message/1.png',
          text: '李哥会不会退役呢',
          time: '2018-04-08',
          footersrc: '/static/img/message/1-1.png',
          bc: true
        },
        {
          headersrc: '/static/img/message/2.png',
          text: '有些事量力而为',
          time: '2018-04-08',
          footersrc: '/static/img/message/2-2.png',
          bc: false

        },
        {
          headersrc: '/static/img/message/1.png',
          text: '别太逞强',
          time: '2018-04-08',
          footersrc: '/static/img/message/1-1.png',
          bc: true
        },
        {
          headersrc: '/static/img/message/2.png',
          text: '哈哈哈哈',
          time: '2018-04-08',
          footersrc: '/static/img/message/2-2.png',
          bc: false
        }
      ],
      count: 1,
      name: '',
      email: '',
      text: '',
      messageList: ''
    }
  },
  components: {
    navheader,
    bgm
  },
  mounted () {
    this.getMessage()
  },
  methods: {
    getMessage () {
      axios.get('/users/message').then((res) => {
        // console.log(res.data)
        let resData = res.data
        if (resData.status === 0) {
          for (let i = 0, l = resData.result.length; i < l; i++) {
            if (i % 2 === 0) {
              resData.result[i].headersrc = '/static/img/message/1.png'
              resData.result[i].footersrc = '/static/img/message/1-1.png'
              resData.result[i].left = Math.random() * 1000 + 'px'
              resData.result[i].top = Math.random() * 500 + 'px'
              resData.result[i].bc = true
            } else {
              resData.result[i].headersrc = '/static/img/message/2.png'
              resData.result[i].footersrc = '/static/img/message/2-2.png'
              resData.result[i].left = Math.random() * 1000 + 'px'
              resData.result[i].top = Math.random() * 500 + 'px'
              resData.result[i].bc = false
            }
          }
          this.messageList = resData.result
          // console.log(resData.result)
          // console.log(this.messageList)
          // this.getRandom()
        }
      })
    },
    showPost () {
      this.showFlag = true
    },
    closeModel () {
      this.showFlag = false
    },
    toPost (e) {
    },
    // 随机获取标签的top和left值
    getRandom () {
      const biaoqianList = document.getElementsByClassName('biaoqian-list')
      const that = this
      console.log(biaoqianList.length)
      for (let i = 0; i < that.messageList.length; i++) {
        biaoqianList[i].style.left = Math.random() * 1000 + 'px'
        biaoqianList[i].style.top = Math.random() * 500 + 'px'
      }
    },
    // 鼠标按住拖动标签，改变left和top值
    toggle (key, event) {
      // console.log(key)
      // console.log(event)
      let oDiv = event.currentTarget
      oDiv.style.zIndex = this.count++
      let X = event.clientX - event.currentTarget.offsetLeft
      let Y = event.clientY - event.currentTarget.offsetTop
      // const offsetX = event.target.style.left
      document.onmousemove = (e) => {
        let l = e.clientX - X
        let t = e.clientY - Y
        oDiv.style.left = l + 'px'
        oDiv.style.top = t + 'px'
      }
      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    // 将数据提交到服务器中
    toPostMessage () {
      let that = this
      const o = new Date()
      const M = o.getMonth() + 1
      const time = o.getFullYear() + '-' + M + '-' + o.getDate()
      axios.post('/users/message', {
        name: this.name,
        email: this.email,
        text: this.text,
        time: time
      }).then((res) => {
        let resData = res.data
        // console.log(resData)
        if (resData.status === 0) {
          // console.log('成功')
          that.showFlag = false
          that.getMessage()
        }
      })
    }
  }
}
</script>
<style scoped>
  .message{
    width:100%;
  }
  .message-btn{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 80;
  }
  .message-btn a{
    border: 1px solid rgb(195, 156, 78);
    border-radius: 20px;
    padding: 5px 10px;
    color: #fff;
    background: rgb(195, 156, 78);
  }
   .message-btn a:hover{
    color: rgb(195, 156, 78);
    background: transparent;
    transition: all .5s ease;
  }
  .model{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.65);
    z-index: 99;
  }
  .message-post{
    display: flex;
    flex-direction: column;
    width:30%;
    padding:5px;
    background: #fff;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.8);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-animation: myfirst 1s ease;
    -o-animation: myfirst 1s ease;
    animation: myfirst 1s ease;
    top: 10%;
  }
  @keyframes myfirst {
    0% {
      top: 0
    }
    100% {
      top: 10%;
    }
  }
  .message-post input{
    border-radius: 15px;
    border: 1px solid #f5dfb4;
    padding: 5px;
    font-size: 14px;
    color: #333;
    margin: 10px 0;
    outline: medium;
  }
  .message-post textarea{
    border-radius: 15px;
    font-size: 16px;
    line-height: 10px;
    font-weight: 600;
    padding: 10px;
    outline: medium;
    margin-top: 10px;
  }
  .post-btn{
    border-radius: 20px;
    border: 1px solid #f5dfb4;
    padding: 5px;
    margin:10px auto;
    width: 90px;
    color: #fff;
    background: #d27777;
    cursor: pointer;
    outline: medium;
  }
  .biaoqian{
    width: 100%;
  }
  .biaoqian-list {
    width: 200px;
    height: auto;
    position: absolute;
    cursor: pointer;
  }
  .biaoqian-p1{
    width: 170px;
    height:80px;
    font-size: 14px;
    margin: 0;
    margin-top: -4px;
    margin-left: 12px;
    padding: 10px 12px 5px 5px;
    color: #6f5a5a;
    line-height: 20px;
  }
  .sock{
    background: #fff4f5;
  }
  .mock{
    background: #d1dfe4;
  }
  .biaoqian-p2 {
    width: 170px;
    font-size: 14px;
    margin: 0;
    margin-top: -4px;
    margin-left: 12px;
    padding: 10px 12px 5px 5px;
    color: #6f5a5a;
    line-height: 20px;
    text-align: end;
  }
</style>
