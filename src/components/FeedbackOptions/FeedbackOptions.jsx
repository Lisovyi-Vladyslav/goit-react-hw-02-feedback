import PropTypes from "prop-types";
import feedbackOptions from 'feedbackOptions.json';

export const FeedbackOptions = (props) => {
 
    return (
      <>
      
          <ul>
            {
              feedbackOptions.map(feedback => (
                <li key={feedback.id}>
                  <button  name={feedback.id} type="button" onClick={props.onLeaveFeedback}>
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