import { SetMetadata } from '@nestjs/common';

export const COMPANY_ROLES_KEY = 'company_roles';

export type CompanyRole = 'MD' | 'EMPLOYEE';

export const CompanyRoles = (...roles: CompanyRole[]) =>
  SetMetadata(COMPANY_ROLES_KEY, roles);