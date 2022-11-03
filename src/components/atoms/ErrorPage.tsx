import { FC } from "react";
import { IErrorProps } from "types/components.types";
import 'assets/styles/error-page.scss';

const ErrorPage: FC<IErrorProps> = ({title, message}) => {
  return (
    <div className="error-page">
      <h1>{title}</h1>
      <h5>{message}</h5>
    </div>
  )
}

export default ErrorPage