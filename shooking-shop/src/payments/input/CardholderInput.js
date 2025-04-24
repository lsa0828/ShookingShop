function CardholderInput({cardholder, setCardholder}) {
  //const [cardholder, setCardholder] = useState('');

  const handleChange = (e) => {
    setCardholder(e.target.value);
  }

  return (
    <div>
      <p className="text-gray-700">카드 소유자 이름</p>
      <input className="p-3 font-bold bg-gray-200 rounded-lg focus:outline-none"
        type="text" value={cardholder}
        onChange={handleChange}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
    </div>
  );
}

export default CardholderInput;