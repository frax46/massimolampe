// we write types if we get error about the date 
import {Listing,Reservation,User} from '@prisma/client'

export type SafeListing = Omit<
    Listing,
    "createdAt"
>&{
    createdAt:string
}
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type safeReservations = Omit<
  Reservation,
  "createdAt"|"createdAt"|"endDate"|"listing"
>&{
  createdAt:string;
  startDate:string;
  endDate:string;
  listing:SafeListing;
}