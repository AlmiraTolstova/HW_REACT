import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons";
import { styled } from "@mui/system";

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#232425",
  color: "#FFFFFF",
  paddingTop: theme.spacing(8), // 64px
  paddingBottom: theme.spacing(6), // 48px
}));

const Section = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const Socials = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "81%",
  opacity: 0.8,
  marginBottom: theme.spacing(5), // 40px
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "81%",
  color: "rgba(255, 255, 255, 0.5)",
  opacity: 0.8,
  marginBottom: theme.spacing(2), // 16px
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& input": {
    color: "white",
    borderBottom: "1px solid white",
  },
  width: 407,
}));

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Section sx={{ mb: "93px" }}>
          <Box>
            <FooterTitle>Контакты</FooterTitle>
            <FooterText>8 800 000 00 00</FooterText>
            <FooterText sx={{ marginBottom: 0 }}>
              emailexample@email.com
            </FooterText>
          </Box>

          <Socials>
            <FacebookIcon sx={{ fontSize: 32, cursor: "pointer" }} />
            <TwitterIcon sx={{ fontSize: 32, cursor: "pointer" }} />
            <InstagramIcon sx={{ fontSize: 32, cursor: "pointer" }} />
          </Socials>
        </Section>

        <Section>
          {" "}
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              textAlign: "center",
              color: "#999",
            }}
          >
            {" "}
            © 2026 Сникерс-магазин. Все права защищены{" "}
          </Typography>{" "}
          <StyledTextField
            placeholder="Введите свой email"
            variant="standard"
          />{" "}
        </Section>
      </Container>
    </FooterWrapper>
  );
}
export default Footer;
