

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10  bg-gray-800 text-success footer-center">
      <div>
      
        <p style={{fontSize:20}}>Copyright &copy; {footerYear} all rights reserved</p>
      </div>
      
    </footer>
  )
}

export default Footer

