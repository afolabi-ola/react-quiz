import { useQuiz } from './contexts/QuizContext';

function FinishedScreen() {
  const { points, maxPossiblePoints, highsore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emojis;

  if (percentage === 100) emojis = '🎖️';
  if (percentage >= 80 && percentage < 100) emojis = '🎉';
  if (percentage >= 50 && percentage < 80) emojis = '🙃';
  if (percentage >= 0 && percentage < 50) emojis = '🤔';
  if (percentage === 0) emojis = '🤦‍♀️';

  return (
    <>
      <p className='result'>
        <span>{emojis}</span> You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints}({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highsore}points)</p>

      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
