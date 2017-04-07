import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./index.css');

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Adi',
  lastName: 'Zimmerman'
};

const element = (
	<h1>
		Hello, {formatName(user)}!
	</h1>
);

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
