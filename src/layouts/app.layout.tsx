import { ReactNode } from "react";
import { AppFooter, AppNavbar } from "../components/app";

interface Props {
  children: ReactNode;
}
export default function LayoutApp({ children }: Props) {
  return (
    <>
      <AppNavbar />
      <main className="container my-10">{children}</main>
      <AppFooter />
    </>
  );
}
