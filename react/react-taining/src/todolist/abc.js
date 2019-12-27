constructor(props) {
  super(props);
  this.state = {
    term: '',
    items: []
    };
    this.change=this.change.bind(this);
    this.submit=this.submit.bind(this);
}

change = (e) => {
  this.setState({ term: e.target.value });
}

submit = (event) => {
  event.preventDefault();
  this.setState({
    term: "",
    items: [...this.state.items, this.state.term]
  });
}

 render() {
  return (
    <div>
      <input type ="text" value={this.state.term} placeholder="Enter your text here....." onChange = {this.change}>
      </input>
      <button type="Submit" onClick = {this.submit}>add</button>
      <Items entries = {this.state.items} />
    </div>
  )
}
