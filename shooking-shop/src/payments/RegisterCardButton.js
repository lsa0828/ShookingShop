import BlackButton from "../BlackButton";

function RegisterCardButton({isFormValid, handleRegister}) {
  if(isFormValid) {
    return (
      <BlackButton onClick={handleRegister}>작성 완료</BlackButton>
    );
  }
}

export default RegisterCardButton;