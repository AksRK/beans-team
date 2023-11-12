import { EOurApproachPopUpsKeys } from '@/app/about-team/types/enums';
export const ourApproachThemes = [
  '1. Понимание задачи',
  '2. Проблема',
  '3. Рефлексия',
  '4. Создание',
  '5. Выпуск первой версии на рынок',
  '6. Цикл',
];

export const ourApproachItems = {
  [ourApproachThemes[0]]: [
    { text: 'Задаем вопросы.', popUp: EOurApproachPopUpsKeys?.QUESTIONS },
    '⋅ Проводим глубинное интервью.',
    '⋅ Закрепляем бизнес-цели.',
    '⋅ Составляем план для выпуска первой версии.',
    '⋅ Делим проект на недельные спринты.',
    '⋅ Подбираем команду с необходимым опытом.',
    '⋅ Составляем прозрачный расчет сметы.',
    '⋅ При необходимости срезаем объем работы или меняем стек технологий.',
  ],
  [ourApproachThemes[1]]: [
    '⋅ Изучаем нишу и прошлые ваши эксперименты',
    '⋅ Исследуем пользователей и их потребностей',
    '⋅ Постановка проблемы',
    '⋅ Помогаем вам понять дизайн-задачу',
  ],
  [ourApproachThemes[2]]: [
    '⋅ Анализ конкурентов',
    '⋅ Опрос пользователей',
    '⋅ Синтез идей и гипотез',
    '⋅ Оценка отношений к идее',
    '⋅ CJM',
    '⋅ JTBD',
    '⋅ Скетчи',
  ],
  [ourApproachThemes[3]]: [
    '⋅ Дизайним',
    '⋅ Проводим опрос и дизайн-критику',
    '⋅ Проводим юзабилити тестирование',
    '⋅ Проводим коридорное тестирование',
    '⋅ Собираем отчет',
    '⋅ Если гипотеза не подтверждается, тестируем следующую',
    '⋅ Внедряем и проверяем работу разработчиков',
  ],
  [ourApproachThemes[4]]: ['⋅ Запускаем первую версию проекта'],
  [ourApproachThemes[5]]: [
    '⋅ Собираем обратную связь от пользователей',
    '⋅ Дорабатываем продукт',
    '⋅ Расширяем функциональность работающей системы',
  ],
};
