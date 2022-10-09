import { FC } from "react";
import Button from "components/atoms/Button";

const Customers: FC = () => {
  return (
    <>
      <h2> Customers </h2>
      <div>
        <Button type="ghost" label="Clear" onClick={() => console.log('cleared')} />
        <Button type="primary" label="Search" onClick={() => console.log('search')} />
      </div>
    
    </>

  )
}
export default Customers;
