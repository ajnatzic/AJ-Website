// I used starter code from the React documentation to create this script

function FormattedDate(props) {
  var msAlive = new Date() - new Date("02-14-1999");
  var daysAlive = Math.floor(msAlive / (1000*60*60*24))
  var daysAwake = (daysAlive * 16)/ 24;
  var hoursSlept = daysAlive * 8;
  var daysSlept = (daysAlive * 8) / 24;
  var coffeeDrank = Math.floor((new Date() / (1000*60*60*24)) - (new Date("02-14-2014") / (1000*60*60*24)));
  console.log(msAlive);
  return (
    <div className="lifeclock">
  <p><br/><br/>The current date is: <span className="time">{props.date.toLocaleDateString()}  {props.date.toLocaleTimeString()}.</span>
  <br/><br/>
  My birthday is <span className="time">02/14/1999 9:40:00 PM</span>
  <br/><br/>
  This means I've been alive for: <span className="time">{daysAlive} Days {msToTime(msAlive)}</span>
  <br/><br/>
  Assuming 8 hours of sleep everyday, I've slept: <span className="time">{hoursSlept} hours</span> or <span className="time">{daysSlept} consecutive days.</span>
  <br/><br/>
  ...And I've been awake for <span className="time">{daysAwake} days {msToTime(msAlive)} </span>
  <br/><br/>
  Assuming I have had 1 cup of coffee everyday since I was 15, I have had  <span className="time">{coffeeDrank}</span> cups of coffee in my life.
  </p>
  </div>
  );
}



function msToTime(s) {

  // Pad to 2 or 3 digits, default is 2
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ' hours ' + pad(mins) + ' minutes and ' + pad(secs) + ' seconds.';
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock currDate={new Date()}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('life_clock'));
