import LogoutButton from "../button/LogoutButton";
import MyInfo from "../MyInfo";
import MyInfoHeader from "../MyInfoHeader";
import MyOrderList from "../MyOrderList";

function MyInfoPage() {
  return (
    <div>
      <MyInfoHeader />
      <MyInfo />
      <LogoutButton />
      <MyOrderList />
    </div>
  );
}

export default MyInfoPage;