export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly COMPANY_MD: "COMPANY_MD";
    readonly COMPANY_EMPLOYEE: "COMPANY_EMPLOYEE";
    readonly USER: "USER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DISABLED: "DISABLED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const CompanyStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DISABLED: "DISABLED";
};
export type CompanyStatus = (typeof CompanyStatus)[keyof typeof CompanyStatus];
export declare const MembershipRole: {
    readonly MD: "MD";
    readonly EMPLOYEE: "EMPLOYEE";
};
export type MembershipRole = (typeof MembershipRole)[keyof typeof MembershipRole];
export declare const MembershipStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INVITED: "INVITED";
    readonly DISABLED: "DISABLED";
};
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];
