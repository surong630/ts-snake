// 定义食物类FOOD
class Food{
  // 定义属性表示食物对应的元素
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素,并将其赋值给element,在最后加! 告诉ts我这不可能是空,你就别管了
    this.element = document.getElementById('food')!;
  }
  // 获取食物的x坐标
  get x() {
    return this.element.offsetLeft
  }
  // 获取食物y轴坐标方法
  get y() {
    return this.element.offsetTop
  }
  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格  一格就是10
    let left =  Math.round(Math.random() * 29) *10
    let right =  Math.round(Math.random() * 29) *10
    this.element.style.left = left + 'px';
    this.element.style.top = right + 'px';
  }
}
export default Food