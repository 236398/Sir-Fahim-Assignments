"use strict";
const names = ['Talia', 'Arham', 'Maaz', 'Hasan', 'Saad', 'Shahmeer', 'Nofil', 'Daniyal', 'Abdul Moiz', 'Faizan', 'Tahir', 'Ahmed', 'Arshad', 'Muzammil', 'Mudassir'];
let guests = [];
for (let i = 0; i < 100; i++) {
    guests.push(names[Math.floor(Math.random() * names.length)]);
}
console.log(`Inviting all guests to the wedding:\n`);
guests.forEach(guest => {
    console.log(`Dear ${guest},\n\nYou are invited to the wedding of Mr.Fahim! We are excited to celebrate this special day with you.\n\nBest Regards,\nThe Wedding Organizers`);
});
const removeCount = 10;
for (let i = 0; i < removeCount; i++) {
    let start = Math.floor(Math.random() * guests.length);
    let end = Math.floor(Math.random() * (guests.length - start));
    guests.splice(start, end);
}
console.log(`\nDue to the rainy weather, we had to downsize to 90 guests. We regret to inform you that you are not able to join us for the ceremony.\n`);
console.log(`However, we will remember you in the reception. We apologize for the inconvenience.\n`);
const newGuestCount = 200 - guests.length;
for (let i = 0; i < newGuestCount; i++) {
    guests.push(names[Math.floor(Math.random() * names.length)]);
}
// Add the previously removed guests
while (guests.length > 200) {
    guests.pop();
}
console.log(`Good news! The rain has stopped and the venue has changed to accommodate 200 guests. Therefore, we are now inviting more people to join us.\n`);
guests.forEach(guest => {
    console.log(`Dear ${guest},\n\n we would now like to invite you to the wedding of Mr.Fahim! We are excited to celebrate this special day with you.\n\nBest Regards,\nThe Wedding Organizers`);
});
