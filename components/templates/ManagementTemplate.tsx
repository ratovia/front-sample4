import React, { ReactElement } from "react";
import { Box, Container } from "@mui/material";

interface Props {
  appBar: ReactElement;
  navigation: ReactElement;
  mainContent: ReactElement;
}

export const ManagementTemplate: React.FC<Props> = ({
  appBar,
  navigation,
  mainContent,
}) => {
  return (
    <div>
      {appBar}
      <Box sx={{ mt: 10, mx: 6, display: 'flex' }}>
        {navigation}
        <Container>{mainContent}</Container>
      </Box>
    </div>
  );
};
