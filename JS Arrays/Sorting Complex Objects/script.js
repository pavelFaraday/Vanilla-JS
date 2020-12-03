// https://www.youtube.com/watch?v=AmQ1OX7XBJw&list=PLyuRouwmQCjnupe_ohQgFvwFZF8dycwK8&index=37

const people = [
    { id: 12, name: 'Billy', dob: '1998-10-05' },
    { id: 123, name: 'Bart', dob: '1993-02-15' },
    { id: 45, name: 'Belinda', dob: '1996-01-31' },
    { id: 67, name: 'Bonnie', dob: '1998-04-09' },
    { id: 89, name: 'Brenda', dob: '1996-07-08' },
    { id: 34, name: 'Bobby', dob: '1994-09-12' },
    { id: 234, name: 'Blake', dob: '2000-01-01' },
  ];
  
  const log = console.log;
  
  // log('\n\n built-in sort method');
  // log(people.sort()); // [Object object]
  
  // log('\n\n sort by name');
  // log(people.sort(byName));
  
  // log('\n\n sort by id');
  // log(people.sort(byId));
  
  // log('\n\n sort by date');
  // log(people.sort(byDate));
  
  log('\n\n sort by birthday as it occurs during the year');
  log(people.sort(byBirthday));
  
  function byName(a, b) {
    //alphabetically by name
    if (a.name > b.name) {
      return 1;
    } else if (b.name > a.name) {
      return -1;
    } else {
      return 0;
    }
  }
  
  function byId(a, b) {
    //numerically by id
    return parseInt(a.id) - parseInt(b.id);
  }
  
  function byDate(a, b) {
    //chronologically by year, month, then day
    return new Date(a.dob).valueOf() - new Date(b.dob).valueOf(); //timestamps
  }
  
  function byBirthday(a, b) {
    //by month and then by day
    let d1 = new Date(a.dob); // 1993-02-15T00:00:00Z =>   1993-02-14T20:00:00EST
    let d2 = new Date(b.dob);
    log(d1.getDate(), d1.getUTCDate(), d1.getMonth(), d1.getUTCMonth());
    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
      return -1;
    } else {
      //same month
      return d1.getUTCDate() - d2.getUTCDate();
    }
  }