import Component from 'react'
import {Text} from '@adobe/react-spectrum'
import Edit from '@spectrum-icons/workflow/Edit'
import Desktop2 from './components/Desktop2'

class Desktop1 extends Component {
  state = {value: true}
  airports = () => {
    this.setState(prev => {
      value: !prev.value
    })
  }
  render() {
    return (
      <div className="bg">
        <nav>
          <div className="navContainer">
            <p>hava havai</p>

            <img
              src="https://app.gemoo.com/share/image-annotation/667531825484431360?codeId=M0a7Wb3EVAjL3&origin=imageurlgenerator&card=667531823144030208"
              height="32"
              weight="32"
              alt="profile"
            />
          </div>
        </nav>
        <div className="row">
          <div className="side">
            <i className="fa fa-home">Home</i>
            <p>Dashboard</p>
            <br />
            <p>Services</p>
            <p>Airports</p>
            <p>Videos</p>
            <br />
            <p>Others</p>
            <p>List 1</p>
            <p>List 2</p>
            <p>List 3</p>
          </div>
          {value ? (
            <div className="main">
              <h3>Airports</h3>
              <ul>
                <li onClick={this.airports}>
                  <input type="checkbox" id="a" />
                  <label htmlFor="a">Airports</label>
                  <div>
                    <p>Country</p>
                    <p>Code</p>
                    <p>Terminals</p>
                  </div>
                </li>
                <hr />
                <li>
                  <input type="checkbox" id="b" />
                  <label htmlFor="b">Indra Gandhi International Airport</label>
                  <div>
                    <p>India</p>
                    <p>DEl</p>
                    <p>3</p>
                  </div>
                  <div className="d-flex flex-row">
                    <ActionButton>
                      <Edit />
                      <Text>Icon + Label</Text>
                    </ActionButton>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="c" />
                  <label htmlFor="c">Dubai International Airport</label>
                  <div>
                    <p>UAE</p>
                    <p>DXB</p>
                    <p>5</p>
                  </div>
                  <div className="d-flex flex-row">
                    <ActionButton>
                      <Edit />
                      <Text>Icon + Label</Text>
                    </ActionButton>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="d" />
                  <label htmlFor="d">Heathrow Airport</label>
                  <div className="d-flex flex-row">
                    <p>England</p>
                    <p>LHR</p>
                    <p>6</p>
                  </div>
                  <div className="d-flex flex-row">
                    <ActionButton>
                      <Edit />
                      <Text>Icon + Label</Text>
                    </ActionButton>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="e" />
                  <label htmlFor="e">Istanbul Airport</label>
                  <div className="d-flex flex-row">
                    <p>Turkey</p>
                    <p>IST</p>
                    <p>3</p>
                  </div>
                  <div className="d-flex flex-row">
                    <ActionButton>
                      <Edit />
                      <Text>Icon + Label</Text>
                    </ActionButton>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="f" />
                  <label htmlFor="f">Rajiv Gandhi International Airport</label>
                  <div className="d-flex flex-row">
                    <p>TEXAS</p>
                    <p>DXW</p>
                    <p>14</p>
                  </div>
                  <div className="d-flex flex-row">
                    <ActionButton>
                      <Edit />
                      <Text>Icon + Label</Text>
                    </ActionButton>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <Desktop2 />
          )}
        </div>
      </div>
    )
  }
}
export default Desktop1
