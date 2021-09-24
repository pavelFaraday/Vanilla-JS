const people = [
  {
    name: 'bob',
    location: { street: '123 main street', 
                timezone: { offset: '+7:00' } },
  },
  { name: 'peter', location: { street: '123 Pine street' } },
  {
    name: 'susan',
    location: { street: '123 Apple street', 
                timezone: { offset: '+9:00' } },
  },
]

people.forEach((person) => {
  // console.log(person.location.timezone.offset)

  // check if these properies has each object. if not, use default propery 'hello world'
  console.log(person?.location?.timezone?.offset || 'hello World')
})

/* +7:00
undefined
+9:00 */