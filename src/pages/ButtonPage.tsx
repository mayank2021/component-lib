import Button from "../components/Button";
import { MdAccountCircle } from "react-icons/md";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert("he;")}
        >
          <MdAccountCircle />
          Hi There 1
        </Button>
      </div>
      <div>
        <Button color="secondary" variant="outlined">
          Hi There 2
        </Button>
      </div>
      <div>
        <Button color="success" variant="text">
          Hi There 3
        </Button>
      </div>
      <div>
        <Button color="danger">Hi There 4</Button>
      </div>
      <div>
        <Button color="warning">Hi There 5</Button>
      </div>
      <div>
        <Button>Hi There 5</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
