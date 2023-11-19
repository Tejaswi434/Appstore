// Write your code here
import './index.css'

const AppItem = props => {
  const {each} = props
  const {appId, appName, imageUrl, category} = each
  return (
    <li className="listing">
      <div className="paddingImage">
        <img src={imageUrl} alt={category} className="sizingimage" />
        <p>{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
