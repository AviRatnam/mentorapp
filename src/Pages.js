import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import MentorPage from "./Components/dashboard/mentorpage";
import MentorInfo from "./Components/mentorinfo/mentorinfo";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MentorPage />} />
        <Route exact path="/mentorinfo/:mentorname" element={<MentorInfo />} />
      </Routes>
    </>
  );
};

export default Pages;
