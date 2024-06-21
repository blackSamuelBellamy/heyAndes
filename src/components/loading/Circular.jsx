
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const CircularIndeterminate = () => {
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <CircularProgress />
    </Box>
  )
}

export default CircularIndeterminate