import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import BtnNavigation from "../btnNavigation";

function SalesList({ saleslist }) {
  return (
    <Box
      sx={{
        maxWidth: "85rem",
        width: "100%",
        margin: "0 auto",
        pb: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "2.5rem",
          mt: "5rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: "110%",
            color: "#282828",
          }}
        >
          Sale
        </Typography>

        <Divider sx={{ flexGrow: 1, mx: "32px", maxWidth: "900px" }} />

        <BtnNavigation>All sales</BtnNavigation>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {saleslist?.map((item) => (
          <Card key={item.id} sx={{ width: "316px" }}>
            <CardMedia
              sx={{ height: "284px" }}
              image={"http://localhost:3333" + item.image}
              title={item.title}
            />
            <Box sx={{ height: "1px", backgroundColor: "#DDDDDD" }} />

            <CardContent sx={{ p: "20px 32px 32px " }}>
              <Typography
                sx={{
                  maxWidth: "252px",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "130%",
                  color: "#282828",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                variant="h6"
              >
                {item.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "flex-end", mt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "40px",
                    lineHeight: "110%",
                    color: "#282828",
                    pr: 2,
                  }}
                >
                  {item.discont_price}$
                </Typography>

                <Typography
                  sx={{
                    textDecoration: "line-through",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "130%",
                    color: "#8B8B8B",
                  }}
                >
                  {item.price}$
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default SalesList;
