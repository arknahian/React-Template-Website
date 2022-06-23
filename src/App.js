import './App.css';
import Navigation from './Component/Navigation/Navigation';
import MiddleSection from './Component/MiddleSection/MiddleSection';

function App() {
  return (
    <div className="main">
      <div className="left-section main-comp">
        <Navigation></Navigation>
      </div>
      <div className='middle-section'>
        <MiddleSection></MiddleSection>
      </div>
      <div className='right-section'>
        right section
      </div>
    </div>
  );
}

export default App;
