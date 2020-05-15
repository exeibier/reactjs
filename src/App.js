import React from 'react';
import logo from './logo.svg';
import './App.css';

//COmponents
import Clock from './components/Clock'
import Card from './components/Card/Card'
import Counter from './components/Counter/Counter'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const data = [
  {
    'category':'Programming',
    'title':'Cool',
    'description':'How to use reactJS',
    'author':'Me',
    'publicationDate': '25/may/20',
    'readTime' : '25 min.'
  },
  {
    'category':'Programming',
    'title':'Cool',
    'description':'How to use reactJS',
    'author':'Me',
    'publicationDate': '25/may/20',
    'readTime' : '25 min.'
  }
]

export default class App extends React.Component {
  _renderCards() {
    return data.map(({
      category,
      title,
      description,
      author,
      publicationDate,
      readTime
    }) => {
      return (
        <Card 
          category={category}
          title={title}
          description={description}
          author={author}
          publicationDate={publicationDate}
          readTime={readTime}
        />
      )
    })
  }
  render () {
          return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Clock/>
                    <Counter/>
                  </a>
                </header>
                <div className='container-cards'>
                  {this._renderCards()}

                </div>
            </div>
    )
  }
}

// export default App;
