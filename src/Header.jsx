import Button from "./Button";
const Header = () => {
  return (
    <div class="d-flex justify-content-between pt-2 px-2">
      <h1 class="text-danger">WATCHSY</h1>
      <Button name="Sign In" />
    </div>
  );
};

export default Header;
