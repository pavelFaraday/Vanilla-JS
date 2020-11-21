import {fname, lname, name_1, name_2, name_3, name_4, name_5, name_6, name_7} from './moduleA';
console.log(`${fname} ${lname} ${name_1} ${name_2} ${name_3} ${name_4} ${name_5} ${name_6} ${name_7}`);

// We can use aliaces with variables

import {user_1 as u1, user_2 as u2, user_3 as u3, user_4 as u4} from './moduleA';
console.log(`${u1} ${u2} ${u3} ${u4}`);
