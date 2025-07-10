import BlackButton from "../../../sample/button/BlackButton";

function AddCardButton({isFormValid, handleAddClick}) {
  if(isFormValid) {
    return (
      <div className="mt-7">
        <BlackButton onClick={handleAddClick} data-testid="register-card-button">작성 완료</BlackButton>
      </div>
    );
  }
}

export default AddCardButton;