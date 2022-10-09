import { FC } from "react";
import cx from 'classnames';
import '../../assets/styles/button.scss';
import Loader from "./EllipsisLoader";
import CONSTANTS from "constants/constants";

export interface ButtonProps {
  label: string,
  disabled?: boolean,
  type: string,
  onClick: () => void,
  loading?: boolean
}

const { BRAND_CLASS } = CONSTANTS.CLASS_NAMES

const Button: FC<ButtonProps> = ({ label, disabled, type, onClick, loading}) => {
  const btnCls = cx (
    `${BRAND_CLASS}-btn`,
    `${BRAND_CLASS}-btn__${type}`,
    { 'loading': loading}
  )
  return (
    <button disabled={disabled} className={btnCls} onClick={onClick}>
      { loading ? <Loader color={type === 'ghost' ? 'dark' : 'light'} /> : label}
    </button>
  )
}
export default Button;
