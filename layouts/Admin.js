import Header from '../components/Header';
import FooterB from "../components/FooterB";

export const Admin = ({
  title = "Latin Shine | Dance Company",
  children,
}) => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Header />
      <h1>ADMIN PANEL</h1>
      {children}
      <FooterB />
    </div>
  );
}
