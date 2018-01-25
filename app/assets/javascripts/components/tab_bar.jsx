class TabBar extends React.Component {
	render(  ) {
		return(
			<div className="TabBar">
				<ul>
					<li className="active">trending</li>
					<li>top rated</li>
					<li>new arrivals</li>
					<li>genre</li>
				</ul>
			
				<ul className="AlignRight">
					<li><i className="fa fa-align-left" aria-hidden="true"></i></li>
					<li className="active"><i className="fa fa-th-large" aria-hidden="true"></i></li>
				</ul>
			</div>
		);
	}
}
