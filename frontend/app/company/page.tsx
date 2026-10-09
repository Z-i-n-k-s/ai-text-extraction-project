import RolePage from "@/components/role-page";

export default function CompanyPage() {
  return (
    <RolePage allowedRoles={["COMPANY_MD"]} title="Company MD Dashboard">
      <p>Company MD authentication is working.</p>
    </RolePage>
  );
}