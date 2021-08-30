let should = require('should');
let sleep = require('../index');

describe('#SleepMS', () => {
	it('should sleep 1 sec.', done => {
		sleep.SleepMS(1000);		
		done();
	})
	
	it('should sleep 0 sec..', done => {
		let statTime = new Date().getTime();
		sleep.SleepMS(-10);
		let endTime = new Date().getTime();
		
		if ((endTime - statTime) <= 10) done();
		else throw new Error("sleep failed");
	})
})

