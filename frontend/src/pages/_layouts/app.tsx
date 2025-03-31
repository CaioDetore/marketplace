import { Link, Outlet, useLocation } from "react-router";
import { MenuButton } from "../../components/menu-button";
import { Button } from "../../components/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartHistogramIcon,
  PackageIcon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";

export function AppLayout() {
  const location = useLocation();

  return (
    <div>
      <header className="p-5 flex justify-between items-center">
        <img src="/logo-icons.svg" alt="" className="h-10 w-14" />

        <div className="flex gap-2">
          <Link to="/">
            <MenuButton
              pageTitle="Dashboard"
              variant={location.pathname === "/" ? "selected" : "default"}
              icon={ChartHistogramIcon}
            />
          </Link>

          <Link to="/products">
            <MenuButton
              pageTitle="Produtos"
              variant={
                location.pathname === "/products" ? "selected" : "default"
              }
              icon={PackageIcon}
            />
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <Button className={"w-fit h-10 gap-2"}>
            <HugeiconsIcon icon={PlusSignIcon} />
            Novo Produto
          </Button>

          <img
            src="https://github.com/CaioDetore.png"
            alt=""
            className="size-12 rounded-xl"
          />
        </div>
      </header>

      <main className="max-w-[1030px] mx-auto py-16">
        <Outlet />
      </main>
    </div>
  );
}
