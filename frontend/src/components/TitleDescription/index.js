import React from "react";
import PropTypes from "prop-types";

const TitleDescription = ({
  title,
  description,
  titleClass = "",
  descriptionClass = "",
}) => {
  return (
    <>
      {title && (
        <h2
          className={`secondary-font text-xl md:text-4xl font-bold ${titleClass}`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className={`primary-font text-base md:text-[18px] ${descriptionClass}`}>
          {description}
        </p>
      )}
    </>
  );
};

TitleDescription.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  titleClass: PropTypes.string,
  descriptionClass: PropTypes.string,
};

TitleDescription.defaultProps = {
  title: "",
  description: "",
  titleClass: "",
  descriptionClass: "",
};

export default TitleDescription;
