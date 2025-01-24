const StudentDetails = (props) => {
  // LOGIC
  const { name, address } = props;
  // UI
  return (
    <>
      <p>
        {name}:
        <span>
          <b> {address}</b>
        </span>
      </p>
    </>
  );
};

export default StudentDetails;
