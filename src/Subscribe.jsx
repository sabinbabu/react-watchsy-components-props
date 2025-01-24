import EmailForm from "./EmailForm";

const Subscribe = () => {
  return (
    <div class="d-flex justify-content-center align-items-center flex-column p-5">
      <p>
        Ready to watch Watchsy? Enter your email to create or restart your
        membership.
      </p>
      <EmailForm />
    </div>
  );
};
export default Subscribe;
