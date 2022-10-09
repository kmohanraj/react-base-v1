import { FC } from "react";
import '../../assets/styles/ellipsis-loader.scss';

export interface LoaderProps {
  color?: string
}

const EllipsisLoader: FC<LoaderProps> = ({ color }) => {
  return (
    <div className={ `lds-ellipsis ${color && color}`}><div></div><div></div><div></div><div></div></div>
  )
}
export default EllipsisLoader;
