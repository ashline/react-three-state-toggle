import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const noop = () => {};
const defaultValues = [
  { label: "Yes", value: true },
  { label: "", value: null },
  { label: "No", value: false }
];

class ThreeStateToggle extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    onLeft: PropTypes.func,
    onMiddle: PropTypes.func,
    onRight: PropTypes.func,
    defaultValueIndex: PropTypes.oneOf([0, 1, 2]),
    values: PropTypes.array
  };
  static defaultProps = {
    onChange: noop,
    onLeft: noop,
    onMiddle: noop,
    onRight: noop,
    defaultValueIndex: 1,
    values: defaultValues
  };

  render() {
    const { values } = this.props;
    return (
      <div>
        {values.map((option, index) => (
          <label
            key={`toggle-label-${index}`}
            htmlFor={`toggle-label-${index}`}
          >
            <input
              id={`toggle-label-${index}`}
              type="radio"
              name="someDynamicName"
              value={option.value}
            />
          </label>
        ))}
      </div>
    );
  }
}
/**
 * TODO: find better id for inputs, htmlFor might not be needed
 */
export default ThreeStateToggle;
