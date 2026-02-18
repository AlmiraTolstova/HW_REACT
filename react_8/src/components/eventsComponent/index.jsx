function EventsComponent() {
  return (
    <div>
      <h1 onClick={() => console.log("click")}>Click </h1>
      <h1 onDoubleClick={() => console.log("double click")}>Double Click</h1>
      <h1
        onMouseDown={() => console.log("mouse down")}
        onMouseUp={() => console.log("mouse up")}
      >
        Mouse down
      </h1>
      <h1
        onMouseOver={() => console.log("mouse over")}
        onMouseOut={() => console.log("mouse out")}
      >
        Mousse over
      </h1>
      <h1 onMouseMove={() => console.log("mouse move")}>Mouse move</h1>
    </div>
  );
}

export default EventsComponent;
