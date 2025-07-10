import BlackButton from "../../../sample/button/BlackButton";

function RegisterButton({ handleRegisterClick }) {
  return (
    <div className="mt-7">
      <BlackButton onClick={handleRegisterClick}>회원가입</BlackButton>
    </div>
  );
}

export default RegisterButton;