import React, {Component} from 'react';
import EachBook from './EachBook';
// import ReactDOM from 'react-dom';

class Coursesales extends Component {

  constructor(props){
    super(props);

    this.state = {
      cost: 0,
      booksAdded : 0
    };

    this.totalCost = this.totalCost.bind(this);
    this.bookCounter = this.bookCounter.bind(this);
  }

  totalCost(perBookCost){
    this.setState({
      cost: this.state.cost + perBookCost
    });
  }

  bookCounter(count){
    this.setState({
      booksAdded: this.state.booksAdded + count
    });
  }

  render(){
    {/* All Vars go here */}

    var parentStyle = {
      display: 'flex',
      flexDirection : 'column',
      alignItems: 'center',
      flexWrap: 'no-wrap',
      justifyContent: 'center',
      margin: '20px'
    };


    var AllBooks = this.props.books.map((book, i) => {
      return(
        <EachBook key={i} bookName={book.name} totalCost={this.totalCost} bookCounter={this.bookCounter} cost={book.price} active={false}/>
      );
    });

    return(
      <div style={parentStyle}>
         {/*List all books*/}
         {AllBooks}
         <br />
         <div> Total cost: {this.state.cost} for {this.state.booksAdded} books</div>

         {/*Show total price*/}

      </div>
    );
  }
}


export default Coursesales;
