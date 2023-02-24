import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const MatchCard = ({ team_1,team_2, status, logo_1, logo_2 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 50px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <img src={logo_1} alt={team_1} style={{width: '50px', height: '50px'}}/>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {team_1}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            Vs
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box>
        <img src={logo_2} alt={team_1} style={{width: '50px', height: '50px'}}/>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {team_2}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
      <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {status}
          </Typography>
      </Box>
      
    </Box>
  );
};

export default MatchCard;
