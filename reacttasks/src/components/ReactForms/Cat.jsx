
function Cat({ name, color, weight, cat, setCat }) {



  return (
    <div className='cat' style={{ backgroundColor: color }}>
      <span style={{ color: 'white' }}>
        {cat.name}: {weight}kg
      </span>
      <button className='edit' >Edit</button>
    </div>
  );
}

export default Cat;
