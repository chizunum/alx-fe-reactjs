import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from './components/RecipeDetails';
import SearchBar from "./components/SearchBar";


function Home() {
return (
<div>
<AddRecipeForm />
<RecipeList />
<SearchBar />
</div>
);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen bg-gray-50 p-6">
       <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <Link to="/" className="text-2xl font-bold">🍴 Recipe Sharing App</Link>
        </header>


        <main>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
         </Routes>
        </main>
       </div>
      </div>
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
