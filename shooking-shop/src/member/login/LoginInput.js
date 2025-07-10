import { useState } from "react";
import UsernameInput from "../input/UsernameInput";
import PasswordInput from "../input/PasswordInput";
import LoginButton from "./button/LoginButton";
import { fetchPostLogin } from "../../api/member";
import { useNavigate } from "react-router-dom";
import { useSetProductInCartAtoms } from "../../utils/useSetProductInCartAtoms";

function LoginInput() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validMessage, setValidMessage] = useState('');
  const setProductInCartAtoms = useSetProductInCartAtoms();

  const handleLogin = async (e) => {
    e.preventDefault();

    const isUsernameValid = username.length > 0;
    const isPasswordValid = password.length > 0;

    if (!isUsernameValid && !isPasswordValid) {
      setValidMessage('아이디와 비밀번호를 입력하십시오.');
      return;
    } else if (!isUsernameValid) {
      setValidMessage('아이디를 입력하십시오.');
      return;
    } else if (!isPasswordValid) {
      setValidMessage('비밀번호를 입력하십시오.');
      return;
    }
    const loginRequest = {
      "username": username,
      "password": password
    };
    const data = await fetchPostLogin(loginRequest);
    if (!data) {
      setValidMessage('아이디 또는 비밀번호가 잘못되었습니다.');
      return;
    }
    localStorage.setItem("ACCESS_TOKEN", data.token);
    setProductInCartAtoms();
    navigate('/');
  }

  return (
    <form onSubmit={handleLogin}>
      <UsernameInput username={username} setUsername={setUsername} />
      <PasswordInput password={password} setPassword={setPassword} />
      <div>
        <p className="pl-3 text-red-500">{validMessage}</p>
      </div>
      <LoginButton />
      <p className="text-gray-600 cursor-pointer text-center" onClick={() => navigate('/register')}>
        회원가입
      </p>
    </form>
  );
}

export default LoginInput;