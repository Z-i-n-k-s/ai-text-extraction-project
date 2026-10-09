import { IsIn } from 'class-validator';

export class UpdateCompanyStatusDto {
  @IsIn(['ACTIVE', 'DISABLED'])
  status: 'ACTIVE' | 'DISABLED';
}