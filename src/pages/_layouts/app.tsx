import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <SuperSEO title="login | Pizza.shop" description="Ola" />
      <h1>Cabecalho</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
