import React, { Component } from "react"; //imcr
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  //cc
  state = {
    counters: [
      { id: 1, value: 0, monaValue: false },
      { id: 2, value: 0, monaValue: false },
      { id: 3, value: 0, monaValue: false },
      { id: 4, value: 0, monaValue: false },
      { id: 5, value: 0, monaValue: false },
    ],
    selectedCounter1: null,
    selectedCounter2: null,
  };

  handleDelete = counterID => {
    // console.log("this item was deleted successfully", counterID);
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleGoingDown = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const nextIndex = (index + 1) % counters.length;

    // Swap the counter being shifted with the next counter
    if (nextIndex !== 0) {
      [counters[index], counters[nextIndex]] = [
        counters[nextIndex],
        counters[index],
      ];
    } else {
      // If the counter being shifted is the last one, move it to the beginning of the list
      counters.unshift(counters.pop());
    }
    this.setState({ counters });
  };

  handleGoingUp = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    if (index !== 0) {
      [counters[index], counters[index - 1]] = [
        counters[index - 1],
        counters[index],
      ];
    } else {
      const firstCounter = counters.shift();
      counters.push(firstCounter);
    }
    this.setState({ counters });
  };

  handleMerge = (counter) => {
    if(this.state.selectedCounter1 && this.state.selectedCounter2){
      const counters = [...this.state.counters];
      const index1 = counters.indexOf(this.state.selectedCounter1);
      const index2 = counters.indexOf(this.state.selectedCounter2);
      const index3 = counters.indexOf(counter);
      counters[index1].value += counters[index2].value + counters[index3].value;
      counters.splice(index2, 1);
      counters.splice(index3-1, 1);
      this.setState({counters, selectedCounter1: null, selectedCounter2: null});
    } else if(this.state.selectedCounter1 == null){
      this.setState({selectedCounter1: counter});
    } else{
      this.setState({selectedCounter2: counter});
    }
  };

  handleAddition = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const newCounter = {id: Date.now(), value: 0};
    counters.splice(index+1, 0, newCounter);
    this.setState({counters});
  };

  handleSplit = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const value = counter.value/2;
    const newCounter = {id: 10, value: value};
    counters.splice(index, 1, newCounter);
    counters.splice(index+1, 0, newCounter);
    this.setState({counters});
  };

  handleMona = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if(counters[index].monaValue){
      counters[index].monaValue = false;
    } else{
      counters[index].monaValue = true;
    }
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalNumber={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            onGoDown={this.handleGoingDown}
            onGoUp={this.handleGoingUp}
            onMerge={this.handleMerge}
            onAdd={this.handleAddition}
            onSplit={this.handleSplit}
            onMona={this.handleMona}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
