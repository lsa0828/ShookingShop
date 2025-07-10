import { useNavigate } from "react-router-dom";
import AddCardHeader from "../AddCardHeader";
import AddCardInput from "../AddCardInput";

function AddCardPage() {
  const navigate = useNavigate();
  return (
    <div>
      <AddCardHeader />
      <AddCardInput GoClick={() => navigate(-1)} />
    </div>
  );
}

export default AddCardPage;