import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-bold">LockYear Vault</h1>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})
