import React from 'react';
import '../../App.css';
import Candidate from '../Candidate/Candidate'

class Grid extends React.Component {
  constructor(props) {
    super(props);
    let ratings = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    let weights = {
      weightEdu: 15,
      weightExp: 30,
      weightSki: 35,
      weightInt: 20
    }
    let candidates = ["Candidate A", "Candidate B", "Candidate C", "Candidate D"]
    let scores = [0, 0, 0, 0]

    this.handleCandidateNames = this.handleCandidateNames.bind(this)
    this.setTotals = this.setTotals.bind(this)
    this.resetTotals = this.resetTotals.bind(this)

    this.state = {
      ratings: ratings,
      candidates: candidates,
      weights: weights,
      scores: scores
    }
  }

  handleCandidateNames(event) {

    let newName = this.state.candidates
    newName[event.target.id] = event.target.value
    this.setState({candidates: newName})
  }

  setTotals(event) {
    let updateRatings = this.state.ratings
    updateRatings[event.target.id] = event.target.value
    this.setState({ratings: updateRatings})
  }

  resetTotals(event) {
    let updateRatings = this.state.ratings
    updateRatings[event.target.id] = '0'
    this.setState({ratings: updateRatings})
  }

  render() {
    let weight = this.state.weights.weightEdu + this.state.weights.weightExp + this.state.weights.weightSki + this.state.weights.weightInt
    let boxSize = "flex-initial w-2/3"
    let totals = []
    totals[0] = ((this.state.ratings[0] * (this.state.weights.weightEdu / 10)) + (this.state.ratings[1] * (this.state.weights.weightExp / 10)) + (this.state.ratings[2] * (this.state.weights.weightSki / 10)) + (this.state.ratings[3] * (this.state.weights.weightInt / 10))) * 2;
    totals[1] = ((this.state.ratings[4] * (this.state.weights.weightEdu / 10)) + (this.state.ratings[5] * (this.state.weights.weightExp / 10)) + (this.state.ratings[6] * (this.state.weights.weightSki / 10)) + (this.state.ratings[7] * (this.state.weights.weightInt / 10))) * 2;
    totals[2] = ((this.state.ratings[8] * (this.state.weights.weightEdu / 10)) + (this.state.ratings[9] * (this.state.weights.weightExp / 10)) + (this.state.ratings[10] * (this.state.weights.weightSki / 10)) + (this.state.ratings[11] * (this.state.weights.weightInt / 10))) * 2;
    totals[3] = ((this.state.ratings[12] * (this.state.weights.weightEdu / 10)) + (this.state.ratings[13] * (this.state.weights.weightExp / 10)) + (this.state.ratings[14] * (this.state.weights.weightSki / 10)) + (this.state.ratings[15] * (this.state.weights.weightInt / 10))) * 2;

    let max = totals.reduce(function(a, b) {
      return Math.max(a, b);
    })
    let index = totals.indexOf(max)

    let theCandidate = this.state.candidates[index];

    let tie = totals.filter(total => total === max)

    let secondIndex

    if (tie.length > 1) {
      secondIndex = totals.indexOf(max, (index + 1))
    }

    let seccondCandidate = this.state.candidates[secondIndex]

    let calculate
    if (totals[0] > 0 || totals[1] > 0 || totals[2] > 0 || totals[3] > 0) {
      calculate = 1
    }

    let outcome = <p className="flex justify-center text-white w-full bg-grey-darkest pt-2 pb-3 my-1"></p>
    if (calculate === 1 && tie.length < 2) {
      outcome = <p className="flex justify-center text-white w-full bg-grey-darkest pt-2 pb-3 my-1">

        Based on your ratings we highly recommend you go with &nbsp;
        <span className="text-blue font-bold">{theCandidate}</span>
      </p>
    }
    if (calculate === 1 && tie.length === 2) {
      outcome = <p className="flex justify-center text-white w-full bg-grey-darkest pt-2 pb-3 my-1">
        It looks like a tie &nbsp;
        <span className="text-blue font-bold">{theCandidate}</span>
        &nbsp; or &nbsp;
        <span className="text-blue font-bold">{seccondCandidate}</span>
        &nbsp; would be a great choice
      </p>
    } else if (calculate === 1 && tie.length >= 3) {
      outcome = <p className="flex justify-center text-white w-full bg-grey-darkest pt-2 pb-3 my-1">
        It looks like you have many qualified candidates
      </p>
    }

    return (<div className="w-5/6 mt-2 border-2">
      <h1 className=" flex justify-center  bg-grey-lighter pt-2 pb-3">
        BEST CANDIDATURE
      </h1>

      <p className="flex justify-center text-white pt-1 pb-2 mb-1 bg-grey-darker">
        Enter names and assign raitings to calculate the best Candidate
      </p>

      <div className="flex  justify-center text-center">
        <div className="  bg-grey-darker w-2/5 border-r-2  border-grey-darkest">

          <div className="h-12 pt-3 underline   border-b-2 border-t-2 border-grey-darkest">Criteria</div>

          <div className="h-12  pt-3">Education</div>

          <div className="h-12  pt-3">Experience</div>

          <div className="h-12  pt-3">Skills</div>

          <div className="h-12  pt-3">Interview</div>

          <div className="h-12  underline text-blue pt-3 bg-grey-darkest border-t-2 border-grey-light">
            Possible Total:
          </div>

        </div>

        <div className="w-1/6  bg-grey-dark ">

          <div className="h-12  underline pt-3 border-t-2 border-b-2 border-grey-darkest">Weight</div>

          <div className="h-12  pt-3">
            {this.state.weights.weightEdu}
          </div>

          <div className="h-12  pt-3">
            {this.state.weights.weightExp}
          </div>

          <div className="h-12  pt-3">
            {this.state.weights.weightSki}
          </div>

          <div className="h-12  pt-3">
            {this.state.weights.weightInt}
          </div>

          <div className="h-12  underline text-blue pt-3 bg-grey-darkest border-t-2 border-grey-light">
            {weight}
          </div>

        </div>

        <div className={boxSize}>

          <Candidate candidateIndex={0} name={this.state.candidates.slice(0, 1)} ratings={this.state.ratings.slice(0, 4)} total={totals[0]} handleNames={this.handleCandidateNames} setTotals={this.setTotals} resetTotals={this.resetTotals} max={max}/>

        </div>

        <div className={boxSize}>
          <Candidate candidateIndex={1} name={this.state.candidates.slice(1, 2)} ratings={this.state.ratings.slice(4, 8)} total={totals[1]} handleNames={this.handleCandidateNames} setTotals={this.setTotals} resetTotals={this.resetTotals} max={max}/>
        </div>
        <div className={boxSize}>
          <Candidate candidateIndex={2} name={this.state.candidates.slice(2, 3)} ratings={this.state.ratings.slice(8, 12)} total={totals[2]} handleNames={this.handleCandidateNames} setTotals={this.setTotals} resetTotals={this.resetTotals} max={max}/>
        </div>
        <div className={boxSize}>
          <Candidate candidateIndex={3} name={this.state.candidates.slice(3, 4)} ratings={this.state.ratings.slice(12, 16)} total={totals[3]} handleNames={this.handleCandidateNames} setTotals={this.setTotals} resetTotals={this.resetTotals} max={max}/>
        </div>
      </div>
      {outcome}
    </div>)
  }
}

export default Grid;
