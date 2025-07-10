import CustomInput from "../../sample/CustomInput";

function UsernameInput({ username, setUsername }) {
  const handleChange = (e) => {
    setUsername(e.target.value);
  }
  return (
    <div className="m-2">
      <CustomInput className="w-full"
        name="username" type="text"
        value={username}
        onChange={handleChange}
        placeholder='username' />
    </div>
  );
}

export default UsernameInput;