import CustomInput from "../../sample/CustomInput";

function NicknameInput({ nickname, setNickname }) {
  const handleChange = (e) => {
    setNickname(e.target.value);
  }
  return (
    <div className="m-2">
      <CustomInput className="w-full"
        name="nickname" type="text"
        value={nickname}
        onChange={handleChange}
        placeholder='nickname' />
    </div>
  );
}

export default NicknameInput;