// Write your code here
import {Component} from 'react'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, minutesText: '00', secondsText: '00'}

  start = () => {
    this.timer = setInterval(() => {
      const {seconds} = this.state
      if (seconds > 58) {
        this.setState(prev => ({
          minutes: prev.minutes + 1,
          seconds: 0,
          minutesText: `0${prev.minutes + 1}`,
          secondsText: '00',
        }))
      }
      this.setState(prev => ({
        seconds: prev.seconds + 1,
        secondsText: `0${prev.seconds + 1}`,
      }))
    }, 1000)
  }

  stop = () => {
    clearInterval(this.timer)
  }

  reset = () => {
    this.setState({
      minutes: 0,
      seconds: 0,
      minutesText: '00',
      secondsText: '00',
    })
  }

  render() {
    const {minutesText, secondsText} = this.state

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          alt="stopwatch"
        />
        <h1>Stopwatch</h1>
        <h1>
          {minutesText}:{secondsText}
        </h1>
        <button type="button" onClick={this.start}>
          start
        </button>
        <button type="button" onClick={this.stop}>
          stop
        </button>
        <button type="button" onClick={this.reset}>
          reset
        </button>
      </div>
    )
  }
}
export default Stopwatch
