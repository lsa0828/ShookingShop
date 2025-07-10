import CustomMemberPage from "../../sample/CustomMemberPage";
import LoginHeader from "../LoginHeader";
import LoginInput from "../LoginInput";
import LoginTitle from "../LoginTitle";

function MemberLoginPage() {
  return (
    <div>
      <LoginHeader />
      <CustomMemberPage>
        <LoginTitle />
        <LoginInput />
      </CustomMemberPage>
    </div>
  );
}

export default MemberLoginPage;