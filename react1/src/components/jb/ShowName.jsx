function ShowName({ animalName, fontFamily }) {
  switch (animalName) {
    case 'Racoon':
      return <i>R-A-C-OO-N</i>;
    case 'Fox':
      return <u style={{ fontFamily }}>FoX</u>;
    default:
      return <b>what?</b>;
  }
}

export default ShowName;
