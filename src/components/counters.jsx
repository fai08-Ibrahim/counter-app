import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {


  render() {
    //This is called Object Destructuring and it makes the code cleaner
    const {onReset, onDelete, counters, onIncrement, onDecrement, onGoDown, onGoUp, onMerge, onAdd, onSplit, onMona} = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            // this adds the entire counter object with all its properties
            // such that if we needed to even add a third property other than
            // the value and the id, we wouldn't actually need to modify it.
            counter={counter}
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            onGoDown={onGoDown}
            onGoUp={onGoUp}
            onMerge={onMerge}
            onAdd={onAdd}
            onSplit={onSplit}
            onMona={onMona}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
