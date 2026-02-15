import { Course, Language, TranslationDictionary } from './types';

export const TRANSLATIONS: TranslationDictionary = {
  welcome: {
    RU: 'Добро пожаловать в EasyChemLearn',
    KZ: 'EasyChemLearn-ге қош келдіңіз',
    EN: 'Welcome to EasyChemLearn',
  },
  login: {
    RU: 'Войти',
    KZ: 'Кіру',
    EN: 'Log In',
  },
  register: {
    RU: 'Регистрация',
    KZ: 'Тіркелу',
    EN: 'Register',
  },
  roleSelect: {
    RU: 'Выберите роль',
    KZ: 'Рөлді таңдаңыз',
    EN: 'Select Role',
  },
  student: {
    RU: 'Студент',
    KZ: 'Студент',
    EN: 'Student',
  },
  teacher: {
    RU: 'Учитель',
    KZ: 'Мұғалім',
    EN: 'Teacher',
  },
  admin: {
    RU: 'Администратор',
    KZ: 'Әкімші',
    EN: 'Administrator',
  },
  courses: {
    RU: 'Курсы',
    KZ: 'Курстар',
    EN: 'Courses',
  },
  groups: {
    RU: 'Группы',
    KZ: 'Топтар',
    EN: 'Groups',
  },
  users: {
    RU: 'Пользователи',
    KZ: 'Пайдаланушылар',
    EN: 'Users',
  },
  progress: {
    RU: 'Прогресс',
    KZ: 'Прогресс',
    EN: 'Progress',
  },
  start: {
    RU: 'Начать',
    KZ: 'Бастау',
    EN: 'Start',
  },
  theory: {
    RU: 'Теория',
    KZ: 'Теория',
    EN: 'Theory',
  },
  practice: {
    RU: 'Практика',
    KZ: 'Тәжірибе',
    EN: 'Practice',
  },
  check: {
    RU: 'Проверить',
    KZ: 'Тексеру',
    EN: 'Check',
  },
  next: {
    RU: 'Далее',
    KZ: 'Келесі',
    EN: 'Next',
  },
  hint: {
    RU: 'Подсказка',
    KZ: 'Кеңес',
    EN: 'Hint',
  },
  aiHint: {
    RU: 'Спросить AI',
    KZ: 'AI сұрау',
    EN: 'Ask AI',
  },
  correct: {
    RU: 'Верно!',
    KZ: 'Дұрыс!',
    EN: 'Correct!',
  },
  incorrect: {
    RU: 'Неверно. Попробуй еще раз.',
    KZ: 'Қате. Қайтадан байқап көріңіз.',
    EN: 'Incorrect. Try again.',
  },
  certificate: {
    RU: 'Сертификат',
    KZ: 'Сертификат',
    EN: 'Certificate',
  },
  congrats: {
    RU: 'Поздравляем!',
    KZ: 'Құттықтаймыз!',
    EN: 'Congratulations!',
  },
  courseCompleted: {
    RU: 'Вы успешно завершили курс',
    KZ: 'Сіз курсты сәтті аяқтадыңыз',
    EN: 'You have successfully completed the course',
  },
  teacherDashboard: {
    RU: 'Панель учителя',
    KZ: 'Мұғалім тақтасы',
    EN: 'Teacher Dashboard',
  },
  adminDashboard: {
    RU: 'Панель администратора',
    KZ: 'Әкімші тақтасы',
    EN: 'Admin Dashboard',
  },
  studentsList: {
    RU: 'Список студентов',
    KZ: 'Студенттер тізімі',
    EN: 'Students List',
  },
  averageScore: {
    RU: 'Средний балл',
    KZ: 'Орташа балл',
    EN: 'Average Score',
  },
  exportCSV: {
    RU: 'Экспорт в CSV',
    KZ: 'CSV-ге экспорттау',
    EN: 'Export to CSV',
  },
  formula: {
    RU: 'Формула',
    KZ: 'Формула',
    EN: 'Formula',
  },
  algorithm: {
    RU: 'Алгоритм решения',
    KZ: 'Шешу алгоритмі',
    EN: 'Solution Algorithm',
  },
  // New translations
  manageCourses: {
    RU: 'Управление курсами',
    KZ: 'Курстарды басқару',
    EN: 'Manage Courses',
  },
  addTopic: {
    RU: 'Добавить тему',
    KZ: 'Тақырып қосу',
    EN: 'Add Topic',
  },
  editTopic: {
    RU: 'Редактировать тему',
    KZ: 'Тақырыпты өңдеу',
    EN: 'Edit Topic',
  },
  files: {
    RU: 'Файлы',
    KZ: 'Файлдар',
    EN: 'Files',
  },
  tasks: {
    RU: 'Задачи',
    KZ: 'Есептер',
    EN: 'Tasks',
  },
  assignments: {
    RU: 'Задания',
    KZ: 'Тапсырмалар',
    EN: 'Assignments',
  },
  stats: {
    RU: 'Статистика',
    KZ: 'Статистика',
    EN: 'Statistics',
  },
  addProblem: {
    RU: 'Добавить задачу',
    KZ: 'Есеп қосу',
    EN: 'Add Problem',
  },
  addAssignment: {
    RU: 'Добавить задание',
    KZ: 'Тапсырма қосу',
    EN: 'Add Assignment',
  },
  uploadFile: {
    RU: 'Загрузить файл',
    KZ: 'Файл жүктеу',
    EN: 'Upload File',
  },
  uploadDesc: {
    RU: 'Любой тип, любой размер',
    KZ: 'Кез келген түр, кез келген өлшем',
    EN: 'Any type, any size',
  },
  question: {
    RU: 'Вопрос',
    KZ: 'Сұрақ',
    EN: 'Question',
  },
  answer: {
    RU: 'Ответ',
    KZ: 'Жауап',
    EN: 'Answer',
  },
  difficulty: {
    RU: 'Сложность',
    KZ: 'Қиындық',
    EN: 'Difficulty',
  },
  easy: { RU: 'Легкий', KZ: 'Оңай', EN: 'Easy' },
  medium: { RU: 'Средний', KZ: 'Орташа', EN: 'Medium' },
  hard: { RU: 'Сложный', KZ: 'Қиын', EN: 'Hard' },
  save: { RU: 'Сохранить', KZ: 'Сақтау', EN: 'Save' },
  cancel: { RU: 'Отмена', KZ: 'Болдырмау', EN: 'Cancel' },
  delete: { RU: 'Удалить', KZ: 'Жою', EN: 'Delete' },
  edit: { RU: 'Редактировать', KZ: 'Өңдеу', EN: 'Edit' },
  
  // Advanced Stats
  groupStats: { RU: 'Статистика группы', KZ: 'Топ статистикасы', EN: 'Group Statistics' },
  individualStats: { RU: 'Индивидуальная статистика', KZ: 'Жеке статистика', EN: 'Individual Statistics' },
  errorFrequency: { RU: 'Частота ошибок', KZ: 'Қателер жиілігі', EN: 'Error Frequency' },
  comparativeAnalysis: { RU: 'Сравнительный анализ', KZ: 'Салыстырмалы талдау', EN: 'Comparative Analysis' },
  classAverage: { RU: 'Среднее по классу', KZ: 'Сынып орташа', EN: 'Class Average' },
  dominantError: { RU: 'Частая ошибка', KZ: 'Жиі қате', EN: 'Frequent Error' },

  // Problem Flow
  tryAgain: { RU: 'Попробуй еще раз', KZ: 'Қайталап көріңіз', EN: 'Try again' },
  loadingSimilar: { RU: 'Ответ неверный. Загружаем похожую задачу...', KZ: 'Жауап қате. Ұқсас тапсырма жүктелуде...', EN: 'Incorrect. Loading similar task...' },
  attemptsLeft: { RU: 'Попыток осталось', KZ: 'Қалған әрекеттер', EN: 'Attempts left' },
};

