import React, { Component } from 'react';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort';
import { getQuickSortAnimations } from '../SortingAlgorithms/quickSort';


import './SortingVisualizer.css';


const PRIMARY_COLOR = 'turquoise';


const SECONDARY_COLOR = 'red';

const algorithms = {
  "mergeSort": getMergeSortAnimations,
  
  "quickSort": getQuickSortAnimations,
  
}

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      NUMBER_OF_ARRAY_BARS: 250,
      ANIMATION_SPEED_MS: 2,
      width: 2
    };
  }

  componentDidMount() {
    this.resetArray(this.state.NUMBER_OF_ARRAY_BARS);
  }

  resetArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(randomIntFromInterval(5, 550));
    }
    this.setState({array});
    let numWidth = Math.floor(window.innerWidth / ( array.length * 3));
    if (numWidth < 2) {
      numWidth = 2;
    }
    if (numWidth > 15) {
      this.setState({ ANIMATION_SPEED_MS: 30 });
    } else if (numWidth > 10) {
      this.setState({ ANIMATION_SPEED_MS: 20 });
    } else if (numWidth > 3) {
      this.setState({ ANIMATION_SPEED_MS: 10 });
    } else {
      this.setState({ ANIMATION_SPEED_MS: 2 });
    }
    this.setState({ width: numWidth });
    this.restoreStoreButtons();
  }

  resetArray1(size) {
    const array = [];
    for (let i=0;i<size;i++) {
      var num = window.prompt("Enter the element ");
      array.push(num);
    }

    this.setState({array});
    let numWidth = Math.floor(window.innerWidth / ( array.length * 3));
    if (numWidth < 2) {
      numWidth = 2;
    }
    if (numWidth > 15) {
      this.setState({ ANIMATION_SPEED_MS: 50 });
    } else if (numWidth > 10) {
      this.setState({ ANIMATION_SPEED_MS: 30 });
    } else if (numWidth > 3) {
      this.setState({ ANIMATION_SPEED_MS: 20 });
    } else {
      this.setState({ ANIMATION_SPEED_MS: 10 });
    }
    this.setState({ width: numWidth });
    this.restoreStoreButtons();
  }

  disableSortButtons() {
    document.getElementById("test5").disabled = true;
    document.getElementById("test6").disabled = true;

    document.getElementById("generateNewArray").disabled = true;
    let buttonStyle = document.getElementById("generateNewArray").style;
    buttonStyle.cursor = "default";
    buttonStyle.background = "#000000";

    document.getElementById("mergeSort").disabled = true;
    buttonStyle = document.getElementById("mergeSort").style;
    buttonStyle.cursor = "default";
    buttonStyle.background = "#000000";

    document.getElementById("quickSort").disabled = true;
    buttonStyle = document.getElementById("quickSort").style;
    buttonStyle.cursor = "default";
    buttonStyle.background = "#000000";

    document.getElementById("generateNewArrayCustom").disabled = true;
    buttonStyle = document.getElementById("generateNewArrayCustom").style;
    buttonStyle.cursor = "default";
    buttonStyle.background = "#000000";

    
}

