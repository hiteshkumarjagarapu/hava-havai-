import Modal from './modal'
import Desktop3 from '../Desktop3'

const Desktop2 = () => {
  const butClick = () => <Desktop3 />

  return (
    <div>
      <p>Airports > Indira Gandhi International Airport</p>
      <h1>Indira Gandhi International Airport</h1>
      <div>
        <a>Terminals</a>
        <a>Transport</a>
        <a>Contact Details</a>
      </div>
      <hr />
      <div>
        <img src="https://ibb.co/Ldzd7CM" alt="" />
        <img src="https://ibb.co/Ldzd7CM" alt="" />
      </div>
      <button type="button" className="but">
        +Add Terminal
      </button>
      <br />
      <p>Lost & found</p>
      <hr />
      <label htmlFor="x">Service Name</label>
      <input id="x" type="text" placeholder="Lost & found" />
      <label htmlFor="y">Category</label>
      <input id="y" type="text" placeholder="Option 1 " />
      <label htmlFor="z">Sub Category</label>
      <input id="z" type="text" placeholder="Option 1 " />
      <label htmlFor="y">Category</label>
      <button type="button" onClick={butClick}>
        <FontAwesomeIcon icon="fas fa-file-upload" />
        upload image
      </button>
      <FontAwesomeIcon icon="fa-solid fa-toggle-on" />
      <div>
        <input id="des" type="text" placeholder="type here" />
        <label htmlFor="des">Description</label>
      </div>
      <input id="l" type="text" placeholder="Money Exchange" />
      <label htmlFor="des">Lounge</label>
    </div>
  )
}
export default Desktop2
