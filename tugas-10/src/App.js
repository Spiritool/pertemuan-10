import logo from './logo.svg';
import './App.css';

function App() {

  return (
   <div className="Parentbox">
    <div className="Foto">
      <img src="cursed.png"/>
    </div>
    <div className="Deskripsi">
      <p className="Cate">CAT</p>
      <h1 className="Title">ANGRY CAT</h1>
      <p className="Price">IDR 999.999.999</p>
      <p className="Info">
      Angry cat is simply cat but it's angry one. angry cat has been the indus-try's standard meme ever since the 2000s, when an unknown person took a photos of angry cat and scrambled it to make a meme.
      </p>
      <p className='judul'>SIZE</p>
      <div className='ukuran'>
        <button className='xs'>XS</button>
        <button className='s'>S</button>
        <button className='m'>M</button>
        <button className='l'>L</button>
        <button className='xl'>XL</button>
      </div>
      <button className='tombol'>BELI SEKARANG</button>
      <button className='tombol2'>TAMBAH KE KERANJANG</button>
    </div>
   </div>
  );
}

export default App;
