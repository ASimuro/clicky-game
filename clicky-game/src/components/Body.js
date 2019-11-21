import React from "react";
import "./body.css"
const Body = props => (

			<div onClick={() => props.setClicked(props.id)} className="body col-md-12">
				<div className="img-container">
					<img className="pics" alt={props.name} src={props.image} />
				</div>
			</div>
);

export default Body;