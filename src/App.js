import React, { useState } from 'react'
import { FoodBox } from './components/FoodBox/FoodBox'
import { Header } from './components/Header/Header'
import data from './foods.json'
import './App.css'
import { Modal } from './components/Modal/Modal'
import { TodayFood } from './components/TodayFood'

function App() {
  const [foods, setFoods] = useState(data)
  const [filteredFoods, setFilteredFoods] = useState(data)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todayFood, setTodayFood] = useState([])

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleNewFood = (newFood) => {
    setFoods([...foods, { ...newFood, quantity: 0 }])
    setFilteredFoods([...foods, newFood])
    setIsModalOpen(false)
  }

  const handleSearch = (searchTerm) => {
    const filteredSearch = foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredFoods(filteredSearch)
  }

  const handleNewTodayFood = (food) => {
    food.quantity !== 0 && setTodayFood([...todayFood, food])
  }

  return (
    <div className="container">
      <Modal isOpen={isModalOpen} handleOpenModal={handleOpenModal} handleNewFood={handleNewFood} />
      <Header handleOpenModal={handleOpenModal} handleSearch={handleSearch} />
      <div className="columns">
        <div className="column">
          {filteredFoods.map(food => (
            <FoodBox food={food} key={food.name} handleNewTodayFood={handleNewTodayFood} />
          ))}
        </div>
        <TodayFood todayFood={todayFood} />
      </div>
    </div>
  )
}

export default App
