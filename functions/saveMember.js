const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json')
// import serviceAccount from'./serviceaccount.json'
// import Admin from 'firebase-admin'


// const serviceAccount = ServiceAccount
// const admin = Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const members = [
    {
        "id": 1,
        "image": "/profile/amanda_sukma.jpg?v=20230530",
        "fullname": "Amanda Sukma",
        "status": "JKT48"
    },
    {
        "id": 2,
        "image": "/profile/angelina_christy.jpg?v=20230116",
        "fullname": "Angelina Christy",
        "status": "JKT48"
    },
    {
        "id": 3,
        "image": "/profile/aurellia.jpg?v=20230531",
        "fullname": "Aurellia",
        "status": "JKT48"
    },
    {
        "id": 4,
        "image": "/profile/callista_alifia.jpg?v=20230531",
        "fullname": "Callista Alifia",
        "status": "JKT48"
    },
    {
        "id": 5,
        "image": "/profile/cornelia_vanisa.jpg?v=20230116",
        "fullname": "Cornelia Vanisa",
        "status": "JKT48"
    },
    {
        "id": 6,
        "image": "/profile/febriola_sinambela.jpg?v=20230116",
        "fullname": "Febriola Sinambela",
        "status": "JKT48"
    },
    {
        "id": 7,
        "image": "/profile/feni_fitriyanti.jpg?v=20230116",
        "fullname": "Feni Fitriyanti",
        "status": "JKT48"
    },
    {
        "id": 8,
        "image": "/profile/fiony_alveria.jpg?v=20230116",
        "fullname": "Fiony Alveria",
        "status": "JKT48"
    },
    {
        "id": 9,
        "image": "/profile/flora_shafiq.jpg?v=20230116",
        "fullname": "Flora Shafiq",
        "status": "JKT48"
    },
    {
        "id": 10,
        "image": "/profile/freya_jayawardana.jpg?v=20230116",
        "fullname": "Freya Jayawardana",
        "status": "JKT48"
    },
    {
        "id": 11,
        "image": "/profile/gabriela_abigail.jpg?v=20230531",
        "fullname": "Gabriela Abigail",
        "status": "JKT48"
    },
    {
        "id": 12,
        "image": "/profile/gita_sekar_andarini.jpg?v=20230116",
        "fullname": "Gita Sekar Andarini",
        "status": "JKT48"
    },
    {
        "id": 13,
        "image": "/profile/grace_octaviani.jpg?v=20231212",
        "fullname": "Grace Octaviani",
        "status": "JKT48"
    },
    {
        "id": 14,
        "image": "/profile/greesella_adhalia.jpg?v=20231212",
        "fullname": "Greesella Adhalia",
        "status": "JKT48"
    },
    {
        "id": 15,
        "image": "/profile/helisma_putri.jpg?v=20230116",
        "fullname": "Helisma Putri",
        "status": "JKT48"
    },
    {
        "id": 16,
        "image": "/profile/indah_cahya.jpg?v=20230116",
        "fullname": "Indah Cahya",
        "status": "JKT48"
    },
    {
        "id": 17,
        "image": "/profile/indira_seruni.jpg?v=20230531",
        "fullname": "Indira Seruni",
        "status": "JKT48"
    },
    {
        "id": 18,
        "image": "/profile/jessica_chandra.jpg?v=20230116",
        "fullname": "Jessica Chandra",
        "status": "JKT48"
    },
    {
        "id": 19,
        "image": "/profile/jesslyn_elly.jpg?v=20230531",
        "fullname": "Jesslyn Elly",
        "status": "JKT48"
    },
    {
        "id": 20,
        "image": "/profile/kathrina_irene.jpg?v=20230116",
        "fullname": "Kathrina Irene",
        "status": "JKT48"
    },
    {
        "id": 21,
        "image": "/profile/lulu_salsabila.jpg?v=20230116",
        "fullname": "Lulu Salsabila",
        "status": "JKT48"
    },
    {
        "id": 22,
        "image": "/profile/marsha_lenathea.jpg?v=20230116",
        "fullname": "Marsha Lenathea",
        "status": "JKT48"
    },
    {
        "id": 23,
        "image": "/profile/mutiara_azzahra.jpg?v=20230116",
        "fullname": "Mutiara Azzahra",
        "status": "JKT48"
    },
    {
        "id": 24,
        "image": "/profile/raisha_syifa.jpg?v=20230530",
        "fullname": "Raisha Syifa",
        "status": "JKT48"
    },
    {
        "id": 25,
        "image": "/profile/reva_fidela.jpg?v=20230116",
        "fullname": "Reva Fidela",
        "status": "JKT48"
    },
    {
        "id": 26,
        "image": "/profile/shania_gracia.jpg?v=20230116",
        "fullname": "Shania Gracia",
        "status": "JKT48"
    },
    {
        "id": 27,
        "image": "/profile/abigail_rachel.jpg",
        "fullname": "Abigail Rachel",
        "status": "Trainee"
    },
    {
        "id": 28,
        "image": "/profile/adeline_wijaya.jpg",
        "fullname": "Adeline Wijaya",
        "status": "Trainee"
    },
    {
        "id": 29,
        "image": "/profile/alya_amanda.jpg?v=20231212",
        "fullname": "Alya Amanda",
        "status": "Trainee"
    },
    {
        "id": 30,
        "image": "/profile/anindya_ramadhani.jpg?v=20231212",
        "fullname": "Anindya Ramadhani",
        "status": "Trainee"
    },
    {
        "id": 31,
        "image": "/profile/aurhel_alana.jpg?v=20231212",
        "fullname": "Aurhel Alana",
        "status": "Trainee"
    },
    {
        "id": 32,
        "image": "/profile/catherina_vallencia.jpg",
        "fullname": "Catherina Vallencia",
        "status": "Trainee"
    },
    {
        "id": 33,
        "image": "/profile/cathleen_nixie.jpg?v=20231212",
        "fullname": "Cathleen Nixie",
        "status": "Trainee"
    },
    {
        "id": 34,
        "image": "/profile/celline_thefani.jpg?v=20231212",
        "fullname": "Celline Thefani",
        "status": "Trainee"
    },
    {
        "id": 35,
        "image": "/profile/chelsea_davina.jpg?v=20231212",
        "fullname": "Chelsea Davina",
        "status": "Trainee"
    },
    {
        "id": 36,
        "image": "/profile/cynthia_yaputera.jpg?v=20231212",
        "fullname": "Cynthia Yaputera",
        "status": "Trainee"
    },
    {
        "id": 37,
        "image": "/profile/dena_natalia.jpg?v=20231212",
        "fullname": "Dena Natalia",
        "status": "Trainee"
    },
    {
        "id": 38,
        "image": "/profile/desy_natalia.jpg?v=20231212",
        "fullname": "Desy Natalia",
        "status": "Trainee"
    },
    {
        "id": 39,
        "image": "/profile/fritzy_rosmerian.jpg",
        "fullname": "Fritzy Rosmerian",
        "status": "Trainee"
    },
    {
        "id": 40,
        "image": "/profile/gendis_mayrannisa.jpg?v=20231212",
        "fullname": "Gendis Mayrannisa",
        "status": "Trainee"
    },
    {
        "id": 41,
        "image": "/profile/hillary_abigail.jpg",
        "fullname": "Hillary Abigail",
        "status": "Trainee"
    },
    {
        "id": 42,
        "image": "/profile/jazzlyn_trisha.jpg",
        "fullname": "Jazzlyn Trisha",
        "status": "Trainee"
    },
    {
        "id": 43,
        "image": "/profile/letycia_moreen.jpg?v=20231212",
        "fullname": "Letycia Moreen",
        "status": "Trainee"
    },
    {
        "id": 44,
        "image": "/profile/michelle_alexandra.jpg?v=20231212",
        "fullname": "Michelle Alexandra",
        "status": "Trainee"
    },
    {
        "id": 45,
        "image": "/profile/michelle_levia.jpg",
        "fullname": "Michelle Levia",
        "status": "Trainee"
    },
    {
        "id": 46,
        "image": "/profile/nayla_suji.jpg",
        "fullname": "Nayla Suji",
        "status": "Trainee"
    },
    {
        "id": 47,
        "image": "/profile/nina_tutachia.jpg?v=20231212",
        "fullname": "Nina Tutachia",
        "status": "Trainee"
    },
    {
        "id": 48,
        "image": "/profile/oline_manuel.jpg",
        "fullname": "Oline Manuel",
        "status": "Trainee"
    },
    {
        "id": 49,
        "image": "/profile/regina_wilian.jpg",
        "fullname": "Regina Wilian",
        "status": "Trainee"
    },
    {
        "id": 50,
        "image": "/profile/ribka_budiman.jpg",
        "fullname": "Ribka Budiman",
        "status": "Trainee"
    },
    {
        "id": 51,
        "image": "/profile/shabilqis_naila.jpg",
        "fullname": "Shabilqis Naila",
        "status": "Trainee"
    },
    {
        "id": 52,
        "image": "/profile/victoria_kimberly.jpg",
        "fullname": "Victoria Kimberly",
        "status": "Trainee"
    }
]

const saveMembersToFirestore = async () => {
  const batch = db.batch();

  members.forEach((member) => {
    const memberRef = db.collection('members').doc(member.id.toString());
    batch.set(memberRef, member);
  });

  await batch.commit();
  console.log('Semua member berhasil disimpan ke Firestore!');
};

saveMembersToFirestore().catch(console.error);
