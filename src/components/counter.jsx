import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    const { counter, onDecrement, onDelete, onIncrement, onGoDown, onGoUp, onMerge, onAdd, onSplit, onMona} = this.props;
    return (
      <div>
        {/* <span>Fathy # {this.props.counter.id}</span> */}
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-3"
          onClick={() => onDecrement(counter)}
        >
          Decrement
        </button>
        <button onClick={() => { onMerge(counter) }} className="btn btn-warning btn-sm m-3">Merge</button>
        <button onClick={() => { onSplit(counter) }} className="btn btn-warning btn-sm m-3">Split</button>
        <button onClick={() => { onGoDown(counter) }} className="btn btn-primary btn-sm m-3">Go Down</button>
        <button onClick={() => { onGoUp(counter) }} className="btn btn-primary btn-sm m-3">Go Up</button>
        <button onClick={() => { onAdd(counter) }} className="btn btn btn-danger btn-sm m-3">Add</button>
        <button onClick={() => { onMona(counter) }} className="btn btn-danger btn-sm m-3">Mona</button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-3"
          >
          delete
        </button>
          {counter.monaValue && <p className="display-1">Why do you Use😑&👍?</p>}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
