import { User, UserProfile, Vendor } from '../prisma-client';
export declare namespace IUser {
    interface GetReturn extends User {
        profile: UserProfile;
        vendorPrimary: Pick<Vendor, 'id'>[];
    }
}
