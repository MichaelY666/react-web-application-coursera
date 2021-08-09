import React, {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
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
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div> 
      </Navbar>
      <Menu dishes = {this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)}/>
      <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}  
      comments={this.state.comments}/>
    </div>
  );
}
}

export default Main;
