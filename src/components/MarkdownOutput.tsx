import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const OutputContainer = styled.div`
  width: 100%; /* Set the width of the container */
  max-width: 600px; /* Set the maximum width to prevent excessive width */
  border: 1px solid #ccc; /* Add a border to the container */
  padding: 20px; /* Add padding for better readability */
`;

interface MarkdownOutputProps {
    markdown: string; // The Markdown text to be converted
  }

  const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
    return (
      <OutputContainer>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </OutputContainer>
    );
  };
  
  export default MarkdownOutput;