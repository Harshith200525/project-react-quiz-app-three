import { Link } from 'react-router-dom'
import './ResultComponent.css'
import { useEffect, useState } from 'react'

export default function ResultComponent() {
    const [attempted, setAttempted] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    useEffect(() => {
        const quizScoresString = localStorage.getItem('quizScores');
        if (quizScoresString) {
            const quizScores = JSON.parse(quizScoresString);
            setAttempted(quizScores.attempted);
            setCorrect(quizScores.correct);
            setWrong(quizScores.wrong);
        } else {
            setAttempted(0);
            setCorrect(0);
            setWrong(0);
        }
    }, []);


    const percentage = () => {
        return parseInt((correct / 15) * 100);
    }

    return (
        <>
            <div className='main-result-container'>
                <h1>Result</h1>
                <div className='detailed-result-container'>
                    <h3>{percentage() > 50 ? "Congratulations You passed!" : "Practice more!"}</h3>
                    <h1>Your score is {percentage()}%</h1>
                    <div className='detailed-result'>
                        <div className='questions-marks'>
                            <h4>Total number of questions</h4>
                            <h4>15</h4>
                        </div>
                        <div className='questions-marks'>
                            <h4>Number of attempted questions</h4>
                            <h4>{attempted}</h4>
                        </div>
                        <div className='questions-marks'>
                            <h4>Number of correct answers</h4>
                            <h4>{correct}</h4>
                        </div>
                        <div className='questions-marks'>
                            <h4>Number of wrong answers</h4>
                            <h4>{wrong}</h4>
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                <button className='button-1'><Link to='/quiz' className='button-1-text'>Play again</Link></button>
                <button className='button-2'><Link to='/' className='button-2-text'>Back to home</Link></button>
                </div>
            </div>
        </>
    )
}