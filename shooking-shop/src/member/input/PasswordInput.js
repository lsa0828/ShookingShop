import CustomInput from "../../sample/CustomInput";

function PasswordInput({ password, setPassword }) {
  const handleChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="m-2">
      <CustomInput className="w-full"
        name="password" type="password"
        value={password}
        onChange={handleChange}
        placeholder='password' />
    </div>
  );
}

export default PasswordInput;