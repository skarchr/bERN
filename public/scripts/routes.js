import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ColorPage from './components/ColorPage';

const createColorPage = (text,color) => {
  return React.createClass({
    render : () => {
      return <ColorPage text={text} color={color} />
    }
  });
}

var redPage = createColorPage('Roses','red');

export default (
  <Route path="/" component={App}>
    <IndexRoute component={redPage}/>
    <Route path="/firstpage" component={redPage} />
    <Route path="/secondpage" component={createColorPage('Violets','blue')} />
  </Route>
);