import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="SidebarWrapper">
      <div className="SidebarContent">
        <p className="TabText">Home</p>
        <p className="TabText">About</p>
        <p className="TabText">Experience</p>
        <p className="TabText">Projects</p>
        <p className="TabText">Contact</p>
      </div>
      <div className="CollapseBar">
        <MdOutlineKeyboardArrowLeft  size={30} />
      </div>
    </div>
  );
}

export default Sidebar;
