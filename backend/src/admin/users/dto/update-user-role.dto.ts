import { IsIn } from 'class-validator';

export class UpdateUserRoleDto {
  @IsIn(['ADMIN', 'COMPANY_MD', 'COMPANY_EMPLOYEE', 'USER'])
  role: 'ADMIN' | 'COMPANY_MD' | 'COMPANY_EMPLOYEE' | 'USER';
}