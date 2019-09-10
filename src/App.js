import React from 'react';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Bread", bought: true, },
      { id: 2, name: "Soap", bought: false, },
    ],
  };

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const grocery = { id: this.getUniqId(), name, bought: false, };
    this.setState({ gorceries: [grocery, ...this.state.groceries], });
  };

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map( grocery => {
        if (grocery.id === id) {
          return { ...grocery, bought: !grocery.bought, };
        }
        return grocery;
      })
    });
  };

  render() {
    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List 
          name="Grocery List" 
          groceries={this.state.groceries} 
          handleClick={this.handleClick} 
        />
      </div>
    );
  };
};

export default App;
