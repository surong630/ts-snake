// 引入其他的类
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
// 游戏控制器 控制其他的所有类

class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: ScorePanel;
  // 瞎写
  n: number;
  // 创建一个属性来存储蛇的移动方向(也就是按键的方向)
  direction: string = '';
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
      // 瞎写
    this.n = 1
  }
  // 游戏初始化方法,调用后游戏即开始
  init() {
    // 绑定键盘按键按下的时间 在这里的时候如果不通过bind返回一个新的函数,this的指向将是window
    document.addEventListener('keydown', this.keydownHandler.bind(this))
  }
  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    // 赋值之前需要检查event.key的值是否合法
    // 修改direction属性
    this.direction = event.key
    console.log(this.direction);
      // 这里判断方向
    if(this.direction === 'ArrowRight') {
      this.snake.head.style.left = this.n + 'px';
      this.n += 1
      console.log(this.n);
      console.log('sss');
    }
  }
}

export default GameControl