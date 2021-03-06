var aws = require('aws-sdk');
var ses = new aws.SES({
  region: 'us-west-2'
});

function formatEventAttendance(name, attendance, showChildren = false) {
  let output = `
${name} Attendance:
    Coming?:   ${booleanToString(attendance.isComing)}
    Number:    ${attendance.number}`;
  if (showChildren) {
    output += `\n    # of kids: ${attendance.numberOfChildren}`;
  }
  return output;
}

function booleanToString(bool) {
  if (bool) {
    return 'Yes';
  }
  return 'No';
}

function createEmail(params) {
  var emailContent = `
You've received a new RSVP. Details below:

Name:                    ${params.name}

How they feel:           ${params.hearAdjective}

${formatEventAttendance('Sangeet', params.sangeetAttendance)}

${formatEventAttendance('Ceremony', params.ceremonyAttendance, true)}

Wouldn't miss it if:     ${params.wouldntMissIt}

Contact:                 ${params.contact}

Have Dietary Req's?:     ${booleanToString(params.haveDietaryRequirements)},
Details:                 ${params.dietaryRequirements.join(' | ')}

Song:                    ${params.song} by ${params.artist}

Advice:                  Always ${params.adviceVerb}, never ${params.adviceNeverVerb}
We wish you:             ${params.adviceYears} years of ${params.adviceNoun}
  `;
  return {
    Destination: {
      ToAddresses: [process.env.EMAIL_RECEIVER]
    },
    Message: {
      Body: {Text: {Data: emailContent}},
      Subject: {Data: "New wedding RSVP"}
    },
    Source: "daniel@danielholmes.org"
  };
}

function sendEmail(params) {
  var emailParams = createEmail(params);
  return new Promise(function(resolve, reject) {
    ses.sendEmail(emailParams, function(error, data) {
      if (error) {
        reject(error);
        return;
      }

      resolve({'ok': true});
    });
  });
}

exports.handler = function(event, context, callback) {
  sendEmail(event)
    .then(callback.bind(null, null))
    .catch(callback)
};
