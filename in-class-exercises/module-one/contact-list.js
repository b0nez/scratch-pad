#!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      2. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      3. length(): returns the number of contacts within the list.
 *      4. find(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 * 
 * BONUS : add a all() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The all() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.all(); // => Max Gaudin
 *                                 John Fraboni
 *                                 Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#contact-list"
 */
 
var contacts = require('./data/contact.json');

function makeContact(id, nameFirst, nameLast) {
    return {
        'id': id,
        'nameFirst': nameFirst,
        'nameLast': nameLast,
    }
} 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     var contacts = [];
     return {
         addContact: function(contact) {
             let index = contacts.indexOf(contact);
             if (index === -1) return contacts.push(contact);
         },
         removeContact: function(contact) {
             let index = contacts.indexOf(contact);
             if (index > -1) return contacts.splice(index, 1)[0];
         },
        length: function() {
            return contacts.length;
        },
        find: function(fullname) {
            for (var x in contacts) {
                if (contacts[x].nameFirst + " " + contacts[x].nameLast == fullname) {
                    return contacts[x];
                } else {
                    return undefined;
                }
            }
        },
        all: function() {
            var allcontacts = [];
            for (var x in contacts) {
                if (x < contacts.length - 1) {
                    allcontacts.push(contacts[x].nameFirst + ' ' + contacts[x].nameLast + '\n');
                } else {
                    allcontacts.push(contacts[x].nameFirst + ' ' + contacts[x].nameLast);
                }
            };
            allcontacts = allcontacts.toString();
            allcontacts = allcontacts.replace(/,/g, "");
            return allcontacts;
        }
    }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
module.exports.makeContact = makeContact;
module.exports.makeContactList = makeContactList;