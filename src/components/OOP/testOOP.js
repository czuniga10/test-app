import React, {Component} from 'react';
import TestItem from './testItem';

class TestOOP extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      obj: [
        {
          "name": "test",
          "description": "fdsafdf",
        },
        {
          "name": "test1",
          "description": "fdlkasjfskld",
        },
        {
          "name": "test2",
          "description": "r4qfwefjrig",
        }
      ]
    }
  } 

  render() {
    var testobj = this.state.obj;
    var showItems = testobj.map(x => {
      return (<TestItem name={x.name} description={x.description} />)
    })
    return (
      <div className="test">
          <h4 style={{color: "white"}}>Test works</h4>
          {showItems}
      </div>
    );
  }
}

export default TestOOP;