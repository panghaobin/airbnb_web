import React, { Component } from 'react'
import './NavbarView.css'
import { 
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  Row,
  Col,
  ProgressBar,
} from 'react-bootstrap'
import { log } from 'util';
import DatePickerView from './DatePickerView'

export default class NavbarView extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      deskWidth: '100%',
      deskHeight: '529px',
      deskBottom: '529px',
      startDate: '',
      endDate: '',
    })

  }

  componentDidMount() {
    this.screenChange()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this))
  }

  screenChange() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.setState({
      deskBottom: '529px',
    })
  }

  render() {
    return (
      
      <div>
        <Navbar bg="light" variant="light" class="navbar navbar-fixed-top ">
          <Form inline>
          <Button variant="outline-primary">Search</Button>
            <FormControl type="text" placeholder="Search" className="ml-sm-2" />
            
          </Form>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="ml-auto">
            <Nav.Link href="#home">人民币</Nav.Link>
            <Nav.Link href="#features">手机端</Nav.Link>
            <Nav.Link href="#pricing">出租房源</Nav.Link>
            <Nav.Link href="#pricing">开展体验</Nav.Link>
            <Nav.Link href="#pricing">故事</Nav.Link>
            <Nav.Link href="#pricing">帮助</Nav.Link>
            <Nav.Link href="#pricing">注册</Nav.Link>
            <Nav.Link href="#pricing">登录</Nav.Link>
          </Nav>
          
        </Navbar>
        {/* <Image ref src='https://z1.muscache.cn/pictures/5173cf30-4591-4176-a906-10fc9f13ed9a.jpg' fluid className="custom-image" ></Image>
        <Image src='https://z1.muscache.cn/pictures/7eb620c8-89be-44fe-b467-8027a5cb3741.jpg' fluid ></Image>
        <Image  src="https://z1.muscache.cn/pictures/3a896db4-8541-440b-8ef4-838c6d0aa712.jpg" fluid style={{}}></Image> */}
        
        <div className='custom-back-image'>
          <Row>
            <Col className='col-arrow' sm={1}>
              <Image className='arrow' src={require('./images/left.png')}></Image>
            </Col>
            <Col sm={10}>
              <div className='head-image-description'>
                <h1 className='head-image-description-title'>在旅行中丰富见闻<br/>领取礼券 国内亲子游</h1>
                <p className='head-image-description-text'>制造难忘的暑假体验，让大人小孩同享盛夏乐趣</p>
                <input type='button' className="input-button" value='进入特惠专场'></input>
                <Row>
                  <ProgressBar className='process' now={60} /><br/>
                  <ProgressBar className='process' now={60} /><br/>
                  <ProgressBar className='process' now={60} />
                </Row>
                <Row style={{marginTop:30}}>
                  <Col sm={10}>
                    <div style={{backgroundColor:'rgba(255,255,255,0)', height:72}}>
                    {/* <DateRangePicker
                      showClearDates
                      startDatePlaceholderText="入住日期"
                      endDatePlaceholderText="退房日期"
                      monthFormat="YYYY[年]MM[月]"
                      // weekDayFormat="dd"
                      phrases={{closeDatePicker: '关闭',clearDates: '清除日期'}}
                      onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                      focusedInput={this.state.focusedInput}
                      onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                      hideKeyboardShortcutsPanel={true}
                    /> */}
                    <DatePickerView/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            
            <Col className='col-arrow' sm={1}>
              <Image className='arrow' src={require('./images/right.png')}></Image>
            </Col>
            
          </Row>

          
        </div>
        <Image ref src='https://z1.muscache.cn/pictures/5173cf30-4591-4176-a906-10fc9f13ed9a.jpg' fluid className='custom-image' ></Image>
        
      </div>
    )
  }
}