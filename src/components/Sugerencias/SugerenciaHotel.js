//import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Link from '@mui/material/Link';

const styles = {
  logo: {
    maxWidth: "30%",
    maxHeight: "30%"
  }
}

const SugerenciasHotel = () => {
  return (
    <Container   sx={{
      height: "500px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Para centrar verticalmente
      alignItems: "center",
      color: "white",
      marginTop: "0",
      marginBottom: "15px", 
      gap:"10px"
    }}>
      <Box>
        <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "50vw" }}
        ></div>
      </Box>
      <Typography variant="horaP" sx={{ textAlign: "center" }}>
        SUGERENCIAS 
      </Typography>
      <div>
      <Typography variant="horaP" sx={{ textAlign: "center" }}>
      HOTELES
      </Typography>
      </div>
    

      <div
        style={{
          borderBottom: "0.3px solid #7D5730",
          width: "50vw",
          marginTop: "5px",
        }}
      ></div>
       <img
          src="/img/6.png"
          alt="Instagram" // Propiedad alt para describir la imagen
          style={styles.logo}
        />
          <img
          src="/img/6.1.png"
          alt="Whatsapp" // Propiedad alt para describir la imagen
          style={styles.logo}
        />
    </Container>
  );
};

export default SugerenciasHotel;
