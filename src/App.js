import './App.css';
import { useResize } from './use-resize';

function App() {
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  return (
    <div className="App">
      <p>width: {width}px</p>
      <p>isScreenSm: {String(isScreenSm)}</p>
      <p>isScreenMd: {String(isScreenMd)}</p>
      <p>isScreenLg: {String(isScreenLg)}</p>
      <p>isScreenXl: {String(isScreenXl)}</p>
    </div>
  );
}

export default App;
