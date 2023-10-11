import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../App.css'
import Header from './Header'; // Import your Header component
import MarkdownGuide from './MarkdownGuide'; // Import your MarkdownGuide component
import MarkdownInput from './MarkdownInput'; // Import your MarkdownInput component
import MarkdownOutput from './MarkdownOutput'; // Import your MarkdownOutput component

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  const onToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div>
      {/* Header component with onToggleGuide prop */}
      <Header onToggleGuide={onToggleGuide} />

      {/* Render MarkdownGuide component conditionally if showGuide is true */}
      {showGuide && <MarkdownGuide />}

      {/* Container with MarkdownInput and MarkdownOutput as children */}
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
    </div>
  )
}

export default App
