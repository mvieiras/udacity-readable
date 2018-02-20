import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from './Categories';

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path ='/categories' component={Categories} />
        {/* <Route exact path ='/' component={Posts} />
        <Route exact path ='/new' component={NewPost} />
        <Route exact path ='/edit/:id' component={EditPost} />
        <Route exact path ='/:category' component={Posts} />
        <Route exact path ='/:category/:id' component={PostDetail} /> */}
      </Switch>
    )
  }
}

export default App