function RegisterTitle() {
  const title = '회원가입';
  const detail = '아이디와 비밀번호를 입력하여 회원가입을 진행하세요.';
  return (
    <div className="mb-10">
      <p className="text-3xl font-bold pb-2">{title}</p>
      <p>{detail}</p>
    </div>
  );
}

export default RegisterTitle;