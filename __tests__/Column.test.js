it('Get width', () => {
  const items = [1, 2, 3, 4, 5];

  items.forEach((element, index) => {
    if ((index + 1) % 3 !== 0) {
      console.log('Mitad', element);
    } else {
      console.log('Todo', element);
    }
  });
  expect(true).toBeTruthy();
});
