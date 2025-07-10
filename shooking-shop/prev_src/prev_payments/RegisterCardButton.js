import BlackButton from "../BlackButton";

function RegisterCardButton({isFormValid, handleRegister}) {
  if(isFormValid) {
    return (
      <div className="mt-7">
        <BlackButton onClick={handleRegister} data-testid="register-card-button">작성 완료</BlackButton>
      </div>
    );
  }
}

export default RegisterCardButton;