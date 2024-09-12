import './App.css';
import Calculator from './components/Calculator';
import CalendarComp from './components/CalendarComp';
import Carousel from './components/Carousel';
import Counter from './components/Counter';
import DarkLightTheme from './components/DarkLightTheme';
import InfiniteScroll from './components/InfiniteScroll';
import SearchComponent from './components/SearchComponent';
import StarRating from './components/StarRating';
import StopWatch from './components/StopWatch';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <CalendarComp />
      <Carousel />
      <SearchComponent />
      <Counter />
      <TodoApp />
      <Calculator />
      {/* <InfiniteScroll /> */}
      <StarRating totalStars={5} rating={2} />
      <StopWatch />
      <DarkLightTheme />
    </div>
  );
}

export default App;
