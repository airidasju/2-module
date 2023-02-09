import rand from '../../functions/rand';
import ShowName from '../../components/jb/ShowName';

function Animal({ animalName, color, h1Class }) {
  const fontFamily = 'monospace';

  return (
    <h1
      className={h1Class}
      style={{
        color,
        padding: '8px 30px',
        fontSize: rand(20, 50) + 'px',
        letterSpacing: rand(0, 1) ? '5px' : null,
      }}
    >
      <ShowName animalName={animalName} fontFamily={fontFamily}></ShowName> No:{' '}
      {rand(11, 15)}
    </h1>
  );
}

export default Animal;
