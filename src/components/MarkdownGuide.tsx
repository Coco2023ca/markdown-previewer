import React from 'react';
import styled from 'styled-components';


const GuideContainer = styled.div`
  background-color: #f7f7f7; /* Background color for the guide container */
  padding: 20px; /* Padding for the container */
  border: 1px solid #ddd; /* Border to separate it from other content */
`;

export { GuideContainer };

const MarkdownGuide: React.FC = () => {
    return (
      <GuideContainer>
        <h2>Markdown Syntax Examples</h2>
        <ul>
          <li>
            <code># This is a heading</code>
          </li>
          <li>
            <code>**Bold text**</code>
          </li>
          <li>
            <code>*Italic text*</code>
          </li>
        </ul>
      </GuideContainer>
    );
  };
  
  export default MarkdownGuide;