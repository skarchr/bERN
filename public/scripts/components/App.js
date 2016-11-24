import React, {PropTypes}  from 'react';
import { Link, IndexLink } from 'react-router';

//TODO: 
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>bERN - boilerplate for express, react and node</h1>
        <nav>
          <Link to="/firstpage">Red</Link>
          <Link to="/secondpage">Blue</Link>
        </nav>
        <div>
          {this.props.children}
        </div>
        <a style={{color:'white'}} href="https://github.com/skarchr/bEAN" target="_blank">GitHub</a>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;