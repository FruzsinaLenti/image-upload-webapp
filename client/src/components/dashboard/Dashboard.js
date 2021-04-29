import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ImageUpload from './ImageUpload'
import './style.css';


class Dashboard extends Component {
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};

	render() {
		const { user } = this.props.auth;

		return (
			<div className="container">
				<div className="row">
					<button onClick={this.onLogoutClick} className="btn registerButton">Logout</button>
					<div className="col-sm-12 text-center dashboardText">
						<h3>Hey there, {user.name.split(" ")[0]}</h3>
						<ImageUpload />
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
