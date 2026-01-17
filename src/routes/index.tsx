import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Welcome to LockYear Vault!</h2>
      <p className="mt-4">Your secure vault for .</p>
    </div>
  )
}
