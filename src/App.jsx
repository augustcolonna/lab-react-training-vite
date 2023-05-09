


import './App.css'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'

const IdCardArray = [
  {
    lastName:'Doe',
     firstName:'John',
     gender:'male',
     height:'178',
     birth: '1992-07-14',
     picture:"https://randomuser.me/api/portraits/men/44.jpg"
   
     },
     {
     lastName:'Delores ',
     firstName:'Obrien',
     gender:'female',
     height:'172',
     birth:'1988-05-11',
     picture:"https://randomuser.me/api/portraits/women/44.jpg"
     }
]

function App() {
  return (
    <div className="App">
      <div className='cards'>
        <IdCard props={IdCardArray[0]} />
        <IdCard props={IdCardArray[1]} />
      </div>
      <div className='greeting'>
        <Greetings lang="de">John</Greetings>
        <Greetings lang="fr">Delores</Greetings>
      </div>
      <div className='random'>
        <Random min={1} max={6} />
      </div>
      <div className='rgb'>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
      <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
      </div>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
    </div>
  )
}

export default App