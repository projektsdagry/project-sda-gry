import { Outlet } from "react-router-dom";
import AppBar from "../../components/app-bar";
const MainView: React.FC = () => {
  return (
    <>
        <Outlet />
      Footer
    </>
  );
};
export default MainView;
