const Button = (prop) => {
  const { name } = prop;

  return (
    <>
      <button class="btn btn-danger ps-4 pe-4">
        <b>{name}</b>
      </button>
    </>
  );
};

export default Button;
