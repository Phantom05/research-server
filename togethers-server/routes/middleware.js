
const {log,commandLine} = require('./common');

function wrap(asyncFn ) {
  // FIXME: Promise와 catch를 이용하면 더 간결해질 것 같습니다.
    return (async (req, res, next) => {
      try {
        log(`\n`,'green');
        log(`** Attempted Router`,'yello')
        log(commandLine,'green');
        log(` - [ ${req.method} ] ${req.originalUrl}` , 'green');
        log(commandLine,'green');
        log(`\n`,'green');
        return await asyncFn(req, res, next);
      } catch (error) {
        console.log(error.message);
        return next(error);
      }
    })  
}
exports.wrap = wrap;
