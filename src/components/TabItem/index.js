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
      <div className="individualbox">
        <button
          type="button"
          className={`eraseborder ${cascade}`}
          onClick={ChangePortal}
        >
          <p>{displayText}</p>
        </button>
      </div>
    </li>
  )
}

export default TabItem
