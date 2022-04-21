import { Header } from './Header';
import Footer from "../components/Footer";

export const Main = ({
  title = "Latin Shine | Dance Company",
  children,
}) => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
}
