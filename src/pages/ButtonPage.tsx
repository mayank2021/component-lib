import Button from "../components/Button";
import { MdAccountCircle } from "react-icons/md";

const ButtonPage = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="flex flex-col gap-4">
        <Button color="primary" variant="contained" rounded>
          Hi There 1
        </Button>
        <Button color="primary" variant="contained">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="primary" variant="outlined">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="primary" variant="text">
          <MdAccountCircle />
          Hi There 1
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Button color="secondary" variant="contained" rounded>
          Hi There 1
        </Button>
        <Button color="secondary" variant="contained">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="secondary" variant="outlined">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="secondary" variant="text">
          <MdAccountCircle />
          Hi There 1
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Button color="success" variant="contained" rounded>
          Hi There 1
        </Button>
        <Button color="success" variant="contained">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="success" variant="outlined">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="success" variant="text">
          <MdAccountCircle />
          Hi There 1
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Button color="warning" variant="contained" rounded>
          Hi There 1
        </Button>
        <Button color="warning" variant="contained">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="warning" variant="outlined">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="warning" variant="text">
          <MdAccountCircle />
          Hi There 1
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Button color="danger" variant="contained" rounded>
          Hi There 1
        </Button>
        <Button color="danger" variant="contained">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="danger" variant="outlined">
          <MdAccountCircle />
          Hi There 1
        </Button>
        <Button color="danger" variant="text">
          <MdAccountCircle />
          Hi There 1
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
