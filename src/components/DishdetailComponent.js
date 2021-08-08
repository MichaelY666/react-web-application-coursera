import React, {Component} from 'react';
import Menu from './MenuComponent';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

	constructor(props) {
		super(props);

	}


	renderDish(dish) {
		if (dish != null) {
			return (
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name}/>
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
				);
		}
		else {
			return (
				<div></div>
				);
		}
	}

	renderComments(comments) {



		if (comments != null){

			const comment = comments.map((c) => {
			
			return (
				<div key={c.id}>
					<li>
						<p>{c.comment}</p>
						<p>--{c.author}, <time>{c.date}</time></p>
					</li>
				</div>
				);

		});

			return (
				<div>
					<h4>Comments</h4>
					<ul className ="list-unstyled">
						{comment}
					</ul>
				</div>
				);
		}
		else {
			return (
				<div></div>
				);
		}
	}

	render() {

		return (
			
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						{this.renderDish(this.props.selectedDish)}
					</div>
					<div className="col-12 col-md-5 m-1">
						{this.renderComments(this.props.comments)}
					</div>
				</div>
		)
	}
}

export default DishDetail;