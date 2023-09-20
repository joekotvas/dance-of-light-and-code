import { useState } from 'react'

import haikuData from './haiku-data'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [haiku, setHaiku] = useState([])

  const composeHaiku = (category) => {
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
      <div className="container">
        <div className="categories">
          {window.innerWidth > 580 ? (
            Object.keys(haikuData).map((category) => (
              <button key={category} onClick={() => composeHaiku(category)}>
                {category}
              </button>
            ))
          ) : (
            <select onChange={(e) => composeHaiku(e.target.value)}>
              <option value="">Select a category</option>
              {Object.keys(haikuData).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          )}
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
    </div>
  )
}

export default App
