import { useEffect, useState } from 'react'
import CardPizza from "../../components/CardPizza/CardPizza"
import Header from '../../components/Header/Header'
import './Home.css'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const URL = 'http://localhost:5000/api/pizzas'

  useEffect(() => {
    loadPizzas()
  }, [])

  const loadPizzas = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setPizzas(data)
  }

  return (
    <>
      <Header />
      <div className='boxCards'>
        {pizzas.map(pizza => (
          <div key={pizza.id} className="d-flex justify-content-center mb-4 col-12 col-md-6 col-lg-4">
            <CardPizza
              pizza={pizza}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </>
  )
}
export default Home