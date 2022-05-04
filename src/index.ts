import robot from 'robotjs'
import { sleep } from '@/utils/sleep'

(async () => {
  const ms = 10000
  console.log(`${ms}ms before`)
  await sleep(ms)
  console.log(`${ms}ms after`)

  // 鼠标行为
  // robot.setMouseDelay(2)
  // const twoPI = Math.PI * 2.0
  // const screenSize = robot.getScreenSize()
  // const height = (screenSize.height / 2) - 10
  // const width = screenSize.width
  // for (let x = 0; x < width; x++) {
  //   const y = height * Math.sin((twoPI * x) / width) + height
  //   robot.moveMouse(x, y)
  // }

  // 键盘行为
  robot.typeString('Hello World')
  // robot.keyTap('enter')

  // 屏幕分析
  // const mouse = robot.getMousePos()
  // const hex = robot.getPixelColor(mouse.x, mouse.y)
  // console.log('#' + hex + ' at x:' + mouse.x + ' y:' + mouse.y)
})()
