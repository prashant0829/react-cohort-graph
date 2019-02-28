import React, { Component } from 'react';
import './App.css';
import ReactCohortGraph from 'react-cohort-graph';

console.info(ReactCohortGraph);

const DATA = {
    days : {
        "05-22-2016": [200, 180, 120, 80, 50, 40, 30, 20, 50, 40, 23, 43, 20, 34, 30, 20, 10, 5],
        "05-23-2016": [300, 180, 120, 80, 50, 20, 15, 10, 5, 5, 5, 40, 23, 15, 10, 5, 1],
        "05-24-2016": [200, 180, 120, 80, 50, 20, 15, 10, 5, 5, 5, 4, 2, 1, 4, 5],
        "05-25-2016": [200, 180, 120, 80, 50, 20, 15, 10, 5, 5, 5, 3, 3, 2, 1],
        "05-26-2016": [300, 180, 120, 80, 50, 20, 15, 10, 5, 5, 5, 5, 3, 1],
        "05-27-2016": [200, 180, 120, 80, 50, 20, 15, 10, 5, 5, 5, 3, 2],
        "05-28-2016": [300, 180, 120, 80, 50, 20, 15, 10, 5, 5, 5, 2],
        "05-29-2016": [200, 180, 120, 80, 50, 20, 15, 10, 5, 5, 5],
        "06-30-2016": [300, 180, 120, 80, 50, 20, 15, 10, 5, 2],
        "06-01-2016": [200, 180, 120, 80, 50, 20, 10, 5, 1],
        "06-02-2016": [300, 180, 120, 80, 50, 20, 10, 5],
        "06-03-2016": [200, 120, 80, 30, 20, 5, 1],
        "06-04-2016": [200, 80, 30, 10, 5, 3],
        "06-05-2016": [300, 180, 100, 80, 70],
        "06-06-2016": [200, 120, 80, 40],
        "06-07-2016": [200, 80, 30],
        "06-08-2016": [300, 180],
        "06-09-2016": [200]
    },
    weeks : {
        "week1": [200, 10, 20],
        "week2": [300, 200],
        "week3": [200]
    },
    months : {
        "month1": [200, 10, 20, 30],
        "month2": [300, 200, 150],
        "month3": [200, 110],
        "month4": [100]
    }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactCohortGraph data={DATA} />
      </div>
    );
  }
}

export default App;