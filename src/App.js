import React, { useState } from 'react'
import { FoodBox } from './components/FoodBox/FoodBox'
import { Header } from './components/Header/Header'
import foods from './foods.json'
import './App.css'
import { Modal } from './components/Modal/Modal'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleNewFood = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="container">
      <Modal isOpen={isModalOpen} handleNewFood={handleNewFood} />
      <Header handleNewFood={handleNewFood} />
      <div class="columns">
        <div class="column">
          {foods.map(f => (
            <FoodBox food={f} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