export const MOTIVATIONAL_QUOTES: Record<Language, string[]> = {
  RU: [
    "Отлично, продолжаем!",
    "Не сдавайся, попробуй ещё раз!",
    "Ты делаешь успехи!",
    "Прекрасная работа!",
    "Каждая ошибка — это шаг к знанию!"
  ],
  KZ: [
    "Өте жақсы, жалғастырамыз!",
    "Берілме, қайта көр!",
    "Сен жақсы нәтиже көрсетіп жатырсың!",
    "Тамаша жұмыс!",
    "Әр қателік — білімге қадам!"
  ],
  EN: [
    "Great, let's continue!",
    "Don't give up, try again!",
    "You are making progress!",
    "Excellent work!",
    "Every mistake is a step towards knowledge!"
  ]
};

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: {
      RU: 'Растворы и концентрации',
      KZ: 'Ерітінділер және концентрациялар',
      EN: 'Solutions and Concentrations',
    },
    description: {
      RU: 'Изучите основы приготовления растворов, молярность и массовую долю.',
      KZ: 'Ерітінділерді дайындау негіздерін, молярлықты және массалық үлесті үйреніңіз.',
      EN: 'Learn the basics of solution preparation, molarity, and mass percentage.',
    },
    lessons: [
      {
        id: 'l1',
        title: {
          RU: 'Массовая доля растворенного вещества',
          KZ: 'Еріген заттың массалық үлесі',
          EN: 'Mass Percentage of Solute',
        },
        theory: {
          RU: 'Массовая доля (w) показывает отношение массы растворенного вещества к общей массе раствора.',
          KZ: 'Массалық үлес (w) еріген зат массасының ерітіндінің жалпы массасына қатынасын көрсетеді.',
          EN: 'Mass fraction (w) shows the ratio of the mass of the solute to the total mass of the solution.',
        },
        formula: {
          RU: 'w = m(в-ва) / m(р-ра) * 100%',
          KZ: 'w = m(зат) / m(ерітінді) * 100%',
          EN: 'w = m(solute) / m(solution) * 100%',
        },
        algorithm: {
          RU: '1. Найти массу вещества.\n2. Найти массу раствора (вода + вещество).\n3. Разделить массу вещества на массу раствора.',
          KZ: '1. Заттың массасын табыңыз.\n2. Ерітіндінің массасын табыңыз (су + зат).\n3. Заттың массасын ерітіндінің массасына бөліңіз.',
          EN: '1. Find the mass of the solute.\n2. Find the mass of the solution (water + solute).\n3. Divide the mass of the solute by the mass of the solution.',
        },
        example: {
          RU: 'Пример: Если растворить 10г соли в 90г воды, масса раствора = 100г. w = 10/100 = 0.1 или 10%.',
          KZ: 'Мысал: Егер 10г тұзды 90г суда ерітсе, ерітінді массасы = 100г. w = 10/100 = 0.1 немесе 10%.',
          EN: 'Example: If you dissolve 10g of salt in 90g of water, solution mass = 100g. w = 10/100 = 0.1 or 10%.',
        },
        problems: [
          {
            id: 'p1',
            difficulty: 'easy',
            type: 'text',
            question: {
              RU: 'Смешали 5г сахара и 45г воды. Какова массовая доля сахара в процентах?',
              KZ: '5г қант пен 45г су араластырылды. Қанттың массалық үлесі пайызбен қандай?',
              EN: 'Mixed 5g of sugar and 45g of water. What is the mass percentage of sugar?',
            },
            correctAnswer: '10',
            hint: {
              RU: 'Сложите массу сахара и воды, чтобы получить массу раствора.',
              KZ: 'Ерітінді массасын алу үшін қант пен судың массасын қосыңыз.',
              EN: 'Add the mass of sugar and water to get the solution mass.',
            },
          },
          {
            id: 'p2',
            difficulty: 'medium',
            type: 'choice',
            options: ['20%', '25%', '15%', '30%'],
            question: {
              RU: 'Сколько грамм соли нужно добавить к 80г воды, чтобы получить 20% раствор?',
              KZ: '20% ерітінді алу үшін 80г суға қанша грамм тұз қосу керек?',
              EN: 'How many grams of salt need to be added to 80g of water to make a 20% solution?',
            },
            correctAnswer: '20%',
            hint: {
              RU: 'Пусть x - масса соли. Тогда x / (80 + x) = 0.2',
              KZ: 'x - тұздың массасы болсын. Сонда x / (80 + x) = 0.2',
              EN: 'Let x be the mass of salt. Then x / (80 + x) = 0.2',
            },
          },
          // Extra problem for "similar task" simulation
          {
            id: 'p3',
            difficulty: 'easy',
            type: 'text',
            question: {
                RU: 'В 180г воды растворили 20г соли. Какова массовая доля соли?',
                KZ: '180г суда 20г тұз ерітілген. Тұздың массалық үлесі қандай?',
                EN: '20g of salt was dissolved in 180g of water. What is the mass fraction?',
            },
            correctAnswer: '10',
            hint: {
                RU: 'Масса раствора = 180 + 20',
                KZ: 'Ерітінді массасы = 180 + 20',
                EN: 'Solution mass = 180 + 20',
            }
          }
        ],
        attachments: [],
        assignments: []
      }
    ]
  },
  {
    id: 'c2',
    title: {
      RU: 'Органическая химия: Алканы',
      KZ: 'Органикалық химия: Алкандар',
      EN: 'Organic Chemistry: Alkanes',
    },
    description: {
      RU: 'Введение в насыщенные углеводороды.',
      KZ: 'Қаныққан көмірсутектерге кіріспе.',
      EN: 'Introduction to saturated hydrocarbons.',
    },
    lessons: []
  }
];