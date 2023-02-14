import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    amount: "",
    currency: "Euro",
    result: "",

    currencies: [
      {
        id: 0,
        name: "Euro",
        ratio: 0.21,
        title: "Value in Euro:",
        icon: "€",
      },
      {
        id: 1,
        name: "Dollar",
        ratio: 0.22,
        title: "Value in Dollars:",
        icon: "$",
      },
      {
        id: 2,
        name: "Funt",
        ratio: 0.19,
        title: "Value in Funts:",
        icon: "£",
      },
      {
        id: 3,
        name: "Jen",
        ratio: 29.58,
        title: "Value in Jen:",
        icon: "¥",
      },
    ]
  }


  handleSetAmount = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  HandleSetCurrency = (e) => {
    this.setState({
      currency: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { amount, currency, currencies } = this.state;
    currencies.map(currencie => {
      if (currencie.name === currency) {
        const calculations = (Number(amount) * currencie.ratio).toFixed(2)
        const repos = `${currencie.title} ${calculations} ${currencie.icon}`
        return (
          this.setState({
            result: repos
          })
        )
      } else {
      }
    }
    )
  }
  render() {
    return (
      <div className='container'>
        <header>
          <h1 className='header'>Currency Calculator</h1>
        </header>
        <main>
          <form
            onSubmit={this.handleSubmit}
          >
            <div className='form--layout'>
              <label>
                <span htmlFor="text">Enter your amount in PLN:</span>
                <input
                  required
                  type="number"
                  id="text"
                  className='input'
                  value={this.state.amount}
                  onChange={this.handleSetAmount}

                />
              </label>
              <label>
                <span htmlFor="text">Choose a currency:</span>
                <select value={this.state.currency} onChange={this.HandleSetCurrency} className="select">
                  <option value="Euro">Euro</option>
                  <option value="Dollar">Dollar</option>
                  <option value="Funt">Funt</option>
                  <option value="Jen">Jen</option>
                </select>
              </label>
              <span className='result'>{this.state.result}</span>
            </div>
            <span className='info'>
              Data retrieved from page NBP(Narodowy Bank Polski) on 14.02.2023</span>
            <button className='form--button' type="submit">Check</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
