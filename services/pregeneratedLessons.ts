import { Exercise, ExerciseType } from '../types';

// This file contains pre-generated lessons for the "Beginner" and "Intermediate" levels.
// Each topic has an array of lesson variations. The app will randomly pick one.
// For this example, one variation is provided per topic. In a real app, you'd add more.

export const pregeneratedLessons: Record<string, Exercise[][]> = {
  // ---- BEGINNER LESSONS ----
  "Basic Greetings": [
    [ // Variation 1
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you say "Hello"?', farsiPrompt: 'چطور میگویید "سلام"؟', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], answer: 'Hello', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a common way to ask "How are you?"', farsiPrompt: 'یک روش رایج برای پرسیدن "حالت چطوره؟" چیست؟', options: ['What is your name?', 'How are you?', 'Where are you from?', 'Good morning'], answer: 'How are you?', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this phrase to English.', farsiPrompt: 'این عبارت را به انگلیسی ترجمه کنید.', farsiSentence: 'صبح بخیر', answer: 'Good morning', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you respond to "Thank you"?', farsiPrompt: 'چگونه به "متشکرم" پاسخ میدهید؟', options: ['I am fine', 'You are welcome', 'My name is...', 'Goodbye'], answer: 'You are welcome', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this phrase to English.', farsiPrompt: 'این عبارت را به انگلیسی ترجمه کنید.', farsiSentence: 'خداحافظ', answer: 'Goodbye', difficulty: 'Beginner' }
    ]
  ],
  "The Alphabet": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which letter comes after "D"?', farsiPrompt: 'کدام حرف بعد از "D" می آید؟', options: ['C', 'F', 'E', 'B'], answer: 'E', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a vowel?', farsiPrompt: 'کدام یک از اینها حرف صدادار است؟', options: ['T', 'S', 'A', 'P'], answer: 'A', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the last letter of the English alphabet?', farsiPrompt: 'آخرین حرف الفبای انگلیسی چیست؟', options: ['X', 'Y', 'Z', 'A'], answer: 'Z', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you spell "cat"?', farsiPrompt: 'چطور "cat" را هجی میکنید؟', options: ['K-A-T', 'C-A-T', 'C-A-P', 'D-O-G'], answer: 'C-A-T', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which letter is missing?', farsiPrompt: 'کدام حرف جا افتاده است؟', sentence: 'A, B, C, ___, E', options: ['G', 'F', 'D', 'H'], answer: 'D', difficulty: 'Beginner' }
    ]
  ],
  "Numbers": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What number is this: "five"?', farsiPrompt: 'این چه عددی است: "five"؟', options: ['3', '4', '5', '6'], answer: '5', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this number to English.', farsiPrompt: 'این عدد را به انگلیسی ترجمه کنید.', farsiSentence: 'ده', answer: 'Ten', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What comes after "eleven"?', farsiPrompt: 'چه چیزی بعد از "eleven" می آید؟', options: ['Ten', 'Thirteen', 'Twelve', 'Nine'], answer: 'Twelve', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this number to English.', farsiPrompt: 'این عدد را به انگلیسی ترجمه کنید.', farsiSentence: 'بیست', answer: 'Twenty', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you write "8"?', farsiPrompt: 'چطور "8" را مینویسید؟', options: ['Seven', 'Nine', 'Eight', 'One'], answer: 'Eight', difficulty: 'Beginner' }
    ]
  ],
  "Colors": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is the sky on a sunny day?', farsiPrompt: 'آسمان در یک روز آفتابی چه رنگی است؟', options: ['Red', 'Green', 'Blue', 'Yellow'], answer: 'Blue', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this color to English.', farsiPrompt: 'این رنگ را به انگلیسی ترجمه کنید.', farsiSentence: 'قرمز', answer: 'Red', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is a banana?', farsiPrompt: 'موز چه رنگی است؟', options: ['Yellow', 'Purple', 'Orange', 'Black'], answer: 'Yellow', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this color to English.', farsiPrompt: 'این رنگ را به انگلیسی ترجمه کنید.', farsiSentence: 'سفید', answer: 'White', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color do you get when you mix red and yellow?', farsiPrompt: 'وقتی قرمز و زرد را مخلوط می کنید چه رنگی بدست می آید؟', options: ['Green', 'Purple', 'Orange', 'Brown'], answer: 'Orange', difficulty: 'Beginner' }
    ]
  ],
  "Introducing Yourself": [
    [
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'اسم من علی است.', answer: 'My name is Ali.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask someone their name?', farsiPrompt: 'چطور اسم کسی را می پرسید؟', options: ['How old are you?', 'Where are you?', 'What is your name?', 'How are you?'], answer: 'What is your name?', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من اهل ایران هستم.', answer: 'I am from Iran.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you say your age?', farsiPrompt: 'چطور سنتان را می گویید؟', options: ['I have 25 years.', 'I am 25 years old.', 'My age is 25.', 'I am 25 old years.'], answer: 'I am 25 years old.', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'از ملاقات شما خوشبختم.', answer: 'Nice to meet you.', difficulty: 'Beginner' }
    ]
  ],
  "Family Members": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Your mother\'s husband is your...', farsiPrompt: 'شوهر مادر شما... شماست.', options: ['brother', 'father', 'son', 'uncle'], answer: 'father', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من یک خواهر دارم.', answer: 'I have a sister.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Your father\'s mother is your...', farsiPrompt: 'مادر پدر شما... شماست.', options: ['aunt', 'sister', 'mother', 'grandmother'], answer: 'grandmother', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این برادر من است.', answer: 'This is my brother.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you call your parents?', farsiPrompt: 'والدین خود را چه می نامید؟', options: ['Mother and Father', 'Sister and Brother', 'Aunt and Uncle', 'Grandmother and Grandfather'], answer: 'Mother and Father', difficulty: 'Beginner' }
    ]
  ],
  "My Home": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you sleep?', farsiPrompt: 'کجا می خوابید؟', options: ['kitchen', 'bathroom', 'bedroom', 'living room'], answer: 'bedroom', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'این خانه من است.', answer: 'This is my house.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you cook food?', farsiPrompt: 'کجا غذا می پزید؟', options: ['bedroom', 'kitchen', 'garden', 'bathroom'], answer: 'kitchen', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'در را باز کن.', answer: 'Open the door.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is another word for "living room"?', farsiPrompt: 'کلمه دیگری برای "living room" چیست؟', options: ['dining room', 'lounge', 'garage', 'office'], answer: 'lounge', difficulty: 'Beginner' }
    ]
  ],
  "Days of the Week": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What day comes after Monday?', farsiPrompt: 'چه روزی بعد از دوشنبه است؟', options: ['Sunday', 'Wednesday', 'Tuesday', 'Friday'], answer: 'Tuesday', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the last day of the work week for many?', farsiPrompt: 'آخرین روز هفته کاری برای خیلی ها چه روزی است؟', options: ['Saturday', 'Sunday', 'Monday', 'Friday'], answer: 'Friday', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this day.', farsiPrompt: 'این روز را ترجمه کنید.', farsiSentence: 'چهارشنبه', answer: 'Wednesday', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What are the two days of the weekend?', farsiPrompt: 'دو روز آخر هفته کدامند؟', options: ['Monday and Tuesday', 'Friday and Saturday', 'Saturday and Sunday', 'Sunday and Monday'], answer: 'Saturday and Sunday', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this day.', farsiPrompt: 'این روز را ترجمه کنید.', farsiSentence: 'امروز یکشنبه است.', answer: 'Today is Sunday.', difficulty: 'Beginner' }
    ]
  ],
  "Months and Dates": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What month comes after January?', farsiPrompt: 'چه ماهی بعد از ژانویه می آید؟', options: ['March', 'December', 'February', 'April'], answer: 'February', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which month is Christmas in?', farsiPrompt: 'کریسمس در کدام ماه است؟', options: ['October', 'November', 'December', 'January'], answer: 'December', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this month.', farsiPrompt: 'این ماه را ترجمه کنید.', farsiSentence: 'جولای', answer: 'July', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How many months are in a year?', farsiPrompt: 'یک سال چند ماه دارد؟', options: ['10', '11', '12', '13'], answer: '12', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this phrase.', farsiPrompt: 'این عبارت را ترجمه کنید.', farsiSentence: 'امروز پنجم ماه می است.', answer: 'Today is May 5th.', difficulty: 'Beginner' }
    ]
  ],
  "Telling Time": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What time is it? 3:00', farsiPrompt: 'ساعت چند است؟ 3:00', options: ['It is three thirty.', 'It is three o\'clock.', 'It is three fifteen.', 'It is two o\'clock.'], answer: 'It is three o\'clock.', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the time.', farsiPrompt: 'زمان را ترجمه کنید.', farsiSentence: 'ساعت ده و نیم است.', answer: 'It is ten thirty.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What time is "quarter past four"?', farsiPrompt: 'ساعت "quarter past four" چند است؟', options: ['4:30', '4:45', '4:15', '5:15'], answer: '4:15', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the time.', farsiPrompt: 'زمان را ترجمه کنید.', farsiSentence: 'ساعت یک ربع به پنج است.', answer: 'It is a quarter to five.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is another way to say 6:30?', farsiPrompt: 'روش دیگری برای گفتن 6:30 چیست؟', options: ['Quarter past six', 'Six o\'clock', 'Half past six', 'Quarter to seven'], answer: 'Half past six', difficulty: 'Beginner' }
    ]
  ],
  "Common Objects": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use to write?', farsiPrompt: 'برای نوشتن از چه چیزی استفاده می کنید؟', options: ['A chair', 'A pen', 'A table', 'A cup'], answer: 'A pen', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this object.', farsiPrompt: 'این شیء را ترجمه کنید.', farsiSentence: 'کتاب', answer: 'Book', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you sit on?', farsiPrompt: 'روی چه چیزی می نشینید؟', options: ['A bed', 'A door', 'A chair', 'A window'], answer: 'A chair', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this object.', farsiPrompt: 'این شیء را ترجمه کنید.', farsiSentence: 'این یک میز است.', answer: 'This is a table.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use to call people?', farsiPrompt: 'برای تماس با مردم از چه چیزی استفاده می کنید؟', options: ['A phone', 'A television', 'A radio', 'A lamp'], answer: 'A phone', difficulty: 'Beginner' }
    ]
  ],
  "Simple Questions": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which word starts a question about a place?', farsiPrompt: 'کدام کلمه سوالی در مورد مکان را شروع می کند؟', options: ['Who', 'What', 'Where', 'When'], answer: 'Where', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question.', farsiPrompt: 'این سوال را ترجمه کنید.', farsiSentence: 'این چیست؟', answer: 'What is this?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which word asks about time?', farsiPrompt: 'کدام کلمه در مورد زمان می پرسد؟', options: ['Why', 'How', 'When', 'Who'], answer: 'When', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question.', farsiPrompt: 'این سوال را ترجمه کنید.', farsiSentence: 'آنها چه کسانی هستند؟', answer: 'Who are they?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask for a reason?', farsiPrompt: 'چطور دلیل چیزی را می پرسید؟', options: ['What', 'Why', 'How', 'Where'], answer: 'Why', difficulty: 'Beginner' }
    ]
  ],
  "Polite Phrases": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say when you want something?', farsiPrompt: 'وقتی چیزی می خواهید چه می گویید؟', options: ['Thank you', 'Excuse me', 'Please', 'Sorry'], answer: 'Please', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this phrase.', farsiPrompt: 'این عبارت را ترجمه کنید.', farsiSentence: 'متشکرم', answer: 'Thank you', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say if you accidentally bump into someone?', farsiPrompt: 'اگر تصادفاً به کسی برخورد کردید چه می گویید؟', options: ['Hello', 'You are welcome', 'Sorry', 'Please'], answer: 'Sorry', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this phrase.', farsiPrompt: 'این عبارت را ترجمه کنید.', farsiSentence: 'ببخشید', answer: 'Excuse me', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you respond to "Sorry"?', farsiPrompt: 'چطور به "متاسفم" پاسخ می دهید؟', options: ['It\'s okay', 'Thank you', 'Goodbye', 'Good morning'], answer: 'It\'s okay', difficulty: 'Beginner' }
    ]
  ],
  "Basic Foods": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a fruit?', farsiPrompt: 'کدام یک از اینها میوه است؟', options: ['Carrot', 'Bread', 'Apple', 'Cheese'], answer: 'Apple', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this food.', farsiPrompt: 'این غذا را ترجمه کنید.', farsiSentence: 'نان', answer: 'Bread', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you drink?', farsiPrompt: 'چه چیزی می نوشید؟', options: ['Water', 'Rice', 'Chicken', 'Salad'], answer: 'Water', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this food.', farsiPrompt: 'این غذا را ترجمه کنید.', farsiSentence: 'من شیر دوست دارم.', answer: 'I like milk.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a vegetable?', farsiPrompt: 'کدام یک از اینها سبزی است؟', options: ['Fish', 'Egg', 'Carrot', 'Orange'], answer: 'Carrot', difficulty: 'Beginner' }
    ]
  ],
  "Animals": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal says "meow"?', farsiPrompt: 'کدام حیوان "میو" می کند؟', options: ['Dog', 'Cat', 'Bird', 'Cow'], answer: 'Cat', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this animal.', farsiPrompt: 'این حیوان را ترجمه کنید.', farsiSentence: 'سگ', answer: 'Dog', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal can fly?', farsiPrompt: 'کدام حیوان می تواند پرواز کند؟', options: ['Fish', 'Lion', 'Bird', 'Snake'], answer: 'Bird', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'فیل بزرگ است.', answer: 'The elephant is big.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal lives in water?', farsiPrompt: 'کدام حیوان در آب زندگی می کند؟', options: ['Monkey', 'Horse', 'Fish', 'Chicken'], answer: 'Fish', difficulty: 'Beginner' }
    ]
  ],
  "Describing People": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of "tall"?', farsiPrompt: 'متضاد "بلند" چیست؟', options: ['Short', 'Big', 'Happy', 'Old'], answer: 'Short', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'او موی بلند دارد.', answer: 'She has long hair.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If someone is not old, they are...', farsiPrompt: 'اگر کسی پیر نباشد، او ... است.', options: ['Sad', 'Young', 'Tall', 'Angry'], answer: 'Young', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'او خوشحال است.', answer: 'He is happy.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which word describes hair color?', farsiPrompt: 'کدام کلمه رنگ مو را توصیف می کند؟', options: ['Blue', 'Blonde', 'Fast', 'Cold'], answer: 'Blonde', difficulty: 'Beginner' }
    ]
  ],
  "Common Verbs": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the action of moving on your feet?', farsiPrompt: 'عمل حرکت روی پاهای شما چیست؟', options: ['Eat', 'Sleep', 'Walk', 'Read'], answer: 'Walk', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this verb.', farsiPrompt: 'این فعل را ترجمه کنید.', farsiSentence: 'خوردن', answer: 'To eat', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you do with a book?', farsiPrompt: 'با یک کتاب چه کار می کنید؟', options: ['Drink', 'Play', 'Read', 'Sing'], answer: 'Read', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من آب می نوشم.', answer: 'I drink water.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you do at night?', farsiPrompt: 'شب ها چه کار می کنید؟', options: ['Run', 'Work', 'Sleep', 'Swim'], answer: 'Sleep', difficulty: 'Beginner' }
    ]
  ],
  "Weather Words": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the weather like when the sun is out?', farsiPrompt: 'وقتی خورشید بیرون است هوا چطور است؟', options: ['Rainy', 'Snowy', 'Sunny', 'Cloudy'], answer: 'Sunny', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'بارانی', answer: 'Rainy', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What falls from the sky in winter?', farsiPrompt: 'در زمستان چه چیزی از آسمان می بارد؟', options: ['Sun', 'Wind', 'Snow', 'Fog'], answer: 'Snow', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'هوا سرد است.', answer: 'It is cold.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you call moving air?', farsiPrompt: 'هوای در حال حرکت را چه می نامید؟', options: ['Hot', 'Windy', 'Calm', 'Wet'], answer: 'Windy', difficulty: 'Beginner' }
    ]
  ],
  "City Places": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you go to buy food?', farsiPrompt: 'برای خرید غذا به کجا می روید؟', options: ['Library', 'Park', 'Supermarket', 'Bank'], answer: 'Supermarket', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this place.', farsiPrompt: 'این مکان را ترجمه کنید.', farsiSentence: 'مدرسه', answer: 'School', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where can you read many books?', farsiPrompt: 'کجا می توانید کتاب های زیادی بخوانید؟', options: ['Hospital', 'Library', 'Airport', 'Restaurant'], answer: 'Library', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'بیمارستان بزرگ است.', answer: 'The hospital is big.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do children play outside?', farsiPrompt: 'بچه ها کجا بیرون بازی می کنند؟', options: ['Office', 'Station', 'Park', 'Shop'], answer: 'Park', difficulty: 'Beginner' }
    ]
  ],
  "At a Restaurant": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the list of food called?', farsiPrompt: 'لیست غذاها چه نامیده می شود؟', options: ['Bill', 'Menu', 'Recipe', 'Note'], answer: 'Menu', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من یک لیوان آب می خواهم.', answer: 'I want a glass of water.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Who serves you food in a restaurant?', farsiPrompt: 'چه کسی در رستوران به شما غذا سرو می کند؟', options: ['Doctor', 'Waiter', 'Teacher', 'Chef'], answer: 'Waiter', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'صورتحساب، لطفا.', answer: 'The bill, please.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use to eat soup?', farsiPrompt: 'برای خوردن سوپ از چه چیزی استفاده می کنید؟', options: ['Fork', 'Knife', 'Spoon', 'Plate'], answer: 'Spoon', difficulty: 'Beginner' }
    ]
  ],
  "Shopping Basics": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you ask to know the cost?', farsiPrompt: 'برای دانستن هزینه چه می پرسید؟', options: ['What is this?', 'Where is it?', 'How much is it?', 'Do you have this?'], answer: 'How much is it?', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من این را می خرم.', answer: 'I will buy this.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you pay for items?', farsiPrompt: 'هزینه اقلام را کجا پرداخت می کنید؟', options: ['Entrance', 'Dressing room', 'Cashier', 'Window'], answer: 'Cashier', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'آیا این را در رنگ آبی دارید؟', answer: 'Do you have this in blue?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a "sale"?', farsiPrompt: '"حراج" چیست؟', options: ['A higher price', 'A new item', 'A lower price', 'A closed shop'], answer: 'A lower price', difficulty: 'Beginner' }
    ]
  ],
  "Basic Directions": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of "left"?', farsiPrompt: 'متضاد "چپ" چیست؟', options: ['Up', 'Down', 'Right', 'Straight'], answer: 'Right', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this phrase.', farsiPrompt: 'این عبارت را ترجمه کنید.', farsiSentence: 'مستقیم برو', answer: 'Go straight', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "turn right" mean?', farsiPrompt: '"به راست بپیچ" یعنی چه؟', options: ['Go back', 'Stop', 'Change direction to the right', 'Go up'], answer: 'Change direction to the right', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this phrase.', farsiPrompt: 'این عبارت را ترجمه کنید.', farsiSentence: 'به چپ بپیچ', answer: 'Turn left', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where is the bank?', farsiPrompt: 'بانک کجاست؟', options: ['It is next to the post office', 'It is ten o\'clock', 'It is red', 'It is expensive'], answer: 'It is next to the post office', difficulty: 'Beginner' }
    ]
  ],
  "At the Airport": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you need to fly on a plane?', farsiPrompt: 'برای پرواز با هواپیما به چه چیزی نیاز دارید؟', options: ['A ticket', 'A car', 'A menu', 'A key'], answer: 'A ticket', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'چمدان', answer: 'Baggage', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you check in your bags?', farsiPrompt: 'چمدان های خود را کجا تحویل می دهید؟', options: ['Gate', 'Security', 'Check-in counter', 'Restaurant'], answer: 'Check-in counter', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'پرواز من ساعت چند است؟', answer: 'What time is my flight?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the document to enter another country?', farsiPrompt: 'سند ورود به کشور دیگر چیست؟', options: ['Driver\'s license', 'Passport', 'Library card', 'Credit card'], answer: 'Passport', difficulty: 'Beginner' }
    ]
  ],
  "Public Transport": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a large vehicle that carries many people on a fixed route?', farsiPrompt: 'وسیله نقلیه بزرگی که افراد زیادی را در یک مسیر ثابت حمل می کند چیست؟', options: ['Car', 'Bicycle', 'Bus', 'Motorcycle'], answer: 'Bus', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'قطار', answer: 'Train', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you wait for a bus?', farsiPrompt: 'کجا منتظر اتوبوس می مانید؟', options: ['Bus station', 'Bus stop', 'Bus driver', 'Bus ticket'], answer: 'Bus stop', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'یک بلیط لطفا.', answer: 'One ticket, please.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is an underground train system called?', farsiPrompt: 'سیستم قطار زیرزمینی چه نامیده می شود؟', options: ['Taxi', 'Subway', 'Ferry', 'Airplane'], answer: 'Subway', difficulty: 'Beginner' }
    ]
  ],

  // ---- INTERMEDIATE LESSONS ----
  "Ordering Food": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say to get the waiter\'s attention?', farsiPrompt: 'برای جلب توجه پیشخدمت چه می گویید؟', options: ['Hey you!', 'Excuse me!', 'Listen!', 'Come here!'], answer: 'Excuse me!', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا می توانم منو را ببینم، لطفا؟', answer: 'Can I see the menu, please?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'I would like to ___ the steak.', options: ['eat', 'have', 'order', 'see'], answer: 'order', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا انعام در صورتحساب لحاظ شده است؟', answer: 'Is the tip included in the bill?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is an "appetizer"?', farsiPrompt: '"پیش غذا" چیست؟', options: ['The main dish', 'A small dish before the main course', 'A type of drink', 'The dessert'], answer: 'A small dish before the main course', difficulty: 'Intermediate' }
    ]
  ],
  "Shopping for Clothes": [
    [
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ببخشید، اتاق پرو کجاست؟', answer: 'Excuse me, where is the fitting room?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you ask if you want a different size?', farsiPrompt: 'اگر سایز دیگری بخواهید چه می پرسید؟', options: ['Is this cheap?', 'Do you have this in a larger size?', 'Where is this from?', 'Can I pay?'], answer: 'Do you have this in a larger size?', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این پیراهن برای من خیلی گران است.', answer: 'This shirt is too expensive for me.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If an item is 50% off, its price is...', farsiPrompt: 'اگر کالایی ۵۰٪ تخفیف داشته باشد، قیمت آن ... است.', options: ['doubled', 'the same', 'halved', 'tripled'], answer: 'halved', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من این را با کارت اعتباری پرداخت می کنم.', answer: 'I\'ll pay for this with a credit card.', difficulty: 'Intermediate' }
    ]
  ],
  "Making Plans": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you suggest an activity?', farsiPrompt: 'چگونه فعالیتی را پیشنهاد می دهید؟', options: ['What are you doing?', 'How about going to the cinema?', 'I must go to the cinema.', 'Do you like cinema?'], answer: 'How about going to the cinema?', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا شنبه شب وقتت آزاد است؟', answer: 'Are you free on Saturday evening?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you decline an invitation politely?', farsiPrompt: 'چگونه یک دعوت را مودبانه رد می کنید؟', options: ['No, I don\'t want to.', 'I can\'t, it sounds boring.', 'That\'s a bad idea.', 'I\'d love to, but I have other plans.'], answer: 'I\'d love to, but I have other plans.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'بیا ساعت ۷ در کافه همدیگر را ببینیم.', answer: 'Let\'s meet at the cafe at 7 PM.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'منتظر دیدارت هستم.', answer: 'I\'m looking forward to seeing you.', difficulty: 'Intermediate' }
    ]
  ],
  "Hobbies and Interests": [
    [
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من در اوقات فراغتم از نواختن گیتار لذت می برم.', answer: 'I enjoy playing the guitar in my free time.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The question "What are you into?" asks about your...', farsiPrompt: 'سوال "به چه چیزی علاقه داری؟" در مورد ... شما می پرسد.', options: ['job', 'name', 'interests', 'age'], answer: 'interests', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'سرگرمی مورد علاقه من کتاب خواندن است.', answer: 'My favorite hobby is reading books.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If you "are keen on" something, you...', farsiPrompt: 'اگر به چیزی "علاقه مند" باشید، شما...', options: ['dislike it', 'are very interested in it', 'know nothing about it', 'are afraid of it'], answer: 'are very interested in it', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من طرفدار بزرگ فیلم های علمی تخیلی هستم.', answer: 'I am a big fan of science fiction movies.', difficulty: 'Intermediate' }
    ]
  ],
  "Asking for Directions": [
    [
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ببخشید، چطور می توانم به نزدیکترین ایستگاه مترو بروم؟', answer: 'Excuse me, how can I get to the nearest subway station?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "Go straight ahead for two blocks" mean?', farsiPrompt: 'عبارت "دو بلوک مستقیم برو" یعنی چه؟', options: ['Turn left twice', 'Turn right twice', 'Continue forward past two streets', 'Stop after two buildings'], answer: 'Continue forward past two streets', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'از اینجا خیلی دور است؟', answer: 'Is it far from here?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "It\'s just around the corner" mean?', farsiPrompt: 'عبارت "همین گوشه است" یعنی چه؟', options: ['It is very far', 'You need a map', 'It is very close', 'It is closed'], answer: 'It is very close', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'شما باید از کنار بانک عبور کنید، سمت چپ شما خواهد بود.', answer: 'You need to go past the bank, it will be on your left.', difficulty: 'Intermediate' }
    ]
  ],
  "Talking about the Weather": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If it is "pouring outside", it means...', farsiPrompt: 'اگر "بیرون باران شدیدی می بارد"، یعنی...', options: ['it is sunny', 'it is raining heavily', 'it is a little cold', 'it is foggy'], answer: 'it is raining heavily', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'پیش بینی هوای فردا چیست؟', answer: 'What\'s the weather forecast for tomorrow?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "It\'s a bit chilly" mean?', farsiPrompt: 'عبارت "کمی خنک است" یعنی چه؟', options: ['It is very hot', 'It is slightly cold', 'It is very windy', 'It is snowing'], answer: 'It is slightly cold', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'انتظار می رود آخر هفته موج گرما داشته باشیم.', answer: 'We are expecting a heatwave over the weekend.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The sky is "overcast". This means it is covered with...', farsiPrompt: 'آسمان "ابری" است. این یعنی با ... پوشیده شده است.', options: ['sunshine', 'stars', 'clouds', 'birds'], answer: 'clouds', difficulty: 'Intermediate' }
    ]
  ],
  "At the Doctor": [
    [
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من نیاز به گرفتن وقت ملاقات دارم.', answer: 'I need to make an appointment.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What are the "symptoms" of an illness?', farsiPrompt: '"علائم" یک بیماری چیست؟', options: ['The cure for the illness', 'The name of the illness', 'The physical feelings caused by the illness', 'The cost of the treatment'], answer: 'The physical feelings caused by the illness', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من گلودرد و تب دارم.', answer: 'I have a sore throat and a fever.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A "prescription" is an order for medicine from a...', farsiPrompt: '"نسخه" یک دستور برای دارو از طرف ... است.', options: ['teacher', 'chef', 'doctor', 'friend'], answer: 'doctor', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'چه مدت است که این علائم را دارید؟', answer: 'How long have you had these symptoms?', difficulty: 'Intermediate' }
    ]
  ],
  "Past and Future Tenses": [
    [
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'Yesterday, I ___ to the park.', options: ['go', 'will go', 'went', 'am going'], answer: 'went', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'فردا ما به دیدن پدربزرگ و مادربزرگمان خواهیم رفت.', answer: 'Tomorrow we will visit our grandparents.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Choose the correct form.', farsiPrompt: 'شکل صحیح را انتخاب کنید.', sentence: 'She ___ not seen the movie yet.', options: ['has', 'have', 'is', 'was'], answer: 'has', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من داشتم درس می خواندم که شما زنگ زدید.', answer: 'I was studying when you called.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'By this time next year, I ___ my degree.', options: ['will have finished', 'finish', 'am finishing', 'finished'], answer: 'will have finished', difficulty: 'Intermediate' }
    ]
  ]
};