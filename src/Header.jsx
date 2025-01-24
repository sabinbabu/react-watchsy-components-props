import Button from "./Button";
const Header = () => {
  return (
    <div class="d-flex justify-content-between p-2 ps-5 pe-5">
      <h1 class="text-danger">WATCHSY</h1>
      <Button name="Sign In" />
    </div>
  );
};

export default Header;
