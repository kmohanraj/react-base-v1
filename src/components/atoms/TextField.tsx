import React, { FC } from "react";
import cx from 'classnames';
import 'assets/styles/text-field.scss';
import CONSTANTS from "constants/constants";
export interface TextFieldProps {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  message?: string,
  error?: boolean,
  placeholder: string,
  inputId: string,
  required?: boolean,
  customClass?: string,
  preFixIcon?: any,
  altName?: string
}

const { BRAND_CLASS } = CONSTANTS.CLASS_NAMES

const TextField: FC<TextFieldProps> = ({ value, onChange, message, error, placeholder, inputId, required, customClass, preFixIcon, altName}) => {
  const msgClass = cx('message', { 'error': error})
  const labelClass = cx({'has-value': value, 'error': error, 'has-prefix': preFixIcon})
  const inputClass = cx(customClass, { 'error': error, 'has-prefix': preFixIcon })
  return (
    <span className={`${BRAND_CLASS}-text-field`}>
    <span className={`${BRAND_CLASS}-text-field__input-wrapper`}>
      {preFixIcon && (
        <img
          className="prefix-icon"
          src={preFixIcon}
          alt={altName}
          role="presentation"
        />
      )}
      <input
        className={inputClass}
        id={inputId}
        value={value}
        required={required}
        aria-required={required}
        onChange={onChange}
      />
      <label className={labelClass} htmlFor={inputId}>
        {placeholder}
        {required && '*'}
      </label>
    </span>
    {message && <span className={msgClass}>{message}</span>}
  </span>
  )
}

export default TextField;
