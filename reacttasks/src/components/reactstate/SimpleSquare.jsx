function SimpleSquare({ sq, setSq, i}) {
  const delSq = () => {
    setSq((s) => s.filter((s) => s.id !== sq.id));
  };

  return (
    <div className='simpleSq'>
      <button className='delButton' onClick={delSq}></button>
      <span style={{color: 'white'}}>{i}</span>
    </div>
  );
}

export default SimpleSquare;
