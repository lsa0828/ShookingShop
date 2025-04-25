function RegisterCardButton({isFormValid, handleRegister}) {
  if(isFormValid) {
    return (
      <div className="mt-7 m-4">
        <button className="w-full p-3 bg-black hover:bg-gray-800 text-white rounded-[30px]"
          onClick={handleRegister}>작성 완료</button>
      </div>
    );
  }
}

export default RegisterCardButton;