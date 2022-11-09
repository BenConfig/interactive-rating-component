import { useState } from 'react';
import RatingSelection from './components/RatingSelection';
import RatingSubmitted from './components/RatingSubmitted';
import './app.css';

export default function App() {
    const [currentRating, setCurrentRating] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const changeRating = newRating => setCurrentRating(newRating);

    const submitForm = e => {
        e.preventDefault();
        setIsFormSubmitted(true);
    }

    return (
        <main  className={`card ${isFormSubmitted && "flip"}`}>
            <RatingSelection
                currentRating={currentRating}
                changeRating={changeRating}
                submitForm={submitForm} />
            <RatingSubmitted currentRating={currentRating} />
        </main>
    )
}