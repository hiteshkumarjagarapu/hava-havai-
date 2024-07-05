import Component from 'react'
import Modal from 'styled-react-modal'

class Desktop3 extends Component {
  state = {isOpen: false}

  toggleModal() {
    this.setState(prev => {
      !prev.isOpen
    })
  }

  render() {
    return (
      <div>
        <button onClick={toggleModal}>Terminal title</button>
        <hr />
        <Modal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <p className="desc">Description</p>
          <div className="flexCont">
            <p>
              <FontAwesomeIcon icon="fas fa-file-upload" />
              upload image
            </p>
            <button className="but1" onClick={toggleModal}>
              cancel
            </button>
            <button className="but" onClick={toggleModal}>
              continue
            </button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Desktop3
