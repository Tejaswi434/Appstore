// Write your code here
import './index.css'

const AppItem = props => {
  const {each} = props
  const {appId, appName, imageUrl, category} = each
  return (
    <li className="listing">
      <img src={imageUrl} className="sizingimage padding" alt="appName" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
