import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import FormikContainer from "./components/formikContainer";
import EnrolmentForm from "./components/EnrolmentForm";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Help from "./components/Help";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/enrolmentForm" component={EnrolmentForm} />
        <Route exact path="/registrationform" component={RegistrationForm} />
        <Route exact path="/all" component={FormikContainer} />
        <Route exact path="/help" component={Help} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
