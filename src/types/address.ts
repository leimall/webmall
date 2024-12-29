export type AddressItem = {
  ID: number;
  userId: string;
  phone: string;
  firstName: string;
  lastName: string;
  line1: string;
  line2: string;
  email: string;
  city: string;
  state: string;
  country: string;
  countryName: string;
  postalCode: string;
  isDefault: number;
  mark: string;
}
export type BillingAddressItem = {
  ID: number;
  userId: string;
  phone: string;
  firstName: string;
  lastName: string;
  line1: string;
  line2: string;
  email: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export type AddressFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  stateName: string;
  country: string;
  countryName: string;
  postalCode: string;
}