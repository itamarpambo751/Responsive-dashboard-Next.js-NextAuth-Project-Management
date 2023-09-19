import Dashboard from "./dashboard"
import Signin from "./auth/signin"

export default function App () {
  const logged = false

  if (logged) return (
    <Dashboard />
  )
  
  return (
    <Signin />
  )
}