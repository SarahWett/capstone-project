import Navbar from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Navbar />
    </>
  );
}
