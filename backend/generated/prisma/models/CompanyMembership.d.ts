import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CompanyMembershipModel = runtime.Types.Result.DefaultSelection<Prisma.$CompanyMembershipPayload>;
export type AggregateCompanyMembership = {
    _count: CompanyMembershipCountAggregateOutputType | null;
    _min: CompanyMembershipMinAggregateOutputType | null;
    _max: CompanyMembershipMaxAggregateOutputType | null;
};
export type CompanyMembershipMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    companyId: string | null;
    role: $Enums.MembershipRole | null;
    status: $Enums.MembershipStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CompanyMembershipMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    companyId: string | null;
    role: $Enums.MembershipRole | null;
    status: $Enums.MembershipStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CompanyMembershipCountAggregateOutputType = {
    id: number;
    userId: number;
    companyId: number;
    role: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CompanyMembershipMinAggregateInputType = {
    id?: true;
    userId?: true;
    companyId?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CompanyMembershipMaxAggregateInputType = {
    id?: true;
    userId?: true;
    companyId?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CompanyMembershipCountAggregateInputType = {
    id?: true;
    userId?: true;
    companyId?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CompanyMembershipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanyMembershipWhereInput;
    orderBy?: Prisma.CompanyMembershipOrderByWithRelationInput | Prisma.CompanyMembershipOrderByWithRelationInput[];
    cursor?: Prisma.CompanyMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CompanyMembershipCountAggregateInputType;
    _min?: CompanyMembershipMinAggregateInputType;
    _max?: CompanyMembershipMaxAggregateInputType;
};
export type GetCompanyMembershipAggregateType<T extends CompanyMembershipAggregateArgs> = {
    [P in keyof T & keyof AggregateCompanyMembership]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCompanyMembership[P]> : Prisma.GetScalarType<T[P], AggregateCompanyMembership[P]>;
};
export type CompanyMembershipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanyMembershipWhereInput;
    orderBy?: Prisma.CompanyMembershipOrderByWithAggregationInput | Prisma.CompanyMembershipOrderByWithAggregationInput[];
    by: Prisma.CompanyMembershipScalarFieldEnum[] | Prisma.CompanyMembershipScalarFieldEnum;
    having?: Prisma.CompanyMembershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyMembershipCountAggregateInputType | true;
    _min?: CompanyMembershipMinAggregateInputType;
    _max?: CompanyMembershipMaxAggregateInputType;
};
export type CompanyMembershipGroupByOutputType = {
    id: string;
    userId: string;
    companyId: string;
    role: $Enums.MembershipRole;
    status: $Enums.MembershipStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: CompanyMembershipCountAggregateOutputType | null;
    _min: CompanyMembershipMinAggregateOutputType | null;
    _max: CompanyMembershipMaxAggregateOutputType | null;
};
export type GetCompanyMembershipGroupByPayload<T extends CompanyMembershipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CompanyMembershipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CompanyMembershipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CompanyMembershipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CompanyMembershipGroupByOutputType[P]>;
}>>;
export type CompanyMembershipWhereInput = {
    AND?: Prisma.CompanyMembershipWhereInput | Prisma.CompanyMembershipWhereInput[];
    OR?: Prisma.CompanyMembershipWhereInput[];
    NOT?: Prisma.CompanyMembershipWhereInput | Prisma.CompanyMembershipWhereInput[];
    id?: Prisma.StringFilter<"CompanyMembership"> | string;
    userId?: Prisma.StringFilter<"CompanyMembership"> | string;
    companyId?: Prisma.StringFilter<"CompanyMembership"> | string;
    role?: Prisma.EnumMembershipRoleFilter<"CompanyMembership"> | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFilter<"CompanyMembership"> | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFilter<"CompanyMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CompanyMembership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
};
export type CompanyMembershipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    company?: Prisma.CompanyOrderByWithRelationInput;
};
export type CompanyMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_companyId?: Prisma.CompanyMembershipUserIdCompanyIdCompoundUniqueInput;
    AND?: Prisma.CompanyMembershipWhereInput | Prisma.CompanyMembershipWhereInput[];
    OR?: Prisma.CompanyMembershipWhereInput[];
    NOT?: Prisma.CompanyMembershipWhereInput | Prisma.CompanyMembershipWhereInput[];
    userId?: Prisma.StringFilter<"CompanyMembership"> | string;
    companyId?: Prisma.StringFilter<"CompanyMembership"> | string;
    role?: Prisma.EnumMembershipRoleFilter<"CompanyMembership"> | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFilter<"CompanyMembership"> | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFilter<"CompanyMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CompanyMembership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
}, "id" | "userId_companyId">;
export type CompanyMembershipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CompanyMembershipCountOrderByAggregateInput;
    _max?: Prisma.CompanyMembershipMaxOrderByAggregateInput;
    _min?: Prisma.CompanyMembershipMinOrderByAggregateInput;
};
export type CompanyMembershipScalarWhereWithAggregatesInput = {
    AND?: Prisma.CompanyMembershipScalarWhereWithAggregatesInput | Prisma.CompanyMembershipScalarWhereWithAggregatesInput[];
    OR?: Prisma.CompanyMembershipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CompanyMembershipScalarWhereWithAggregatesInput | Prisma.CompanyMembershipScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CompanyMembership"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"CompanyMembership"> | string;
    companyId?: Prisma.StringWithAggregatesFilter<"CompanyMembership"> | string;
    role?: Prisma.EnumMembershipRoleWithAggregatesFilter<"CompanyMembership"> | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusWithAggregatesFilter<"CompanyMembership"> | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CompanyMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CompanyMembership"> | Date | string;
};
export type CompanyMembershipCreateInput = {
    id?: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    company: Prisma.CompanyCreateNestedOneWithoutMembershipsInput;
};
export type CompanyMembershipUncheckedCreateInput = {
    id?: string;
    userId: string;
    companyId: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanyMembershipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    company?: Prisma.CompanyUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type CompanyMembershipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyMembershipCreateManyInput = {
    id?: string;
    userId: string;
    companyId: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanyMembershipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyMembershipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyMembershipListRelationFilter = {
    every?: Prisma.CompanyMembershipWhereInput;
    some?: Prisma.CompanyMembershipWhereInput;
    none?: Prisma.CompanyMembershipWhereInput;
};
export type CompanyMembershipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CompanyMembershipUserIdCompanyIdCompoundUniqueInput = {
    userId: string;
    companyId: string;
};
export type CompanyMembershipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompanyMembershipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompanyMembershipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompanyMembershipCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutUserInput, Prisma.CompanyMembershipUncheckedCreateWithoutUserInput> | Prisma.CompanyMembershipCreateWithoutUserInput[] | Prisma.CompanyMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CompanyMembershipCreateOrConnectWithoutUserInput | Prisma.CompanyMembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CompanyMembershipCreateManyUserInputEnvelope;
    connect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
};
export type CompanyMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutUserInput, Prisma.CompanyMembershipUncheckedCreateWithoutUserInput> | Prisma.CompanyMembershipCreateWithoutUserInput[] | Prisma.CompanyMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CompanyMembershipCreateOrConnectWithoutUserInput | Prisma.CompanyMembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CompanyMembershipCreateManyUserInputEnvelope;
    connect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
};
export type CompanyMembershipUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutUserInput, Prisma.CompanyMembershipUncheckedCreateWithoutUserInput> | Prisma.CompanyMembershipCreateWithoutUserInput[] | Prisma.CompanyMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CompanyMembershipCreateOrConnectWithoutUserInput | Prisma.CompanyMembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CompanyMembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.CompanyMembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CompanyMembershipCreateManyUserInputEnvelope;
    set?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    disconnect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    delete?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    connect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    update?: Prisma.CompanyMembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.CompanyMembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CompanyMembershipUpdateManyWithWhereWithoutUserInput | Prisma.CompanyMembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CompanyMembershipScalarWhereInput | Prisma.CompanyMembershipScalarWhereInput[];
};
export type CompanyMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutUserInput, Prisma.CompanyMembershipUncheckedCreateWithoutUserInput> | Prisma.CompanyMembershipCreateWithoutUserInput[] | Prisma.CompanyMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CompanyMembershipCreateOrConnectWithoutUserInput | Prisma.CompanyMembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CompanyMembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.CompanyMembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CompanyMembershipCreateManyUserInputEnvelope;
    set?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    disconnect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    delete?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    connect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    update?: Prisma.CompanyMembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.CompanyMembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CompanyMembershipUpdateManyWithWhereWithoutUserInput | Prisma.CompanyMembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CompanyMembershipScalarWhereInput | Prisma.CompanyMembershipScalarWhereInput[];
};
export type CompanyMembershipCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutCompanyInput, Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput> | Prisma.CompanyMembershipCreateWithoutCompanyInput[] | Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.CompanyMembershipCreateOrConnectWithoutCompanyInput | Prisma.CompanyMembershipCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.CompanyMembershipCreateManyCompanyInputEnvelope;
    connect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
};
export type CompanyMembershipUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutCompanyInput, Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput> | Prisma.CompanyMembershipCreateWithoutCompanyInput[] | Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.CompanyMembershipCreateOrConnectWithoutCompanyInput | Prisma.CompanyMembershipCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.CompanyMembershipCreateManyCompanyInputEnvelope;
    connect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
};
export type CompanyMembershipUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutCompanyInput, Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput> | Prisma.CompanyMembershipCreateWithoutCompanyInput[] | Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.CompanyMembershipCreateOrConnectWithoutCompanyInput | Prisma.CompanyMembershipCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.CompanyMembershipUpsertWithWhereUniqueWithoutCompanyInput | Prisma.CompanyMembershipUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.CompanyMembershipCreateManyCompanyInputEnvelope;
    set?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    disconnect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    delete?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    connect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    update?: Prisma.CompanyMembershipUpdateWithWhereUniqueWithoutCompanyInput | Prisma.CompanyMembershipUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.CompanyMembershipUpdateManyWithWhereWithoutCompanyInput | Prisma.CompanyMembershipUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.CompanyMembershipScalarWhereInput | Prisma.CompanyMembershipScalarWhereInput[];
};
export type CompanyMembershipUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutCompanyInput, Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput> | Prisma.CompanyMembershipCreateWithoutCompanyInput[] | Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.CompanyMembershipCreateOrConnectWithoutCompanyInput | Prisma.CompanyMembershipCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.CompanyMembershipUpsertWithWhereUniqueWithoutCompanyInput | Prisma.CompanyMembershipUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.CompanyMembershipCreateManyCompanyInputEnvelope;
    set?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    disconnect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    delete?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    connect?: Prisma.CompanyMembershipWhereUniqueInput | Prisma.CompanyMembershipWhereUniqueInput[];
    update?: Prisma.CompanyMembershipUpdateWithWhereUniqueWithoutCompanyInput | Prisma.CompanyMembershipUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.CompanyMembershipUpdateManyWithWhereWithoutCompanyInput | Prisma.CompanyMembershipUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.CompanyMembershipScalarWhereInput | Prisma.CompanyMembershipScalarWhereInput[];
};
export type EnumMembershipRoleFieldUpdateOperationsInput = {
    set?: $Enums.MembershipRole;
};
export type EnumMembershipStatusFieldUpdateOperationsInput = {
    set?: $Enums.MembershipStatus;
};
export type CompanyMembershipCreateWithoutUserInput = {
    id?: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutMembershipsInput;
};
export type CompanyMembershipUncheckedCreateWithoutUserInput = {
    id?: string;
    companyId: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanyMembershipCreateOrConnectWithoutUserInput = {
    where: Prisma.CompanyMembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutUserInput, Prisma.CompanyMembershipUncheckedCreateWithoutUserInput>;
};
export type CompanyMembershipCreateManyUserInputEnvelope = {
    data: Prisma.CompanyMembershipCreateManyUserInput | Prisma.CompanyMembershipCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CompanyMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CompanyMembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompanyMembershipUpdateWithoutUserInput, Prisma.CompanyMembershipUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutUserInput, Prisma.CompanyMembershipUncheckedCreateWithoutUserInput>;
};
export type CompanyMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CompanyMembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompanyMembershipUpdateWithoutUserInput, Prisma.CompanyMembershipUncheckedUpdateWithoutUserInput>;
};
export type CompanyMembershipUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CompanyMembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.CompanyMembershipUpdateManyMutationInput, Prisma.CompanyMembershipUncheckedUpdateManyWithoutUserInput>;
};
export type CompanyMembershipScalarWhereInput = {
    AND?: Prisma.CompanyMembershipScalarWhereInput | Prisma.CompanyMembershipScalarWhereInput[];
    OR?: Prisma.CompanyMembershipScalarWhereInput[];
    NOT?: Prisma.CompanyMembershipScalarWhereInput | Prisma.CompanyMembershipScalarWhereInput[];
    id?: Prisma.StringFilter<"CompanyMembership"> | string;
    userId?: Prisma.StringFilter<"CompanyMembership"> | string;
    companyId?: Prisma.StringFilter<"CompanyMembership"> | string;
    role?: Prisma.EnumMembershipRoleFilter<"CompanyMembership"> | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFilter<"CompanyMembership"> | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFilter<"CompanyMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CompanyMembership"> | Date | string;
};
export type CompanyMembershipCreateWithoutCompanyInput = {
    id?: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
};
export type CompanyMembershipUncheckedCreateWithoutCompanyInput = {
    id?: string;
    userId: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanyMembershipCreateOrConnectWithoutCompanyInput = {
    where: Prisma.CompanyMembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutCompanyInput, Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput>;
};
export type CompanyMembershipCreateManyCompanyInputEnvelope = {
    data: Prisma.CompanyMembershipCreateManyCompanyInput | Prisma.CompanyMembershipCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type CompanyMembershipUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.CompanyMembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompanyMembershipUpdateWithoutCompanyInput, Prisma.CompanyMembershipUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.CompanyMembershipCreateWithoutCompanyInput, Prisma.CompanyMembershipUncheckedCreateWithoutCompanyInput>;
};
export type CompanyMembershipUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.CompanyMembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompanyMembershipUpdateWithoutCompanyInput, Prisma.CompanyMembershipUncheckedUpdateWithoutCompanyInput>;
};
export type CompanyMembershipUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.CompanyMembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.CompanyMembershipUpdateManyMutationInput, Prisma.CompanyMembershipUncheckedUpdateManyWithoutCompanyInput>;
};
export type CompanyMembershipCreateManyUserInput = {
    id?: string;
    companyId: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanyMembershipUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type CompanyMembershipUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyMembershipUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyMembershipCreateManyCompanyInput = {
    id?: string;
    userId: string;
    role: $Enums.MembershipRole;
    status?: $Enums.MembershipStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanyMembershipUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type CompanyMembershipUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyMembershipUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyMembershipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    companyId?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companyMembership"]>;
export type CompanyMembershipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    companyId?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companyMembership"]>;
export type CompanyMembershipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    companyId?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companyMembership"]>;
export type CompanyMembershipSelectScalar = {
    id?: boolean;
    userId?: boolean;
    companyId?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CompanyMembershipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "companyId" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["companyMembership"]>;
export type CompanyMembershipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type CompanyMembershipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type CompanyMembershipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $CompanyMembershipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CompanyMembership";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        companyId: string;
        role: $Enums.MembershipRole;
        status: $Enums.MembershipStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["companyMembership"]>;
    composites: {};
};
export type CompanyMembershipGetPayload<S extends boolean | null | undefined | CompanyMembershipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload, S>;
export type CompanyMembershipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CompanyMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompanyMembershipCountAggregateInputType | true;
};
export interface CompanyMembershipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CompanyMembership'];
        meta: {
            name: 'CompanyMembership';
        };
    };
    findUnique<T extends CompanyMembershipFindUniqueArgs>(args: Prisma.SelectSubset<T, CompanyMembershipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CompanyMembershipClient<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CompanyMembershipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CompanyMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompanyMembershipClient<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CompanyMembershipFindFirstArgs>(args?: Prisma.SelectSubset<T, CompanyMembershipFindFirstArgs<ExtArgs>>): Prisma.Prisma__CompanyMembershipClient<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CompanyMembershipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CompanyMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompanyMembershipClient<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CompanyMembershipFindManyArgs>(args?: Prisma.SelectSubset<T, CompanyMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CompanyMembershipCreateArgs>(args: Prisma.SelectSubset<T, CompanyMembershipCreateArgs<ExtArgs>>): Prisma.Prisma__CompanyMembershipClient<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CompanyMembershipCreateManyArgs>(args?: Prisma.SelectSubset<T, CompanyMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CompanyMembershipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CompanyMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CompanyMembershipDeleteArgs>(args: Prisma.SelectSubset<T, CompanyMembershipDeleteArgs<ExtArgs>>): Prisma.Prisma__CompanyMembershipClient<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CompanyMembershipUpdateArgs>(args: Prisma.SelectSubset<T, CompanyMembershipUpdateArgs<ExtArgs>>): Prisma.Prisma__CompanyMembershipClient<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CompanyMembershipDeleteManyArgs>(args?: Prisma.SelectSubset<T, CompanyMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CompanyMembershipUpdateManyArgs>(args: Prisma.SelectSubset<T, CompanyMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CompanyMembershipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CompanyMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CompanyMembershipUpsertArgs>(args: Prisma.SelectSubset<T, CompanyMembershipUpsertArgs<ExtArgs>>): Prisma.Prisma__CompanyMembershipClient<runtime.Types.Result.GetResult<Prisma.$CompanyMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CompanyMembershipCountArgs>(args?: Prisma.Subset<T, CompanyMembershipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CompanyMembershipCountAggregateOutputType> : number>;
    aggregate<T extends CompanyMembershipAggregateArgs>(args: Prisma.Subset<T, CompanyMembershipAggregateArgs>): Prisma.PrismaPromise<GetCompanyMembershipAggregateType<T>>;
    groupBy<T extends CompanyMembershipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CompanyMembershipGroupByArgs['orderBy'];
    } : {
        orderBy?: CompanyMembershipGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CompanyMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CompanyMembershipFieldRefs;
}
export interface Prisma__CompanyMembershipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CompanyMembershipFieldRefs {
    readonly id: Prisma.FieldRef<"CompanyMembership", 'String'>;
    readonly userId: Prisma.FieldRef<"CompanyMembership", 'String'>;
    readonly companyId: Prisma.FieldRef<"CompanyMembership", 'String'>;
    readonly role: Prisma.FieldRef<"CompanyMembership", 'MembershipRole'>;
    readonly status: Prisma.FieldRef<"CompanyMembership", 'MembershipStatus'>;
    readonly createdAt: Prisma.FieldRef<"CompanyMembership", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CompanyMembership", 'DateTime'>;
}
export type CompanyMembershipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    where: Prisma.CompanyMembershipWhereUniqueInput;
};
export type CompanyMembershipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    where: Prisma.CompanyMembershipWhereUniqueInput;
};
export type CompanyMembershipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    where?: Prisma.CompanyMembershipWhereInput;
    orderBy?: Prisma.CompanyMembershipOrderByWithRelationInput | Prisma.CompanyMembershipOrderByWithRelationInput[];
    cursor?: Prisma.CompanyMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanyMembershipScalarFieldEnum | Prisma.CompanyMembershipScalarFieldEnum[];
};
export type CompanyMembershipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    where?: Prisma.CompanyMembershipWhereInput;
    orderBy?: Prisma.CompanyMembershipOrderByWithRelationInput | Prisma.CompanyMembershipOrderByWithRelationInput[];
    cursor?: Prisma.CompanyMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanyMembershipScalarFieldEnum | Prisma.CompanyMembershipScalarFieldEnum[];
};
export type CompanyMembershipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    where?: Prisma.CompanyMembershipWhereInput;
    orderBy?: Prisma.CompanyMembershipOrderByWithRelationInput | Prisma.CompanyMembershipOrderByWithRelationInput[];
    cursor?: Prisma.CompanyMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanyMembershipScalarFieldEnum | Prisma.CompanyMembershipScalarFieldEnum[];
};
export type CompanyMembershipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanyMembershipCreateInput, Prisma.CompanyMembershipUncheckedCreateInput>;
};
export type CompanyMembershipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CompanyMembershipCreateManyInput | Prisma.CompanyMembershipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CompanyMembershipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    data: Prisma.CompanyMembershipCreateManyInput | Prisma.CompanyMembershipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CompanyMembershipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CompanyMembershipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanyMembershipUpdateInput, Prisma.CompanyMembershipUncheckedUpdateInput>;
    where: Prisma.CompanyMembershipWhereUniqueInput;
};
export type CompanyMembershipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CompanyMembershipUpdateManyMutationInput, Prisma.CompanyMembershipUncheckedUpdateManyInput>;
    where?: Prisma.CompanyMembershipWhereInput;
    limit?: number;
};
export type CompanyMembershipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanyMembershipUpdateManyMutationInput, Prisma.CompanyMembershipUncheckedUpdateManyInput>;
    where?: Prisma.CompanyMembershipWhereInput;
    limit?: number;
    include?: Prisma.CompanyMembershipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CompanyMembershipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    where: Prisma.CompanyMembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyMembershipCreateInput, Prisma.CompanyMembershipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CompanyMembershipUpdateInput, Prisma.CompanyMembershipUncheckedUpdateInput>;
};
export type CompanyMembershipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
    where: Prisma.CompanyMembershipWhereUniqueInput;
};
export type CompanyMembershipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanyMembershipWhereInput;
    limit?: number;
};
export type CompanyMembershipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyMembershipSelect<ExtArgs> | null;
    omit?: Prisma.CompanyMembershipOmit<ExtArgs> | null;
    include?: Prisma.CompanyMembershipInclude<ExtArgs> | null;
};
