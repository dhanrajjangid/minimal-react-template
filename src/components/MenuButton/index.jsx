import React, {useState, useEffect} from "react";
import { MdMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { actions } from "@/redux/slices/sidebarSlice";

const MobileMenuButton = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(actions.toggleSidebar());
  };
  return (
    <div
      className="flex-center"
      style={{
        display: `${screenWidth < 768 ? "block" : "none"}`,
        background: "rgba(0,0,0,.3)",
        cursor: "pointer",
        height: "2.5rem",
        position: "fixed",
        width: "2.5rem",
        marginLeft: "auto",
        color: "#fff",
        right: "10px",
      }}
      onClick={() => toggleSidebar()}
    >
      <MdMenu size={36} />
    </div>
  );
};

export default MobileMenuButton;
