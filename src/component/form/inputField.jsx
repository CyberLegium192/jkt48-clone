import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';

const inputField = ({label, setValue, type, error}) => {
  return(
    <FormControl className='mb-5 border-b-2 border-b-gray-300 pb-7' sx={{ borderColor: error ? 'red' : 'gray' }}>
      <FormLabel className='poppins-400' sx={{ color: error ? 'red' : 'black' }}>{label}</FormLabel>
      <Input placeholder={label} size='md' variant='outlined' color={error ? 'danger' : 'neutral'} onChange={(e) => setValue(e.target.value)} type={type} />
      {error && <Typography color='danger' variant="body2" className='mt-2'>{error}</Typography>}
    </FormControl>
    
  )
}
export default inputField