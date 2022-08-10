<template>
  <div class="home">
    <loading-cpt v-if="loading" width="100" height="100" outsideColor="red" insideColor="yellow" :duration="2">
      <div class="loading-text" >數據大屏加載中...</div>
    </loading-cpt>
    <project-container v-else :options="{width:3840, height:2160}">
      <div class="header">
        <project-header />
      </div>
      <div class="separator"></div>
      <div class="main-content">
        <div class="left">
          <div class="left-1">
            <total-user :today-user="todayUser" :growth-last-day="growthLastDay" :growth-last-month="growthLastMonth"></total-user>
          </div>
          <div class="left-2">
            
            <average-age :data="ageData" :avg-age="averageAge"></average-age>
          </div>
          <div class="left-3">left-3</div>
          <div class="left-4">left-4</div>
          <div class="left-5">left-5</div>
          <div class="left-6">left-6</div>
        </div>
        <div class="right">
          <div class="right-top-1">right-top-1</div>
          <div class="right-top-2">right-top-2</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left-1">right-left-1</div>
              <div class="right-left-2">right-left-2</div>
              <div class="right-left-3">right-left-3</div>
              <div class="right-left-4">right-left-4</div>
            </div>
            <div class="right-right">
              <div class="right-right-1">right-right-1</div>
              <div class="right-right-2">right-right-2</div>
            </div>
          </div>
        </div>
      </div>
    </project-container>
  </div>
</template>
<script setup>
import ProjectContainer from '@/components/Container/Container.vue'
import ProjectHeader from '@/components/Layout/TopHeader'
import AverageAge from '@/components/AverageAge'
import TotalUser from '@/components/TotalUser'
import LoadingCpt from '@/components/SvgLoading/Loading.vue'; 
import { ref, onMounted } from 'vue'
import useScreenData from '@/hooks/useScreenData.js'
const loading = ref(false)
const {
  todayUser,
  growthLastDay,
  growthLastMonth,
  ageData,
  averageAge
} = useScreenData()

onMounted(() => {
  setTimeout(() => {
    // loading.value = false
  }, 2500)
  // { ...screenData }
  // console.log("ageData",ageData)
})

</script>
<style lang="scss" scoped>

.home{
  width: 100%;
  height: 100vh;
  background: rgb(29,29,29);
  color:#fff;
  font-size: 48px;
  position: relative;
  @include setCenter;
    
  #project-container{
    @include setCenter;
    flex-direction: column;

    .header{
      @include setWh(100%,167px);
    }
    .separator{
      @include setWh(100%,10px);
      background: rgb(92,88,89);
    }
    .main-content{
      flex: 1; // 撐滿剩下佈局
      background: rebeccapurple;
      @include setWh(100%,100%);
      display: flex;
      .left{
        flex: 0 0 860px;
        background: red;
        height: 100%;
        @include setFlexColumn;
        @include setWh(860px,100%);
        justify-content: space-between;
        box-sizing: border-box;
        padding-bottom: 20px;
        .left-1{
          height: 300px;
        }
        .left-2{
          height: 320px;
          
        }
        .left-3{
          height: 280px;
          @include setRandomBgColor;
        }
        .left-4{
          height: 230px;
          @include setRandomBgColor;
        }
        .left-5{
          height: 360px;
          @include setRandomBgColor;
        }
        .left-6{
          height: 360px;
          @include setRandomBgColor;
        }
      }
      .right{
        flex: 1; // 撐滿剩下佈局
        background: blue;
        @include setFlexColumn;
        .right-top-1{
          @include setWh(100%,206px);
          @include setRandomBgColor;
        }
        .right-top-2{
          @include setWh(100%,48px);
          @include setRandomBgColor;
        }
        .right-bottom{
          flex: 1; // 撐滿剩下佈局
          @include setFlexRow;
          .right-left{
            flex: 0 0 1917px;
            @include setWh(1917px,100%);
            @include setFlexColumn;
            justify-content: space-between;
            box-sizing: border-box;
            padding-bottom: 20px;
            .right-left-1{
              @include setWh(100%,999px);
              @include setRandomBgColor;
            }
            .right-left-2{
              @include setWh(100%,80px);
              @include setRandomBgColor;
            }
            .right-left-3{
              @include setWh(100%,350px);
              @include setRandomBgColor;
            }
            .right-left-4{
              @include setWh(100%,220px);
              @include setRandomBgColor;
            }
          }
          .right-right{
            flex: 1;
            margin-left: 10px;
            @include setFlexColumn;
            justify-content: space-between;
            box-sizing: border-box;
            padding-bottom: 20px;
            .right-right-1{
              @include setWh(100%,999px);
              @include setRandomBgColor;
            }
            .right-right-2{
              flex: 1;
              width: 100%;
              margin-top: 20px;
              @include setRandomBgColor;
            }
          }
        }
      }
    }
  }
  
}
.loading-text{
  font-size: 20px;
  margin-top: 10px;
}
</style>
<!-- 
1.突破Chrome瀏覽器12像素問題
 利用css transform屬性突破 transform: scale(.5);
 但div也會被縮小
 所以需要ProjectContainer 輔助
 -->