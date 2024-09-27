import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

const genderRadio = ({setValue, gender}) => {
 const handleRadio = (e) => {
   setValue(e.target.value)
 } 
  
  
  return(
    <FormControl className='mb-5 border-b-2 border-b-gray-300 pb-5'>
      <FormLabel>Jenis kelamin</FormLabel>
      <RadioGroup
        defaultValue="male"
        name="controlled-radio-buttons-group"
        value={gender}
        onChange={handleRadio}
        size='sm'
      >
        <Radio value="male" label="Male" color="neutral" />
        <Radio value="female" label="Female" color="neutral" />
      </RadioGroup>
    </FormControl>
  )
}
export default genderRadio