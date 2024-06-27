import Nav from "../components/Nav/Nav";
import PropTypes from "prop-types";

export default function Root({ children }) {
  return (
    <>
      <div>
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};
