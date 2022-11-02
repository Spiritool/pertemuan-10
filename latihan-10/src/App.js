import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parent-box">
      <div className='Foto'>
        <img src="redminote11.jpg"/>
      </div>
      <div className='desk'>
        <p className='judul'>HANDPHONES</p>
        <p className='judul2'>REDMI NOTE 11</p>
        <p className='jelas'>Redmi note 11 memiliki varian memori 4/128 dan 6/128 dilengkapi dengan Speaker ganda Jack headphone 3,5 mm dan Sertifikasi Hi-Res Audio. dilengkapi juga Sensor jarak | Sensor cahaya ambien | Akselerometer | Kompas elektronik | IR Blaster | Giroskop. dan kapasitas baterai 5000mAH 5000 mAh dengan Pengisian daya cepat Pro 33W</p>
        <p className='pewarna'>Colour</p> 
      <div className='warna'>
        <button className='color1'></button>
        <button className='color2'></button>
        <button className='color3'></button>
      </div>
      <p className='ram'>Ram Option</p>
      <button className='ram1'>4/128</button>
      <button className='ram2'>6/128</button>
      <p className='config'>? how to configure your phone</p>
      <div className='harga'>999$
        <button className='beli'>BUY NOW</button>
      </div>
      </div>
    </div>
  );
}

export default App;
