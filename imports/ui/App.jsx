import React, { Component } from 'react';

import Member from './Member.jsx';

// App component - represents the whole app

export default class App extends Component {
  getMembers() {
    return [
      { _id: 1, name: 'Maggie Wiseman', email: 'm@g.com', businessName: 'techlady Co.', url: 'http://www.techlady.com' },
      { _id: 2, name: 'Jennifer Smiles', email: 'm@g.com', businessName: 'techlady Co.', url: 'http://www.techlady.com' },
      { _id: 3, name: 'Shelly', email: 'm@g.com', businessName: 'BlackGirlVentures ', url: 'http://www.blackgirlventures.com' },
    ];
  }

  renderMembers() {
    return this.getMembers().map((member) => (
      <Member key={member._id} member={member} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Member Directory</h1>
        </header>

        <ul>
          {this.renderMembers()}
        </ul>
      </div>
    );
  }
}
