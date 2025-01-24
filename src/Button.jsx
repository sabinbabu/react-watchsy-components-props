const Button = (prop) => {
  const { name } = prop;

  return (
    <>
      <button class="btn btn-danger px-3">
        <b>{name}</b>
      </button>
    </>
  );
};

export default Button;
