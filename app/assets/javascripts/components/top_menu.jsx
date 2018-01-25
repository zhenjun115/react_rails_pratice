class TopMenu extends React.Component {
	render( ) {
		return( 
			<div className="TopMenuContainer">
				<div className="MenuItem"><p className="TextLogo">themoviebox</p></div>
				<div className="MenuItem"><input type="text" className="SearchInputControl" /></div>
				<div className="MenuItem Right">
					<div className="BtnGroup">
						<button className="SearchBtn"><i className="fa fa-search" aria-hidden="true"></i></button>
						<button className="LoginBtn">login</button>
						<button className="SignupBtn">sign up</button>
					</div>
				</div>
			</div>
		);
	}
}
