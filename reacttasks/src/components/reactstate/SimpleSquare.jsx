function SimpleSquare({ sq, setSq, i, color}) {
  const delSq = () => {
    setSq((s) => s.filter((s) => s.id !== sq.id));
  };

  return (
    <div className='simpleSq' style={{backgroundColor: color}}>
      <button className='delButton' onClick={delSq}></button>
      <span style={{color: 'white'}}>{i}</span>
    </div>
  );
}

export default SimpleSquare;
