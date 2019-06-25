class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
  }
  // add handleChange() and submitMessage() methods here

  handleChange(evt) {
    this.setState(Object.assign({}, this.state, { input: evt.target.value }));
  }

  submitMessage() {
    const newMessages = [...this.state.messages, this.state.input];

    this.setState(Object.assign({}, { input: '', messages: newMessages }));
  }

  render() {
    const state = this.state;
    const handleChange = this.handleChange.bind(this);
    const submitMessage = this.submitMessage.bind(this);
    const messages = this.state.messages;

    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={handleChange}/>
        <button onClick={submitMessage}>Add message</button>
        
        { /* render an input, button, and ul here */ }
          <ul>
            {messages.map(function(name, index){
              return <li key={ index }>{name}</li>;
            })}
          </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
