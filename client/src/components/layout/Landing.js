import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Landing extends Component {
	render() {
		return (
			<div className="container col-12">
				<div className="jumbotron jumbotron-fluid col-10 offset-1 text-center">
					<h4>React application with user authentication and image uploading and listing</h4>
				</div>
				<div className="row">
					<div className="col-sm-10 offset-1 text-center">
						<Link to="/register" className="btn registerButton">Register</Link>
						<Link to="/login" className="btn loginButton">Login</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Landing;