import './index.css'

const Banner = props => {
  const {banner} = props
  const {headerText, description, className} = banner
  return (
    <li className={`${className} banner-card`}>
      <div className="small">
        <h1> {headerText} </h1>
        <p> {description} </p>
        <button className="button" type="button">
          show more
        </button>
      </div>
    </li>
  )
}

export default Banner
