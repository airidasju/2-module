function Cat({ name, color, weight }) {
  return (
    <div className='cat' style={{ backgroundColor: color }}>
      <span style={{ color: 'white' }}>
        {name}: {weight}kg
      </span>
    </div>
  );
}

export default Cat;