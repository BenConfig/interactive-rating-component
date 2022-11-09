const RatingSelection = ({ currentRating, changeRating, submitForm }) => {

    const ratingValues = ['1', '2', '3', '4', '5'];

    const ratingElements = ratingValues.map(value => (
            <div className="rating-selection__form-control" key={value}>
                <input
                    className="rating-selection__input sr-only"
                    type="radio"
                    id={`rating-selection-${value}`}
                    name="rating"
                    value={value}
                    checked={currentRating === value}
                    onChange={() => changeRating(value)}
                />
                <label
                    className="rating-selection__label"
                    htmlFor={`rating-selection-${value}`}>
                    {value}
                </label>
            </div>
        )
    );

    return (    
        <section className="rating-selection" aria-describedby="rating-selection-heading">
            <h1 className="rating-selection__heading" id="rating-selection-heading">How did we do?</h1>
            <p className="rating-selection__paragraph">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <form className="rating-selection__form" onSubmit={submitForm}>
                <fieldset className="rating-selection__fieldset">
                    <legend className="sr-only">Select a rating from 1 to 5</legend>
                    {ratingElements}
                </fieldset>
                <button className="rating-selection__submit" disabled={!currentRating}>Submit</button>
                <p className="rating-selection__submit-tip sr-only">Form submit button is disabled until rating has been selected</p>
            </form>
        </section>
    );
}
 
export default RatingSelection;