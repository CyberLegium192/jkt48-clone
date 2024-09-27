import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';


const inputField = ({label, setValue, type}) => {
  return(
    <FormControl className='mb-5 border-b-2 border-b-gray-300 pb-7'>
      <FormLabel className='poppins-400' >{label}</FormLabel>
      <Input placeholder={label} size='md' variant='outlined' color="neutral" onChange={(e) => setValue(e.target.value)} type={type} />
    </FormControl>
    
  )
}
export default inputField