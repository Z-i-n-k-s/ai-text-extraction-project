import { IsIn, IsOptional } from 'class-validator';

export class CreateMembershipDto {
  @IsIn(['MD', 'EMPLOYEE'])
  role: 'MD' | 'EMPLOYEE';

  @IsOptional()
  @IsIn(['ACTIVE', 'INVITED'])
  status?: 'ACTIVE' | 'INVITED';
}