import React from 'react';
import '../../Star.css';

class Rating extends React.Component {
  constructor(props) {
    super(props)
    this.starScore = this.starScore.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {
      star: ['star', 'star', 'star', 'star', 'star']
    }
  }

  reset(event) {
    this.props.resetTotals(event)
    this.setState({
      star: ['star', 'star', 'star', 'star', 'star']
    })
  }

  starScore(event) {
    this.props.setTotals(event)

    let newStars = []
    let i
    for (i = 0; i < 5; i++) {
      if (i <= (event.target.value - 1)) {
        newStars.push('star-red')
      } else {
        newStars.push('star')
      }

      this.setState({star: newStars})
    }
  }

  render() {

    return (<div className="stars pt-3  h-12 flex flex-row-reverse justify-center bg-grey text-blue">
      <button className={this.state.star.slice(4, 5)} id={this.props.starIndex} value="5" onClick={this.starScore}></button>
      <button className={this.state.star.slice(3, 4)} id={this.props.starIndex} value="4" onClick={this.starScore}></button>
      <button className={this.state.star.slice(2, 3)} id={this.props.starIndex} value="3" onClick={this.starScore}></button>
      <button className={this.state.star.slice(1, 2)} id={this.props.starIndex} value="2" onClick={this.starScore}></button>
      <button className={this.state.star.slice(0, 1)} id={this.props.starIndex} value="1" onClick={this.starScore} onDoubleClick={this.reset}></button>
    </div>);
  }
}

export default Rating;
