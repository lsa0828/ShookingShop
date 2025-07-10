import { useEffect, useState } from "react";
import { fetchGetMyInfo } from "../../api/member";
import MyInfoDetail from "./MyInfoDetail";

function MyInfo() {
  const [myInfo, setMyInfo] = useState();

  useEffect(() => {
    fetchGetMyInfo()
      .then(data => { setMyInfo(data); });
  }, []);

  return (
    <div className="my-6 w-[480px] max-w-full mx-auto px-4">
      <p className="font-semibold text-xl mb-4">
        내 정보
      </p>
      <table className="w-[480px] max-w-full">
        <MyInfoDetail title="아이디" detail={myInfo?.username} />
        <MyInfoDetail title="닉네임" detail={myInfo?.nickname} />
        <MyInfoDetail title="생년월일" detail={myInfo?.birthDate} />
        <MyInfoDetail title="가입날짜" detail={myInfo?.joinDate} />
      </table>
    </div>
  );
}

export default MyInfo;