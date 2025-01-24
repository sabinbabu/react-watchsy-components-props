import Button from "./Button";

const EmailForm = () => {
  return (
    <div class="row mx-5">
      <div class="col-12 col-md-6">
        <input
          class="form-control mb-3 mb-sm-0 "
          type="email"
          placeholder="Email address"
          size="50"
        />
      </div>
      <div class="col-12 col-md-6">
        <Button name="GET STARTED &nbsp; &nbsp;>" />
      </div>
    </div>
  );
};
export default EmailForm;
