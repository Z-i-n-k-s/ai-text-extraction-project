import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AccessTokenGuard } from '../../auth/guards/access-token.guard.js';
import { RolesGuard } from '../../auth/guards/roles.guard.js';
import { Roles } from '../../auth/decorators/roles.decorator.js';

import { CompaniesService } from './companies.service.js';
import { CreateCompanyDto } from './dto/create-company.dto.js';
import { UpdateCompanyDto } from './dto/update-company.dto.js';
import { UpdateCompanyStatusDto } from './dto/update-company-status.dto.js';

import { Delete } from '@nestjs/common';

import { CreateMembershipDto } from './dto/create-membership.dto.js';
import { UpdateMembershipRoleDto } from './dto/update-membership-role.dto.js';
import { UpdateMembershipStatusDto } from './dto/update-membership-status.dto.js';



@Controller('admin/companies')
@UseGuards(AccessTokenGuard, RolesGuard)
@Roles('ADMIN')
export class CompaniesController {
  constructor(
    private readonly companiesService: CompaniesService,
  ) {}

  @Post()
  create(@Body() dto: CreateCompanyDto) {
    return this.companiesService.create(dto);
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCompanyDto,
  ) {
    return this.companiesService.update(id, dto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateCompanyStatusDto,
  ) {
    return this.companiesService.updateStatus(id, dto);
  }
  @Post(':companyId/members/:userId')
addMember(
  @Param('companyId') companyId: string,
  @Param('userId') userId: string,
  @Body() dto: CreateMembershipDto,
) {
  return this.companiesService.addMember(
    companyId,
    userId,
    dto,
  );
}

@Get(':companyId/members')
findMembers(@Param('companyId') companyId: string) {
  return this.companiesService.findMembers(companyId);
}

@Patch(':companyId/members/:userId/role')
updateMemberRole(
  @Param('companyId') companyId: string,
  @Param('userId') userId: string,
  @Body() dto: UpdateMembershipRoleDto,
) {
  return this.companiesService.updateMemberRole(
    companyId,
    userId,
    dto,
  );
}

@Patch(':companyId/members/:userId/status')
updateMemberStatus(
  @Param('companyId') companyId: string,
  @Param('userId') userId: string,
  @Body() dto: UpdateMembershipStatusDto,
) {
  return this.companiesService.updateMemberStatus(
    companyId,
    userId,
    dto,
  );
}

@Delete(':companyId/members/:userId')
removeMember(
  @Param('companyId') companyId: string,
  @Param('userId') userId: string,
) {
  return this.companiesService.removeMember(
    companyId,
    userId,
  );
}
}