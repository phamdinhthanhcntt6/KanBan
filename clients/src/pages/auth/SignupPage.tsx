import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useState } from "react";
import { images } from "../../assets/image";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Paragraph } = Typography;

const SignupPage = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const [isRemember, setIsRemember] = useState(false);

  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };

  return (
    <div className="flex justify-between w-1/2 min-w-72 mx-auto">
      <div className="justify-center w-full text-center">
        <img
          src={images.logo}
          className="justify-center mx-auto w-12 h-12 mb-6"
        />
        <span className="font-semibold text-[30px] max-md: text-base">
          Create an account
        </span>
        <Paragraph className="text-base font-normal text-[#667085]">
          Start your 30-day free trial.
        </Paragraph>
        <Form
          layout="vertical"
          onFinish={handleLogin}
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}
          >
            <Input allowClear maxLength={50} type="text" />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input allowClear maxLength={50} type="email" />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password allowClear maxLength={50} type="password" />
          </Form.Item>

          <div className="flex flex-row items-center justify-between w-full">
            <div>
              <Checkbox
                checked={isRemember}
                onChange={(values) => setIsRemember(values.target.checked)}
                className="text-[#48505E] font-medium text-sm"
              >
                Remember for 30 days
              </Checkbox>
            </div>
            <div>
              <Button type="link" className="p-0 text-[#1366D9] text-sm">
                <Link to="/forgotpassword">Forgot password</Link>
              </Button>
            </div>
          </div>
          <Button
            type="primary"
            className="w-full mt-4"
            onClick={() => handleLogin}
          >
            Get started
          </Button>
          <SocialLogin />
          <div className="flex mt-8 items-center justify-center flex-row gap-1">
            <span className="text-[#667085] text-base font-normal">
              Already have an account?
            </span>
            <Button
              type="link"
              className="text-[#1366D9] text-sm font-medium p-0"
            >
              <Link to="/login">Log in</Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
