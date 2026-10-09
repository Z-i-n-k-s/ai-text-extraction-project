import { IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @Length(2, 150)
  name: string;

  @IsString()
  @Length(2, 100)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'slug must contain lowercase letters, numbers, and single hyphens',
  })
  slug: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  registrationNumber?: string;
}