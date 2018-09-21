<template>
  <div class="blogs">
    <div class="blogs-left">
      <ul class="blogs-left-ul">
        <li class="blogs-left-lists">
          <a class="blogs-p1">JavaScript</a>
        </li>
        <li class="blogs-left-lists">
          <a class="blogs-p1">JavaScript</a>
        </li>
        <li class="blogs-left-lists">
          <a class="blogs-p1">JavaScript</a>
        </li>
        <li class="blogs-left-lists">
          <a class="blogs-p1">JavaScript</a>
        </li>
        <li class="blogs-left-lists">
          <a class="blogs-p1">JavaScript</a>
        </li>
        <li class="blogs-left-lists">
          <a class="blogs-p1">JavaScript</a>
        </li>
        <li class="blogs-left-lists">
          <a class="blogs-p1">JavaScript</a>
        </li>
      </ul>
    </div>
    <div class="blogs-right">
      <ul class="blogs-right-ul">
        <li class="blogs-right-lists" v-for="(item, key) in blogList" :key="key">
          <div class="cy">
            <p class="blogs-p2">{{item.title}}</p>
            <span class="blogs-p3">{{item.time}}</span>
            <div class="fk-col">
              <p class="blogs-p4">{{item.title}}</p>
              <a href="#" class="blogs-p5">查看更多</a>
            </div>
            <div class="comment">
              <div class="bubble">
                <svg aria-hidden="true" width="30" height="30">
                  <use xlink:href="#icon-msg"></use>
                </svg></div>
              <div class="reply">回复</div>
            </div>
            <div class="tags"><i></i>{{item.type}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      blogList: [
        {
          id: 0,
          title: 'react搭建五子棋平台',
          time: '2018-08-22',
          type: 'javascript',
          count: ''
        },
        {
          id: 1,
          title: 'JS的原型链问题',
          time: '2018-08-22',
          type: 'javascript',
          count: ''
        },
        {
          id: 2,
          title: '深入浅出JS',
          time: '2018-08-22',
          type: 'javascript',
          count: ''
        },
        {
          id: 3,
          title: 'tcp和ip',
          time: '2018-08-22',
          type: 'javascript',
          count: ''
        }
      ]
    }
  }
}
</script>
<style scoped>
  .blogs{
    width: 60%;
    display: flex;
    flex-direction: row;
    /*justify-content: center;*/
    /*background: red;*/
    margin: 0 auto
  }
  .blogs-left{
    width:30%;
    padding-top:30px;
  }
  .blogs-left-ul{
    margin:0;
    padding: 0;
  }
  .blogs-left-lists{
    float: left;
    margin-right: 10px;
    margin-top: 40px;
    background: #f9faf4;

  }
  .blogs-p1{
    padding: 5px;
    background-color: rgb(219, 86, 64);
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.6);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
  }
  .blogs-right{
    width: 60%;
    height: auto;
    overflow-y: initial;
    overflow-x: initial
  }
  .blogs-right-lists{
    width: 600px;
    height: auto;
    background: #f9faf4;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.08);
    padding: 5px;
    margin-bottom: 20px;
    animation: active 1s ease;
  }
  @keyframes active {
    0% {
      transform: scale(-0.5,-0.5);
    }
    100% {
      transform: scale(1,1)
    }
  }
  .cy{
    border: 1px dashed #c9c9c7;
    position: relative;
    padding: 33px 20px;
  }
  .blogs-p2{
    color: #db5640;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 10px;
    text-align: center;
  }
  .blogs-p3{
    display: block;
    text-align: center;
    color: #b2b2ae;
    font-size: 12px;
    margin-bottom: 22px;
    line-height: 19px;
  }
  .fk-col{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .blogs-p4{
    font-size: 14px;
    line-height: 30px;
    text-align: justify;
    margin-right: 10px;
  }
  .blogs-p5{
    color: #b2b2ae;
    font-size: 12px;
  }
  .comment{
    margin-top: 20px;
    text-align: center;
    cursor: pointer
  }
  .reply{
    color: #b2b2ae;
    font-size: 12px;
    margin-top: 5px;
  }
  .tags{
    display: inline-block;
    text-decoration: none;
    font-weight: 400;
    font-size: 10px;
    color: #fff;
    height: 18px;
    line-height: 18px;
    float: left;
    padding: 0 5px 0 10px;
    position: relative;
    border-radius: 0 5px 5px 0;
    margin: 5px 9px 5px 8px;
    background-color: rgb(219, 86, 64);
  }
  .tags i{
    position: absolute;
    right: 100%;
    font-size: 0;
    line-height: 0;
    border: 9px solid transparent;
  }
</style>
