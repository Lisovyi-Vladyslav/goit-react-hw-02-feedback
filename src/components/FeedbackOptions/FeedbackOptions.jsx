import PropTypes from "prop-types";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
 
    return (
      <>
      
          <ul>
            {
              options.map(feedback => (
                <li key={feedback.id}>
                  <button  name={feedback.id} type="button" onClick={onLeaveFeedback}>
         {feedback.title}
        </button>
                </li>
              ))}
          </ul>
          <button  onClick={event => console.log(event)}>Click me!</button>
       </>
  );
};

FeedbackOptions.propTypes = {
   onLeaveFeedback: PropTypes.func,
};