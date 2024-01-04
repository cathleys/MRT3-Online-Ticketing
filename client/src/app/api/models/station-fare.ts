/* tslint:disable */
/* eslint-disable */
import { Ticketing } from '../models/ticketing';
export interface StationFare {
  destination?: string | null;
  from?: string | null;
  id?: string | null;
  price?: string | null;
  ticketing?: Array<Ticketing> | null;
}
