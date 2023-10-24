function duplicateNums(nums) {
  const count = {}; // Объект для подсчета повторяющихся чисел
  const duplicates = []; // Массив для хранения повторяющихся чисел

  // Перебираем массив nums и подсчитываем повторяющиеся числа
  for (const num of nums) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  // Перебираем объект count и добавляем повторяющиеся числа в массив duplicates
  for (const num in count) {
    if (count[num] > 1) {
      duplicates.push(Number(num)); // Преобразуем строку в число
    }
  }

  // Сортируем массив duplicates
  duplicates.sort((a, b) => a - b);

  return duplicates;
}

export default duplicateNums;
