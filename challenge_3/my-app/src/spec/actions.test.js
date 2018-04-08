import { createNewBoard, revealSpace } from '../components/actions/actions';

describe('### CREATE NEW BOARD###', () => {
  const newBoardAction = createNewBoard(3);

  it('Should return an object', () => {
    expect(newBoardAction).toBeInstanceOf(Object);
  });

  it('Should return an object with type set to CREATE_BOARD', () => {
    expect(newBoardAction.type).toBe('CREATE_BOARD');
  });

  it('Should return an object with properties board and safeSpaces', () => {
    expect(newBoardAction).toHaveProperty('board');
    expect(newBoardAction).toHaveProperty('safeSpaces');
  });
});

describe('### REVEAL SPACE ###', () => {
  const newRevealAction = revealSpace(0, 0);

  it('Should return an object', () => {
    expect(newRevealAction).toBeInstanceOf(Object);
  });

  it('Should retun an object with type set to REVEAL_SPACE', () => {
    expect(newRevealAction.type).toBe('REVEAL_SPACE');
  });

  it('Should return an object with properties row and col', () => {
    expect(newRevealAction).toHaveProperty('row', 0);
    expect(newRevealAction).toHaveProperty('col', 0);
  });
});
