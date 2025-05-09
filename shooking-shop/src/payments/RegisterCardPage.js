import { useNavigate } from "react-router-dom";
import RegisterCardHeader from "./RegisterCardHeader";
import RegisterCardInput from "./RegisterCardInput";

function RegisterCardPage() {
  const navigate = useNavigate();
  return (
    <div>
      <RegisterCardHeader />
      <RegisterCardInput registerClick={() => navigate('/pay')} />
    </div>
  );
}

export default RegisterCardPage;