import PropTypes from "prop-types";

function Parent2({ nama = "Guest" }) {
  return <>Parent2 {nama}</>;
}

Parent2.propTypes = {
  nama: PropTypes.string,
};

export default Parent2;