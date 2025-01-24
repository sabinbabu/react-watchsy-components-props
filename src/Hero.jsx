import EmailForm from "./EmailForm";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div class="d-flex justify-content-center align-items-center flex-column Hero">
        <p class="display-4 display-sm-3 text-center">
          <b>Unlimited movies, TV shows and more</b>
        </p>
        <p class="h5 text-center">
          <b>Start at $7.99. Cancel at any time</b>
        </p>
        <p class="text-center">
          Ready to watch Watchsy? Enter your email to create or restart your
          membership.
        </p>
        <EmailForm />
      </div>
    </>
  );
};
export default Hero;
