import React from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import './App.css';
import { styles } from 'ansi-colors';

class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Bread", bought: true, },
      { id: 2, name: "Soap", bought: false, },
    ]
  };

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getUniqId(), bought: false }
    this.setState({ gorceries: [grocery, ...groceries]})
  }

  handleClick = (id) => {
    state = { groceries = [], filter: 'All'}

    setFilter = (filter) => {
      this.setState({filter})
    }
  }

  render() {
    const { groceries, filter } = this.state;

    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={groceries} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
  };
};

export default App;