restoreStoreButtons() {
    document.getElementById("test5").disabled = false;
    document.getElementById("test6").disabled = false;

    document.getElementById("generateNewArray").disabled = false;
    let buttonStyle = document.getElementById("generateNewArray").style;
    buttonStyle.background = "#1abc9c";
    buttonStyle.backgroundImage = "linear-gradient(to right, rgba(26, 188, 156, 0.6), rgba(26, 188, 156, 0.6) 5%, #1abc9c 5%, #1abc9c 10%, rgba(26, 188, 156, 0.6) 10%, rgba(26, 188, 156, 0.6) 15%, #1abc9c 15%, #1abc9c 20%, rgba(26, 188, 156, 0.6) 20%, rgba(26, 188, 156, 0.6) 25%, #1abc9c 25%, #1abc9c 30%, rgba(26, 188, 156, 0.6) 30%, rgba(26, 188, 156, 0.6) 35%, #1abc9c 35%, #1abc9c 40%, rgba(26, 188, 156, 0.6) 40%, rgba(26, 188, 156, 0.6) 45%, #1abc9c 45%, #1abc9c 50%, rgba(26, 188, 156, 0.6) 50%, rgba(26, 188, 156, 0.6) 55%, #1abc9c 55%, #1abc9c 60%, rgba(26, 188, 156, 0.6) 60%, rgba(26, 188, 156, 0.6) 65%, #1abc9c 65%, #1abc9c 70%, rgba(26, 188, 156, 0.6) 70%, rgba(26, 188, 156, 0.6) 75%, #1abc9c 75%, #1abc9c 80%, rgba(26, 188, 156, 0.6) 80%, rgba(26, 188, 156, 0.6) 85%, #1abc9c 85%, #1abc9c 90%, rgba(26, 188, 156, 0.6) 90%, rgba(26, 188, 156, 0.6) 95%, #1abc9c 95%, #1abc9c 100%)";
    buttonStyle.cursor = "pointer";

    document.getElementById("mergeSort").disabled = false;
    buttonStyle = document.getElementById("mergeSort").style;
    buttonStyle.background = "#1abc9c";
    buttonStyle.cursor = "pointer";

    document.getElementById("quickSort").disabled = false;
    buttonStyle = document.getElementById("quickSort").style;
    buttonStyle.background = "#1abc9c";
    buttonStyle.cursor = "pointer";

    document.getElementById("generateNewArrayCustom").disabled = false;
    buttonStyle = document.getElementById("generateNewArrayCustom").style;
    buttonStyle.background = "#1abc9c";
    buttonStyle.backgroundImage = "linear-gradient(to right, rgba(26, 188, 156, 0.6), rgba(26, 188, 156, 0.6) 5%, #1abc9c 5%, #1abc9c 10%, rgba(26, 188, 156, 0.6) 10%, rgba(26, 188, 156, 0.6) 15%, #1abc9c 15%, #1abc9c 20%, rgba(26, 188, 156, 0.6) 20%, rgba(26, 188, 156, 0.6) 25%, #1abc9c 25%, #1abc9c 30%, rgba(26, 188, 156, 0.6) 30%, rgba(26, 188, 156, 0.6) 35%, #1abc9c 35%, #1abc9c 40%, rgba(26, 188, 156, 0.6) 40%, rgba(26, 188, 156, 0.6) 45%, #1abc9c 45%, #1abc9c 50%, rgba(26, 188, 156, 0.6) 50%, rgba(26, 188, 156, 0.6) 55%, #1abc9c 55%, #1abc9c 60%, rgba(26, 188, 156, 0.6) 60%, rgba(26, 188, 156, 0.6) 65%, #1abc9c 65%, #1abc9c 70%, rgba(26, 188, 156, 0.6) 70%, rgba(26, 188, 156, 0.6) 75%, #1abc9c 75%, #1abc9c 80%, rgba(26, 188, 156, 0.6) 80%, rgba(26, 188, 156, 0.6) 85%, #1abc9c 85%, #1abc9c 90%, rgba(26, 188, 156, 0.6) 90%, rgba(26, 188, 156, 0.6) 95%, #1abc9c 95%, #1abc9c 100%)";
    buttonStyle.cursor = "pointer";


    
}

  sort(algorithmName) {
    this.disableSortButtons();
    const [animations, ] = algorithms[algorithmName](this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const [ , barOneIndex, barTwoIndex] = animations[i];
            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;

            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * this.state.ANIMATION_SPEED_MS);
            
        }
        else {
            setTimeout(() => {
                const [ , barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              },i * this.state.ANIMATION_SPEED_MS);
        }
    }
    setTimeout(() => this.restoreStoreButtons(), (animations.length - 1) * this.state.ANIMATION_SPEED_MS); 
  }

  render() {
    const {array} = this.state;

    return (
      <>
        <p className="range-field" style={{ display: 'inline-block', width: '25%', marginRight: '20px' }}>
          <label style={{ marginRight: '10px' }}>Array Size: </label>
          <input value={this.state.NUMBER_OF_ARRAY_BARS} type="range" id="test5" min="10" max="300" onChange={(e) => { this.setState({ NUMBER_OF_ARRAY_BARS: e.target.value }); this.resetArray(e.target.value); }} />
        </p>

        <p className="range-fieldnew" style={{ display: 'inline-block', width: '20%', marginRight: '10px' }}>
          <label style={{ marginRight: '10px' }}> Time: </label>
          <input value={this.state.ANIMATION_SPEED_MS} type="range" id="test6" min="2" max="100" onChange={(e) => { this.setState({ ANIMATION_SPEED_MS: e.target.value });  }} />
        </p>
        <button className="custombtn second" id="generateNewArray" style={{ marginRight: '6px' }} onClick={() => this.resetArray(this.state.NUMBER_OF_ARRAY_BARS)}>Generate New Array</button>
        <button className="custombtn second" id="generateNewArrayCustom" style={{ marginRight: '6px' }} onClick={() => this.resetArray1(this.state.NUMBER_OF_ARRAY_BARS)}>User Input Array</button>
        <button className="custombtn second" id="mergeSort" style={{ marginRight: '6px' }} onClick={() => this.sort('mergeSort')}>Merge Sort</button>
        <button className="custombtn second" id="quickSort" style={{ marginRight: '6px' }} onClick={() => this.sort('quickSort')}>Quick Sort</button>
        
        <br /><br />
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${this.state.width}px`
              }}></div>
          ))}
        </div>
      </>
    );
  }
}



function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}


