import { Button } from "antd";
import { images } from "../../../assets/image";

const SocialLogin = () => {
  return (
    <Button
      type="default"
      className="w-full mt-4 text-[#383E49] font-medium"
      onClick={() => {}}
    >
      <div className="flex flex-row">
        <img src={images.google} alt="google" className="w-6 h-6 mr-3" />
        <span>Sign in with Google</span>
      </div>
    </Button>
  );
};

export default SocialLogin;
