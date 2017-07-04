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
      rsvp: {
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
      },
      isSending: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({isSending: true});

    fetch('https://epslxa0lyc.execute-api.ap-southeast-2.amazonaws.com/prod', {
      method: 'POST',
      body: JSON.stringify(this.state.rsvp)
    })
      .then(r => r.json())
      .then(r => {
        if (!r.ok) {
          throw new Error(JSON.stringify(r));
        }

        if (this.isComing()) {
          this.props.history.push('/rsvp/see-you-there/');
          return;
        }

        this.props.history.push('/rsvp/not-coming/');
      })
      .catch(r => {
        this.setState({isSending: false});
        console.log('error', r)
      });
  }

  createChangeHandler(name) {
    return value => {
      const newRsvp = Object.assign({}, this.state.rsvp);
      newRsvp[name] = value;
      this.setState({rsvp: newRsvp});
    }
  }

  createAttendanceChangeHandler(name) {
    return (subName, value) => {
      const newAttendance = Object.assign({}, this.state.rsvp[name]);
      newAttendance[subName] = value;
      const newRsvp = Object.assign({}, this.state.rsvp);
      newRsvp[name] = newAttendance;
      this.setState({rsvp: newRsvp})
    };
  }

  isComing() {
    return this.state.rsvp.ceremonyAttendance.isComing || this.state.rsvp.sangeetAttendance.isComing;
  }

  render() {
    return <div>
      <h2>RSVP</h2>
      <form onSubmit={this.onSubmit}>
        <div>Dear Ami and Ryan,</div>
        <div>
          I am / We are so
          <TextField help="adjective" value={this.state.rsvp.hearAdjective}
                     onChange={this.createChangeHandler('hearAdjective')} />
          to hear about your upcoming wedding celebrations!
        </div>
        <AttendanceFieldset label="Sangeet" date="Friday the 24th of November 2017"
                            value={this.state.rsvp.sangeetAttendance}
                            onChange={this.createAttendanceChangeHandler('sangeetAttendance')} />
        <AttendanceFieldset label="Wedding" date="Sunday the 26th of November 2017"
                            value={this.state.rsvp.ceremonyAttendance}
                            onChange={this.createAttendanceChangeHandler('ceremonyAttendance')} />
        {this.isComing() && <div>
          <div>
            You can contact us on
            <TextField help="number or email" value={this.state.rsvp.contact}
                       onChange={this.createChangeHandler('contact')} />
            if you need more information.
          </div>
          <div>
            With the dietary stuff,
            <Select options={new Map([[false, 'we have no requirements'], [true, 'we have some requirements']])}
                    value={this.state.rsvp.haveDietaryRequirements}
                    onChange={this.createChangeHandler('haveDietaryRequirements')} />.
            {this.state.rsvp.haveDietaryRequirements &&
              <DietaryList value={this.state.rsvp.dietaryRequirements}
                           onChange={this.createChangeHandler('dietaryRequirements')} />}
          </div>
          <div>
            If you play
            <TextField help="song" value={this.state.rsvp.song} onChange={this.createChangeHandler('song')} /> by
            <TextField help="artist" value={this.state.rsvp.artist} onChange={this.createChangeHandler('artist')} />,
            you'll see me / us bust some moves!
          </div>
          <div>
            A final bit of marriage advice... always remember to
            <TextField help="verb" value={this.state.rsvp.adviceVerb}
                       onChange={this.createChangeHandler('adviceVerb')} />,
            never
            <TextField help="verb" value={this.state.rsvp.adviceNeverVerb}
                       onChange={this.createChangeHandler('adviceNeverVerb')} />,
            and we wish you
            <TextField help="#" value={this.state.rsvp.adviceYears}
                       onChange={this.createChangeHandler('adviceYears')} />
            years of
            <TextField help="noun" value={this.state.rsvp.adviceNoun}
                       onChange={this.createChangeHandler('adviceNoun')} />.
          </div>
        </div>}
        <button type="submit" disabled={this.state.isSending}>Send</button>
      </form>
    </div>;
  }
}

export default withRouter(RSVP);
