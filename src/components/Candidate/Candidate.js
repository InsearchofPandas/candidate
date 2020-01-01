import React from 'react';
import Rating from '../Rating/Rating'

class Candidate extends React.Component {

  render() {
    let bold = "text-blue-lighter"
    if (this.props.total > 0 && this.props.max === this.props.total) {
      bold = "text-blue font-bold"
    };

    return (<div>
      <div className="text-blue-lighter  h-12 underline  font-bold
          bg-grey-darker  pt-3 border-t-2 border-b-2 border-grey-darkest">
        <form>
          <input className=" text-center text-blue-lighter underline  font-bold
              bg-grey-darker " type="text" placeholder={"Enter " + this.props.name + "'s Name..."} id={this.props.candidateIndex} onKeyUp={this.props.handleNames}/>
        </form>
      </div>
      <Rating starIndex={0 + (this.props.candidateIndex * 4)} setTotals={this.props.setTotals} resetTotals={this.props.resetTotals}/>
      <Rating starIndex={1 + (this.props.candidateIndex * 4)} setTotals={this.props.setTotals} resetTotals={this.props.resetTotals}/>
      <Rating starIndex={2 + (this.props.candidateIndex * 4)} setTotals={this.props.setTotals} resetTotals={this.props.resetTotals}/>
      <Rating starIndex={3 + (this.props.candidateIndex * 4)} setTotals={this.props.setTotals} resetTotals={this.props.resetTotals}/>

      <div className={bold + " bg-grey-darkest h-12  pt-3 border-t-2 border-grey-light"}>{this.props.total}</div>
    </div>);
  }
}

export default Candidate;
