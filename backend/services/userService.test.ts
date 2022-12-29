import { hashPassword, comparePassword, registerProducer, login, generateToken  } from './userService'

test('Checks validity of hash compared to original string', () => {
  expect(comparePassword('qwertyui', '$2b$10$M.SaiFvnzHnM3bb0IQGDT.YMOFEi2aHG9Qp4WdrNLl.ymbCaVn3VG')).toBeTruthy
});

test('Tests JWT generation', () => {
  //mock data
  const producer = {
    rows: [
      {
        uuid: 1234
      }
    ]
  }
  expect(generateToken(producer).substring(0,72)) //Does not include timestamp
    .toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxMjM0LCJpYXQiOjE2NzIyMjI')
});