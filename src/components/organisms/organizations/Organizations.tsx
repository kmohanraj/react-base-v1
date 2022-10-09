import Input from "components/atoms/TextField";
import SearchIcon from '../../../assets/images/search.svg';
import { FC } from "react";

const Organizations: FC = () => {
  return (
    <>
      <h2>Add Organization</h2>
      <div>
        <Input 
          inputId="name" 
          value='' 
          onChange={() => {}}
          placeholder="Enter Name"
          required
          preFixIcon={SearchIcon}
          message='Eg: Example'  />
      </div>
    </>
  )
}
export default Organizations;
