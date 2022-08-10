import { ref,onMounted, onUnmounted } from 'vue'
import mockData from '@/mock/apiData.json'

export default function () { 
  const todayUser = ref(10000)
  const growthLastDay = ref(11.27)
  const growthLastMonth = ref(6.09)
  const ageData = ref(mockData.ageMockData)
  const averageAge = ref(0)
  let task
  onMounted(() => {
    console.log("loading.. hooks...")
    task = setInterval(() => {
      todayUser.value += 10
      growthLastDay.value += 1
      growthLastMonth.value += 1
      averageAge.value += 1
    },3000)
  })

  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAge
  }

}