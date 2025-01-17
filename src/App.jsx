import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from "./components/HomeComponent"
import QuizComponent from "./components/QuizComponent"
import ResultComponent from "./components/ResultComponent"

function App() {

  return (
    <div className='App'>
    <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/quiz" element={<QuizComponent />} />
            <Route path="/result" element={<ResultComponent />} />
        </Routes>
    </div>
  )
}

export default App
