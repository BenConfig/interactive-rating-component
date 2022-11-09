const RatingSubmitted = ({ currentRating }) => {
    return (
        <section className="rating-submitted" aria-labelledby="rating-submitted-heading">
            <h1 className="rating-submitted__heading" id="rating-submitted-heading">Thank you!</h1>
            <output className="rating-submitted__output">You selected {currentRating} out of 5</output>
            <p className="rating-submitted__paragraph">We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</p>
            <img
                className="rating-submitted__img"
                src={require(`../images/illustration-thank-you.svg`).default}
                alt=""
                aria-hidden="true" />
        </section>
    );
}
 
export default RatingSubmitted;