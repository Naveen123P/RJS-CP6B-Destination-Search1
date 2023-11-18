// Write your code here
import './index.css'

const DestinationItems = props => {
  const {eachItem} = props
  const {name, imgUrl} = eachItem

  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="img" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItems
