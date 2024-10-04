import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
// format date tahun-bulan-tanggal

const date = ({label, setValue, error}) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  
  return(
    <FormControl className='mb-5 border-b-2 border-b-gray-300 pb-7' sx={{ borderColor: error ? 'red' : 'gray' }}>
      <FormLabel className='poppins-400' sx={{ color: error ? 'red' : 'black' }} >{label}</FormLabel>
          <Input
              type="date"
              slotProps={{
              input: {
                min: '1975-01-01',
                max: '2024-12-31',
              },
            }}
            color={error ? 'danger' : 'neutral'}
            onChange={handleChange} size='sm'
            />
            {error && <Typography color='danger' variant="body2" className='mt-2'>{error}</Typography>}
    </FormControl>
  )
}
export default date