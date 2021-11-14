import React, { Component, useState } from 'react';
import Menu from './MenuComponent';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Col, Row, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';






	function RenderDish({dish}) {
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

	const required = (val) => val && val.length;
	const maxLength = (len) => (val) => !(val) || (val.length <= len);
	const minLength = (len) => (val) => (val) && (val.length >= len);
	
	function CommentForm () {

		const [isModalOpen, setModal] = useState(false);


		const toggleModal = () => {
				setModal(!isModalOpen);
		}

		const handleSubmit = (values) => {
			console.log('Curreant State is: ' + JSON.stringify(values));
			alert('Curreant State is: ' + JSON.stringify(values));
		}
	
		
		return (
	<div>
		<Button outline onClick={toggleModal}>
          	<span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
		<Modal isOpen={isModalOpen} toggle={toggleModal}>
      		<ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
      		<ModalBody>
			  <LocalForm onSubmit={(values) => handleSubmit(values)}>
			  			<Row className="form-group">
						  <Label htmlFor="rating">Rating</Label>
                        	<Col >
                                <Control.select model=".rating" name="rating" className="form-control" >
                                    <option>1</option>
                                    <option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
                                </Control.select>
                        	</Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="firstname">Your Name</Label>
                            <Col >
                                <Control.text model=".firstname" className="form-control" id="firstname" name="firstname" placeholder="Your Name" 
                                validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}/>
                                
                            </Col>
                            <Errors className="text-danger" model=".firstname" show="touched" messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 3 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}/>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" >Comment</Label>
                            <Col >
                                <Control.textarea model=".message" id="message" name="message" rows="6" className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col >
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
			</ModalBody>
		</Modal>
		</div>
		);
}

	function RenderComments({comments, addComment, dishId}) {



		if (comments != null){

			const comment = comments.map((c) => {
			
			return (
				<div key={c.id}>
					<li>
						<p>{c.comment}</p>
						<p>--{c.author}, 
						<time>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</time></p>
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
					<CommentForm/>
				</div>
				);
		}
		else {
			return (
				<div></div>
				);
		}
	}

	const DishDetail = (props) => {

		return (
			<div className="container">
				<div className="row ">
					<Breadcrumb>
						<BreadcrumbItem><Link to={'/menu'}>Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dish.name}</h3>

					</div>
				</div>

				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish}/>
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id}/>
					</div>
				</div>
			</div>
		)
	}


export default DishDetail;