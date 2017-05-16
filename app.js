//Item
const Item = React.createClass({
  render(){
    return (<li className="list-group-item">{this.props.value + this.props.children}
        <a className="glyphicon glyphicon-remove right"></a>
        <a className="glyphicon glyphicon-plus right "></a>
    </li>)
  }
});
//ItemEditor
const ItemEditor = React.createClass({
  render(){
    return (<li className="list-group-item">
     <input defaultValue={this.props.value}></input>
     <a className="glyphicon glyphicon-saved"></a>
   </li>)
  }
});
//List
const List = React.createClass({

  getInitialState(){
    return({
      list:new Set(),
      editList:new Set()
    });
  },
  add(){
    this.state.editList.add({value:''});
    this.forceUpdate();
  },

  render(){
    const itemDom = [];
    const editorDom = [];

    for(let item of this.state.list){
      itemDom.push(<Item value={item.value} />);
    }

    for(let editlist of this.state.editList){
      editorDom.push(<ItemEditor value={editlist.value} />);
    }
    return (<div>
      <button onClick={this.add} className="btn default">Add+</button>
      <ul className="list-group">
        {itemDom}
        {editorDom}
      </ul>
    </div>)
  }
});

ReactDOM.render(
  <List/>,
  document.getElementById('test')
)
