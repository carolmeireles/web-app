import './App.css'

function App() {

  return (
    <div className='container'>

      <section className='BioSection'>
        <div className='ProfilePic' />
        <p className='ProfileDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat, ea pariatur quae at fuga earum blanditiis alias molestias, ex praesentium reiciendis nostrum voluptate recusandae molestiae mollitia voluptas quaerat totam.
        </p>
        <ul className='SocialLinks'>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </section>

      <section className='ServicesSection'>
        <ul className='ItemsList'>
          <li>Serviço 1</li>
          <li>Serviço 2</li>
          <li>Serviço 3</li>
        </ul>
      </section>

      <section className='ProjectsSection'>
        <div className='Card'>Projeto 1</div>
        <div className='Card'>Projeto 2</div>
        <div className='Card'>Projeto 3</div>
        <div className='Card'>Projeto 4</div>

        {/* <ul className='CardList'>
          <li className='CardItem'>
            <div className='Card'>Projeto 1</div>
          </li>
          <li className='CardItem'>
            <div className='Card'>Projeto 2</div>
          </li>
          <li className='CardItem'>
            <div className='Card'>Projeto 3</div>
          </li>
          <li className='CardItem'>
            <div className='Card'>Projeto 4</div>
          </li>
        </ul> */}
      </section>

    </div>
  )
}

export default App
