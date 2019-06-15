import axios from 'axios';

const fetchTime = async () => {
  let time;
  try {
    const res = await axios('localhost:3000/api/test.js');
    time = res.data;
  } catch (e) {
    time = e.message
  }

  return time;
}

class HelloUA extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    const time = await fetchTime();

    return { userAgent, time };
  }

  render() {
    return <div style={{'fontFamily': 'sans-serif'}}>
        <h3>Hello World</h3>
        <h4>User Agent: {this.props.userAgent}</h4>
        <h4>API test: {this.props.time}</h4>
        </div>;
  }
}

export default HelloUA;