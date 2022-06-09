import spinner from '../layout/assets/spinner.gif'

function Spinner() {
  return (
    <div >
      <img
        width={200}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner