import { Link } from "react-router-dom"
import "./HomeComponent.css"

export default function HomeComponent() {
    return (
        <>
            <div className="main-home-container">
                <h1>Quiz App</h1>
                <Link to="/quiz">
                <button className="play-btn">Play</button>
                </Link>
            </div>
        </>
    )
}