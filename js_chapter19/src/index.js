import {styleBody, addTitle, contact} from  './dom';
import users, {getPremUsers} from './data';

console.log('index file');
addTitle('new test title');
console.log(contact);

console.log('all users: ', users);
console.log('premium users: ', getPremUsers(users));


