import React, { useState } from "react";

const App = () => {
  const tempArr = [];
  const [items1, setItems1] = useState([
    { name: "a", value: false },
    { name: "b", value: false },
    { name: "c", value: false },
    { name: "d", value: false },
  ]);
  const [items2, setItems2] = useState([
    { name: "e", value: false },
    { name: "f", value: false },
    { name: "g", value: false },
    { name: "h", value: false },
  ]);

  function handleChange(listItem) {
    listItem.value = !listItem.value;
  }

  function handleLeft() {
    const tempArr = [];
    items2.forEach((item) => {
      if (item.value) {
        tempArr.push(item);
      }
    });
    setItems2(items2.filter((eachItem2) => !eachItem2.value));
    tempArr.forEach((temp) => (temp.value = false));
    setItems1([...items1, ...tempArr]);
  }

  function handleRight() {
    const tempArr = [];
    items1.forEach((item) => {
      if (item.value) {
        tempArr.push(item);
      }
    });
    setItems1(items1.filter((eachItem1) => !eachItem1.value));
    tempArr.forEach((temp) => (temp.value = false));
    setItems2([...items2, ...tempArr]);
  }

  function handleAllLeft() {
    setItems1([...items1, ...items2]);
    setItems2([]);
  }

  function handleAllRight() {
    setItems2([...items2, ...items1]);
    setItems1([]);
  }

  return (
    <div className="container">
      <div className="left-container">
        {items1.map((item) => (
          <div className="contents" key={item.name}>
            <input type="checkbox" onClick={() => (item.value = !item.value)} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="middle-container">
        <button onClick={handleAllLeft}>All left</button>
        <button onClick={handleLeft}>Left</button>
        <button onClick={handleRight}>Right</button>
        <button onClick={handleAllRight}>All right</button>
      </div>
      <div className="right-container">
        {items2.map((item) => (
          <div className="contents" key={item.name}>
            <input type="checkbox" onClick={() => (item.value = !item.value)} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
