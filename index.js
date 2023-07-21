const Box = (props) => {
  const { className, boxText } = props;
  return <button className={`${className}`}>{boxText}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="small-box" boxText="Small" />
      <Box className="medium-box" boxText="Medium" />
      <Box className="large-box" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
