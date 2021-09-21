const User = require('./User')
test('should get Name', () => {
  const user  = new User('Jack')
  expect(user.getName()).toBe('Jack')
  user.setName('Bob')
  expect(user.getName()).toBe('Bob')
})
