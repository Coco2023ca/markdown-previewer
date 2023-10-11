import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%; /* Set the width of the container */
  max-width: 600px; /* Set the maximum width to prevent excessive width */
`;

const StyledTextArea = styled.textarea`
  width: 100%; /* Set the width of the textarea to 100% of its container */
  height: 200px; /* Set the initial height of the textarea */
  padding: 10px; /* Add padding for better readability */
  border: 1px solid #ccc; /* Add a border to the textarea */
  resize: vertical; /* Allow vertical resizing of the textarea */
  font-size: 16px; /* Set the font size */
`;

interface MarkdownInputProps {
    value: string; // A string that corresponds to the current Markdown text
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // A function that handles changes to the textarea
  }

  const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
    return (
      <InputContainer>
        <StyledTextArea
          value={value}
          onChange={onChange}
          placeholder="Type your Markdown here..."
        />
      </InputContainer>
    );
  };
  
  export default MarkdownInput;