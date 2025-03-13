import type { AddressItem } from "@/types/address"

interface ModalProps {
  address: AddressItem;
}


const ShowAddress: React.FC<ModalProps> = ({address}) => {
  return (
    <div> 
      <p className='font-bold'>{address.firstName} {address.lastName} {address.phone}</p>
      <div className='text-gray-600'>
        <p>{address.line1} {address.line2}</p>
        <p>{address.city} {address.state} {address.country} {address.postalCode}</p>
        <p>{address.email}</p>
      </div>
    </div>
  )
};

export default ShowAddress;