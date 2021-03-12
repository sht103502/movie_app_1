import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //디렉토리의 App.js를 App 이라 칭한다.
//import Potato from './Potato';

ReactDOM.render(
  //<React.StrictMode>
    <App />,//import 한 걸 사용
  //</React.StrictMode>,
  document.getElementById('potato') //인덱스에서 potato를 찾아라
);


