// ReactDOM.render(
//   <div className="container">
//     <button className="btn default">Add+</button>
//     <ul className="list-group">
//       <li className="list-group-item">xixiixi
//           <a className="glyphicon glyphicon-remove right"></a>
//           <a className="glyphicon glyphicon-plus right "></a>
//       </li>
//       <li className="list-group-item">
//         <input value="ddd"></input>
//         <a className="glyphicon glyphicon-saved"></a>
//       </li>
//    </ul>
//  </div>,
//  document.getElementById('test')
// );

//Item
const Item = React.createClass({
  render(){
    return <li className="list-group-item">xixiixi
        <a className="glyphicon glyphicon-remove right"></a>
        <a className="glyphicon glyphicon-plus right "></a>
    </li>
  }
});
//ItemEditor
const ItemEditor = React.createClass({
  render(){
    return <li className="list-group-item">
     <input value="ddd"></input>
     <a className="glyphicon glyphicon-saved"></a>
   </li>
  }
});
//List
const List = React.createClass({
  render(){
     return <div>
      <button className="btn default">Add+</button>
      <ul className="list-group">
        <Item />
        <ItemEditor />
      </ul>
    </div>
  }
});

//
ReactDOM.render(
  <List/>,
  document.getElementById('test')
)
