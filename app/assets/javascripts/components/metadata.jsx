class Metadata extends React.Component {
	
	render() {
		return( 
			<div className="Metadata">
				<h1>wrath of the titans</h1>
				<ul>
					<li>fantasy</li>
					<li>animation</li>
					<li>family</li>
					<li className="divider"></li>
					<li>duration: 1h 52m</li>
				</ul>
				
				<div className="BtnGroup">
					<button className="WatchMovieBtn">watch movie</button>
					<button className="ViewInfoBtn">view info</button>
					<button className="AddToListBtn"><i className="fa fa-plus" aria-hidden="true"></i> add to wish list</button>
				</div>

				<div className="RatingOverview">
					<p>Rating <span>base on 3546 reviews</span></p>
					<ul>
						<li><i className="fa fa-star" aria-hidden="true"></i></li>
						<li><i className="fa fa-star" aria-hidden="true"></i></li>
						<li><i className="fa fa-star" aria-hidden="true"></i></li>
						<li><i className="fa fa-star-half-full" aria-hidden="true"></i></li>
						<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
						<li>3.5</li>
					</ul>
				</div>

			</div>
		);
	}

}
