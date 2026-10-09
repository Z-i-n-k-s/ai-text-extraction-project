import RolePage from "@/components/role-page";

export default function UserDashboard() {
  return (
    <RolePage allowedRoles={["USER"]} title="User Dashboard">
      <p>User authentication is working.</p>
    </RolePage>
  );
}