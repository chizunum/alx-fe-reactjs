import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
       <img
          src="https://via.placeholder.com/300x200"
          alt="Recipe"
          className="w-full h-48 object-cover"
       />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Spaghetti Carbonara</h2>
          <p className="text-gray-600 text-sm mt-2">
            A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.
          </p>
          <button className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
           View Recipe
          </button>
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </Router>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
