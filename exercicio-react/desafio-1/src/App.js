import './App.css';
import { Box } from './components/box/box';

function App() {
  return (
    <>
      <Box>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex, repellat nam tempora quisquam debitis praesentium asperiores perferendis unde qui aspernatur fugit at aliquam accusantium. Tenetur esse iste architecto quasi.</p>
      </Box>
      <Box bgColor={'lightcoral'}>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex, repellat nam tempora quisquam debitis praesentium asperiores perferendis unde qui aspernatur fugit at aliquam accusantium. Tenetur esse iste architecto quasi.</p>
      </Box>
    </>
  );
}

export default App;
