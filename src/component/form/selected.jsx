import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import {fetchMembers} from '../../../libs/api/member.js'
import {useEffect, useState} from 'react'
import Typography from '@mui/joy/Typography';

const selectedOshi = ({label, setValue, error}) => {
  const [member, setMember] = useState([])

  useEffect(() => {
    fetchMembers().then(res => setMember(res))
  }, []);
  
  
  const handleSelect = (event,value) => {
    setValue(value)
  }
  
  
  return(
    <FormControl className='mb-5 border-b-2 border-b-gray-300 pb-7'
    sx={{ borderColor: error ? 'red' : 'gray' }}>
    <FormLabel className='poppins-400' sx={{ color: error ? 'red' : 'black' }}>{label}</FormLabel>
      <Select defaultValue="dog" onChange={handleSelect} color={error ? 'danger' : 'neutral'}>
        {
          member?.map(item => <Option value={item.firebaseId} key={item.firebaseId}>{item.fullname}</Option>)
        }
      </Select>
      {error && <Typography color='danger' variant="body2" className='mt-2'>{error}</Typography>}
    </FormControl>
  )
}

export default selectedOshi