import CustomMemberPage from "../../sample/CustomMemberPage";
import RegisterHeader from "../RegisterHeader";
import RegisterInput from "../RegisterInput";
import RegisterTitle from "../RegisterTitle";

function MemberRegisterPage() {
  return (
    <div>
      <RegisterHeader />
      <CustomMemberPage>
        <RegisterTitle />
        <RegisterInput />
      </CustomMemberPage>
    </div>
  );
}

export default MemberRegisterPage;