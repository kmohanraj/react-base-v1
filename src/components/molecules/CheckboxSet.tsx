import { FC } from "react";
import Checkbox from "components/atoms/Checkbox";
import 'assets/styles/checkbox-set.scss';
import CONSTANTS from "constants/constants";

export interface CheckboxSetProps {
  title: string,
  desc?: string,
  isUl?: boolean,
  options: {
    id: string,
    label: string
  }[]
}

const { BRAND_CLASS } = CONSTANTS.CLASS_NAMES

const CheckboxSet: FC<CheckboxSetProps> = ({ title, desc, options, isUl }) => {
  return (
    <div className={`${BRAND_CLASS}-checkbox-set ${isUl ? 'vertical' : ''}`}>
      <h3 className="title">{title}</h3>
      {desc && <p>{desc}</p>}
      { !isUl ? (
        <ul>
          {options.map((option, i) => (
            <li key={i}>
              <Checkbox
                inputId={option.id}
                label={option.label}
                value={option.label}
                onChange={() => {}}
              />
            </li>
          ))}
        </ul>
      ) : (
        options.map((option, i) => (
          <Checkbox
            inputId={option.id}
            label={option.label}
            value={option.label}
            onChange={() => {}}
          />
        ))
      )}
    </div>
  );
};
export default CheckboxSet;
