class App extends React.Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
    this.state = {
      number: 5,
      list: []
    }
  }

  fizzBuzz (N) {
    if (N % 15 === 0) {
      return "FizzBuzz"
    }

    if (N % 3 === 0) {
      return "Fizz"
    }

    if (N % 5 === 0) {
      return "Buzz"
    }

    return N
  }

  onClick () {
    var list = []
    for(var n=1; n<=this.state.number; n++) {
      list.push(this.fizzBuzz(n))
    }

    this.setState({list})
  }

  render () {
    return (
      <div>
        <h3>FizzBuzz!!</h3>

        <input type="number" min="0"
          value={this.state.number}
          onChange={ (ev) => {
            this.setState({number: parseInt(ev.target.value) })
          }}
          onKeyDown={ (ev) => {
            if (ev.key === 'Enter') {
              this.onClick()
            }
          }}
        />

        <button onClick={ this.onClick }>
          Запуск
        </button>

        <ol>
          { this.state.list.map( (N) => <li>{N}</li>) }
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.body);
