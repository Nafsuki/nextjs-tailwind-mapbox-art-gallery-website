import { Header } from './Header';
import FooterB from "../components/FooterB";
import ButtonB from "../components/ButtonB";
import ScrollDownIcon from "../components/ScrollDownIcon";

export const Secondary = ({
  title = "Latin Shine | Dance Company",
  children,
}) => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Header title={title} />
      {children}
      <ButtonB path="/" title="Back to Home" />
      <ScrollDownIcon />
      <FooterB />
    </div>
  );
}
