import { SpinnerInfinity } from 'spinners-react';
import "./loader.css"
function Loader() {
  return (
    <div className='spinner'>
      <SpinnerInfinity size={200} thickness={100} speed={100} color="rgba(172, 57, 147, 1)" secondaryColor="rgba(57, 172, 157, 1)" />
      <p className='loading'>Downloading...</p>
    </div>
  )
}

export default Loader
