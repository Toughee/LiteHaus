import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LiteMenu from './components/LiteMenu';
import reportWebVitals from './reportWebVitals';

class Litebox extends React.Component {
	render(){
		return (
			<React.Fragment>
				<div>
					<LiteMenu />
				</div>
			</React.Fragment>
		);
	}
}


ReactDOM.render(
    <Litebox />,
  document.getElementById('root')
);


reportWebVitals();
