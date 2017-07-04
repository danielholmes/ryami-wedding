import React from 'react';
import PropTypes from 'prop-types';
import TextField from "./textfield";
import AttendanceFieldset from "./attendanceFieldset";
import {withRouter} from "react-router-dom";
import Select from "./select";
import DietaryList from "./dietaryList";

class RSVP extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  };

  constructor(props) {
    super(props);

    this.state = {
      hearAdjective: '',
      sangeetAttendance: {
        emotion: '',
        isComing: '',
        amount: ''
      },
      ceremonyAttendance: {
        emotion: '',
        isComing: '',
        amount: ''
      },
      contact: '',
      haveDietaryRequirements: '',
      dietaryRequirements: [''],
      song: '',
      artist: '',
      adviceVerb: '',
      adviceNeverVerb: '',
      adviceYears: '',
      adviceNoun: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('TODO: Save');

    if (this.state.ceremonyAttendance.isComing || this.state.sangeetAttendance.isComing) {
      this.props.history.push('/rsvp/see-you-there/');
      return;
    }

    this.props.history.push('/rsvp/not-coming/');
  }

  createChangeHandler(name) {
    return value => this.setState({[name]: value});
  }

  createAttendanceChangeHandler(name) {
    return (subName, value) => {
      const newAttendance = Object.assign({}, this.state[name]);
      newAttendance[subName] = value;
      this.setState({[name]: newAttendance})
    };
  }

  render() {
    return <div>
      <h2>RSVP</h2>
      <form onSubmit={this.onSubmit}>
        <div>Dear Ami and Ryan,</div>
        <div>
          I am / We are so
          <TextField help="adjective" value={this.state.hearAdjective}
                     onChange={this.createChangeHandler('hearAdjective')} />
          to hear about your upcoming wedding celebrations!
        </div>
        <AttendanceFieldset label="Sangeet" date="Friday the 24th of November 2017" value={this.state.sangeetAttendance}
                            onChange={this.createAttendanceChangeHandler('sangeetAttendance')} />
        <AttendanceFieldset label="Wedding" date="Sunday the 26th of November 2017"
                            value={this.state.ceremonyAttendance}
                            onChange={this.createAttendanceChangeHandler('ceremonyAttendance')} />
        {(this.state.ceremonyAttendance.isComing || this.state.sangeetAttendance.isComing) && <div>
          <div>
            You can contact us on
            <TextField help="number or email" value={this.state.contact} onChange={this.createChangeHandler('contact')} />
            if you need more information.
          </div>
          <div>
            With the dietary stuff,
            <Select options={new Map([[false, 'we have no requirements'], [true, 'we have some requirements']])}
                    value={this.state.haveDietaryRequirements}
                    onChange={this.createChangeHandler('haveDietaryRequirements')} />.
            {this.state.haveDietaryRequirements &&
              <DietaryList value={this.state.dietaryRequirements}
                           onChange={this.createChangeHandler('dietaryRequirements')} />}
          </div>
          <div>
            If you play
            <TextField help="song" value={this.state.song} onChange={this.createChangeHandler('song')} /> by
            <TextField help="artist" value={this.state.artist} onChange={this.createChangeHandler('artist')} />, you'll
            see me / us bust some moves!
          </div>
          <div>
            A final bit of marriage advice... always remember to
            <TextField help="verb" value={this.state.adviceVerb} onChange={this.createChangeHandler('adviceVerb')} />,
            never
            <TextField help="verb" value={this.state.adviceNeverVerb}
                       onChange={this.createChangeHandler('adviceNeverVerb')} />,
            and we wish you
            <TextField help="#" value={this.state.adviceYears} onChange={this.createChangeHandler('adviceYears')} />
            years of
            <TextField help="noun" value={this.state.adviceNoun} onChange={this.createChangeHandler('adviceNoun')} />.
          </div>
        </div>}
        <input type="submit" value="Send" />
      </form>
    </div>;
  }
}

export default withRouter(RSVP);
