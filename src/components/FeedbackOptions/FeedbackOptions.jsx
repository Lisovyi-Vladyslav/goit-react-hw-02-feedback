
import feedbackOptions from 'feedbackOptions.json';


export const FeedbackOptions = (props) => {
  // console.log(props);
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
