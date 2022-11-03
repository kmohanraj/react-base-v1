import { FC } from "react";
import Input from "components/atoms/TextField";
import CheckboxSet from "components/molecules/CheckboxSet";
import 'assets/styles/organizations.scss';

const Genders = [
  {
    id: 'status',
    label: 'Male'
  },
  {
    id: 'status1',
    label: 'Female'
  }
]


const Organizations: FC = () => {
  return (
    <div>
      <h2>Add Organization</h2>
      <div className="org-form">
        <Input 
          inputId="org_name" 
          value='' 
          onChange={() => {}}
          placeholder="Enter Organization Name"
          required
        />

        <Input
          inputId="org_email"
          value=''
          onChange={() => {}}
          placeholder="Enter Organization Mail"
          required
        />

        <Input
          inputId="branch_limit"
          value=""
          onChange={() => {}}
          placeholder="Enter Branch Limit"
          required
        />

        <Input
          inputId="org_logo"
          value=""
          onChange={() => {}}
          placeholder="Upload Organization Logo"
          required
        />

        <Input
          inputId="phone"
          value=""
          onChange={() => {}}
          placeholder='Enter Phone'
          required
        />

        <Input
          inputId="address"
          value=""
          onChange={() => {}}
          placeholder="Enter Organization Address"
          required
        />
        <CheckboxSet title="Gender 2" options={Genders}/>
      </div>
    </div>
  )
}
export default Organizations;
