import Header from './Header.js';
import Loader from './Loader.js';
import Error from './Error.js';
import Main from './Main.js';
import StartScreen from './StartScreen.js';
import Question from './Question.js';
import NextButton from './NextButton.js';
import Progress from './Progress.js';
import FinishedScreen from './FinishedScreen.js';
import Footer from './Footer.js';
import Timer from './Timer.js';
import { useQuiz } from './contexts/QuizContext.js';

function App() {
  const { status } = useQuiz();

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishedScreen />}
      </Main>
    </div>
  );
}

export default App;
