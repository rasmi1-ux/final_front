import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';


function Buttonbt() {
  return (
    <>
    <Link to="/browse">
      <Button variant="success"> Book Now</Button>
      </Link>

    </>
  );
}

export default Buttonbt;