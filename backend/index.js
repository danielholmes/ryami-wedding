/*exports.handler = (event, context, callback) => {
  // TODO implement
  callback(null, 'Hello from Ryami');
};*/

exports.handler = function(event, context, callback) {
  callback(null, {'success': true, 'input': event});
  // or
  // callback( 'some error type' );
};