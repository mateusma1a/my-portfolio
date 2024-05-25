import React from 'react';
import { Button, Tooltip, Typography } from '@mui/material';
import { FileCopy } from '@mui/icons-material';

interface CopyBoxProps {
  text: string;
}

const CopyBox: React.FC<CopyBoxProps> = ({ text }) => {
  const [tooltipOpen, setTooltipOpen] = React.useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setTooltipOpen(true);
      setTimeout(() => setTooltipOpen(false), 2000); // Fechar o tooltip após 2 segundos
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography> {text} </Typography>
      <Tooltip
        title="Copied!"
        placement="right"
        open={tooltipOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <Button onClick={handleCopy} style={{ marginLeft: 2 }}>
          <FileCopy style={{ color: 'primary.main', fontSize: '20px' }} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default CopyBox;
