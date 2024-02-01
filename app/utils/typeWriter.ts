interface Props {
    increment?: boolean;
    interval?: number;
    output?: (txt: string) => void;
}

/**
 * 流畅打字机效果
 * @param increment 是否增量  true:增量， false:全量
 * @param interval 吐字间隔 单位:ms
 * @param output 打字函数
 */
class TypeWriter {
  private readonly increment: boolean;
  private textContent: string;
  private outputIndex: number;
  private timer: TimeoutRef;
  private readonly interval: number;
  private outputCallback: (txt: string) => void;
  private status: boolean;
  private finishTimer: TimeIntervalRef;
  private forceFinishStatus: boolean;
  private forceFinishCallback: () => void;

  constructor({
    increment = false, interval = 16, output = () => {
    }
  }: Props = {}) {
    this.increment = increment
    this.textContent = ''
    this.outputIndex = 0
    this.timer = undefined
    this.interval = interval
    this.outputCallback = output
    this.status = false
    this.finishTimer = undefined
    this.forceFinishStatus = false
    this.forceFinishCallback = () => {
    }
  }

  init() {
    this.loop()
  }

  set output(callback: () => void) {
    this.outputCallback = callback
  }

  // 是否吐字完成
  get isOutputFinish() {
    return this.textContent.length <= this.outputIndex
  }

  inject(text: string) {
    if (this.increment) {
      this.textContent += text
    } else {
      this.textContent = text
    }
  }

  loop() {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      // 仅在未完全吐字的情况下执行吐字
      if (!this.isOutputFinish) {
        // 如强制结束。一次性吐出剩下的所有内容。然后调用完成函数
        if (this.forceFinishStatus) {
          const remainderText = this.textContent.slice(this.outputIndex)
          this.outputCallback(remainderText)
          this.outputIndex = this.textContent.length - 1
          this.finish(this.forceFinishCallback)
        } else {
          this.outputCallback(this.textContent.charAt(this.outputIndex))
          this.outputIndex++
        }
      }
    }, this.interval)
  }

  reset(callback?: () => void) {
    clearInterval(this.timer)
    clearTimeout(this.finishTimer)
    this.forceFinishStatus = false
    this.outputIndex = 0
    this.textContent = ''
    callback && callback()
  }

  finish(callback: () => void) {
    if (!this.isOutputFinish) {
      const finishTime = (this.textContent.length - this.outputIndex) * this.interval
      this.finishTimer = setTimeout(() => {
        this.reset(callback)
      }, finishTime)
    } else {
      this.reset(callback)
    }
  }

  forceFinish(callback: () => void) {
    this.forceFinishCallback = callback
    this.forceFinishStatus = true
    clearTimeout(this.finishTimer)
  }
}

export default TypeWriter
