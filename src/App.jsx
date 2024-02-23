import "./App.css";
import Accordian from "./components/Accordian/accordian";
import InfiniteScroll from "./components/InfiniteScroll/index";
import PhoneOtpForm from "./components/OTP/phone-login";
import Starrating from "./components/StarRating/starrating";
import Typeahead from "./components/Typehead/typeahead";

function App() {
  return (
    <div className="App">
      <h1>Login with Phone</h1>
      <PhoneOtpForm />
      <Starrating />
      <Accordian />
      <Typeahead />
      <InfiniteScroll />
    </div>
  );
}

export default App;
