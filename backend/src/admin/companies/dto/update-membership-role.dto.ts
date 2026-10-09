import { IsIn } from 'class-validator';

export class UpdateMembershipRoleDto {
  @IsIn(['MD', 'EMPLOYEE'])
  role: 'MD' | 'EMPLOYEE';
}