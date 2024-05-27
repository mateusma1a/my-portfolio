import { Fab, Zoom, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

const StyledScrollTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <>
      <Zoom in={visible}>
        <Fab
          color="primary"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: theme.spacing(2),
            right: theme.spacing(2),
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
};

export default StyledScrollTopButton;
