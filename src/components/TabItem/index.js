// Write your code here
import './index.css'

const TabItem = props => {
  const {each, MainChangePortal, isActive} = props
  const {tabId, displayText} = each

  const ChangePortal = () => {
    MainChangePortal(tabId)
  }
  const cascade = isActive ? 'tabButton' : ''
  return (
    <li className="gap">
      <button
        type="button"
        className={`eraseborder ${isActive}`}
        onClick={ChangePortal}
      >
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
