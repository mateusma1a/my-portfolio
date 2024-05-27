import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  styled,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyBox from "../CopyBox/CopyBox";

interface ChildProps {
  open: boolean;
  handleClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialog: React.FC<ChildProps> = ({ open, handleClose }) => {
  const email = "mateussm99@gmail.com";
  const telephone = "+55 31 9 9652-8132";
  const linkedIn =
    "https://www.linkedin.com/in/mateus-maia-0628bb160/?locale=en_US";

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Contact me
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon
              style={{ color: "primary.contrastText", marginRight: 8 }}
            />
            <CopyBox text={email} />
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon
              style={{ color: "primary.contrastText", marginRight: 8 }}
            />
            <CopyBox text={telephone} />
          </Box>
          <Box display="flex" alignItems="center">
            <LinkedInIcon
              style={{ color: "primary.contrastText", marginRight: 8 }}
            />
            <Link href={linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </Link>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default CustomizedDialog;
