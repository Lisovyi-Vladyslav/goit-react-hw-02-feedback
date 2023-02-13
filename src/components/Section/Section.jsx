import PropTypes from "prop-types";

export const Section = ({title, children}) => {
  // console.log(props);
    return (
      <>
            <h1>{title}</h1>
         {children}
       </>
  );
};
