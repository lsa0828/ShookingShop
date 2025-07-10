import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPostRegister } from "../../api/member";
import UsernameInput from "../input/UsernameInput";
import PasswordInput from "../input/PasswordInput";
import NicknameInput from "../input/NicknameInput";
import BirthDateInput from "../input/BirthDateInput";
import RegisterButton from "./button/RegisterButton";
import InputName from "./InputName";

function RegisterInput() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const isUsernameValid = username.length > 0;
  const isPasswordValid = password.length > 0;
  const [validMessage, setValidMessage] = useState('');

  const handleRegisterClick = async () => {
    if (!isUsernameValid) {
      setValidMessage('아이디를 입력하십시오.');
      return;
    } else if (!isPasswordValid) {
      setValidMessage('비밀번호를 입력하십시오.');
      return;
    }
    const registerRequest = {
      "username": username,
      "password": password,
      "nickname": nickname ? nickname : username,
      "birthDate": birthDate
    };
    const data = await fetchPostRegister(registerRequest);
    if (!data) {
      setValidMessage('회원가입에 실패했습니다. 정보를 다시 입력하십시오.');
      return;
    }
    await navigate('/login');
  }

  return (
    <div>
      <InputName name="아이디" />
      <UsernameInput username={username} setUsername={setUsername} />
      <InputName name="비밀번호" />
      <PasswordInput password={password} setPassword={setPassword} />
      <InputName name="비밀번호 확인" />
      <PasswordInput password={passwordConfirm} setPassword={setPasswordConfirm} />
      <InputName name="닉네임" />
      <NicknameInput nickname={nickname} setNickname={setNickname} />
      <InputName name="생년월일" />
      <BirthDateInput birthDate={birthDate} setBirthDate={setBirthDate} />
      <div>
        <p className="px-3 text-red-500">{validMessage}</p>
      </div>
      <RegisterButton handleLoginClick={handleRegisterClick} />
    </div>
  );
}

export default RegisterInput;