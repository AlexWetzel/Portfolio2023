function Explanation(props) {
  return(
    <div id="explanation" className="p-3 mt-5 mb-3">
      <h3>About this Document</h3>
      {props.children}
    </div>
  );
}

export default Explanation;