import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

// format date tahun-bulan-tanggal

const date = ({label, setValue}) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  
  return(
    <FormControl className='mb-5 border-b-2 border-b-gray-300 pb-7'>
      <FormLabel className='poppins-400' >{label}</FormLabel>
          <Input
              type="date"
              slotProps={{
              input: {
                min: '1975-01-01',
                max: '2024-12-31',
              },
            }}
            onChange={handleChange} size='sm'
            />
    </FormControl>
  )
}
export default date