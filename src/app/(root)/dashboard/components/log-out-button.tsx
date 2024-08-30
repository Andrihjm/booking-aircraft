import { logOutUser } from "@/app/actions/log-out";
import SubmitButton from "@/components/shared/submit-button";

const LogOutButton = () => {
  return (
    <div className="space-y-2">
      <form action={logOutUser}>
        <SubmitButton variant={"destructive"}>Log out</SubmitButton>
      </form>
    </div>
  );
};

export default LogOutButton;
