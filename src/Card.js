import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function Card() {
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              jjjj
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
