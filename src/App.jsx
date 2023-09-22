import { useState } from 'react'
import { BiRefresh } from 'react-icons/bi'

import haikuData from './haiku-data'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [haiku, setHaiku] = useState([])

  const composeHaiku = (category = selectedCategory) => {
    setSelectedCategory(category)
    const getRandomLine = (lines) =>
      lines[Math.floor(Math.random() * lines.length)]

    const firstLine = getRandomLine(haikuData[category].five_syllables)
    const secondLine = getRandomLine(haikuData[category].seven_syllables)
    const thirdLine = getRandomLine(haikuData[category].five_syllables)

    if (firstLine === thirdLine) {
      composeHaiku(category)
      return
    }

    setHaiku([firstLine, secondLine, thirdLine])
  }

  return (
    <div className="app">
      <div className="app-headings-container">
        <h1>Dance of Light and Code</h1>
        <h2>AI Haiku Composer</h2>
      </div>
      <div className="container">
        <div className="categories">
          <div className="buttons">
            {Object.keys(haikuData).map((category) => (
              <button key={category} onClick={() => composeHaiku(category)}>
                {category}
              </button>
            ))}
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => composeHaiku(e.target.value)}
          >
            <option value="">Select a category</option>
            {Object.keys(haikuData).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="button--refresh" onClick={() => composeHaiku()}>
            <BiRefresh />
          </button>
        </div>
        <div className="haiku-wrapper">
          <div className="haiku">
            {haiku.map((line, index) => (
              <p className="line" key={index}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
      <footer>
        © 2023 <a href="https://josephkotvas.com/">Joseph Kotvas</a>
      </footer>
    </div>
  )
}

export default App
