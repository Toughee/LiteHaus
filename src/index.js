import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HouseRender from './components/HouseRender';
import LiteMenu from './components/LiteMenu';
import PropTypes from 'prop-types';
import reportWebVitals from './reportWebVitals';

class Litebox extends React.Component {
	render(){
		return (
			<div>
				// <LiteMenu />
				<HouseRender />
			</div>
		);
	}
}




ReactDOM.render(
    <Litebox />,
  document.getElementById('root')
);


reportWebVitals();
