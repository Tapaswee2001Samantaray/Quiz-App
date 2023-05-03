import { useLocation } from "react-router-dom"


export default function Result() {
    const location = useLocation();
    return (
        <div className="Res">
            <h1>Your Score is {location.state * 4} out of 20</h1>
            <h1>Number of correct answer is {location.state}</h1>
            <h1>Number of wrong answer is {5 - location.state}</h1>
        </div>
    )
}