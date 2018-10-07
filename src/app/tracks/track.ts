export class Track {
  _id?: string;
  item_name: string;
  parcel_type: string;
  name: string;
  address: string;
  email: string;
  status: string;
  phone: {
    mobile: string;
    work: string;
  }
}
