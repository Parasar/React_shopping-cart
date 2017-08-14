import React, {Component} from 'react';

class EachBook extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: false
    };

    this.eachBookClicked = this.eachBookClicked.bind(this);
  }

  eachBookClicked(){
    var currentState = !this.state.active;
    this.setState({active: currentState});
    // if active is true (dont add cost) else add cost
    // this.props.totalCost(currentState ? this.props.cost : -this.props.cost);

    currentState ? this.props.totalCost(this.props.cost) : this.props.totalCost(-this.props.cost);
    currentState ? this.props.bookCounter(1) : this.props.bookCounter(-1);;

    // // if active is true (add cost) else substract cost
    //
    // if (this.state.active) {
    //   this.props.totalCost(-this.props.cost);
    //   this.setState({active: false});
    // }
    // else {
    //   this.props.totalCost(this.props.cost);
    //   console.log('minus');
    //   this.setState({active: true});
    // }

  }

  render(){
    var bookStyle = {
      backgroundColor: '#bcbcbc',
      color: '#444444',
      WebkitTransition: 'all',
      padding: '12px',
      margin: '4px',
      width: '200px',
      listStyle: 'none'
    };

    var bookStyleActive = {
      backgroundColor: 'green',
      color: '#fff',
      WebkitTransition: 'all',
      padding: '12px',
      margin: '4px',
      width: '200px',
      listStyle: 'none'
    };

    return(
      <div>
        <li style={this.state.active ? bookStyleActive : bookStyle} onClick={this.eachBookClicked}> {this.props.bookName} costs {this.props.cost}</li>
      </div>
    );
  }
}

export default EachBook;
