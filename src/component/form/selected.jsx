import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import {fetchMembers} from '../../../libs/api/member.js'
import {useEffect, useState} from 'react'


const selectedOshi = ({label, setValue}) => {
  const [member, setMember] = useState([])

  useEffect(() => {
    fetchMembers().then(res => setMember(res))
  }, []);
  
  
  const handleSelect = (event,value) => {
    setValue(value)
  }
  
  
  return(
    <FormControl className='mb-5 border-b-2 border-b-gray-300 pb-7'>
    <FormLabel className='poppins-400' >{label}</FormLabel>
      <Select defaultValue="dog" onChange={handleSelect} >
        {
          member?.map(item => <Option value={item.firebaseId} key={item.firebaseId}>{item.fullname}</Option>)
        }
      </Select>
    </FormControl>
  )
}

export default selectedOshi