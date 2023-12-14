import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Layout from "./layouts/Layouts";
import Dashboard from "./pages/Dashboard";
import GradeReport from "./pages/GradeReport";
import MissingGrade from "./pages/MissingGrade";
import Instructors from "./pages/Instructors";
import Example from "./pages/LandingPage";
import Help from "./pages/Help";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="login" element={<SignIn />} />
        <Route path="/student" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="grade-report" element={<GradeReport />} />
          <Route path="missing-grade" element={<MissingGrade />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="help" element={<Help />} />
          {/* <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />Z
         */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
