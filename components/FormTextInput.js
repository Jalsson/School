import React from 'react';


const FormTextInput = ({style, ...otherProps}) => {
    return (
      <TextInput
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  };

  export default FormTextInput;