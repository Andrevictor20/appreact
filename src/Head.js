import React from 'react'

const Head = (props) => {
    React.useEffect(() => {
      document.title = 'Project-React |' + props.title;
      document
        .querySelector("meta[name='description']")
        .setAttribute('content', props.description);
    }, [props]);
  
    return <></>;
  };
  
export default Head
