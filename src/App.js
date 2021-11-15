import React, { useState } from 'react'
import { FoodBox } from './components/FoodBox/FoodBox'
import { Header } from './components/Header/Header'
import data from './foods.json'
import './App.css'
import { Modal } from './components/Modal/Modal'

function App() {

  const [foods, setFoods] = useState(data)
  const [isModalOpen, setIsModalOpen] = useState(false)


  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleNewFood = (newFood) => {
    setFoods(...foods, newFood)
  }


  return (
    <div className="container">
      <Modal isOpen={isModalOpen} handleOpenModal={handleOpenModal} handleNewFood={handleNewFood} />
      <Header handleOpenModal={handleOpenModal} />
      <div class="columns">
        <div class="column">
          {foods.map(food => (
            <FoodBox food={food} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
