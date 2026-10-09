import { IsIn } from 'class-validator';

export class UpdateMembershipStatusDto {
  @IsIn(['ACTIVE', 'INVITED', 'DISABLED'])
  status: 'ACTIVE' | 'INVITED' | 'DISABLED';
}