function LoginTitle() {
  const title = '로그인';
  const detail = '아이디와 비밀번호를 입력해주세요.';
  return (
    <div className="mb-10">
      <p className="text-3xl font-bold pb-2">{title}</p>
      <p>{detail}</p>
    </div>
  );
}

export default LoginTitle;