import RolePage from "@/components/role-page";

export default function AdminPage() {
  return (
    <RolePage allowedRoles={["ADMIN"]} title="Admin Dashboard">
      <p>Admin authentication is working.</p>
    </RolePage>
  );
}