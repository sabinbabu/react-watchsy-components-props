import Button from "./Button";
import "./Plan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Plan = () => {
  return (
    <div class="ps-5 pe-5 Plan">
      <FontAwesomeIcon icon="fa-solid fa-clapperboard" />
      <div class="d-flex justify-content-between align-items-center border rounded p-4 bg-danger text-white ms-5 me-5">
        <div>
          <p>
            <b>The Watchsy you love for just $7.99.</b>
          </p>
          <p>Get our most affordable, ad-supported plan.</p>
        </div>
        <Button name="Learn more" />
      </div>
    </div>
  );
};
export default Plan;
