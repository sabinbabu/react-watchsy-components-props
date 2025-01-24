import Button from "./Button";
import "./Plan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Plan = () => {
  return (
    <div class="px-2 px-md-5 Plan">
      <FontAwesomeIcon icon="fa-solid fa-clapperboard" />
      <div
        class="d-flex 
                  flex-column 
                  flex-sm-row 
                  justify-content-between 
                  align-items-center 
                  border 
                  rounded 
                  p-4 
                  bg-danger 
                  text-white 
                  mx-sm-5"
      >
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
