import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function App() {
	return (
		<div className="Litemenu-bar">
			<h6>Light Panel</h6>
			<span className="Lite-panel-label">Outside 
				<button className="">On/Off</button>
			</span>
			<br />
			<span className="Lite-panel-label">Patio 
				<button className="">On/Off</button>
			</span>
			<br />
			<span className="Lite-panel-label">Lawn 
				<button className=""> On/Off</button>
			</span>
			<br />
			<span className="Lite-panel-label">Main 
				<button className="">On/Off</button>
			</span>
			<br />
			<span className="Lite-panel-label">Main 
				<button className="">On/Off</button>
			</span>
		</div>
		//
		// <div className>
		// 	<span className="lawn"></span>
		// </div>
	);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
