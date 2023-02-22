function SimpleSquare({ sq, setSq }) {
  const delSq = () => {
    setSq((s) => s.filter((s) => s.id !== sq.id));
  };

  return (
    <div className='simpleSq'>
      <button className='delButton' onClick={delSq}></button>
    </div>
  );
}

export default SimpleSquare;
