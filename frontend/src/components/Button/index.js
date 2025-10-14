import PropTypes from "prop-types";

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const Button = ({
  text,
  bgColor,
  fontSize,
  textColor,
  border,
  hoverBgColor,
  hoverTextColor,
  onClick,
  icon,
  isIconLeft,
}) => {
  const Icon = (
    <span
      className={`transform transition-transform duration-300 ${
        isIconLeft ? "mr-2" : "ml-2"
      } group-hover:translate-x-1`}
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 21C13.2848 21 15.9555 19.8938 17.9246 17.9246C19.8938 15.9555 21 13.2848 21 10.5C21 7.71523 19.8938 5.04451 17.9246 3.07538C15.9555 1.10625 13.2848 0 10.5 0C7.71523 0 5.04451 1.10625 3.07538 3.07538C1.10625 5.04451 0 7.71523 0 10.5C0 13.2848 1.10625 15.9555 3.07538 17.9246C5.04451 19.8938 7.71523 21 10.5 21ZM15.3654 9.57206L11.4279 5.63456C11.1804 5.39548 10.8489 5.26319 10.5047 5.26618C10.1606 5.26917 9.8314 5.4072 9.58805 5.65055C9.3447 5.8939 9.20667 6.22309 9.20368 6.56722C9.20069 6.91136 9.33298 7.2429 9.57206 7.49044L11.2691 9.1875H6.5625C6.2144 9.1875 5.88056 9.32578 5.63442 9.57192C5.38828 9.81806 5.25 10.1519 5.25 10.5C5.25 10.8481 5.38828 11.1819 5.63442 11.4281C5.88056 11.6742 6.2144 11.8125 6.5625 11.8125H11.2691L9.57206 13.5096C9.44671 13.6306 9.34672 13.7755 9.27793 13.9356C9.20914 14.0957 9.17294 14.268 9.17142 14.4422C9.16991 14.6165 9.20312 14.7893 9.26911 14.9506C9.3351 15.1119 9.43256 15.2585 9.55579 15.3817C9.67903 15.5049 9.82557 15.6024 9.98687 15.6684C10.1482 15.7344 10.321 15.7676 10.4953 15.7661C10.6695 15.7646 10.8418 15.7284 11.0019 15.6596C11.162 15.5908 11.3069 15.4908 11.4279 15.3654L15.3654 11.4279C15.6115 11.1818 15.7497 10.848 15.7497 10.5C15.7497 10.152 15.6115 9.81819 15.3654 9.57206Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );

  return (
    <button
      onClick={onClick}
      className={`group px-8 py-2 rounded-sm transition-all duration-300 ${sizeClasses[fontSize]} primary-font font-semibold flex items-center justify-center w-full sm:w-fit`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: border,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBgColor;
        e.currentTarget.style.color = hoverTextColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
        e.currentTarget.style.color = textColor;
      }}
    >
      {icon && isIconLeft && Icon}
      <span>{text}</span>
      {icon && !isIconLeft && Icon}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  fontSize: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.bool,
  isIconLeft: PropTypes.bool,
};

Button.defaultProps = {
  bgColor: "rgba(255, 255, 255, 0.3)",
  fontSize: "md",
  textColor: "#FFFFFF",
  border: "none",
  hoverBgColor: "#F6B507",
  hoverTextColor: "#FFFFFF",
  onClick: () => {},
  icon: false,
  isIconLeft: false,
};

export default Button;
