import Input from "components/atoms/TextField";
import SearchIcon from '../../../assets/images/search.svg';
import CheckboxSet from "components/molecules/CheckboxSet";
import { FC } from "react";

const Genders = [
  {
    id: 'male',
    label: 'Male'
  },
  {
    id: 'female',
    label: 'Female'
  }
]


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
          {/* <CheckboxSet title="Gender" options={Genders} isUl/> */}
          <CheckboxSet title="Gender 2" options={Genders}/>
      </div>
    </>
  )
}
export default Organizations;
