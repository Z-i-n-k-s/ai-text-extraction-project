import RolePage from "@/components/role-page";

export default function EmployeePage() {
  return (
    <RolePage
      allowedRoles={["COMPANY_EMPLOYEE"]}
      title="Employee Dashboard"
    >
      <p>Employee authentication is working.</p>
    </RolePage>
  );
}