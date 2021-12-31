import './App.css'
import Button from './components/Button'
import { useState, Fragment } from 'react'
import axios from 'axios'
import Generator from './components/Generator'
function App() {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [activeLink, setActiveLink] = useState(0)
  const onClickHandler = () => {
    setActiveLink(0)
    setLoading(true)
    axios
      .get('https://randomuser.me/api/')
      .then((response) => {
        console.log(response)
        setUserData(response.data.results)
      })
      .catch((error) => {
        console.log(error)
        setLoading(true)
      })
      .finally(() => {
        setLoading(false)
        setActiveUser(true)
      })
  }
  const icons = [
    'fas fa-user fa-4x',
    'fas fa-envelope fa-4x',
    'fas fa-calendar-week fa-4x',
    'fas fa-map-marker fa-4x',
    'fas fa-phone fa-4x',
    'fas fa-lock fa-4x'
  ]
 
  const activeLinkHandler = (index) => {
    setActiveLink(index)
  }
  const style = {
    color: 'green'
  }

  return (
    <div className="App">
      <h1 style={{ color: 'black' }}>Random User Generator App</h1>
      <Button isActive={activeUser} clicked={onClickHandler} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="app__user">
          {userData.map((user) => {
            return (
              <Fragment key={user.cell}>
                <img src={user.picture.large} alt="#" />
                <Generator user={user} activeLink={activeLink}/>
                <div className="app__icons">
                  {icons.map((icon, index) => {
                    return (
                      <i
                        className={icon}
                        key={index}
                        onMouseEnter={() => activeLinkHandler(index)}
                        style={activeLink === index ? style : null}
                      ></i>
                    )
                  })}
                </div>
              </Fragment>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default App
