import './index.css'

const SearchListcomponent = props => {
  const {items, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = items

  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="items-container">
      <div className="elements-container">
        <p className="timeAccesses">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <p className="title">{title}</p>
        <p className="domainurl">{domainUrl}</p>
      </div>
      <div>
        <button type="button" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchListcomponent
