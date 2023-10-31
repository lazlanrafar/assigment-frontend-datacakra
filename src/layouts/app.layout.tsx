import { ReactNode } from "react";
import { AppNavbar } from "../components/app";

interface Props {
  children: ReactNode;
}
export default function LayoutApp({ children }: Props) {
  return (
    <>
      <AppNavbar />
      <div className="container my-10">{children}</div>
    </>
  );
}
