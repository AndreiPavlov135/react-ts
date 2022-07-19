import React, { useRef, useState } from "react";

export default function EventExample() {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  function changeEvent(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clickHaldler(e: React.MouseEvent<HTMLButtonElement>) {
    // console.log(value);
    console.log(inputRef.current?.value);
  }

  function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(true);
  }

  function dragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(false);
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(true);
    console.log("DROP");
  }

  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="text"
        value={value}
        onChange={changeEvent}
        placeholder="управляемый"
      />
      <input type="text" ref={inputRef} placeholder="неуправляемый" />

      <button onClick={clickHaldler}>push</button>
      <div
        draggable
        style={{ width: 100, height: 100, background: "lightgreen" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={dragLeave}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 100,
          height: 100,
          background: isDrag ? "lightgreen" : "grey",
        }}
      ></div>
    </div>
  );
}
