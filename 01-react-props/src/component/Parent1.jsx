import PropTypes from "prop-types";
import Parent2 from "./Parent2.jsx";

function Parent1({ nama }) {
  return (
    <>
      <h1>Parent1</h1>
      <Parent2 nama={nama} />
    </>
  );
}

Parent1.propTypes = {
  nama: PropTypes.string,
};

export default Parent1;
