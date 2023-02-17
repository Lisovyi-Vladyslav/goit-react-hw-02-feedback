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
       </>
  );
};

FeedbackOptions.propTypes = {
   onLeaveFeedback: PropTypes.func,
};