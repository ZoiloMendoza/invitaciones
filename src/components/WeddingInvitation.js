import { Typography, Paper, Button } from '@mui/material';

function WeddingInvitation() {
  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h1">Andrea y Diego</Typography>
      <Typography variant="h2">Fecha: 15 de Octubre de 2023</Typography>
      <Typography variant="h3" style={{ marginTop: '20px' }}>
        Queridos amigos y familiares,
      </Typography>
      <Typography variant="body1">
        Nos complace invitarte a celebrar el día más especial de nuestras vidas.
      </Typography>
      <Typography variant="body1">
        Fecha: 15 de Octubre de 2023
      </Typography>
      <Typography variant="body1">
        Lugar: [Dirección del lugar de la boda]
      </Typography>
      <Typography variant="body1">
        Vestimenta: Formal
      </Typography>
      <Button variant="contained" color="tertiary" style={{ marginTop: '20px' }}>
        Confirmar Asistencia
      </Button>
    </Paper>
  );
}

export default WeddingInvitation;