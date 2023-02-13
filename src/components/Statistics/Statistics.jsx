
import feedbackWidget from 'feedbackWidget.json';


export const Statistics = (props) => {
  // console.log(props);
    return (
      <>
       

          <ul>
            {
              feedbackWidget.map(({id, title}) => (
                <li key={id}>
                  <span> {title}: {props[id]}</span>
                </li>
              ))}
        </ul>
       </>
  );
};
