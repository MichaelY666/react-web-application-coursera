import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component {

  constructor(props){

    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
      comments: null
    };
  }


  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
    this.setState({comments: this.state.dishes[dishId].comments})
  }

  render() {
  return (
    <div>
      <Header />
      <Menu dishes = {this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)}/>
      <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}  
      comments={this.state.comments}/>
      <Footer/>
    </div>
  );
}
}

export default Main;
