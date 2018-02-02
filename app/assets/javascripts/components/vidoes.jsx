//import {Banner} from './banner.jsx';
class Videos extends React.Component {
	render() {
		return ( 
			<div>
				<Banner />
				<TabBar />
				<MovieGrid />
				<Loading />
				<Footer />
			</div>
		);
	}
}
