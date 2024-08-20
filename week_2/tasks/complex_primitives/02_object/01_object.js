//write a program to all useres using object based on thair gender print thier name

const Allusers = [
  {
    fname: "iqra",
    gender: "femail",
  },
  {
    fname: "user2",
    gender: "mail",
  },
  {
    fname: "user3",
    gender: "mail",
  },
  {
    fname: "user4",
    gender: "femail",
  },
  {
    fname: "user5",
    gender: "mail",
  },
];

for (let i = 0; i < Allusers.length; i++) {
  if (Allusers[i].gender == "mail") {
    console.log(Allusers[i].fname);
  }
}
