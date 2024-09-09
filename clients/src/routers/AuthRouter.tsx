import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "../pages";
import { images } from "../assets/image";

const AuthRouter = () => {
  return (
    <div className="w-full flex max-w-screen-2xl mx-auto ">
      <div className="flex flex-row w-full h-screen items-center mx-auto justify-between overflow-auto">
        <div className="w-1/2 items-center justify-center flex flex-col max-md:hidden">
          <img
            src={images.logo}
            className="justify-center mx-auto h-2/5 w-2/5 mb-8"
          />
          <h1 className="uppercase text-3xl font-semibold text-[#009ED8]">
            kanban
          </h1>
        </div>
        <div className="w-1/2 items-center justify-center mx-auto max-md:w-full">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};
export default AuthRouter;
