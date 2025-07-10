import CustomInput from "../../sample/CustomInput";

function BirthDateInput({ birthDate, setBirthDate }) {
  const handleChange = (e) => {
    setBirthDate(e.target.value);
  }
  return (
    <div className="m-2">
      <CustomInput className="w-full"
        name="birthDate" type="date"
        value={birthDate}
        onChange={handleChange}
        maxLength={8} /> 
    </div>
  );
}

export default BirthDateInput;