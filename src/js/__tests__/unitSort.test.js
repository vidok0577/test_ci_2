import { sortUnitLevelHealth } from '../unit';

const dataList = [
    [
      [
        { name: "мечник", health: 10 },
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
      ],
      [
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
        { name: "мечник", health: 10 },
      ],
    ],
  
    [
      [
        { name: "мечник", health: 10 },
        { name: "маг", health: 65 },
        { name: "лучник", health: 80 },
        { name: "ковбой", health: 20 },
      ],
      [
        { name: "лучник", health: 80 },
        { name: "маг", health: 65 },
        { name: "ковбой", health: 20 },
        { name: "мечник", health: 10 },
      ],
    ],
  
    [
      [
        { name: "мечник", health: 10 },
        { name: "маг", health: 99 },
        { name: "варвар", health: 80 },
        { name: "пехотинец", health: 81 },
        { name: "лекарь", health: 2 },
      ],
      [
        { name: "маг", health: 99 },
        { name: "пехотинец", health: 81 },
        { name: "варвар", health: 80 },
        { name: "мечник", health: 10 },
        { name: "лекарь", health: 2 },
      ],
    ],
    [
      [
        { name: "мечник", health: 8 },
        { name: "маг", health: 91 },
        { name: "пехотинец", health: 43 },
        { name: "лекарь", health: 45 },
        { name: "лучник", health: 87 },
      ],
      [
        { name: "маг", health: 91 },
        { name: "лучник", health: 87 },
        { name: "лекарь", health: 45 },
        { name: "пехотинец", health: 43 },
        { name: "мечник", health: 8 },
      ],
    ],
  ];

test.each(dataList)('testing sort', (list, expected) => {
    const result = sortUnitLevelHealth(list);
    expect(result).toEqual(expected);
});
