
export default function () {
    console.log('User reducer called with args: ' + JSON.stringify(arguments));
    return [
    {
      id: 1,
      first: 'Bucky',
      last: 'Roberts',
      age: 71,
      description: 'blah blah',
      thumbnail: 'http://i.imgut.com/7yUvePI.jpg'
    },
    {
      id: 2,
      first: 'Joby',
      last: 'Wasilenko',
      age: 27,
      description: 'blah blah blah 2',
      thumbnail: 'http://i.imgut.com/52xRlm8.jpg'
    },
    {
      id: 3,
      first: 'Madison',
      last: 'Williams',
      age: 24,
      description: 'blah',
      thumbnail: 'http://i.imgut.com/4EMtxHB.jpg'
    },
  ]
}