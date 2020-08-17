import React from 'react';
import ReactDOM from 'react-dom';
import initRequest from './utils/request';

import App from './App';

// 增加拦截器
initRequest();

ReactDOM.render(<App />, document.querySelector('#root'));
