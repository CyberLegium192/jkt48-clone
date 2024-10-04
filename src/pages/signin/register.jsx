import { useState, useEffect } from 'react';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
const db = getFirestore();
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

import Navbar from '../../component/navbar/navbar.jsx'
// FORM INPUT COMPOENNET
import FormInput from '../../component/form/inputField.jsx'
import SelectedOshi from '../../component/form/selected.jsx'
import Gender from '../../component/form/gender.jsx'
import Birth from '../../component/form/date.jsx'





const Daftar = () => {
  const [fullname, setFullname] = useState('');
  const [callname, setCall] = useState('');
  const [oshi, setOshi] = useState('');
  const [gender, setGender] = useState('male');
  const [birth ,setBirth] = useState('');
  const [nin ,setNin] = useState('');
  const [live ,setLive] = useState(false);
  const [kodePos ,setKodePos] = useState('');
  const [alamat ,setAlamat] = useState('');
  const [provinsi ,setProvinsi] = useState('');
  const [phone ,setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  

  useEffect(() => {
    const user = Cookies.get('user');
    if (!user) {
      navigate('/login');
    } else {
      const fetchUserData = async () => {
        const db = getFirestore();
        const userDocRef = doc(db, 'users', JSON.parse(user).email);
        const userDoc = await getDoc(userDocRef);

        // if (userDoc.exists()) {
        //   setData(userDoc.data());
        // }
      };
      fetchUserData();
    }
  }, [navigate]);

  
  // VALIDATING
  const validateForm = () => {
    let newErrors = {};

    if (!fullname) newErrors.fullname = 'Nama lengkap harus diisi';
    if (!callname) newErrors.callname = 'Nama panggilan harus diisi';
    if (!oshi) newErrors.oshi = 'Pilih oshimen';
    if (!birth) newErrors.birth = 'Tanggal lahir harus diisi';
    if (!nin) {
      newErrors.nin = 'NIK harus diisi';
    } else if (nin.length !== 16) {
      newErrors.nin = 'NIK harus berjumlah 16 digit';
    }
    if (!phone) {
      newErrors.phone = 'Nomor handphone harus diisi';
    } else if (phone.length !== 12) {
      newErrors.phone = 'Nomor handphone harus berjumlah 12 digit';
    }
    if (!kodePos) newErrors.kodePos = 'Kode pos harus diisi';
    if (!alamat) newErrors.alamat = 'Alamat harus diisi';
    if (!provinsi) newErrors.provinsi = 'Provinsi harus diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  
  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const user = JSON.parse(Cookies.get('user'));
    const userDocRef = doc(db, 'users', user.email);
    await updateDoc(userDocRef, {
      fullname: fullname,
      callname: callname,
      oshi: oshi,
      gender: gender,
      birthday: birth,
      NIK: nin,
      live: live,
      kodePos: kodePos,
      alamat: alamat,
      provinsi: provinsi,
      phoneNumber: phone,
      additionalData: true 
    });

    navigate('/');
  };
  
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h3 className='text-lg poppins-400 font-semibold capitalize text-red-400 mt-3 mb-5 ml-2'>lengkapi data diri</h3>
        <div className='border-2 border-primary p-4 rounded-xl poppins-400'>
          
          
          
          <form onSubmit={handleSubmit}>
            {/* FULL NAME */}
            <FormInput label='Nama Lengkap' setValue={setFullname} error={errors.fullname}/>
            {/* OSHI CHOOSE */}
            <SelectedOshi label='Anggota yang paling di sukai (Oshimen)' setValue={setOshi} error={errors.oshi} />
            {/* GENDER CHOOSE */}
            <Gender setValue={setGender} gender={gender}/>
            {/* BIRTHDAY */}
            <Birth label='Tanggal Lahir' setValue={setBirth} error={errors.birth}/>
            {/* NIK USER  */}
            <FormInput label='Nomer identitas (NIK, kartu pelajar  atau PASSPORT)' setValue={setNin} type='number' error={errors.nin}/>
            {/* CALL NAME */}
            <FormInput label='Nama Panggilan' setValue={setCall} error={errors.callname} />
            {/* TEMPAT TINGGAL */}
              <FormControl className='mb-5 border-b-2 border-b-gray-300 pb-7'>
                <FormLabel className='poppins-400 ' >Tempat Tinggal</FormLabel>
                  <Checkbox label="di luar jabodetabek (termasuk di luar negeri)" variant="soft" color='danger' className='mt-2' 
                  onChange={(e) => setLive(e.target.checked)}
                  />
            </FormControl>
            {/* KODE POS USER  */}
            <FormInput label='Kode Pos' setValue={setKodePos} type='number' error={errors.kodePos}/>
            {/* ALAMAT TEMPAT TINGGAL */}
            <FormInput label='Alamat domisili' setValue={setAlamat} error={errors.alamat}/>
            {/* KOTA */}
            <FormInput label='Kota/Provinsi' setValue={setProvinsi} error={errors.provinsi}/>
            
            {/* NUMBER PHONE */}
            <FormInput label='Nomer Handphone' setValue={setPhone} type='number' error={errors.phone}/>
            
            <button className='bg-red-500 text-white py-2 w-full rounded-full poppins-400 tracking-widest text-lg font-medium hover:bg-red-600 hover:cursor-pointer duration-500'>konfirmasi</button>
            
          </form>
          
          
        </div>
      </div>
    </>
  );
};











export default Daftar;
