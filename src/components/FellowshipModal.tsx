import { useLocation } from "react-router-dom";
import ApplicationsClosedModal from "../pages/PopupModal";

const FellowshipModal = () => {
  const location = useLocation();

  // Show only on Fellowship pages
  if (!location.pathname.startsWith("/academy/fellowship")) {
    return null;
  }

  return <ApplicationsClosedModal />;
};

export default FellowshipModal;