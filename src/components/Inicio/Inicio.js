//import React from 'react';
import { Container, Typography, Box } from "@mui/material";
//import fotoInicio from '@/public/img/fotoInicio.jpg';
import theme from "../../theme";

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  textTop: {
    position: "absolute",
    top: "10%", // Ajusta la posición vertical del texto "ANDREA & DIEGO"
    left: "65%",
    transform: "translateX(-50%)",
    display: "flex",
    displayDirection: "column",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    justifyContet: "center",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.h1.fontWeight,
    fontSize: `clamp(2rem, 8vw, 6rem)`,

    //color: theme.palette.primary.main,
    //fontWeight: theme.typography.h1.fontWeight,
  },
  textContainer: {
    position: "absolute",
    bottom: "75px", // Coloca el cuadro en la parte inferior
    left: "50%",
    transform: "translateX(-50%)", // Centra horizontalmente
    width: "60%",
    height: "9%", // Anchura del cuadro
    backgroundColor: "#E6D4C2",
    padding: "5px",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
   // fontSize: `clamp(5px, 5vw, 3.5rem)`,
  },

  numbersContainer: {
    position: "absolute",
    top: "5%", // Ajusta la posición vertical de los números
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
  },
};

const Inicio = () => {
  return (
    <Container style={styles.container}>
      <img
        src="/img/fotoInicio.jpg"
        alt="Imagen de inicio" // Propiedad alt para describir la imagen
        style={styles.image}
      />

      <Typography variant="h1" component="h3" style={styles.textTop}>
        ANDREA & DIEGO
      </Typography>

      <Box style={styles.textContainer}>
        <div style={{ width: "50%" }}>
          <Typography variant="h3">VIERNES</Typography>
          <Typography variant="h3">21 DE ABRIL 2024</Typography>
        </div>
        <div style={{ borderLeft: "1px solid black", width: "50%" }}>
          <Typography variant="h3">SAN LUIS POTOSÍ,</Typography>
          <Typography variant="h3">S.L.P.</Typography>
        </div>
      </Box>

     {/* <div style={styles.numbersContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">12 :</Typography>
          <Typography variant="h3" style={{ marginLeft: "10px" }}>
            DÍAS
          </Typography>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
        >
          <Typography variant="h3">30 :</Typography>
          <Typography variant="h3" style={{ marginLeft: "10px" }}>
            HORAS
          </Typography>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
        >
          <Typography variant="h3">30 :</Typography>
          <Typography variant="h3" style={{ marginLeft: "10px" }}>
            MINUTOS
          </Typography>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
        >
          <Typography variant="h3">30 :</Typography>
          <Typography variant="h3" style={{ marginLeft: "10px" }}>
            SEGUNDOS
          </Typography>
        </div>
  </div>*/}
    </Container>
  );
};

export default Inicio;
