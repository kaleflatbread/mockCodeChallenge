import React, { Component, Fragment } from 'react';
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sushis: [],
      budget: 100,
      eatenSushi: [],
      clicked: false,
      nextSushi: 0
    };
  }


  componentDidMount() {
    fetch("http://localhost:3000/api/v1/sushis")
      .then(request => request.json())
      .then(json => this.setState({
      sushis: json,
    }));
  }

  handleMoreClick = () => {
    this.setState({
      nextSushi: this.state.nextSushi + 4,
    })
  };



  eatSushi = (event) => {
    let selectedSushi;
    //selectedSushi = find sushi where id === event.target.value
    //cannot get entire instance of sushi to subtract price...
    // if (this.state.budget > selectedSushi.price) {
      //clear plate and add empty plate to table
    //   event.target.src = ""
    //   this.setState({
    //     budget: this.state.budget - selectedSushi.price
    //   })
    // } else {
    //   null
    // }
  }


  render() {

    return (
      <Fragment>
        <div className="belt">
          <Sushi
            onClick={this.eatSushi}
            sushis={this.state.sushis.slice(this.state.nextSushi,this.state.nextSushi+4)}
            eaten={this.state.clicked}/>
          <MoreButton onClick={this.handleMoreClick} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
