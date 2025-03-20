import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="grid grid-cols-2 min-h-screen bg-background max-w-7xl m-auto">
      <div className="flex flex-col h-full p-10">
        <img className="w-64 object-contain" src="/logo.svg" />

        <div className="flex flex-1 items-center">
          <img src="/background.png" className="w-3xl mt-12 object-contain" />
        </div>
      </div>
    
      <div className="overflow-y-auto p-6">
        <div className="h-full bg-white  rounded-4xl p-20 over">
          <Outlet />
        </div>
      </div>
    </div>
  )
}