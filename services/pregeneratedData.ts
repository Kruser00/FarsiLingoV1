
import { Exercise, ExerciseType } from '../types';

// This file contains pre-generated content for the app, including lessons and placement tests.
// This ensures a fast, reliable, and offline-first experience for core content.

// ---- PLACEMENT TESTS ----
// Each inner array is a full test variation. The app will randomly pick one.
export const pregeneratedPlacementTests: Exercise[][] = [
  [ // Test Variation 1
    // Beginner (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'She ___ a doctor.', options: ['am', 'is', 'are', 'be'], answer: 'is', difficulty: 'Beginner' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من یک سیب دارم.', answer: 'I have an apple.', difficulty: 'Beginner' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is the sky?', farsiPrompt: 'آسمان چه رنگی است؟', options: ['Green', 'Red', 'Yellow', 'Blue'], answer: 'Blue', difficulty: 'Beginner' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'خداحافظ', answer: 'Goodbye', difficulty: 'Beginner' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What comes after Monday?', farsiPrompt: 'چه روزی بعد از دوشنبه است؟', options: ['Tuesday', 'Sunday', 'Friday', 'Wednesday'], answer: 'Tuesday', difficulty: 'Beginner' },
    
    // Intermediate (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'I ___ to the cinema yesterday.', options: ['go', 'goes', 'went', 'gone'], answer: 'went', difficulty: 'Intermediate' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ببخشید، نزدیکترین ایستگاه قطار کجاست؟', answer: 'Excuse me, where is the nearest train station?', difficulty: 'Intermediate' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If a jacket is not expensive, it is ___.', farsiPrompt: 'اگر یک ژاکت گران نباشد، پس ___ است.', options: ['large', 'cheap', 'new', 'beautiful'], answer: 'cheap', difficulty: 'Intermediate' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من قصد دارم امشب یک فیلم تماشا کنم.', answer: 'I am going to watch a movie tonight.', difficulty: 'Intermediate' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which sentence is a polite request?', farsiPrompt: 'کدام جمله یک درخواست مودبانه است؟', options: ['Open the window.', 'I want the window open.', 'Can you open the window?', 'Could you please open the window?'], answer: 'Could you please open the window?', difficulty: 'Intermediate' },
    
    // Advanced (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'If I ___ known you were coming, I would have baked a cake.', options: ['have', 'had', 'would', 'did'], answer: 'had', difficulty: 'Advanced' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'علیرغم آب و هوای بد، ما از پیاده‌روی خود لذت بردیم.', answer: 'Despite the bad weather, we enjoyed our walk.', difficulty: 'Advanced' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The word "ubiquitous" means...', farsiPrompt: 'کلمه "ubiquitous" به چه معناست؟', options: ['very rare', 'difficult to understand', 'present everywhere', 'extremely beautiful'], answer: 'present everywhere', difficulty: 'Advanced' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'دولت ابتکار جدیدی را برای بهبود بهداشت عمومی اجرا کرده است.', answer: 'The government has implemented a new initiative to improve public health.', difficulty: 'Advanced' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Choose the correct idiom. He revealed the secret, he ___.', farsiPrompt: 'اصطلاح صحیح را انتخاب کنید. او راز را فاش کرد، او ___', options: ['hit the books', 'let the cat out of the bag', 'broke a leg', 'hit the nail on the head'], answer: 'let the cat out of the bag', difficulty: 'Advanced' },
  ],
  [ // Test Variation 2
    // Beginner (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'My name ___ Ali.', options: ['am', 'are', 'is', 'be'], answer: 'is', difficulty: 'Beginner' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'حالت چطوره؟', answer: 'How are you?', difficulty: 'Beginner' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is a banana?', farsiPrompt: 'موز چه رنگی است؟', options: ['Red', 'Yellow', 'Blue', 'Black'], answer: 'Yellow', difficulty: 'Beginner' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'لطفا', answer: 'Please', difficulty: 'Beginner' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What number is "two"?', farsiPrompt: 'عدد "two" کدام است؟', options: ['1', '2', '3', '4'], answer: '2', difficulty: 'Beginner' },

    // Intermediate (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'She ___ to music right now.', options: ['listens', 'is listening', 'listened', 'has listened'], answer: 'is listening', difficulty: 'Intermediate' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'میتوانم صورتحساب را داشته باشم لطفا؟', answer: 'Can I have the bill, please?', difficulty: 'Intermediate' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of "hot"?', farsiPrompt: 'متضاد "hot" چیست؟', options: ['warm', 'cold', 'sunny', 'dry'], answer: 'cold', difficulty: 'Intermediate' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من قصد دارم فردا دوستم را ملاقات کنم.', answer: "I'm going to visit my friend tomorrow.", difficulty: 'Intermediate' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a common hobby?', farsiPrompt: 'کدام یک از این‌ها یک سرگرمی رایج است؟', options: ['Working', 'Reading', 'Sleeping', 'Eating'], answer: 'Reading', difficulty: 'Intermediate' },
    
    // Advanced (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'The movie, ___ I saw last night, was excellent.', options: ['who', 'that', 'which', 'whose'], answer: 'which', difficulty: 'Advanced' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'سود شرکت امسال به طور قابل توجهی افزایش یافته است.', answer: "The company's profits have increased significantly this year.", difficulty: 'Advanced' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The word "ephemeral" means...', farsiPrompt: 'کلمه "ephemeral" به چه معناست؟', options: ['eternal', 'lasting for a very short time', 'very beautiful', 'difficult'], answer: 'lasting for a very short time', difficulty: 'Advanced' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'به او توصیه شد که از غذاهای ناسالم پرهیز کند.', answer: 'He was advised to abstain from junk food.', difficulty: 'Advanced' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does the idiom "bite the bullet" mean?', farsiPrompt: 'اصطلاح "bite the bullet" به چه معناست؟', options: ['eat something quickly', 'get angry', 'to endure a difficult situation', 'to make a mistake'], answer: 'to endure a difficult situation', difficulty: 'Advanced' },
  ],
  [ // Test Variation 3
    // Beginner (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'They ___ from Iran.', options: ['is', 'am', 'are', 'be'], answer: 'are', difficulty: 'Beginner' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'متشکرم', answer: 'Thank you', difficulty: 'Beginner' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is this animal in Farsi: "Cat"?', farsiPrompt: 'این حیوان به فارسی چه می‌شود: "Cat"؟', options: ['سگ', 'ماهی', 'گربه', 'پرنده'], answer: 'گربه', difficulty: 'Beginner' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'صبح بخیر', answer: 'Good morning', difficulty: 'Beginner' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What day is before Friday?', farsiPrompt: 'چه روزی قبل از جمعه است؟', options: ['Saturday', 'Thursday', 'Wednesday', 'Sunday'], answer: 'Thursday', difficulty: 'Beginner' },

    // Intermediate (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'I have ___ in this city for five years.', options: ['live', 'living', 'lived', 'lives'], answer: 'lived', difficulty: 'Intermediate' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ببخشید، چطور می‌توانم به موزه بروم؟', answer: 'Excuse me, how do I get to the museum?', difficulty: 'Intermediate' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If you are not early, you are ___.', farsiPrompt: 'اگر زود نرسید، ___ هستید.', options: ['on time', 'late', 'happy', 'fast'], answer: 'late', difficulty: 'Intermediate' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'او قبلاً تکالیفش را تمام کرده است.', answer: 'She has already finished her homework.', difficulty: 'Intermediate' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a piece of clothing?', farsiPrompt: 'کدام یک از این‌ها یک تکه لباس است؟', options: ['Book', 'Chair', 'Shirt', 'Apple'], answer: 'Shirt', difficulty: 'Intermediate' },

    // Advanced (5 questions)
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: '___ of the fact that it was raining, they went for a walk.', options: ['Although', 'Despite', 'Because', 'In spite'], answer: 'In spite', difficulty: 'Advanced' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'طراحی پیچیده ملیله‌کاری توسط همه تحسین شد.', answer: 'The intricate design of the tapestry was admired by everyone.', difficulty: 'Advanced' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The word "ambiguous" means...', farsiPrompt: 'کلمه "ambiguous" به چه معناست؟', options: ['very clear', 'very long', 'unclear or having more than one meaning', 'very important'], answer: 'unclear or having more than one meaning', difficulty: 'Advanced' },
    { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ضروری است که این وظیفه را به موقع انجام دهید.', answer: 'It is imperative that you complete this task on time.', difficulty: 'Advanced' },
    { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "once in a blue moon" mean?', farsiPrompt: 'اصطلاح "once in a blue moon" به چه معناست؟', options: ['every night', 'during a full moon', 'very rarely', 'on a special occasion'], answer: 'very rarely', difficulty: 'Advanced' },
  ]
];


// ---- BEGINNER & INTERMEDIATE LESSONS ----
export const pregeneratedLessons: Record<string, Exercise[][]> = {
  // ---- BEGINNER LESSONS ----
  "Basic Greetings": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'Hello', farsiPrompt: 'سلام', sentence: 'You say "Hello" when you meet someone.', farsiSentenceExample: 'شما وقتی کسی را ملاقات می‌کنید می‌گویید "سلام".', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Goodbye', farsiPrompt: 'خداحافظ', sentence: 'You say "Goodbye" when you leave.', farsiSentenceExample: 'شما وقتی می‌روید می‌گویید "خداحافظ".', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you greet someone?', farsiPrompt: 'چطور با کسی احوالپرسی می‌کنی؟', options: ['Goodbye', 'Hello', 'Thank you', 'Sorry'], answer: 'Hello', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'خداحافظ', answer: 'Goodbye', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'How are you?', farsiPrompt: 'حالت چطوره؟', sentence: 'You ask "How are you?" to know about their well-being.', farsiSentenceExample: 'شما می‌پرسید "حالتان چطور است؟" تا از حال آنها باخبر شوید.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من خوبم، متشکرم.', answer: 'I am fine, thank you.', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Good morning', farsiPrompt: 'صبح بخیر', sentence: 'Say "Good morning" at the start of the day.', farsiSentenceExample: 'در ابتدای روز بگویید "صبح بخیر".', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say in the morning?', farsiPrompt: 'صبح چه می‌گویید؟', options: ['Good afternoon', 'Good evening', 'Good morning', 'Good night'], answer: 'Good morning', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the English word for "سلام"?', farsiPrompt: '"سلام" به انگلیسی چه می‌شود؟', options: ['Goodbye', 'Hello', 'Please', 'Thanks'], answer: 'Hello', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'حالت چطوره؟', answer: 'How are you?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the phrase: "I am ___, thank you."', farsiPrompt: 'عبارت را کامل کنید.', sentence: 'I am ___, thank you.', options: ['good', 'sad', 'fine', 'happy'], answer: 'fine', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Nice to meet you', farsiPrompt: 'از ملاقات شما خوشبختم', sentence: 'It is polite to say this to someone new.', farsiSentenceExample: 'مودبانه است که این را به شخص جدیدی بگویید.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'شب بخیر', answer: 'Good night', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'When do you say "Goodbye"?', farsiPrompt: 'چه زمانی می‌گویید "Goodbye"؟', options: ['When you arrive', 'When you are eating', 'When you leave', 'In the morning'], answer: 'When you leave', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'صبح بخیر', answer: 'Good morning', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Good afternoon', farsiPrompt: 'بعد از ظهر بخیر', sentence: 'We say "Good afternoon" after 12 PM.', farsiSentenceExample: 'ما بعد از ساعت ۱۲ ظهر می‌گوییم "بعد از ظهر بخیر".', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'سلام', answer: 'Hello', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you respond to "How are you?"', farsiPrompt: 'به "حالت چطوره؟" چطور پاسخ می‌دهید؟', options: ['My name is...', 'I am fine.', 'Goodbye.', 'Hello.'], answer: 'I am fine.', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'از ملاقات شما خوشبختم.', answer: 'Nice to meet you.', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'See you later', farsiPrompt: 'بعدا می‌بینمت', sentence: '"See you later" is an informal way to say goodbye.', farsiSentenceExample: '"بعدا می‌بینمت" یک راه غیررسمی برای خداحافظی است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say when you leave?', farsiPrompt: 'وقتی می‌روید چه می‌گویید؟', options: ['Hello', 'Good morning', 'Goodbye', 'How are you?'], answer: 'Goodbye', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'صبح بخیر', answer: 'Good morning', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Good evening', farsiPrompt: 'عصر بخیر', sentence: 'You say "Good evening" when you meet someone late in the day.', farsiSentenceExample: 'شما وقتی کسی را در اواخر روز ملاقات می‌کنید می‌گویید "عصر بخیر".', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "Hello" mean in Farsi?', farsiPrompt: '"Hello" به فارسی چه معنایی دارد؟', options: ['خداحافظ', 'متشکرم', 'سلام', 'ببخشید'], answer: 'سلام', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the question.', farsiPrompt: 'سوال را ترجمه کنید.', farsiSentence: 'حالت چطوره؟', answer: 'How are you?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say before going to sleep?', farsiPrompt: 'قبل از خواب چه می‌گویید؟', options: ['Good morning', 'Good night', 'Good evening', 'Hello'], answer: 'Good night', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.LEARN, prompt: 'Hey', farsiPrompt: 'هی / سلام (غیررسمی)', sentence: '"Hey" is a very casual way to say hello.', farsiSentenceExample: '"هی" یک راه خیلی خودمونی برای سلام کردن است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which greeting is formal?', farsiPrompt: 'کدام احوالپرسی رسمی است؟', options: ['Hey', 'Hi', 'Good morning', 'What\'s up?'], answer: 'Good morning', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من خوبم.', answer: 'I am fine.', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Hi', farsiPrompt: 'سلام (دوستانه)', sentence: '"Hi" is a friendly and common greeting.', farsiSentenceExample: '"های" یک احوالپرسی دوستانه و رایج است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'خداحافظ', answer: 'Goodbye', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the phrase: "Nice to ___ you."', farsiPrompt: 'عبارت را کامل کنید.', sentence: 'Nice to ___ you.', options: ['see', 'meet', 'go', 'leave'], answer: 'meet', difficulty: 'Beginner' },
    ]
  ],
  "Introducing Yourself": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'My name is...', farsiPrompt: 'اسم من ... است', sentence: 'To introduce yourself, you can say, "My name is Sara."', farsiSentenceExample: 'برای معرفی خودتان، می‌توانید بگویید، "اسم من سارا است."', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'What is your name?', farsiPrompt: 'اسم شما چیست؟', sentence: 'You ask "What is your name?" to learn someone\'s name.', farsiSentenceExample: 'شما می‌پرسید "اسم شما چیست؟" تا نام کسی را یاد بگیرید.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'اسم من علی است.', answer: 'My name is Ali.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask for a name?', farsiPrompt: 'چطور اسم کسی را می‌پرسید؟', options: ['How old are you?', 'Where are you from?', 'What is your name?', 'How are you?'], answer: 'What is your name?', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'I am from...', farsiPrompt: 'من اهل ... هستم', sentence: 'To say your origin, you say "I am from Iran."', farsiSentenceExample: 'برای گفتن اصلیت خود، می‌گویید "من اهل ایران هستم."', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'از ملاقات شما خوشبختم.', answer: 'Nice to meet you.', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Fill in the blank: "___ is your name?"', farsiPrompt: 'جای خالی را پر کنید.', sentence: '___ is your name?', options: ['How', 'What', 'Where', 'Who'], answer: 'What', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'اسم من مریم است.', answer: 'My name is Maryam.', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Where are you from?', farsiPrompt: 'شما اهل کجا هستید؟', sentence: 'This is how you ask about someone\'s home country.', farsiSentenceExample: 'اینطور در مورد کشور کسی سوال می‌کنید.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the answer.', farsiPrompt: 'پاسخ را ترجمه کنید.', farsiSentence: 'من اهل کانادا هستم.', answer: 'I am from Canada.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a polite thing to say when you meet someone?', farsiPrompt: 'وقتی کسی را ملاقات می‌کنید، چه چیز مودبانه‌ای می‌گویید؟', options: ['Goodbye', 'How old are you?', 'Nice to meet you', 'What is your job?'], answer: 'Nice to meet you', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'I am...', farsiPrompt: 'من ... هستم', sentence: 'A shorter way to say your name is "I am Reza."', farsiSentenceExample: 'یک راه کوتاه‌تر برای گفتن نامتان "من رضا هستم" است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Introduce yourself.', farsiPrompt: 'خودتان را معرفی کنید.', farsiSentence: 'من سارا هستم.', answer: 'I am Sara.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask where someone is from?', farsiPrompt: 'چطور می‌پرسید کسی اهل کجاست؟', options: ['What is your name?', 'How are you?', 'Where are you from?', 'Do you speak English?'], answer: 'Where are you from?', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Answer the question.', farsiPrompt: 'به سوال پاسخ دهید.', farsiSentence: 'من اهل آلمان هستم.', answer: 'I am from Germany.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "My name ___ Neda."', farsiPrompt: 'جمله را کامل کنید.', sentence: 'My name ___ Neda.', options: ['am', 'are', 'is', 'from'], answer: 'is', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'And you?', farsiPrompt: 'شما چطور؟', sentence: 'After you answer, you can ask "And you?"', farsiSentenceExample: 'بعد از اینکه پاسخ دادید، می‌توانید بپرسید "شما چطور؟"', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How to ask a name?', farsiPrompt: 'چطور یک نام را بپرسیم؟', options: ['What is your name?', 'Where is your name?', 'How is your name?', 'Who is your name?'], answer: 'What is your name?', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Introduce yourself.', farsiPrompt: 'خودتان را معرفی کنید.', farsiSentence: 'اسم من کیان است.', answer: 'My name is Kian.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Choose the correct response.', farsiPrompt: 'پاسخ صحیح را انتخاب کنید.', sentence: 'A: "Where are you from?" B: "I ___ from Iran."', options: ['am', 'is', 'are', 'name'], answer: 'am', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the phrase.', farsiPrompt: 'عبارت را ترجمه کنید.', farsiSentence: 'از آشنایی با شما خوشحالم.', answer: 'Pleased to meet you.', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the question.', farsiPrompt: 'سوال را ترجمه کنید.', farsiSentence: 'اسم شما چیست؟', answer: 'What is your name?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the introduction.', farsiPrompt: 'معرفی را کامل کنید.', sentence: 'Hello, I ___ Babak.', options: ['is', 'are', 'name', 'am'], answer: 'am', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the question.', farsiPrompt: 'سوال را ترجمه کنید.', farsiSentence: 'شما اهل کجا هستید؟', answer: 'Where are you from?', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Pleased to meet you.', farsiPrompt: 'از آشنایی با شما خوشحالم.', sentence: 'This is a formal way to say "Nice to meet you".', farsiSentenceExample: 'این یک راه رسمی برای گفتن "از ملاقات شما خوشبختم" است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you say "I am from Iran"?', farsiPrompt: 'چطور می گویید "من اهل ایران هستم"؟', options: ['My name is Iran.', 'I am from Iran.', 'Nice to meet you Iran.', 'How are you Iran?'], answer: 'I am from Iran.', difficulty: 'Beginner' },
    ]
  ],
  "The Alphabet": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'A, a', farsiPrompt: 'اِی', sentence: 'A is for Apple.', farsiSentenceExample: 'A برای سیب است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'B, b', farsiPrompt: 'بی', sentence: 'B is for Ball.', farsiSentenceExample: 'B برای توپ است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What letter does "Cat" start with?', farsiPrompt: 'کلمه "Cat" با چه حرفی شروع می‌شود؟', options: ['A', 'B', 'C', 'D'], answer: 'C', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'توپ', answer: 'Ball', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'D, d', farsiPrompt: 'دی', sentence: 'D is for Dog.', farsiSentenceExample: 'D برای سگ است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which word starts with the letter "E"?', farsiPrompt: 'کدام کلمه با حرف "E" شروع می‌شود؟', options: ['Dog', 'Apple', 'Elephant', 'Cat'], answer: 'Elephant', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'سگ', answer: 'Dog', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the first letter of the alphabet?', farsiPrompt: 'اولین حرف الفبا چیست؟', options: ['B', 'C', 'Z', 'A'], answer: 'A', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'G, g', farsiPrompt: 'جی', sentence: 'G is for Goat.', farsiSentenceExample: 'G برای بز است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'H, h', farsiPrompt: 'اِچ', sentence: 'H is for House.', farsiSentenceExample: 'H برای خانه است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'What word starts with H?', farsiPrompt: 'کدام کلمه با H شروع می‌شود؟', farsiSentence: 'خانه', answer: 'House', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What letter comes after "B"?', farsiPrompt: 'چه حرفی بعد از "B" می‌آید؟', options: ['A', 'D', 'C', 'E'], answer: 'C', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'The word for "سیب" starts with what letter?', farsiPrompt: 'کلمه "سیب" با چه حرفی شروع می‌شود؟', farsiSentence: 'Apple', answer: 'Apple', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'F, f', farsiPrompt: 'اِف', sentence: 'F is for Fish.', farsiSentenceExample: 'F برای ماهی است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the next letter: A, B, C, __?', farsiPrompt: 'حرف بعدی چیست؟', options: ['E', 'D', 'F', 'G'], answer: 'D', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the word for "تخم مرغ".', farsiPrompt: 'کلمه "تخم مرغ" را ترجمه کنید.', farsiSentence: 'Egg', answer: 'Egg', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'J, j', farsiPrompt: 'جِی', sentence: 'J is for Juice.', farsiSentenceExample: 'J برای آبمیوه است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which word begins with "G"?', farsiPrompt: 'کدام کلمه با "G" شروع می‌شود؟', options: ['Fish', 'House', 'Goat', 'Apple'], answer: 'Goat', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'K, k', farsiPrompt: 'کِی', sentence: 'K is for Key.', farsiSentenceExample: 'K برای کلید است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'L, l', farsiPrompt: 'اِل', sentence: 'L is for Lion.', farsiSentenceExample: 'L برای شیر است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the animal.', farsiPrompt: 'حیوان را ترجمه کنید.', farsiSentence: 'شیر', answer: 'Lion', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which letter comes before "Z"?', farsiPrompt: 'کدام حرف قبل از "Z" می‌آید؟', options: ['X', 'A', 'Y', 'W'], answer: 'Y', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the word.', farsiPrompt: 'کلمه را ترجمه کنید.', farsiSentence: 'کلید', answer: 'Key', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What letter starts the word "Zebra"?', farsiPrompt: 'کلمه "Zebra" با کدام حرف شروع می‌شود؟', options: ['S', 'A', 'Y', 'Z'], answer: 'Z', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'M, m', farsiPrompt: 'اِم', sentence: 'M is for Moon.', farsiSentenceExample: 'M برای ماه است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'N, n', farsiPrompt: 'اِن', sentence: 'N is for Nose.', farsiSentenceExample: 'N برای بینی است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the body part.', farsiPrompt: 'عضو بدن را ترجمه کنید.', farsiSentence: 'بینی', answer: 'Nose', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What letter is between D and F?', farsiPrompt: 'کدام حرف بین D و F است؟', options: ['G', 'E', 'C', 'H'], answer: 'E', difficulty: 'Beginner' },
    ]
  ],
  "Numbers": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'One', farsiPrompt: 'یک', sentence: 'I have one apple.', farsiSentenceExample: 'من یک سیب دارم.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Two', farsiPrompt: 'دو', sentence: 'She has two cats.', farsiSentenceExample: 'او دو گربه دارد.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What number is this: "one"?', farsiPrompt: 'این چه عددی است: "one"؟', options: ['3', '1', '2', '4'], answer: '1', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'دو', answer: 'Two', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Ten', farsiPrompt: 'ده', sentence: 'There are ten birds.', farsiSentenceExample: 'ده پرنده وجود دارد.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What comes after ten?', farsiPrompt: 'چه عددی بعد از ده می‌آید؟', options: ['Nine', 'Twelve', 'Eleven', 'Thirteen'], answer: 'Eleven', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the English word for "سه"?', farsiPrompt: '"سه" به انگلیسی چه می‌شود؟', options: ['Two', 'Four', 'Three', 'One'], answer: 'Three', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the number "4" to English.', farsiPrompt: 'عدد "۴" را به انگلیسی ترجمه کنید.', farsiSentence: 'چهار', answer: 'Four', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Five', farsiPrompt: 'پنج', sentence: 'I have five fingers on one hand.', farsiSentenceExample: 'من در یک دست پنج انگشت دارم.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sequence: one, two, three, ___', farsiPrompt: 'دنباله را کامل کنید.', options: ['six', 'five', 'four', 'seven'], answer: 'four', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'دوازده', answer: 'Twelve', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Six', farsiPrompt: 'شش', sentence: 'There are six chairs.', farsiSentenceExample: 'شش صندلی وجود دارد.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Seven', farsiPrompt: 'هفت', sentence: 'There are seven days in a week.', farsiSentenceExample: 'در یک هفته هفت روز وجود دارد.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'شش', answer: 'Six', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What number is between six and eight?', farsiPrompt: 'چه عددی بین شش و هشت است؟', options: ['Five', 'Nine', 'Seven', 'Ten'], answer: 'Seven', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the number "20".', farsiPrompt: 'عدد "۲۰" را ترجمه کنید.', farsiSentence: 'بیست', answer: 'Twenty', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'Eight', farsiPrompt: 'هشت', sentence: 'An octopus has eight arms.', farsiSentenceExample: 'یک هشت‌پا هشت بازو دارد.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Nine', farsiPrompt: 'نه', sentence: 'The game starts at nine o\'clock.', farsiSentenceExample: 'بازی ساعت نه شروع می‌شود.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is 5 + 3?', farsiPrompt: 'پنج به علاوه سه چند می‌شود؟', options: ['Seven', 'Nine', 'Eight', 'Six'], answer: 'Eight', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the number.', farsiPrompt: 'عدد را ترجمه کنید.', farsiSentence: 'نه', answer: 'Nine', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How many apples?', farsiPrompt: 'چند تا سیب؟', sentence: 'There are ___ apples.', options: ['3', '4', '5', '6'], answer: '3', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'صفر', answer: 'Zero', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Thirteen', farsiPrompt: 'سیزده', sentence: 'Thirteen is considered an unlucky number by some.', farsiSentenceExample: 'سیزده توسط برخی یک عدد بدشانس در نظر گرفته می‌شود.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is 10 + 1?', farsiPrompt: 'ده به علاوه یک چند می‌شود؟', options: ['Ten', 'Eleven', 'Twelve', 'Nine'], answer: 'Eleven', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the number.', farsiPrompt: 'عدد را ترجمه کنید.', farsiSentence: 'پانزده', answer: 'Fifteen', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sequence: 8, 9, __, 11.', farsiPrompt: 'دنباله را کامل کنید.', options: ['7', '12', '10', '13'], answer: '10', difficulty: 'Beginner' },
    ]
  ],
  "Beginner Challenge 1": [
    [ // Variation 1
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you greet someone in the morning?', farsiPrompt: 'چطور صبح با کسی احوالپرسی می‌کنی؟', options: ['Good night', 'Hello', 'Good morning', 'Goodbye'], answer: 'Good morning', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'اسم من علی است.', answer: 'My name is Ali.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What letter does "Dog" start with?', farsiPrompt: 'کلمه "Dog" با چه حرفی شروع می‌شود؟', options: ['A', 'B', 'C', 'D'], answer: 'D', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this number to English.', farsiPrompt: 'این عدد را به انگلیسی ترجمه کنید.', farsiSentence: 'سه', answer: 'Three', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What comes after "G" in the alphabet?', farsiPrompt: 'چه حرفی بعد از "G" در الفبا می‌آید؟', options: ['F', 'H', 'E', 'I'], answer: 'H', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'حالت چطوره؟', answer: 'How are you?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the number "5" in English?', farsiPrompt: 'عدد "۵" به انگلیسی چه می‌شود؟', options: ['Six', 'Five', 'Four', 'Seven'], answer: 'Five', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'از ملاقات شما خوشبختم.', answer: 'Nice to meet you.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The word "Ball" starts with which letter?', farsiPrompt: 'کلمه "Ball" با کدام حرف شروع می‌شود؟', options: ['A', 'B', 'C', 'D'], answer: 'B', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'خداحافظ', answer: 'Goodbye', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you say "I am fine"?', farsiPrompt: 'چطور می‌گویید "من خوبم"؟', options: ['من خوبم.', 'اسم من خوب است.', 'حالت چطوره؟', 'خداحافظ.'], answer: 'من خوبم.', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'اسم شما چیست؟', answer: 'What is your name?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the number "8" in English?', farsiPrompt: 'عدد "۸" به انگلیسی چه می‌شود؟', options: ['Seven', 'Nine', 'Eight', 'Ten'], answer: 'Eight', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'شب بخیر', answer: 'Good night', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What letter is after "M"?', farsiPrompt: 'چه حرفی بعد از "M" است؟', options: ['L', 'K', 'N', 'O'], answer: 'N', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من اهل ایران هستم.', answer: 'I am from Iran.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "10" in English?', farsiPrompt: '"۱۰" به انگلیسی چه می‌شود؟', options: ['One', 'Ten', 'Two', 'Twelve'], answer: 'Ten', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'سلام', answer: 'Hello', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The word "Apple" starts with?', farsiPrompt: 'کلمه "Apple" با چه حرفی شروع می‌شود؟', options: ['A', 'B', 'P', 'L'], answer: 'A', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'چهار', answer: 'Four', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "My ___ is Ali."', farsiPrompt: 'جمله را کامل کنید.', sentence: 'My ___ is Ali.', options: ['name', 'from', 'I', 'is'], answer: 'name', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'هفت', answer: 'Seven', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask someone where they are from?', farsiPrompt: 'چطور از کسی می‌پرسید اهل کجاست؟', options: ['What is your name?', 'How are you?', 'Where are you from?', 'Goodbye'], answer: 'Where are you from?', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'از آشنایی با شما خوشحالم.', answer: 'Pleased to meet you.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the last letter of the alphabet?', farsiPrompt: 'آخرین حرف الفبا چیست؟', options: ['A', 'X', 'Y', 'Z'], answer: 'Z', difficulty: 'Beginner' },
    ]
  ],
    "Colors": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'Red', farsiPrompt: 'قرمز', sentence: 'An apple is often red.', farsiSentenceExample: 'یک سیب اغلب قرمز است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Blue', farsiPrompt: 'آبی', sentence: 'The sky is blue.', farsiSentenceExample: 'آسمان آبی است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is the sky?', farsiPrompt: 'آسمان چه رنگی است؟', options: ['Red', 'Green', 'Blue', 'Yellow'], answer: 'Blue', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'قرمز', answer: 'Red', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Yellow', farsiPrompt: 'زرد', sentence: 'A banana is yellow.', farsiSentenceExample: 'موز زرد است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is a banana?', farsiPrompt: 'موز چه رنگی است؟', options: ['Yellow', 'Purple', 'Orange', 'Black'], answer: 'Yellow', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید', farsiSentence: 'سبز', answer: 'Green', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is grass?', farsiPrompt: 'چمن چه رنگی است؟', options: ['Blue', 'Green', 'Orange', 'White'], answer: 'Green', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Black', farsiPrompt: 'سیاه', sentence: 'The night sky is black.', farsiSentenceExample: 'آسمان شب سیاه است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English', farsiPrompt: 'به انگلیسی ترجمه کنید', farsiSentence: 'سفید', answer: 'White', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "Snow is ___."', farsiPrompt: 'جمله را کامل کنید.', sentence: 'Snow is ___.', options: ['black', 'blue', 'white', 'red'], answer: 'white', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this color', farsiPrompt: 'این رنگ را ترجمه کنید', farsiSentence: 'نارنجی', answer: 'Orange', difficulty: 'Beginner' },
    ],
    [ // Variation 3
        { type: ExerciseType.LEARN, prompt: 'Pink', farsiPrompt: 'صورتی', sentence: 'Flowers can be pink.', farsiSentenceExample: 'گل‌ها می‌توانند صورتی باشند.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is "صورتی" in English?', farsiPrompt: '"صورتی" به انگلیسی چه می‌شود؟', options: ['Purple', 'Pink', 'Red', 'Orange'], answer: 'Pink', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this color.', farsiPrompt: 'این رنگ را ترجمه کنید.', farsiSentence: 'آبی', answer: 'Blue', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Brown', farsiPrompt: 'قهوه‌ای', sentence: 'The color of wood is brown.', farsiSentenceExample: 'رنگ چوب قهوه‌ای است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is chocolate?', farsiPrompt: 'شکلات چه رنگی است؟', options: ['White', 'Black', 'Brown', 'Yellow'], answer: 'Brown', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "بنفش".', farsiPrompt: '"بنفش" را ترجمه کنید.', farsiSentence: 'بنفش', answer: 'Purple', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Gray', farsiPrompt: 'خاکستری', sentence: 'An elephant is gray.', farsiSentenceExample: 'یک فیل خاکستری است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What color is the sun?', farsiPrompt: 'خورشید چه رنگی است؟', options: ['Blue', 'Green', 'Yellow', 'Red'], answer: 'Yellow', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'ماشین من قرمز است.', answer: 'My car is red.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A cloud can be white or ___', farsiPrompt: 'یک ابر می‌تواند سفید یا ___ باشد.', options: ['yellow', 'green', 'gray', 'pink'], answer: 'gray', difficulty: 'Beginner' },
    ],
    [ // Variation 5
        { type: ExerciseType.LEARN, prompt: 'Orange', farsiPrompt: 'نارنجی', sentence: 'An orange is orange.', farsiSentenceExample: 'یک پرتقال نارنجی است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "سیاه".', farsiPrompt: '"سیاه" را ترجمه کنید.', options: ['White', 'Blue', 'Black', 'Brown'], answer: 'Black', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'خانه سفید است.', answer: 'The house is white.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What are the colors of a ladybug?', farsiPrompt: 'رنگ‌های یک کفشدوزک چیست؟', options: ['Blue and yellow', 'Red and black', 'Green and white', 'Orange and purple'], answer: 'Red and black', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this color.', farsiPrompt: 'این رنگ را ترجمه کنید.', farsiSentence: 'سبز', answer: 'Green', difficulty: 'Beginner' },
    ]
  ],
  "Family Members": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Mother', farsiPrompt: 'مادر', sentence: 'My mother is a teacher.', farsiSentenceExample: 'مادر من یک معلم است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Father', farsiPrompt: 'پدر', sentence: 'My father is a doctor.', farsiSentenceExample: 'پدر من یک پزشک است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "مادر" in English?', farsiPrompt: ' "مادر" به انگلیسی چه می‌شود؟', options: ['Father', 'Sister', 'Mother', 'Brother'], answer: 'Mother', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'پدر', answer: 'Father', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Sister', farsiPrompt: 'خواهر', sentence: 'I have one older sister.', farsiSentenceExample: 'من یک خواهر بزرگتر دارم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'برادر من فوتبال بازی می‌کند.', answer: 'My brother plays football.', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "خواهر".', farsiPrompt: '"خواهر" را ترجمه کنید.', farsiSentence: 'خواهر', answer: 'Sister', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Your father\'s son is your...', farsiPrompt: 'پسر پدر شما ... شماست.', options: ['sister', 'uncle', 'brother', 'aunt'], answer: 'brother', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Parents', farsiPrompt: 'والدین', sentence: 'Your mother and father are your parents.', farsiSentenceExample: 'مادر و پدر شما والدین شما هستند.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "والدین".', farsiPrompt: '"والدین" را ترجمه کنید.', farsiSentence: 'والدین', answer: 'Parents', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "My ___ is very kind."', farsiPrompt: 'جمله را کامل کنید.', sentence: 'My ___ is very kind.', options: ['brother', 'sister', 'mother', 'All are correct'], answer: 'All are correct', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'خانواده من بزرگ است.', answer: 'My family is big.', difficulty: 'Beginner' },
    ],
    [ // Variation 3
        { type: ExerciseType.LEARN, prompt: 'Grandmother', farsiPrompt: 'مادربزرگ', sentence: 'My grandmother makes delicious food.', farsiSentenceExample: 'مادربزرگ من غذای خوشمزه درست می‌کند.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Grandfather', farsiPrompt: 'پدربزرگ', sentence: 'My grandfather tells great stories.', farsiSentenceExample: 'پدربزرگ من داستان‌های عالی تعریف می‌کند.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Your mother\'s mother is your...', farsiPrompt: 'مادرِ مادرِ شما ... شماست.', options: ['Aunt', 'Grandmother', 'Sister', 'Mother'], answer: 'Grandmother', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'پدربزرگ', answer: 'Grandfather', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "برادر".', farsiPrompt: '"برادر" را ترجمه کنید.', options: ['Father', 'Brother', 'Uncle', 'Son'], answer: 'Brother', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'Son', farsiPrompt: 'پسر (فرزند)', sentence: 'He has one son and two daughters.', farsiSentenceExample: 'او یک پسر و دو دختر دارد.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Daughter', farsiPrompt: 'دختر (فرزند)', sentence: 'His daughter is five years old.', farsiSentenceExample: 'دختر او پنج ساله است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'دختر', answer: 'Daughter', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Your sister is your mother\'s ___', farsiPrompt: 'خواهر شما ___ مادر شماست.', options: ['son', 'daughter', 'father', 'brother'], answer: 'daughter', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'خانواده', answer: 'Family', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "خانواده".', farsiPrompt: '"خانواده" را ترجمه کنید.', farsiSentence: 'خانواده', answer: 'Family', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Who are your "parents"?', farsiPrompt: '"والدین" شما چه کسانی هستند؟', options: ['Brother and sister', 'Grandmother and grandfather', 'Mother and father', 'Aunt and uncle'], answer: 'Mother and father', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من یک خواهر دارم.', answer: 'I have a sister.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "He is my ___."', farsiPrompt: 'جمله را کامل کنید.', sentence: 'He is my ___.', options: ['mother', 'sister', 'aunt', 'father'], answer: 'father', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'مادر من مهربان است.', answer: 'My mother is kind.', difficulty: 'Beginner' },
    ]
  ],
  "Animals": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Dog', farsiPrompt: 'سگ', sentence: 'The dog is barking.', farsiSentenceExample: 'سگ دارد پارس می‌کند.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Cat', farsiPrompt: 'گربه', sentence: 'The cat is sleeping on the chair.', farsiSentenceExample: 'گربه روی صندلی خوابیده است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "گربه" in English?', farsiPrompt: '"گربه" به انگلیسی چه می‌شود؟', options: ['Dog', 'Cat', 'Fish', 'Bird'], answer: 'Cat', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'سگ', answer: 'Dog', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Bird', farsiPrompt: 'پرنده', sentence: 'A bird can fly.', farsiSentenceExample: 'یک پرنده می‌تواند پرواز کند.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal can fly?', farsiPrompt: 'کدام حیوان می‌تواند پرواز کند؟', options: ['Dog', 'Fish', 'Cat', 'Bird'], answer: 'Bird', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "ماهی".', farsiPrompt: '"ماهی" را ترجمه کنید.', farsiSentence: 'ماهی', answer: 'Fish', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Horse', farsiPrompt: 'اسب', sentence: 'A horse can run very fast.', farsiSentenceExample: 'یک اسب می‌تواند خیلی سریع بدود.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal says "meow"?', farsiPrompt: 'کدام حیوان "میو" می‌گوید؟', options: ['Dog', 'Horse', 'Cat', 'Bird'], answer: 'Cat', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this animal.', farsiPrompt: 'این حیوان را ترجمه کنید.', farsiSentence: 'فیل', answer: 'Elephant', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal lives in water?', farsiPrompt: 'کدام حیوان در آب زندگی می‌کند؟', options: ['Bird', 'Fish', 'Dog', 'Horse'], answer: 'Fish', difficulty: 'Beginner' },
    ],
    [ // Variation 3
        { type: ExerciseType.LEARN, prompt: 'Lion', farsiPrompt: 'شیر', sentence: 'The lion is the king of the jungle.', farsiSentenceExample: 'شیر پادشاه جنگل است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What sound does a dog make?', farsiPrompt: 'سگ چه صدایی در می‌آورد؟', options: ['Meow', 'Bark', 'Roar', 'Chirp'], answer: 'Bark', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'یک فیل بزرگ است.', answer: 'An elephant is big.', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Monkey', farsiPrompt: 'میمون', sentence: 'A monkey likes to eat bananas.', farsiSentenceExample: 'میمون دوست دارد موز بخورد.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal is big and gray?', farsiPrompt: 'کدام حیوان بزرگ و خاکستری است؟', options: ['Cat', 'Elephant', 'Bird', 'Fish'], answer: 'Elephant', difficulty: 'Beginner' },
    ],
    [ // Variation 4
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "پرنده".', farsiPrompt: '"پرنده" را ترجمه کنید.', farsiSentence: 'پرنده', answer: 'Bird', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal is a popular pet?', farsiPrompt: 'کدام حیوان یک حیوان خانگی محبوب است؟', options: ['Lion', 'Tiger', 'Dog', 'Bear'], answer: 'Dog', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Bear', farsiPrompt: 'خرس', sentence: 'The bear lives in the forest.', farsiSentenceExample: 'خرس در جنگل زندگی می‌کند.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'گربه کوچک است.', answer: 'The cat is small.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A horse is a ___ animal.', farsiPrompt: 'اسب یک حیوان ___ است.', options: ['small', 'fast', 'slow', 'blue'], answer: 'fast', difficulty: 'Beginner' },
    ],
    [ // Variation 5
        { type: ExerciseType.LEARN, prompt: 'Fish', farsiPrompt: 'ماهی', sentence: 'Fish live in water.', farsiSentenceExample: 'ماهی در آب زندگی می‌کند.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'میمون', answer: 'Monkey', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal says "roar"?', farsiPrompt: 'کدام حیوان "غرش" می‌کند؟', options: ['Cat', 'Dog', 'Lion', 'Bird'], answer: 'Lion', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من یک سگ دارم.', answer: 'I have a dog.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal lives in a jungle?', farsiPrompt: 'کدام حیوان در جنگل زندگی می‌کند؟', options: ['Fish', 'Dog', 'Monkey', 'Cat'], answer: 'Monkey', difficulty: 'Beginner' },
    ]
  ],
  "Basic Foods": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Food', farsiPrompt: 'غذا', sentence: 'I like Italian food.', farsiSentenceExample: 'من غذای ایتالیایی دوست دارم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Bread', farsiPrompt: 'نان', sentence: 'We eat bread for breakfast.', farsiSentenceExample: 'ما برای صبحانه نان می‌خوریم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "نان" in English?', farsiPrompt: '"نان" به انگلیسی چه می‌شود؟', options: ['Water', 'Rice', 'Bread', 'Chicken'], answer: 'Bread', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'لطفا مقداری آب به من بدهید.', answer: 'Please give me some water.', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Apple', farsiPrompt: 'سیب', sentence: 'An apple a day keeps the doctor away.', farsiSentenceExample: 'خوردن یک سیب در روز دکتر را دور نگه می‌دارد.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a fruit?', farsiPrompt: 'کدام یک از این‌ها میوه است؟', options: ['Chicken', 'Rice', 'Bread', 'Apple'], answer: 'Apple', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "برنج".', farsiPrompt: '"برنج" را ترجمه کنید.', farsiSentence: 'برنج', answer: 'Rice', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Cheese', farsiPrompt: 'پنیر', sentence: 'I like cheese on my sandwich.', farsiSentenceExample: 'من پنیر روی ساندویچم دوست دارم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you drink?', farsiPrompt: 'چه چیزی می‌نوشید؟', options: ['Bread', 'Water', 'Rice', 'Chicken'], answer: 'Water', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "مرغ".', farsiPrompt: '"مرغ" را ترجمه کنید.', farsiSentence: 'مرغ', answer: 'Chicken', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "I eat ___ for breakfast."', farsiPrompt: 'جمله را کامل کنید.', sentence: 'I eat ___ for breakfast.', options: ['chicken', 'bread', 'rice', 'water'], answer: 'bread', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Water', farsiPrompt: 'آب', sentence: 'It is important to drink water.', farsiSentenceExample: 'نوشیدن آب مهم است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Milk', farsiPrompt: 'شیر', sentence: 'Children drink milk to grow strong.', farsiSentenceExample: 'کودکان برای قوی شدن شیر می‌نوشند.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a white drink?', farsiPrompt: 'نوشیدنی سفید چیست؟', options: ['Water', 'Juice', 'Milk', 'Tea'], answer: 'Milk', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this food.', farsiPrompt: 'این غذا را ترجمه کنید.', farsiSentence: 'تخم مرغ', answer: 'Egg', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you eat with bread?', farsiPrompt: 'با نان چه می‌خورید؟', options: ['Water', 'Cheese', 'Milk', 'Rice'], answer: 'Cheese', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "میوه".', farsiPrompt: '"میوه" را ترجمه کنید.', farsiSentence: 'میوه', answer: 'Fruit', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Vegetable', farsiPrompt: 'سبزیجات', sentence: 'Broccoli is a green vegetable.', farsiSentenceExample: 'کلم بروکلی یک سبزی سبز است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'An apple is a type of...', farsiPrompt: 'سیب یک نوع ... است.', options: ['vegetable', 'meat', 'fruit', 'drink'], answer: 'fruit', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من برنج و مرغ دوست دارم.', answer: 'I like rice and chicken.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which one is NOT a food?', farsiPrompt: 'کدام یک غذا نیست؟', options: ['Bread', 'Chicken', 'Water', 'Book'], answer: 'Book', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.LEARN, prompt: 'Fish', farsiPrompt: 'ماهی (غذا)', sentence: 'Eating fish is healthy.', farsiSentenceExample: 'خوردن ماهی سالم است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "آب".', farsiPrompt: '"آب" را ترجمه کنید.', options: ['Milk', 'Water', 'Juice', 'Tea'], answer: 'Water', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the food item.', farsiPrompt: 'این مورد غذایی را ترجمه کنید.', farsiSentence: 'نان', answer: 'Bread', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'I am hungry. I need some ___.', farsiPrompt: 'من گرسنه هستم. من به مقداری ___ نیاز دارم.', options: ['water', 'sleep', 'food', 'work'], answer: 'food', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'سیب قرمز است.', answer: 'The apple is red.', difficulty: 'Beginner' },
    ]
  ],
  "Beginner Challenge 2": [
    [ // Variation 1
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this color.', farsiPrompt: 'این رنگ را ترجمه کنید.', farsiSentence: 'آبی', answer: 'Blue', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is your mother\'s husband called?', farsiPrompt: 'شوهر مادر شما چه نامیده می‌شود؟', options: ['Brother', 'Father', 'Sister', 'Uncle'], answer: 'Father', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this food.', farsiPrompt: 'این غذا را ترجمه کنید.', farsiSentence: 'برنج', answer: 'Rice', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these animals can fly?', farsiPrompt: 'کدام یک از این حیوانات می‌تواند پرواز کند؟', options: ['Dog', 'Cat', 'Bird', 'Fish'], answer: 'Bird', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'گربه سیاه است.', answer: 'The cat is black.', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A banana is usually what color?', farsiPrompt: 'موز معمولا چه رنگی است؟', options: ['Red', 'Yellow', 'Blue', 'Green'], answer: 'Yellow', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this family member.', farsiPrompt: 'این عضو خانواده را ترجمه کنید.', farsiSentence: 'خواهر', answer: 'Sister', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a fruit?', farsiPrompt: 'کدام یک از این‌ها میوه است؟', options: ['Chicken', 'Bread', 'Apple', 'Water'], answer: 'Apple', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this animal.', farsiPrompt: 'این حیوان را ترجمه کنید.', farsiSentence: 'اسب', answer: 'Horse', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The color of snow is...', farsiPrompt: 'رنگ برف ... است.', options: ['Black', 'White', 'Green', 'Yellow'], answer: 'White', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "پدر".', farsiPrompt: '"پدر" را ترجمه کنید.', farsiSentence: 'پدر', answer: 'Father', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which animal says "meow"?', farsiPrompt: 'کدام حیوان "میو" می‌گوید؟', options: ['Dog', 'Cat', 'Horse', 'Bird'], answer: 'Cat', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من شیر می‌نوشم.', answer: 'I drink milk.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The grass is ___.', farsiPrompt: 'چمن ___ است.', options: ['blue', 'red', 'green', 'yellow'], answer: 'green', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this family member.', farsiPrompt: 'این عضو خانواده را ترجمه کنید.', farsiSentence: 'مادربزرگ', answer: 'Grandmother', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What animal lives in water?', farsiPrompt: 'کدام حیوان در آب زندگی می‌کند؟', options: ['Bird', 'Fish', 'Cat', 'Dog'], answer: 'Fish', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'برادر من قد بلند است.', answer: 'My brother is tall.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you eat for breakfast?', farsiPrompt: 'برای صبحانه چه می‌خورید؟', options: ['Rice', 'Chicken', 'Bread and cheese', 'Fish'], answer: 'Bread and cheese', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this color.', farsiPrompt: 'این رنگ را ترجمه کنید.', farsiSentence: 'صورتی', answer: 'Pink', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Your father\'s daughter is your...', farsiPrompt: 'دختر پدر شما ... شماست.', options: ['mother', 'sister', 'aunt', 'grandmother'], answer: 'sister', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'آسمان آبی است.', answer: 'The sky is blue.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a "lion"?', farsiPrompt: '"شیر" چیست؟', options: ['A color', 'A food', 'A family member', 'An animal'], answer: 'An animal', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "پنیر".', farsiPrompt: '"پنیر" را ترجمه کنید.', farsiSentence: 'پنیر', answer: 'Cheese', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Choose the correct word.', farsiPrompt: 'کلمه صحیح را انتخاب کنید.', sentence: 'My ___ is a doctor.', options: ['sister', 'sisters', 'brother', 'brothers'], answer: 'sister', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "قهوه‌ای".', farsiPrompt: '"قهوه‌ای" را ترجمه کنید.', farsiSentence: 'قهوه‌ای', answer: 'Brown', difficulty: 'Beginner' },
    ]
  ],
  "My Home": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'House', farsiPrompt: 'خانه', sentence: 'I live in a big house.', farsiSentenceExample: 'من در یک خانه بزرگ زندگی می‌کنم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Room', farsiPrompt: 'اتاق', sentence: 'My room is on the second floor.', farsiSentenceExample: 'اتاق من در طبقه دوم است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "خانه" in English?', farsiPrompt: ' "خانه" به انگلیسی چه می‌شود؟', options: ['Room', 'Door', 'House', 'Window'], answer: 'House', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Kitchen', farsiPrompt: 'آشپزخانه', sentence: 'We cook food in the kitchen.', farsiSentenceExample: 'ما در آشپزخانه غذا می‌پزیم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you sleep?', farsiPrompt: 'کجا می‌خوابید؟', options: ['Living room', 'Kitchen', 'Bedroom', 'Bathroom'], answer: 'Bedroom', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "اتاق خواب".', farsiPrompt: '"اتاق خواب" را ترجمه کنید.', farsiSentence: 'اتاق خواب', answer: 'Bedroom', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Bathroom', farsiPrompt: 'حمام', sentence: 'The bathroom has a shower.', farsiSentenceExample: 'حمام یک دوش دارد.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you cook food?', farsiPrompt: 'کجا غذا می‌پزید؟', options: ['Bedroom', 'Living room', 'Kitchen', 'Garden'], answer: 'Kitchen', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'خانه ما کوچک است.', answer: 'Our house is small.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which room is for guests?', farsiPrompt: 'کدام اتاق برای مهمانان است؟', options: ['Living room', 'Bedroom', 'Kitchen', 'Bathroom'], answer: 'Living room', difficulty: 'Beginner' },
    ],
    [ // Variation 3
        { type: ExerciseType.LEARN, prompt: 'Door', farsiPrompt: 'در', sentence: 'Please close the door.', farsiSentenceExample: 'لطفا در را ببندید.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Window', farsiPrompt: 'پنجره', sentence: 'The window is open.', farsiSentenceExample: 'پنجره باز است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you open to enter a room?', farsiPrompt: 'برای ورود به یک اتاق چه چیزی را باز می‌کنید؟', options: ['Window', 'Door', 'Wall', 'Floor'], answer: 'Door', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'پنجره را باز کن.', answer: 'Open the window.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "آشپزخانه".', farsiPrompt: '"آشپزخانه" را ترجمه کنید.', options: ['Kitchen', 'Bathroom', 'Bedroom', 'Garden'], answer: 'Kitchen', difficulty: 'Beginner' },
    ],
    [ // Variation 4
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "اتاق نشیمن".', farsiPrompt: '"اتاق نشیمن" را ترجمه کنید.', farsiSentence: 'اتاق نشیمن', answer: 'Living room', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Garden', farsiPrompt: 'باغچه', sentence: 'We have beautiful flowers in our garden.', farsiSentenceExample: 'ما گل‌های زیبایی در باغچه‌مان داریم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you watch TV with family?', farsiPrompt: 'کجا با خانواده تلویزیون تماشا می‌کنید؟', options: ['Kitchen', 'Bathroom', 'Bedroom', 'Living room'], answer: 'Living room', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من در اتاق خوابم هستم.', answer: 'I am in my bedroom.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is outside the house?', farsiPrompt: 'چه چیزی بیرون از خانه است؟', options: ['Kitchen', 'Garden', 'Room', 'Bathroom'], answer: 'Garden', difficulty: 'Beginner' },
    ],
    [ // Variation 5
        { type: ExerciseType.LEARN, prompt: 'Floor', farsiPrompt: 'کف / طبقه', sentence: 'The cat is on the floor.', farsiSentenceExample: 'گربه روی کف است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Wall', farsiPrompt: 'دیوار', sentence: 'The picture is on the wall.', farsiSentenceExample: 'عکس روی دیوار است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'دیوار', answer: 'Wall', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which one is NOT a room?', farsiPrompt: 'کدام یک اتاق نیست؟', options: ['Bedroom', 'Kitchen', 'Door', 'Bathroom'], answer: 'Door', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'خانه من یک باغچه دارد.', answer: 'My house has a garden.', difficulty: 'Beginner' },
    ]
  ],
  "Common Objects": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Book', farsiPrompt: 'کتاب', sentence: 'I am reading a good book.', farsiSentenceExample: 'من در حال خواندن یک کتاب خوب هستم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Pen', farsiPrompt: 'خودکار', sentence: 'Can I borrow your pen?', farsiSentenceExample: 'می‌توانم خودکار شما را قرض بگیرم؟', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use to write?', farsiPrompt: 'برای نوشتن از چه چیزی استفاده می‌کنید؟', options: ['Book', 'Chair', 'Pen', 'Table'], answer: 'Pen', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Chair', farsiPrompt: 'صندلی', sentence: 'Please have a seat on this chair.', farsiSentenceExample: 'لطفا روی این صندلی بنشینید.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'تلفن من کجاست؟', answer: 'Where is my phone?', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "میز".', farsiPrompt: '"میز" را ترجمه کنید.', farsiSentence: 'میز', answer: 'Table', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Key', farsiPrompt: 'کلید', sentence: 'I need the key to open the door.', farsiSentenceExample: 'من برای باز کردن در به کلید نیاز دارم.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you read?', farsiPrompt: 'چه چیزی می‌خوانید؟', options: ['Chair', 'Table', 'Book', 'Pen'], answer: 'Book', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'لطفا روی صندلی بنشینید.', answer: 'Please sit on the chair.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use to call people?', farsiPrompt: 'برای تماس با مردم از چه چیزی استفاده می‌کنید؟', options: ['Book', 'Phone', 'Key', 'Table'], answer: 'Phone', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Table', farsiPrompt: 'میز', sentence: 'The food is on the table.', farsiSentenceExample: 'غذا روی میز است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Phone', farsiPrompt: 'تلفن', sentence: 'My phone is new.', farsiSentenceExample: 'تلفن من جدید است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "کتاب" in English?', farsiPrompt: '"کتاب" به انگلیسی چه می‌شود؟', options: ['Pen', 'Book', 'Key', 'Phone'], answer: 'Book', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'کلید روی میز است.', answer: 'The key is on the table.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you sit on?', farsiPrompt: 'روی چه چیزی می‌نشینید؟', options: ['Table', 'Chair', 'Key', 'Book'], answer: 'Chair', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "کلید".', farsiPrompt: '"کلید" را ترجمه کنید.', farsiSentence: 'کلید', answer: 'Key', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What opens a door?', farsiPrompt: 'چه چیزی در را باز می‌کند؟', options: ['Pen', 'Book', 'Key', 'Phone'], answer: 'Key', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Bag', farsiPrompt: 'کیف', sentence: 'My books are in my bag.', farsiSentenceExample: 'کتاب‌هایم در کیفم هستند.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این کیف من است.', answer: 'This is my bag.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "تلفن".', farsiPrompt: '"تلفن" را ترجمه کنید.', options: ['Bag', 'Phone', 'Book', 'Key'], answer: 'Phone', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.LEARN, prompt: 'Computer', farsiPrompt: 'کامپیوتر', sentence: 'I work on my computer.', farsiSentenceExample: 'من با کامپیوترم کار می‌کنم.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'کامپیوتر', answer: 'Computer', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use to write an email?', farsiPrompt: 'برای نوشتن ایمیل از چه چیزی استفاده می‌کنید؟', options: ['Pen', 'Book', 'Computer', 'Phone'], answer: 'Computer', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من یک کتاب می‌خوانم.', answer: 'I read a book.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is NOT a common object in a classroom?', farsiPrompt: 'کدام یک شی رایج در کلاس درس نیست؟', options: ['Book', 'Pen', 'Chair', 'Bed'], answer: 'Bed', difficulty: 'Beginner' },
    ]
  ],
  "Days of the Week": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Monday', farsiPrompt: 'دوشنبه', sentence: 'The week starts on Monday for many people.', farsiSentenceExample: 'هفته برای بسیاری از مردم از دوشنبه شروع می‌شود.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Tuesday', farsiPrompt: 'سه‌شنبه', sentence: 'Tuesday comes after Monday.', farsiSentenceExample: 'سه‌شنبه بعد از دوشنبه می‌آید.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What day comes after Monday?', farsiPrompt: 'چه روزی بعد از دوشنبه است؟', options: ['Sunday', 'Tuesday', 'Wednesday', 'Friday'], answer: 'Tuesday', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Sunday', farsiPrompt: 'یکشنبه', sentence: 'Sunday is part of the weekend.', farsiSentenceExample: 'یکشنبه بخشی از آخر هفته است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which day is part of the weekend?', farsiPrompt: 'کدام روز بخشی از آخر هفته است؟', options: ['Monday', 'Wednesday', 'Sunday', 'Tuesday'], answer: 'Sunday', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "جمعه".', farsiPrompt: '"جمعه" را ترجمه کنید.', farsiSentence: 'جمعه', answer: 'Friday', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What day is before Sunday?', farsiPrompt: 'چه روزی قبل از یکشنبه است؟', options: ['Monday', 'Tuesday', 'Saturday', 'Friday'], answer: 'Saturday', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Wednesday', farsiPrompt: 'چهارشنبه', sentence: 'Wednesday is in the middle of the work week.', farsiSentenceExample: 'چهارشنبه در وسط هفته کاری است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'امروز دوشنبه است.', answer: 'Today is Monday.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'There are ___ days in a week.', farsiPrompt: 'در یک هفته ___ روز وجود دارد.', options: ['five', 'seven', 'six', 'eight'], answer: 'seven', difficulty: 'Beginner' },
    ],
    [ // Variation 3
        { type: ExerciseType.LEARN, prompt: 'Thursday', farsiPrompt: 'پنج‌شنبه', sentence: 'Thursday is before Friday.', farsiSentenceExample: 'پنج‌شنبه قبل از جمعه است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Saturday', farsiPrompt: 'شنبه', sentence: 'Saturday is the first day of the weekend.', farsiSentenceExample: 'شنبه اولین روز آخر هفته است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What are the two days of the weekend?', farsiPrompt: 'دو روز آخر هفته کدامند؟', options: ['Monday and Tuesday', 'Saturday and Sunday', 'Wednesday and Thursday', 'Friday and Saturday'], answer: 'Saturday and Sunday', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "چهارشنبه".', farsiPrompt: '"چهارشنبه" را ترجمه کنید.', farsiSentence: 'چهارشنبه', answer: 'Wednesday', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The first day of the week is usually...?', farsiPrompt: 'اولین روز هفته معمولا ... است؟', options: ['Sunday', 'Saturday', 'Monday', 'Friday'], answer: 'Monday', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "امروز".', farsiPrompt: '"امروز" را ترجمه کنید.', farsiSentence: 'امروز', answer: 'Today', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If today is Wednesday, tomorrow is ___', farsiPrompt: 'اگر امروز چهارشنبه باشد، فردا ___ است.', options: ['Tuesday', 'Thursday', 'Friday', 'Monday'], answer: 'Thursday', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Tomorrow', farsiPrompt: 'فردا', sentence: 'Tomorrow will be a new day.', farsiSentenceExample: 'فردا روز جدیدی خواهد بود.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Yesterday', farsiPrompt: 'دیروز', sentence: 'Yesterday was Tuesday.', farsiSentenceExample: 'دیروز سه‌شنبه بود.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "دیروز".', farsiPrompt: '"دیروز" را ترجمه کنید.', farsiSentence: 'دیروز', answer: 'Yesterday', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "سه‌شنبه".', farsiPrompt: '"سه‌شنبه" را ترجمه کنید.', options: ['Monday', 'Tuesday', 'Thursday', 'Sunday'], answer: 'Tuesday', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'فردا جمعه است.', answer: 'Tomorrow is Friday.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What day is between Friday and Sunday?', farsiPrompt: 'چه روزی بین جمعه و یکشنبه است؟', options: ['Monday', 'Thursday', 'Saturday', 'Tuesday'], answer: 'Saturday', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'هفته', answer: 'Week', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "امروز" in English?', farsiPrompt: '"امروز" به انگلیسی چه می‌شود؟', options: ['Tomorrow', 'Yesterday', 'Today', 'Day'], answer: 'Today', difficulty: 'Beginner' },
    ]
  ],
  "Telling Time": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'What time is it?', farsiPrompt: 'ساعت چند است؟', sentence: 'You ask "What time is it?" to know the time.', farsiSentenceExample: 'برای دانستن زمان می‌پرسید "ساعت چند است؟"', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'It is... o\'clock.', farsiPrompt: 'ساعت ... است.', sentence: 'It is three o\'clock.', farsiSentenceExample: 'ساعت سه است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask for the time?', farsiPrompt: 'چطور ساعت را می‌پرسید؟', options: ['What is the date?', 'What is your name?', 'What time is it?', 'Where are you?'], answer: 'What time is it?', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'ساعت پنج است.', answer: 'It is five o\'clock.', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Half past', farsiPrompt: 'و نیم', sentence: 'It is half past two. (2:30)', farsiSentenceExample: 'ساعت دو و نیم است.', answer: '', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "ساعت".', farsiPrompt: '"ساعت" را ترجمه کنید.', farsiSentence: 'ساعت', answer: 'Clock', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "1:15" in words?', farsiPrompt: '"۱:۱۵" به کلمات چه می‌شود؟', options: ['One o\'clock', 'Half past one', 'Quarter past one', 'Quarter to one'], answer: 'Quarter past one', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Quarter to', farsiPrompt: 'یک ربع به', sentence: 'It is a quarter to five. (4:45)', farsiSentenceExample: 'ساعت یک ربع به پنج است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ساعت یک ربع به هشت است.', answer: 'It is a quarter to eight.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "It is ten ___." (10:00)', farsiPrompt: 'جمله را کامل کنید.', sentence: 'It is ten ___.', options: ['past', 'to', 'o\'clock', 'half'], answer: 'o\'clock', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Quarter past', farsiPrompt: 'و ربع', sentence: 'It is a quarter past six. (6:15)', farsiSentenceExample: 'ساعت شش و ربع است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the time 3:30.', farsiPrompt: 'ساعت ۳:۳۰ را ترجمه کنید.', farsiSentence: 'ساعت سه و نیم است.', answer: 'It is half past three.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What time is 7:00?', farsiPrompt: 'ساعت ۷:۰۰ چند است؟', options: ['Seven fifteen', 'Seven o\'clock', 'Half past seven', 'Seven thirty'], answer: 'Seven o\'clock', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question.', farsiPrompt: 'این سوال را ترجمه کنید.', farsiSentence: 'ساعت چند است؟', answer: 'What time is it?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "8:45" in words?', farsiPrompt: '"۸:۴۵" به کلمات چه می‌شود؟', options: ['Quarter past eight', 'Half past eight', 'Eight o\'clock', 'Quarter to nine'], answer: 'Quarter to nine', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'Noon', farsiPrompt: 'ظهر', sentence: 'We eat lunch at noon (12:00 PM).', farsiSentenceExample: 'ما ظهر ناهار می‌خوریم.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Midnight', farsiPrompt: 'نیمه‌شب', sentence: 'It is dark at midnight (12:00 AM).', farsiSentenceExample: 'در نیمه‌شب هوا تاریک است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'When do you eat lunch?', farsiPrompt: 'چه زمانی ناهار می‌خورید؟', options: ['Morning', 'Noon', 'Evening', 'Midnight'], answer: 'Noon', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the time.', farsiPrompt: 'زمان را ترجمه کنید.', farsiSentence: 'ساعت یک است.', answer: 'It is one o\'clock.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What time is "نیمه‌شب"?', farsiPrompt: '"نیمه‌شب" چه ساعتی است؟', options: ['12:00 PM', '6:00 AM', '12:00 AM', '6:00 PM'], answer: '12:00 AM', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate 11:15.', farsiPrompt: '۱۱:۱۵ را ترجمه کنید.', farsiSentence: 'ساعت یازده و ربع است.', answer: 'It is a quarter past eleven.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you write 5:30?', farsiPrompt: 'چطور ۵:۳۰ را می‌نویسید؟', options: ['Five o\'clock', 'Quarter past five', 'Half past five', 'Quarter to six'], answer: 'Half past five', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the question.', farsiPrompt: 'سوال را ترجمه کنید.', farsiSentence: 'ببخشید، ساعت چند است؟', answer: 'Excuse me, what time is it?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What time is it?', farsiPrompt: 'ساعت چند است؟', sentence: 'It is ___ o\'clock.', options: ['two', 'ten', 'four', 'six'], answer: 'four', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this time.', farsiPrompt: 'این زمان را ترجمه کنید.', farsiSentence: 'ساعت ده و نیم است.', answer: 'It is half past ten.', difficulty: 'Beginner' },
    ]
  ],
  "Beginner Challenge 3": [
    [ // Variation 1
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you cook food in a house?', farsiPrompt: 'در خانه کجا غذا می‌پزید؟', options: ['Bedroom', 'Living Room', 'Kitchen', 'Garden'], answer: 'Kitchen', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'کلیدها روی میز هستند.', answer: 'The keys are on the table.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What day comes after Tuesday?', farsiPrompt: 'چه روزی بعد از سه‌شنبه است؟', options: ['Monday', 'Wednesday', 'Thursday', 'Sunday'], answer: 'Wednesday', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'کتاب', answer: 'Book', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is 8:30 in words?', farsiPrompt: '۸:۳۰ به کلمات چه می‌شود؟', options: ['Eight o\'clock', 'Half past eight', 'Quarter to nine', 'Quarter past eight'], answer: 'Half past eight', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'پنجشنبه', answer: 'Thursday', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which room do you sleep in?', farsiPrompt: 'در کدام اتاق می‌خوابید؟', options: ['Kitchen', 'Bedroom', 'Bathroom', 'Living Room'], answer: 'Bedroom', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من در خانه هستم.', answer: 'I am at home.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use to write?', farsiPrompt: 'برای نوشتن از چه چیزی استفاده می‌کنید؟', options: ['Pen', 'Book', 'Chair', 'Table'], answer: 'Pen', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate 2:15.', farsiPrompt: '۲:۱۵ را ترجمه کنید.', farsiSentence: 'ساعت دو و ربع است.', answer: 'It is a quarter past two.', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you watch TV?', farsiPrompt: 'کجا تلویزیون تماشا می‌کنید؟', options: ['Living room', 'Kitchen', 'Garden', 'Bathroom'], answer: 'Living room', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'امروز یکشنبه است.', answer: 'Today is Sunday.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use a key for?', farsiPrompt: 'از کلید برای چه کاری استفاده می‌کنید؟', options: ['Reading a book', 'Opening a door', 'Calling a friend', 'Eating food'], answer: 'Opening a door', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ساعت شش است.', answer: 'It is six o\'clock.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If today is Friday, yesterday was ___', farsiPrompt: 'اگر امروز جمعه باشد، دیروز ___ بود.', options: ['Saturday', 'Thursday', 'Sunday', 'Wednesday'], answer: 'Thursday', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "حمام".', farsiPrompt: '"حمام" را ترجمه کنید.', farsiSentence: 'حمام', answer: 'Bathroom', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "12:00 AM"?', farsiPrompt: 'ساعت "12:00 AM" چیست؟', options: ['Noon', 'Midnight', 'Morning', 'Evening'], answer: 'Midnight', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'کتاب روی میز است.', answer: 'The book is on the table.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What day is the start of the weekend?', farsiPrompt: 'چه روزی شروع آخر هفته است؟', options: ['Friday', 'Monday', 'Sunday', 'Saturday'], answer: 'Saturday', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this object.', farsiPrompt: 'این شی را ترجمه کنید.', farsiSentence: 'تلفن', answer: 'Phone', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "صندلی" in English?', farsiPrompt: '"صندلی" به انگلیسی چه می‌شود؟', options: ['Table', 'Chair', 'Door', 'Window'], answer: 'Chair', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ساعت ده و نیم است.', answer: 'It is half past ten.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If today is Monday, tomorrow is ___', farsiPrompt: 'اگر امروز دوشنبه باشد، فردا ___ است.', options: ['Sunday', 'Tuesday', 'Wednesday', 'Friday'], answer: 'Tuesday', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'پنجره باز است.', answer: 'The window is open.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What time is 6:45?', farsiPrompt: 'ساعت ۶:۴۵ چند است؟', options: ['Quarter to seven', 'Quarter past six', 'Half past six', 'Six o\'clock'], answer: 'Quarter to seven', difficulty: 'Beginner' },
    ]
  ],
  "Months and Dates": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Month', farsiPrompt: 'ماه', sentence: 'There are twelve months in a year.', farsiSentenceExample: 'دوازده ماه در یک سال وجود دارد.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'January', farsiPrompt: 'ژانویه', sentence: 'January is the first month.', farsiSentenceExample: 'ژانویه اولین ماه است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How many months are in a year?', farsiPrompt: 'چند ماه در یک سال وجود دارد؟', options: ['10', '11', '12', '13'], answer: '12', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'ژانویه', answer: 'January', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Date', farsiPrompt: 'تاریخ', sentence: 'What is the date today?', farsiSentenceExample: 'امروز چه تاریخی است؟', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question.', farsiPrompt: 'این سوال را ترجمه کنید.', farsiSentence: 'امروز چه تاریخی است؟', answer: 'What is the date today?', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "دسامبر".', farsiPrompt: '"دسامبر" را ترجمه کنید.', farsiSentence: 'دسامبر', answer: 'December', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the last month of the year?', farsiPrompt: 'آخرین ماه سال چیست؟', options: ['January', 'November', 'December', 'October'], answer: 'December', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Year', farsiPrompt: 'سال', sentence: 'A new year begins in January.', farsiSentenceExample: 'یک سال جدید در ژانویه آغاز می‌شود.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'تولد من در ماه مه است.', answer: 'My birthday is in May.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which month comes after June?', farsiPrompt: 'کدام ماه بعد از ژوئن می‌آید؟', options: ['May', 'August', 'July', 'September'], answer: 'July', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'February', farsiPrompt: 'فوریه', sentence: 'February is the second month.', farsiSentenceExample: 'فوریه ماه دوم است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'March', farsiPrompt: 'مارس', sentence: 'Spring begins in March.', farsiSentenceExample: 'بهار در ماه مارس آغاز می‌شود.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What month comes after January?', farsiPrompt: 'چه ماهی بعد از ژانویه می‌آید؟', options: ['March', 'February', 'December', 'April'], answer: 'February', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "آوریل".', farsiPrompt: '"آوریل" را ترجمه کنید.', farsiSentence: 'آوریل', answer: 'April', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the first month of the year?', farsiPrompt: 'اولین ماه سال چیست؟', options: ['December', 'February', 'January', 'March'], answer: 'January', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "اکتبر".', farsiPrompt: '"اکتبر" را ترجمه کنید.', farsiSentence: 'اکتبر', answer: 'October', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'November', farsiPrompt: 'نوامبر', sentence: 'November is in autumn.', farsiSentenceExample: 'نوامبر در فصل پاییز است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What month comes before December?', farsiPrompt: 'چه ماهی قبل از دسامبر می‌آید؟', options: ['October', 'January', 'November', 'September'], answer: 'November', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'امروز اول ماه مه است.', answer: 'Today is May 1st.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which month is NOT in summer?', farsiPrompt: 'کدام ماه در تابستان نیست؟', options: ['June', 'July', 'August', 'January'], answer: 'January', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.LEARN, prompt: 'Birthday', farsiPrompt: 'تولد', sentence: 'When is your birthday?', farsiSentenceExample: 'تولد شما کی است؟', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "سال" in English?', farsiPrompt: '"سال" به انگلیسی چه می‌شود؟', options: ['Day', 'Month', 'Year', 'Date'], answer: 'Year', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question.', farsiPrompt: 'این سوال را ترجمه کنید.', farsiSentence: 'تاریخ امروز چیست؟', answer: 'What is today\'s date?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What month is between July and September?', farsiPrompt: 'چه ماهی بین ژوئیه و سپتامبر است؟', options: ['June', 'August', 'October', 'July'], answer: 'August', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "جولای".', farsiPrompt: '"جولای" را ترجمه کنید.', farsiSentence: 'جولای', answer: 'July', difficulty: 'Beginner' },
    ]
  ],
  "Weather Words": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Sunny', farsiPrompt: 'آفتابی', sentence: 'It is a sunny day.', farsiSentenceExample: 'امروز یک روز آفتابی است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Rainy', farsiPrompt: 'بارانی', sentence: 'Take your umbrella, it is a rainy day.', farsiSentenceExample: 'چترت را بردار, امروز یک روز بارانی است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'آفتابی', answer: 'Sunny', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'The sky is full of clouds. It is ___.', options: ['sunny', 'windy', 'cloudy', 'rainy'], answer: 'cloudy', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this word.', farsiPrompt: 'این کلمه را ترجمه کنید.', farsiSentence: 'بارانی', answer: 'Rainy', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "ابری".', farsiPrompt: '"ابری" را ترجمه کنید.', farsiSentence: 'ابری', answer: 'Cloudy', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Windy', farsiPrompt: 'بادی', sentence: 'It is very windy today.', farsiSentenceExample: 'امروز هوا خیلی بادی است.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you need on a rainy day?', farsiPrompt: 'در یک روز بارانی به چه چیزی نیاز دارید؟', options: ['Sunglasses', 'Umbrella', 'Hat', 'T-shirt'], answer: 'Umbrella', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'هوا خوب است.', answer: 'The weather is nice.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'When is it usually cold?', farsiPrompt: 'معمولاً چه زمانی هوا سرد است؟', options: ['Summer', 'Winter', 'Sunny', 'Hot'], answer: 'Winter', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Hot', farsiPrompt: 'گرم', sentence: 'Summer is very hot.', farsiSentenceExample: 'تابستان خیلی گرم است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Cold', farsiPrompt: 'سرد', sentence: 'Winter is very cold.', farsiSentenceExample: 'زمستان خیلی سرد است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of hot?', farsiPrompt: 'متضاد گرم چیست؟', options: ['Warm', 'Cold', 'Sunny', 'Cool'], answer: 'Cold', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'امروز هوا سرد است.', answer: 'It is cold today.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How is the weather?', farsiPrompt: 'هوا چطور است؟', sentence: 'The ___ is shining.', options: ['moon', 'sun', 'rain', 'wind'], answer: 'sun', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "برفی".', farsiPrompt: '"برفی" را ترجمه کنید.', farsiSentence: 'برفی', answer: 'Snowy', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'On a sunny day, I wear ___', farsiPrompt: 'در یک روز آفتابی، من ___ می‌پوشم.', options: ['a coat', 'sunglasses', 'a scarf', 'boots'], answer: 'sunglasses', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Weather', farsiPrompt: 'هوا', sentence: 'How is the weather today?', farsiSentenceExample: 'امروز هوا چطور است؟', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the question.', farsiPrompt: 'سوال را ترجمه کنید.', farsiSentence: 'هوا چطور است؟', answer: 'How is the weather?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What falls from the sky on a snowy day?', farsiPrompt: 'در یک روز برفی چه چیزی از آسمان می‌بارد؟', options: ['Rain', 'Sun', 'Snow', 'Wind'], answer: 'Snow', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.LEARN, prompt: 'Foggy', farsiPrompt: 'مه‌آلود', sentence: 'I can\'t see well because it is foggy.', farsiSentenceExample: 'نمی‌توانم خوب ببینم چون هوا مه‌آلود است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "بادی".', farsiPrompt: '"بادی" را ترجمه کنید.', options: ['Windy', 'Sunny', 'Rainy', 'Cloudy'], answer: 'Windy', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'هوا گرم و آفتابی است.', answer: 'The weather is hot and sunny.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A storm has wind and ___', farsiPrompt: 'طوفان باد و ___ دارد.', options: ['sun', 'snow', 'rain', 'fog'], answer: 'rain', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "مه‌آلود".', farsiPrompt: '"مه‌آلود" را ترجمه کنید.', farsiSentence: 'مه‌آلود', answer: 'Foggy', difficulty: 'Beginner' },
    ]
  ],
  "At a Restaurant": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Restaurant', farsiPrompt: 'رستوران', sentence: 'We are going to a restaurant for dinner.', farsiSentenceExample: 'ما برای شام به یک رستوران می‌رویم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Menu', farsiPrompt: 'منو', sentence: 'Can I see the menu?', farsiSentenceExample: 'می‌توانم منو را ببینم؟', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you eat food outside your home?', farsiPrompt: 'کجا بیرون از خانه غذا می‌خورید؟', options: ['Library', 'Restaurant', 'School', 'Park'], answer: 'Restaurant', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'یک میز برای دو نفر، لطفا.', answer: 'A table for two, please.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you read to choose your food?', farsiPrompt: 'برای انتخاب غذا چه چیزی را می‌خوانید؟', options: ['Book', 'Newspaper', 'Menu', 'Sign'], answer: 'Menu', difficulty: 'Beginner' },
    ],
    [ // Variation 2
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "گارسون".', farsiPrompt: '"گارسون" را ترجمه کنید.', farsiSentence: 'گارسون', answer: 'Waiter', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Order', farsiPrompt: 'سفارش دادن', sentence: 'Are you ready to order?', farsiSentenceExample: 'آیا برای سفارش دادن آماده‌اید؟', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Who takes your order at a restaurant?', farsiPrompt: 'چه کسی در رستوران سفارش شما را می‌گیرد؟', options: ['Chef', 'Manager', 'Waiter', 'Customer'], answer: 'Waiter', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من یک لیوان آب می‌خواهم.', answer: 'I would like a glass of water.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you ask for when you want to pay?', farsiPrompt: 'وقتی می‌خواهید پرداخت کنید چه چیزی درخواست می‌کنید؟', options: ['Menu', 'Water', 'Bill', 'Table'], answer: 'Bill', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Chef', farsiPrompt: 'سرآشپز', sentence: 'The chef cooks the food.', farsiSentenceExample: 'سرآشپز غذا را می‌پزد.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Bill / Check', farsiPrompt: 'صورتحساب', sentence: 'Can we have the bill, please?', farsiSentenceExample: 'می‌توانیم صورتحساب را داشته باشیم، لطفا؟', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Who cooks the food in a restaurant?', farsiPrompt: 'چه کسی در رستوران غذا را می‌پزد؟', options: ['Waiter', 'Chef', 'Customer', 'Manager'], answer: 'Chef', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'غذا خوشمزه است.', answer: 'The food is delicious.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is another word for "bill"?', farsiPrompt: 'کلمه دیگر برای "bill" چیست؟', options: ['Menu', 'Order', 'Check', 'Food'], answer: 'Check', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "سفارش دادن".', farsiPrompt: '"سفارش دادن" را ترجمه کنید.', farsiSentence: 'سفارش دادن', answer: 'To order', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Delicious', farsiPrompt: 'خوشمزه', sentence: 'This pasta is delicious!', farsiSentenceExample: 'این پاستا خوشمزه است!', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say if the food tastes good?', farsiPrompt: 'اگر غذا طعم خوبی داشته باشد چه می‌گویید؟', options: ['It is bad', 'It is delicious', 'It is cold', 'It is a menu'], answer: 'It is delicious', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من برای دسر کیک می‌خواهم.', answer: 'I want cake for dessert.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you call the person who eats at a restaurant?', farsiPrompt: 'به کسی که در رستوران غذا می‌خورد چه می‌گویند؟', options: ['Waiter', 'Chef', 'Customer', 'Manager'], answer: 'Customer', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.LEARN, prompt: 'Dessert', farsiPrompt: 'دسر', sentence: 'What do you have for dessert?', farsiSentenceExample: 'برای دسر چه دارید؟', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Ice cream is a type of...', farsiPrompt: 'بستنی یک نوع ... است.', options: ['drink', 'main course', 'dessert', 'appetizer'], answer: 'dessert', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا برای سفارش آماده‌اید؟', answer: 'Are you ready to order?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "منو".', farsiPrompt: '"منو" را ترجمه کنید.', options: ['Menu', 'Bill', 'Order', 'Food'], answer: 'Menu', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'صورتحساب لطفا.', answer: 'The bill please.', difficulty: 'Beginner' },
    ]
  ],
   "Shopping Basics": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Shop / Store', farsiPrompt: 'فروشگاه', sentence: 'I need to go to the shop to buy milk.', farsiSentenceExample: 'من باید برای خرید شیر به فروشگاه بروم.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Price', farsiPrompt: 'قیمت', sentence: 'What is the price of this shirt?', farsiSentenceExample: 'قیمت این پیراهن چقدر است؟', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "قیمت" in English?', farsiPrompt: '"قیمت" به انگلیسی چه می‌شود؟', options: ['Money', 'Price', 'Shop', 'Buy'], answer: 'Price', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'How do you ask for a price?', farsiPrompt: 'چطور قیمت را می‌پرسید؟', farsiSentence: 'قیمتش چنده؟', answer: 'How much is it?', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'I want to ___ a new phone.', options: ['sell', 'price', 'buy', 'shop'], answer: 'buy', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "خریدن".', farsiPrompt: '"خریدن" را ترجمه کنید.', farsiSentence: 'خریدن', answer: 'Buy', difficulty: 'Beginner' },
        { type: ExerciseType.LEARN, prompt: 'Money', farsiPrompt: 'پول', sentence: 'You need money to buy things.', farsiSentenceExample: 'شما برای خریدن چیزها به پول نیاز دارید.', answer: '', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you go to buy clothes?', farsiPrompt: 'برای خرید لباس به کجا می‌روید؟', options: ['Restaurant', 'Library', 'Clothing store', 'Park'], answer: 'Clothing store', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question.', farsiPrompt: 'این سوال را ترجمه کنید.', farsiSentence: 'قیمت این چقدر است؟', answer: 'How much does this cost?', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you use to pay?', farsiPrompt: 'برای پرداخت از چه چیزی استفاده می‌کنید؟', options: ['Price', 'Shop', 'Buy', 'Money'], answer: 'Money', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Sell', farsiPrompt: 'فروختن', sentence: 'They sell shoes in that store.', farsiSentenceExample: 'آنها در آن فروشگاه کفش می‌فروشند.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Customer', farsiPrompt: 'مشتری', sentence: 'The customer is always right.', farsiSentenceExample: 'همیشه حق با مشتری است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'The person who buys something is a ___', farsiPrompt: 'کسی که چیزی می‌خرد یک ___ است.', options: ['seller', 'shop', 'customer', 'price'], answer: 'customer', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من می‌خواهم یک کتاب بخرم.', answer: 'I want to buy a book.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of "buy"?', farsiPrompt: 'متضاد "buy" چیست؟', options: ['price', 'sell', 'shop', 'need'], answer: 'sell', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "پول".', farsiPrompt: '"پول" را ترجمه کنید.', farsiSentence: 'پول', answer: 'Money', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Expensive', farsiPrompt: 'گران', sentence: 'This car is too expensive.', farsiSentenceExample: 'این ماشین خیلی گران است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Cheap', farsiPrompt: 'ارزان', sentence: 'This t-shirt is very cheap.', farsiSentenceExample: 'این تی‌شرت خیلی ارزان است.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of "expensive"?', farsiPrompt: 'متضاد "expensive" چیست؟', options: ['cheap', 'new', 'big', 'good'], answer: 'cheap', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این خیلی گران است.', answer: 'This is too expensive.', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "فروشگاه" in English?', farsiPrompt: '"فروشگاه" به انگلیسی چه می‌شود؟', options: ['Shop', 'Money', 'Price', 'Customer'], answer: 'Shop', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate the question.', farsiPrompt: 'سوال را ترجمه کنید.', farsiSentence: 'قیمت آن چقدر است؟', answer: 'What is its price?', difficulty: 'Beginner' },
      { type: ExerciseType.LEARN, prompt: 'Pay', farsiPrompt: 'پرداخت کردن', sentence: 'You can pay with a credit card.', farsiSentenceExample: 'می‌توانید با کارت اعتباری پرداخت کنید.', answer: '', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which word means a low price?', farsiPrompt: 'کدام کلمه به معنای قیمت پایین است؟', options: ['Expensive', 'New', 'Cheap', 'Big'], answer: 'Cheap', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من به پول بیشتری نیاز دارم.', answer: 'I need more money.', difficulty: 'Beginner' },
    ]
  ],
  "Beginner Challenge 4": [
    [ // Variation 1
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What time is 4:30 in words?', farsiPrompt: '۴:۳۰ به حروف چه می‌شود؟', options: ['Four o\'clock', 'Quarter past four', 'Half past four', 'Quarter to five'], answer: 'Half past four', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this month.', farsiPrompt: 'این ماه را ترجمه کنید.', farsiSentence: 'ژانویه', answer: 'January', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If the sky is full of clouds, the weather is...', farsiPrompt: 'اگر آسمان پر از ابر باشد، هوا ... است.', options: ['Sunny', 'Rainy', 'Cloudy', 'Windy'], answer: 'Cloudy', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'این پیراهن خیلی گران است.', answer: 'This shirt is too expensive.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you ask for at the end of a meal in a restaurant?', farsiPrompt: 'در پایان غذا در رستوران چه چیزی درخواست می‌کنید؟', options: ['Menu', 'Bill', 'Water', 'Chef'], answer: 'Bill', difficulty: 'Beginner' },
    ],
    [ // Variation 2
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "9:45".', farsiPrompt: '"۹:۴۵" را ترجمه کنید.', farsiSentence: 'ساعت یک ربع به ده است.', answer: 'It is a quarter to ten.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the weather like in summer?', farsiPrompt: 'هوا در تابستان چطور است؟', options: ['Cold', 'Snowy', 'Hot', 'Freezing'], answer: 'Hot', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من می‌خواهم این کفش‌ها را بخرم.', answer: 'I want to buy these shoes.', difficulty: 'Beginner' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which month comes before April?', farsiPrompt: 'کدام ماه قبل از آوریل می‌آید؟', options: ['May', 'June', 'March', 'February'], answer: 'March', difficulty: 'Beginner' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "هوا بادی است".', farsiPrompt: '"هوا بادی است" را ترجمه کنید.', farsiSentence: 'هوا بادی است.', answer: 'It is windy.', difficulty: 'Beginner' },
    ],
    [ // Variation 3
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the last month of the year?', farsiPrompt: 'آخرین ماه سال چیست؟', options: ['January', 'December', 'November', 'October'], answer: 'December', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'منو لطفا.', answer: 'The menu, please.', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you need when it is rainy?', farsiPrompt: 'وقتی بارانی است به چه چیزی نیاز دارید؟', options: ['An umbrella', 'Sunglasses', 'A hat', 'A t-shirt'], answer: 'An umbrella', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "ارزان".', farsiPrompt: '"ارزان" را ترجمه کنید.', farsiSentence: 'ارزان', answer: 'Cheap', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is "1:00" in words?', farsiPrompt: '"۱:۰۰" به کلمات چه می‌شود؟', options: ['One thirty', 'One fifteen', 'One o\'clock', 'Two o\'clock'], answer: 'One o\'clock', difficulty: 'Beginner' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "فروشگاه".', farsiPrompt: '"فروشگاه" را ترجمه کنید.', farsiSentence: 'فروشگاه', answer: 'Store', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How is the weather in winter?', farsiPrompt: 'هوا در زمستان چطور است؟', options: ['Hot', 'Sunny', 'Cold', 'Warm'], answer: 'Cold', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question.', farsiPrompt: 'این سوال را ترجمه کنید.', farsiSentence: 'تولد شما کی است؟', answer: 'When is your birthday?', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Who cooks in a restaurant?', farsiPrompt: 'چه کسی در رستوران آشپزی می‌کند؟', options: ['Waiter', 'Customer', 'Chef', 'Manager'], answer: 'Chef', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "برفی".', farsiPrompt: '"برفی" را ترجمه کنید.', farsiSentence: 'برفی', answer: 'Snowy', difficulty: 'Beginner' },
    ],
    [ // Variation 5
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of "buy"?', farsiPrompt: 'متضاد "buy" چیست؟', options: ['Sell', 'Pay', 'Cost', 'Have'], answer: 'Sell', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate "آب و هوا".', farsiPrompt: '"آب و هوا" را ترجمه کنید.', farsiSentence: 'آب و هوا', answer: 'Weather', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What month is between October and December?', farsiPrompt: 'چه ماهی بین اکتبر و دسامبر است؟', options: ['September', 'November', 'January', 'October'], answer: 'November', difficulty: 'Beginner' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this food word.', farsiPrompt: 'این کلمه غذایی را ترجمه کنید.', farsiSentence: 'دسر', answer: 'Dessert', difficulty: 'Beginner' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Translate "مه‌آلود".', farsiPrompt: '"مه‌آلود" را ترجمه کنید.', options: ['Foggy', 'Sunny', 'Windy', 'Snowy'], answer: 'Foggy', difficulty: 'Beginner' },
    ]
  ],

  // ---- INTERMEDIATE LESSONS ----
  "Ordering Food": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'I would like to order...', farsiPrompt: 'من می خواهم سفارش بدهم...', sentence: 'You can say, "I would like to order the chicken soup."', farsiSentenceExample: 'می‌توانید بگویید، "من می‌خواهم سوپ مرغ سفارش دهم."', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا می توانم منو را ببینم، لطفا؟', answer: 'Can I see the menu, please?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Main course', farsiPrompt: 'غذای اصلی', sentence: 'For the main course, I will have the fish.', farsiSentenceExample: 'برای غذای اصلی، من ماهی می‌خورم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a small dish before the main meal?', farsiPrompt: 'غذای کوچکی که قبل از غذای اصلی خورده می‌شود چیست؟', options: ['Dessert', 'Main course', 'Appetizer', 'Drink'], answer: 'Appetizer', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'صورتحساب، لطفا.', answer: 'The bill, please.', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
      { type: ExerciseType.LEARN, prompt: 'Appetizer', farsiPrompt: 'پیش‌غذا', sentence: 'Let\'s start with an appetizer.', farsiSentenceExample: 'بیایید با یک پیش‌غذا شروع کنیم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is another word for the main dish?', farsiPrompt: 'کلمه دیگر برای غذای اصلی چیست؟', options: ['Main course', 'Dessert', 'Starter', 'Drink'], answer: 'Main course', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'پیشنهاد شما چیست؟', answer: 'What do you recommend?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Reservation', farsiPrompt: 'رزرو', sentence: 'I have a reservation for two people.', farsiSentenceExample: 'من برای دو نفر رزرو دارم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من به آجیل حساسیت دارم.', answer: 'I am allergic to nuts.', difficulty: 'Intermediate' },
    ],
    [ // Variation 3
      { type: ExerciseType.LEARN, prompt: 'Side dish', farsiPrompt: 'غذای جانبی', sentence: 'I would like a side dish of fries.', farsiSentenceExample: 'من یک غذای جانبی سیب‌زمینی سرخ کرده می‌خواهم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a drink?', farsiPrompt: 'کدام یک از این‌ها نوشیدنی است؟', options: ['Steak', 'Salad', 'Water', 'Cake'], answer: 'Water', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا این غذا تند است؟', answer: 'Is this dish spicy?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Spicy', farsiPrompt: 'تند', sentence: 'I like spicy food.', farsiSentenceExample: 'من غذای تند دوست دارم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the last part of a meal?', farsiPrompt: 'آخرین بخش یک وعده غذایی چیست؟', options: ['Appetizer', 'Main course', 'Dessert', 'Side dish'], answer: 'Dessert', difficulty: 'Intermediate' },
    ],
    [ // Variation 4
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'می‌توانم یک لیوان آب دیگر داشته باشم؟', answer: 'Can I have another glass of water?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Vegetarian', farsiPrompt: 'گیاهخواری', sentence: 'Do you have any vegetarian options?', farsiSentenceExample: 'آیا گزینه‌های گیاهخواری دارید؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A person who does not eat meat is a...', farsiPrompt: 'شخصی که گوشت نمی‌خورد ... است.', options: ['Chef', 'Waiter', 'Vegetarian', 'Customer'], answer: 'Vegetarian', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'همه چیز عالی بود، متشکرم.', answer: 'Everything was delicious, thank you.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you call the list of foods?', farsiPrompt: 'لیست غذاها را چه می‌نامید؟', options: ['Bill', 'Menu', 'Reservation', 'Recipe'], answer: 'Menu', difficulty: 'Intermediate' },
    ],
    [ // Variation 5
      { type: ExerciseType.LEARN, prompt: 'Allergic', farsiPrompt: 'حساسیت داشتن', sentence: 'I am allergic to seafood.', farsiSentenceExample: 'من به غذاهای دریایی حساسیت دارم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من همان چیزی را که او می‌خورد، می‌خواهم.', answer: 'I will have the same as him/her.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the first course of a meal?', farsiPrompt: 'اولین بخش یک وعده غذایی چیست؟', options: ['Dessert', 'Main course', 'Appetizer', 'Drink'], answer: 'Appetizer', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا رزرو دارید؟', answer: 'Do you have a reservation?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A small salad served with the main meal is a ___', farsiPrompt: 'یک سالاد کوچک که با غذای اصلی سرو می‌شود یک ___ است.', options: ['dessert', 'side dish', 'appetizer', 'drink'], answer: 'side dish', difficulty: 'Intermediate' },
    ]
  ],
  "Shopping for Clothes": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'Fitting room', farsiPrompt: 'اتاق پرو', sentence: 'Where is the fitting room?', farsiSentenceExample: 'اتاق پرو کجاست؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'می توانم این را پرو کنم؟', answer: 'Can I try this on?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Size', farsiPrompt: 'سایز', sentence: 'What size is this t-shirt?', farsiSentenceExample: 'این تی شرت چه سایزی است؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If a shirt is too big, you need a smaller ___', farsiPrompt: 'اگر یک پیراهن خیلی بزرگ باشد، به یک ___ کوچکتر نیاز دارید.', options: ['color', 'price', 'size', 'style'], answer: 'size', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این برای من خیلی گران است.', answer: 'This is too expensive for me.', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
      { type: ExerciseType.LEARN, prompt: 'I\'m just looking.', farsiPrompt: 'فقط دارم نگاه می‌کنم.', sentence: 'When a salesperson asks to help, you can say "I\'m just looking, thanks."', farsiSentenceExample: 'وقتی یک فروشنده برای کمک می‌پرسد، می‌توانید بگویید "فقط دارم نگاه می‌کنم، ممنون."', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you try on clothes?', farsiPrompt: 'کجا لباس پرو می‌کنید؟', options: ['Cashier', 'Entrance', 'Fitting room', 'Window'], answer: 'Fitting room', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا این را در رنگ آبی دارید؟', answer: 'Do you have this in blue?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'On sale', farsiPrompt: 'در حراج', sentence: 'These shoes are on sale for 50% off.', farsiSentenceExample: 'این کفش‌ها با ۵۰٪ تخفیف در حراج هستند.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If something is "on sale", it is...', farsiPrompt: 'اگر چیزی "در حراج" باشد، ... است.', options: ['more expensive', 'cheaper', 'a new arrival', 'sold out'], answer: 'cheaper', difficulty: 'Intermediate' },
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'قیمت این چقدر است؟', answer: 'How much does this cost?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Credit card', farsiPrompt: 'کارت اعتباری', sentence: 'Do you accept credit cards?', farsiSentenceExample: 'آیا کارت اعتباری قبول می‌کنید؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you pay for your items?', farsiPrompt: 'کجا برای اجناس خود پول پرداخت می‌کنید؟', options: ['Fitting room', 'Entrance', 'Cashier', 'Storage'], answer: 'Cashier', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این سایز من نیست.', answer: 'This is not my size.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Cashier', farsiPrompt: 'صندوق‌دار', sentence: 'Please pay at the cashier.', farsiSentenceExample: 'لطفا در صندوق پرداخت کنید.', answer: '', difficulty: 'Intermediate' },
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'It fits perfectly.', farsiPrompt: 'کاملاً اندازه است.', sentence: 'I tried on the jacket and it fits perfectly.', farsiSentenceExample: 'ژاکت را پرو کردم و کاملاً اندازه بود.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say if the clothes are the right size?', farsiPrompt: 'اگر لباس اندازه مناسبی داشته باشد چه می‌گویید؟', options: ['It is too big', 'It is too small', 'It fits perfectly', 'It is on sale'], answer: 'It fits perfectly', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من این را می‌خرم.', answer: 'I will take it.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which is a type of payment?', farsiPrompt: 'کدام یک نوع پرداخت است؟', options: ['Size', 'Color', 'Cash', 'Sale'], answer: 'Cash', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'اتاق پرو کجاست؟', answer: 'Where is the fitting room?', difficulty: 'Intermediate' },
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا سایز بزرگتر دارید؟', answer: 'Do you have a larger size?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Receipt', farsiPrompt: 'رسید', sentence: 'Please keep your receipt for returns.', farsiSentenceExample: 'لطفا رسید خود را برای مرجوعی نگه دارید.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you get after you pay?', farsiPrompt: 'بعد از پرداخت چه چیزی دریافت می‌کنید؟', options: ['A discount', 'A receipt', 'A new size', 'A fitting room'], answer: 'A receipt', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این شلوار در حراج است.', answer: 'These pants are on sale.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a polite way to refuse help?', farsiPrompt: 'راه مودبانه برای رد کردن کمک چیست؟', options: ['Go away', 'I don\'t need help', 'I\'m just looking, thanks', 'This is expensive'], answer: 'I\'m just looking, thanks', difficulty: 'Intermediate' },
    ]
  ],
  "Asking for Directions": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'Excuse me', farsiPrompt: 'ببخشید', sentence: 'Start by saying "Excuse me" to get someone\'s attention.', farsiSentenceExample: 'برای جلب توجه کسی با گفتن "ببخشید" شروع کنید.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'چطور می‌توانم به موزه بروم؟', answer: 'How do I get to the museum?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Turn left / Turn right', farsiPrompt: 'به چپ بپیچید / به راست بپیچید', sentence: 'Turn left at the next corner.', farsiSentenceExample: 'در تقاطع بعدی به چپ بپیچید.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of "left"?', farsiPrompt: 'متضاد "چپ" چیست؟', options: ['Up', 'Down', 'Right', 'Straight'], answer: 'Right', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'مستقیم برو.', answer: 'Go straight ahead.', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
      { type: ExerciseType.LEARN, prompt: 'Where is the nearest...?', farsiPrompt: 'نزدیکترین ... کجاست؟', sentence: 'Where is the nearest train station?', farsiSentenceExample: 'نزدیکترین ایستگاه قطار کجاست؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask for directions?', farsiPrompt: 'چطور آدرس می‌پرسید؟', options: ['What time is it?', 'How much is this?', 'Can you help me?', 'What is your name?'], answer: 'Can you help me?', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'بیمارستان آن طرف خیابان است.', answer: 'The hospital is across the street.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Across the street', farsiPrompt: 'آن طرف خیابان', sentence: 'The pharmacy is across the street from the bank.', farsiSentenceExample: 'داروخانه آن طرف خیابان روبروی بانک است.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Choose the correct preposition.', farsiPrompt: 'حرف اضافه صحیح را انتخاب کنید.', sentence: 'The park is ___ the corner.', options: ['on', 'in', 'at', 'under'], answer: 'on', difficulty: 'Intermediate' },
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ببخشید، من گم شده‌ام.', answer: 'Excuse me, I am lost.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Go past the...', farsiPrompt: 'از ... عبور کنید', sentence: 'Go past the supermarket and the library is on your right.', farsiSentenceExample: 'از سوپرمارکت عبور کنید و کتابخانه سمت راست شماست.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If you "go past" something, you...', farsiPrompt: 'اگر از چیزی "عبور کنید"، شما...', options: ['stop at it', 'go beyond it', 'turn before it', 'enter it'], answer: 'go beyond it', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'دو بلوک مستقیم بروید.', answer: 'Go straight for two blocks.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Block', farsiPrompt: 'بلوک (ساختمانی)', sentence: 'The hotel is just one block away.', farsiSentenceExample: 'هتل فقط یک بلوک فاصله دارد.', answer: '', difficulty: 'Intermediate' },
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'It\'s on the left/right.', farsiPrompt: 'سمت چپ/راست است.', sentence: 'You will see the post office. It\'s on the left.', farsiSentenceExample: 'اداره پست را خواهید دید. سمت چپ است.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask for the location of a bank?', farsiPrompt: 'چطور مکان یک بانک را می‌پرسید؟', options: ['Where is the bank?', 'How is the bank?', 'What is the bank?', 'Who is the bank?'], answer: 'Where is the bank?', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا از اینجا دور است؟', answer: 'Is it far from here?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'To go to the next street, you must ___ right.', farsiPrompt: 'برای رفتن به خیابان بعدی، باید به راست ___', options: ['go', 'turn', 'stop', 'past'], answer: 'turn', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'متشکرم برای کمکتان.', answer: 'Thank you for your help.', difficulty: 'Intermediate' },
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'نزدیکترین ایستگاه اتوبوس کجاست؟', answer: 'Where is the nearest bus stop?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'You can\'t miss it.', farsiPrompt: 'حتما پیدایش می‌کنید (گم نمی‌کنید).', sentence: 'It\'s a big red building. You can\'t miss it.', farsiSentenceExample: 'این یک ساختمان بزرگ قرمز است. حتما پیدایش می‌کنید.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "go straight ahead" mean?', farsiPrompt: '"مستقیم برو" به چه معناست؟', options: ['Turn left', 'Turn right', 'Stop', 'Continue forward'], answer: 'Continue forward', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'بعد از چراغ راهنمایی به راست بپیچید.', answer: 'Turn right after the traffic light.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a polite way to start asking for directions?', farsiPrompt: 'راه مودبانه برای شروع پرسیدن آدرس چیست؟', options: ['Hey you!', 'Where is it?', 'Excuse me...', 'I need help!'], answer: 'Excuse me...', difficulty: 'Intermediate' },
    ]
  ],
  "Intermediate Challenge 1": [
    [ // Variation 1
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate a request at a restaurant.', farsiPrompt: 'یک درخواست در رستوران را ترجمه کنید.', farsiSentence: 'می توانم صورتحساب را داشته باشم، لطفا؟', answer: 'Can I have the bill, please?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you try on clothes?', farsiPrompt: 'کجا لباس را پرو می کنید؟', options: ['The cashier', 'The fitting room', 'The entrance', 'The stock room'], answer: 'The fitting room', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate a question for directions.', farsiPrompt: 'یک سوال برای آدرس پرسیدن ترجمه کنید.', farsiSentence: 'ببخشید، چطور می توانم به ایستگاه قطار بروم؟', answer: 'Excuse me, how do I get to the train station?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A meal you eat before the main course is an...', farsiPrompt: 'وعده ای که قبل از غذای اصلی می خورید ... است.', options: ['dessert', 'beverage', 'appetizer', 'side dish'], answer: 'appetizer', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate a statement while shopping.', farsiPrompt: 'یک جمله در حین خرید را ترجمه کنید.', farsiSentence: 'این برای من خیلی گران است.', answer: 'This is too expensive for me.', difficulty: 'Intermediate' },
    ],
    [ // Variation 2
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say if you want to pay at a restaurant?', farsiPrompt: 'اگر بخواهید در رستوران پول پرداخت کنید چه می گویید؟', options: ['The menu, please.', 'The bill, please.', 'A table, please.', 'Water, please.'], answer: 'The bill, please.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this direction.', farsiPrompt: 'این جهت را ترجمه کنید.', farsiSentence: 'در تقاطع بعدی به چپ بپیچید.', answer: 'Turn left at the next intersection.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say to a sales assistant if you don\'t need help?', farsiPrompt: 'اگر به کمک فروشنده نیاز ندارید چه می گویید؟', options: ['I will take it.', 'How much is it?', 'I\'m just looking, thanks.', 'It fits perfectly.'], answer: 'I\'m just looking, thanks.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من یک میز برای دو نفر رزرو کرده ام.', answer: 'I have a reservation for two.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the opposite of "turn right"?', farsiPrompt: 'متضاد "به راست بپیچید" چیست؟', options: ['Go straight', 'Turn left', 'Stop here', 'Go back'], answer: 'Turn left', difficulty: 'Intermediate' },
    ],
    [ // Variation 3
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate a common question when shopping.', farsiPrompt: 'یک سوال رایج هنگام خرید را ترجمه کنید.', farsiSentence: 'آیا این را در سایز متوسط دارید؟', answer: 'Do you have this in a medium size?', difficulty: 'Intermediate' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask for the nearest bank?', farsiPrompt: 'چطور آدرس نزدیکترین بانک را می‌پرسید؟', options: ['Where is the nearest bank?', 'How much is the nearest bank?', 'Can I have the nearest bank?', 'Is this the nearest bank?'], answer: 'Where is the nearest bank?', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate a request to a waiter.', farsiPrompt: 'یک درخواست به گارسون را ترجمه کنید.', farsiSentence: 'پیشنهاد شما چیست؟', answer: 'What do you recommend?', difficulty: 'Intermediate' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If a piece of clothing is "on sale," it is usually...', farsiPrompt: 'اگر یک تکه لباس "در حراج" باشد، معمولا...', options: ['more expensive', 'cheaper', 'out of stock', 'full price'], answer: 'cheaper', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this direction.', farsiPrompt: 'این جهت را ترجمه کنید.', farsiSentence: 'مستقیم برای دو بلوک بروید.', answer: 'Go straight for two blocks.', difficulty: 'Intermediate' },
    ],
    [ // Variation 4
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Where do you pay for clothes in a store?', farsiPrompt: 'کجا برای لباس در یک فروشگاه پول پرداخت می‌کنید؟', options: ['Fitting room', 'Entrance', 'Cashier', 'Window'], answer: 'Cashier', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question about food.', farsiPrompt: 'این سوال در مورد غذا را ترجمه کنید.', farsiSentence: 'آیا این غذا گزینه‌های گیاهی دارد؟', answer: 'Does this dish have vegetarian options?', difficulty: 'Intermediate' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A polite way to get someone\'s attention is to say...', farsiPrompt: 'یک راه مودبانه برای جلب توجه کسی این است که بگویید...', options: ['Hey!', 'Listen!', 'Excuse me.', 'You!'], answer: 'Excuse me.', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this shopping phrase.', farsiPrompt: 'این عبارت خرید را ترجمه کنید.', farsiSentence: 'می‌توانم این را پرو کنم؟', answer: 'Can I try this on?', difficulty: 'Intermediate' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a "side dish"?', farsiPrompt: '"غذای جانبی" چیست؟', options: ['The main meal', 'A drink', 'A small dish served with the main course', 'Dessert'], answer: 'A small dish served with the main course', difficulty: 'Intermediate' },
    ],
    [ // Variation 5
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this direction.', farsiPrompt: 'این جهت را ترجمه کنید.', farsiSentence: 'کتابفروشی آن طرف خیابان است.', answer: 'The bookstore is across the street.', difficulty: 'Intermediate' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a "reservation" in a restaurant context?', farsiPrompt: '"رزرو" در زمینه رستوران چیست؟', options: ['The list of food', 'A table saved for you', 'The final bill', 'The head chef'], answer: 'A table saved for you', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question about payment.', farsiPrompt: 'این سوال در مورد پرداخت را ترجمه کنید.', farsiSentence: 'آیا کارت اعتباری قبول می‌کنید؟', answer: 'Do you accept credit cards?', difficulty: 'Intermediate' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "you can\'t miss it" mean?', farsiPrompt: 'عبارت "you can\'t miss it" به چه معناست؟', options: ['It is very difficult to find', 'It is very easy to find', 'It is not there', 'It is closed'], answer: 'It is very easy to find', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this food item.', farsiPrompt: 'این مورد غذایی را ترجمه کنید.', farsiSentence: 'پیش‌غذا', answer: 'Appetizer', difficulty: 'Intermediate' },
    ]
  ],
  "Making Plans": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'Are you free...?', farsiPrompt: 'آیا ... وقتت آزاد است؟', sentence: 'Are you free on Saturday?', farsiSentenceExample: 'آیا شنبه وقتت آزاد است؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'می‌خواهی امشب فیلم ببینی؟', answer: 'Do you want to watch a movie tonight?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'That sounds good.', farsiPrompt: 'فکر خوبیه.', sentence: 'A: "Let\'s go to the park." B: "That sounds good."', farsiSentenceExample: 'الف: "بیا به پارک برویم." ب: "فکر خوبیه."', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you accept a plan?', farsiPrompt: 'چطور یک برنامه را قبول می‌کنی؟', options: ['I\'m busy.', 'Maybe next time.', 'That sounds good.', 'I don\'t want to.'], answer: 'That sounds good.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'چه ساعتی باید ملاقات کنیم؟', answer: 'What time should we meet?', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
      { type: ExerciseType.LEARN, prompt: 'What about...?', farsiPrompt: '... چطوره؟', sentence: 'What about going for a coffee?', farsiSentenceExample: 'رفتن برای یک قهوه چطوره؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you suggest an activity?', farsiPrompt: 'چطور یک فعالیت را پیشنهاد می‌دهی؟', options: ['What about...?', 'Are you free...?', 'Let\'s...', 'All of the above'], answer: 'All of the above', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'متاسفم، من سرم شلوغ است.', answer: 'Sorry, I am busy.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Let\'s meet at...', farsiPrompt: 'بیا در ... ملاقات کنیم.', sentence: 'Let\'s meet at the cinema at 7 PM.', farsiSentenceExample: 'بیا ساعت ۷ عصر در سینما ملاقات کنیم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من منتظرش هستم.', answer: 'I am looking forward to it.', difficulty: 'Intermediate' },
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'برنامه‌ات برای آخر هفته چیست؟', answer: 'What are your plans for the weekend?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'I\'m sorry, I can\'t.', farsiPrompt: 'متاسفم، نمی‌توانم.', sentence: 'A polite way to refuse an invitation.', farsiSentenceExample: 'یک راه مودبانه برای رد کردن یک دعوت.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you refuse a plan politely?', farsiPrompt: 'چطور یک برنامه را مودبانه رد می‌کنی؟', options: ['No, I won\'t.', 'I\'m sorry, I can\'t.', 'That\'s a bad idea.', 'I am not coming.'], answer: 'I\'m sorry, I can\'t.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'شاید دفعه بعد.', answer: 'Maybe next time.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "Are you ___ tomorrow evening?"', farsiPrompt: 'جمله را کامل کنید.', options: ['good', 'busy', 'free', 'late'], answer: 'free', difficulty: 'Intermediate' },
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'How about...?', farsiPrompt: '... چطوره؟', sentence: 'How about Friday instead?', farsiSentenceExample: 'جمعه به جای آن چطوره؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'بیا فردا به خرید برویم.', answer: 'Let\'s go shopping tomorrow.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which phrase is used to agree with a plan?', farsiPrompt: 'کدام عبارت برای موافقت با یک برنامه استفاده می‌شود؟', options: ['I\'m not sure.', 'Sounds great!', 'I am busy.', 'I can\'t.'], answer: 'Sounds great!', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'کجا باید ملاقات کنیم؟', answer: 'Where should we meet?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'To be busy', farsiPrompt: 'مشغول بودن / سرشلوغ بودن', sentence: 'I can\'t go out, I\'m busy with my work.', farsiSentenceExample: 'نمی‌توانم بیرون بروم، سرم با کارم شلوغ است.', answer: '', difficulty: 'Intermediate' },
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا دوست داری به مهمانی بیایی؟', answer: 'Would you like to come to the party?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A positive response to "Do you want to go out?" is:', farsiPrompt: 'پاسخ مثبت به "می‌خواهی بیرون بروی؟" این است:', options: ['I am busy.', 'Sure!', 'Not now.', 'I am tired.'], answer: 'Sure!', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'To hang out', farsiPrompt: 'وقت گذراندن (دوستانه)', sentence: 'Let\'s hang out this weekend.', farsiSentenceExample: 'بیا این آخر هفته با هم وقت بگذرانیم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این عالی به نظر می‌رسد!', answer: 'That sounds great!', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask about someone\'s availability?', farsiPrompt: 'چطور در مورد در دسترس بودن کسی سوال می‌کنی؟', options: ['How old are you?', 'Where are you from?', 'Are you free?', 'What do you do?'], answer: 'Are you free?', difficulty: 'Intermediate' },
    ]
  ],
  "Hobbies and Interests": [
    [ // Variation 1
        { type: ExerciseType.LEARN, prompt: 'Hobby', farsiPrompt: 'سرگرمی', sentence: 'My hobby is reading books.', farsiSentenceExample: 'سرگرمی من کتاب خواندن است.', answer: '', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'سرگرمی های شما چیست؟', answer: 'What are your hobbies?', difficulty: 'Intermediate' },
        { type: ExerciseType.LEARN, prompt: 'I like to...', farsiPrompt: 'من دوست دارم...', sentence: 'I like to play football.', farsiSentenceExample: 'من دوست دارم فوتبال بازی کنم.', answer: '', difficulty: 'Intermediate' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of these is a common hobby?', farsiPrompt: 'کدام یک از این ها یک سرگرمی رایج است؟', options: ['Working', 'Sleeping', 'Playing video games', 'Eating'], answer: 'Playing video games', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من از گوش دادن به موسیقی لذت می برم.', answer: 'I enjoy listening to music.', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
        { type: ExerciseType.LEARN, prompt: 'In my free time...', farsiPrompt: 'در اوقات فراغتم...', sentence: 'In my free time, I watch movies.', farsiSentenceExample: 'در اوقات فراغتم، فیلم تماشا می‌کنم.', answer: '', difficulty: 'Intermediate' },
        { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask about someone\'s interests?', farsiPrompt: 'چطور در مورد علایق کسی سوال می‌کنی؟', options: ['What are your hobbies?', 'What do you like to do?', 'What are you interested in?', 'All of the above'], answer: 'All of the above', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من از نقاشی کردن لذت می برم.', answer: 'I enjoy painting.', difficulty: 'Intermediate' },
        { type: ExerciseType.LEARN, prompt: 'To be interested in...', farsiPrompt: 'علاقمند بودن به...', sentence: 'She is interested in photography.', farsiSentenceExample: 'او به عکاسی علاقمند است.', answer: '', difficulty: 'Intermediate' },
        { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من به ورزش علاقمندم.', answer: 'I am interested in sports.', difficulty: 'Intermediate' }
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آیا سرگرمی خاصی داری؟', answer: 'Do you have any hobbies?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'To enjoy...', farsiPrompt: 'لذت بردن از...', sentence: 'I enjoy reading comics.', farsiSentenceExample: 'من از خواندن کمیک لذت می برم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence: "She enjoys ___ the guitar."', farsiPrompt: 'جمله را کامل کنید.', options: ['play', 'playing', 'to playing', 'plays'], answer: 'playing', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'سرگرمی مورد علاقه من باغبانی است.', answer: 'My favorite hobby is gardening.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: '"What do you do in your free time?" is another way to ask...', farsiPrompt: '"در اوقات فراغتت چه کار می‌کنی؟" راه دیگری برای پرسیدن ... است.', options: ['What is your job?', 'What are your hobbies?', 'How old are you?', 'Where do you live?'], answer: 'What are your hobbies?', difficulty: 'Intermediate' }
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'To be a fan of...', farsiPrompt: 'طرفدار ... بودن', sentence: 'I am a big fan of science fiction movies.', farsiSentenceExample: 'من طرفدار بزرگ فیلم‌های علمی-تخیلی هستم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من طرفدار فوتبال نیستم.', answer: 'I am not a fan of football.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If you are "interested in" something, you...', farsiPrompt: 'اگر به چیزی "علاقمند" باشید، شما...', options: ['dislike it', 'like it', 'are bored by it', 'don\'t know it'], answer: 'like it', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'در اوقات فراغتم، دوست دارم پیاده‌روی کنم.', answer: 'In my free time, I like to go hiking.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Hiking', farsiPrompt: 'پیاده‌روی در طبیعت', sentence: 'Hiking in the mountains is a great exercise.', farsiSentenceExample: 'پیاده‌روی در کوهستان یک ورزش عالی است.', answer: '', difficulty: 'Intermediate' }
    ],
    [ // Variation 5
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a "hobby"?', farsiPrompt: '"سرگرمی" چیست؟', options: ['A job', 'An activity you do for fun', 'A type of food', 'A place you live'], answer: 'An activity you do for fun', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من دوست دارم بازی های ویدیویی انجام دهم.', answer: 'I like to play video games.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Cooking', farsiPrompt: 'آشپزی', sentence: 'Cooking can be a very relaxing hobby.', farsiSentenceExample: 'آشپزی می‌تواند یک سرگرمی بسیار آرامش‌بخش باشد.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which of the following is an indoor hobby?', farsiPrompt: 'کدام یک از موارد زیر یک سرگرمی داخل خانه است؟', options: ['Swimming', 'Playing chess', 'Cycling', 'Gardening'], answer: 'Playing chess', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من به یادگیری زبان های جدید علاقمندم.', answer: 'I am interested in learning new languages.', difficulty: 'Intermediate' }
    ]
  ],
  "Talking about the Weather": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'How\'s the weather?', farsiPrompt: 'هوا چطوره؟', sentence: 'A common way to start a conversation is to ask, "How\'s the weather?"', farsiSentenceExample: 'یک راه رایج برای شروع گفتگو این است که بپرسید، "هوا چطوره؟"', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'امروز یک روز زیباست.', answer: 'It\'s a beautiful day today.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'It looks like rain.', farsiPrompt: 'به نظر میاد میخواد بارون بیاد.', sentence: 'The sky is dark. It looks like rain.', farsiSentenceExample: 'آسمان تاریک است. به نظر میاد میخواد بارون بیاد.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you say when the temperature is high?', farsiPrompt: 'وقتی دما بالاست چه می‌گویید؟', options: ['It\'s freezing.', 'It\'s a bit chilly.', 'It\'s boiling hot.', 'It\'s cool.'], answer: 'It\'s boiling hot.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'فردا هوا چطور خواهد بود؟', answer: 'What will the weather be like tomorrow?', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
      { type: ExerciseType.LEARN, prompt: 'It\'s a bit chilly.', farsiPrompt: 'کمی سرده.', sentence: 'You might need a jacket; it\'s a bit chilly outside.', farsiSentenceExample: 'شاید به یک ژاکت نیاز داشته باشید؛ بیرون کمی سرده.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the "weather forecast"?', farsiPrompt: '"پیش‌بینی آب و هوا" چیست؟', options: ['A report on past weather', 'A prediction of future weather', 'A type of cloud', 'A season'], answer: 'A prediction of future weather', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من عاشق هوای آفتابی هستم.', answer: 'I love sunny weather.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Humid', farsiPrompt: 'مرطوب / شرجی', sentence: 'It\'s very humid today; the air feels sticky.', farsiSentenceExample: 'امروز هوا خیلی مرطوبه؛ هوا چسبناک به نظر می‌رسه.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'پیش‌بینی می‌گوید آخر هفته طوفانی خواهد بود.', answer: 'The forecast says it will be stormy on the weekend.', difficulty: 'Intermediate' },
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'بیرون داره می‌باره.', answer: 'It\'s pouring outside.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Pouring (rain)', farsiPrompt: 'باریدن (باران شدید)', sentence: 'I can\'t go out now, it\'s pouring!', farsiSentenceExample: 'الان نمی‌تونم بیرون برم، داره سیل میاد!', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A light wind is called a...', farsiPrompt: 'یک باد ملایم ... نامیده می‌شود.', options: ['storm', 'gale', 'breeze', 'hurricane'], answer: 'breeze', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'دمای هوا امروز چقدر است؟', answer: 'What is the temperature today?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Temperature', farsiPrompt: 'دما', sentence: 'The temperature is 25 degrees Celsius.', farsiSentenceExample: 'دما ۲۵ درجه سانتیگراد است.', answer: '', difficulty: 'Intermediate' }
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'Overcast', farsiPrompt: 'ابری / گرفته', sentence: 'The sky is completely overcast; there is no sun.', farsiSentenceExample: 'آسمان کاملاً گرفته است؛ هیچ خورشیدی نیست.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "chilly" mean?', farsiPrompt: '"Chilly" به چه معناست؟', options: ['Very hot', 'Pleasantly cool', 'Unpleasantly cold', 'Very windy'], answer: 'Unpleasantly cold', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'امیدوارم فردا باران نبارد.', answer: 'I hope it doesn\'t rain tomorrow.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What kind of weather is good for a picnic?', farsiPrompt: 'چه نوع هوایی برای پیک نیک خوب است؟', options: ['Stormy', 'Freezing', 'Sunny and warm', 'Foggy'], answer: 'Sunny and warm', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'یک نسیم خنک می‌وزد.', answer: 'There is a cool breeze.', difficulty: 'Intermediate' }
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'چه روز وحشتناکی!', answer: 'What terrible weather!', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Drizzle', farsiPrompt: 'نم نم باران', sentence: 'It\'s not raining hard, just a light drizzle.', farsiSentenceExample: 'باران شدیدی نمی‌بارد، فقط یک نم نم باران است.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If the sky is "overcast", it is...', farsiPrompt: 'اگر آسمان "overcast" باشد، ... است.', options: ['clear and blue', 'full of gray clouds', 'raining heavily', 'very sunny'], answer: 'full of gray clouds', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من هوای سرد را به هوای گرم ترجیح می‌دهم.', answer: 'I prefer cold weather to hot weather.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "humid" describe?', farsiPrompt: '"Humid" چه چیزی را توصیف می‌کند؟', options: ['The temperature', 'The wind speed', 'The amount of moisture in the air', 'The amount of sunlight'], answer: 'The amount of moisture in the air', difficulty: 'Intermediate' }
    ]
  ],
  "Intermediate Challenge 2": [
    [ // Variation 1
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate a sentence about plans.', farsiPrompt: 'این جمله در مورد برنامه‌ها را ترجمه کنید.', farsiSentence: 'آیا فردا عصر وقتت آزاد است؟', answer: 'Are you free tomorrow evening?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a "hobby"?', farsiPrompt: '"سرگرمی" چیست؟', options: ['A job', 'Something you must do', 'An activity for fun', 'A place'], answer: 'An activity for fun', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate a weather description.', farsiPrompt: 'این توصیف آب و هوا را ترجمه کنید.', farsiSentence: 'هوا کمی سرد است، بهتر است یک ژاکت بپوشی.', answer: 'It\'s a bit chilly, you should wear a jacket.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you politely decline an invitation?', farsiPrompt: 'چطور مودبانه یک دعوت را رد می‌کنید؟', options: ['No way.', 'I don\'t want to.', 'I\'m sorry, I can\'t make it.', 'That sounds boring.'], answer: 'I\'m sorry, I can\'t make it.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate a sentence about interests.', farsiPrompt: 'این جمله در مورد علایق را ترجمه کنید.', farsiSentence: 'من به عکاسی بسیار علاقمندم.', answer: 'I am very interested in photography.', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "overcast" mean?', farsiPrompt: '"Overcast" به چه معناست؟', options: ['Very sunny', 'Covered with clouds', 'Very windy', 'Light rain'], answer: 'Covered with clouds', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this suggestion.', farsiPrompt: 'این پیشنهاد را ترجمه کنید.', farsiSentence: 'رفتن به سینما چطوره؟', answer: 'How about going to the cinema?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If you "enjoy" something, you...', farsiPrompt: 'اگر از چیزی "لذت ببرید"، شما...', options: ['dislike it', 'hate it', 'like it very much', 'are afraid of it'], answer: 'like it very much', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this weather question.', farsiPrompt: 'این سوال آب و هوا را ترجمه کنید.', farsiSentence: 'پیش‌بینی برای فردا چیست؟', answer: 'What is the forecast for tomorrow?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a positive response to an invitation?', farsiPrompt: 'پاسخ مثبت به یک دعوت چیست؟', options: ['Maybe later.', 'I\'m busy.', 'That sounds great!', 'I don\'t think so.'], answer: 'That sounds great!', difficulty: 'Intermediate' }
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this interest.', farsiPrompt: 'این علاقه را ترجمه کنید.', farsiSentence: 'سرگرمی مورد علاقه من آشپزی است.', answer: 'My favorite hobby is cooking.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If the weather is "pouring," it is...', farsiPrompt: 'اگر هوا "pouring" باشد، ...', options: ['drizzling lightly', 'snowing', 'raining heavily', 'very sunny'], answer: 'raining heavily', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question about time.', farsiPrompt: 'این سوال در مورد زمان را ترجمه کنید.', farsiSentence: 'چه ساعتی باید ملاقات کنیم؟', answer: 'What time should we meet?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: '"Free time" is also known as...', farsiPrompt: '"وقت آزاد" به عنوان ... نیز شناخته می‌شود.', options: ['work time', 'leisure time', 'busy time', 'sleep time'], answer: 'leisure time', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this weather statement.', farsiPrompt: 'این عبارت آب و هوا را ترجمه کنید.', farsiSentence: 'چه هوای زیبایی!', answer: 'What beautiful weather!', difficulty: 'Intermediate' }
    ],
    [ // Variation 4
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you ask about someone\'s plans?', farsiPrompt: 'چطور در مورد برنامه‌های کسی می‌پرسید؟', options: ['What are your plans?', 'How are you?', 'What are your hobbies?', 'Where do you live?'], answer: 'What are your plans?', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'من از پیاده‌روی در طبیعت لذت می‌برم.', answer: 'I enjoy hiking.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A cool, light wind is a...', farsiPrompt: 'باد خنک و ملایم یک ... است.', options: ['storm', 'hurricane', 'breeze', 'drizzle'], answer: 'breeze', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this agreement.', farsiPrompt: 'این موافقت را ترجمه کنید.', farsiSentence: 'حتما، فکر خوبیه.', answer: 'Sure, that sounds good.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What does "humid" mean?', farsiPrompt: '"Humid" به چه معناست؟', options: ['Cold and dry', 'Hot and damp', 'Cool and windy', 'Clear and sunny'], answer: 'Hot and damp', difficulty: 'Intermediate' }
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this question.', farsiPrompt: 'این سوال را ترجمه کنید.', farsiSentence: 'به چه چیزی علاقمندی؟', answer: 'What are you interested in?', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'How do you suggest an alternative plan?', farsiPrompt: 'چطور یک برنامه جایگزین پیشنهاد می‌دهید؟', options: ['I can\'t.', 'That\'s a bad idea.', 'How about tomorrow instead?', 'No.'], answer: 'How about tomorrow instead?', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this weather description.', farsiPrompt: 'این توصیف آب و هوا را ترجمه کنید.', farsiSentence: 'بیرون یخبندان است.', answer: 'It is freezing outside.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which activity is a hobby?', farsiPrompt: 'کدام فعالیت یک سرگرمی است؟', options: ['Doing homework', 'Working', 'Painting', 'Paying bills'], answer: 'Painting', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate this sentence.', farsiPrompt: 'این جمله را ترجمه کنید.', farsiSentence: 'بیا در کافه ملاقات کنیم.', answer: 'Let\'s meet at the cafe.', difficulty: 'Intermediate' }
    ]
  ],
  "At the Doctor": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'Appointment', farsiPrompt: 'وقت ملاقات / نوبت', sentence: 'I have a doctor\'s appointment at 10 AM.', farsiSentenceExample: 'من ساعت ۱۰ صبح وقت دکتر دارم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من حالم خوب نیست.', answer: 'I don\'t feel well.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Symptom', farsiPrompt: 'علامت بیماری', sentence: 'What are your symptoms?', farsiSentenceExample: 'علائم شما چیست؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A cough and a fever are examples of...', farsiPrompt: 'سرفه و تب نمونه‌هایی از ... هستند.', options: ['appointments', 'doctors', 'symptoms', 'prescriptions'], answer: 'symptoms', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من سردرد دارم.', answer: 'I have a headache.', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
      { type: ExerciseType.LEARN, prompt: 'Headache', farsiPrompt: 'سردرد', sentence: 'I took medicine for my headache.', farsiSentenceExample: 'من برای سردردم دارو خوردم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you need to get medicine from a pharmacy?', farsiPrompt: 'برای گرفتن دارو از داروخانه به چه چیزی نیاز دارید؟', options: ['An appointment', 'A symptom', 'A prescription', 'A doctor'], answer: 'A prescription', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من باید یک وقت ملاقات بگیرم.', answer: 'I need to make an appointment.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Prescription', farsiPrompt: 'نسخه', sentence: 'The doctor gave me a prescription for antibiotics.', farsiSentenceExample: 'دکتر برای من یک نسخه آنتی‌بیوتیک داد.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'گلویم درد می‌کند.', answer: 'I have a sore throat.', difficulty: 'Intermediate' },
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'مشکل چیه؟', answer: 'What\'s the matter?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Fever', farsiPrompt: 'تب', sentence: 'He has a high fever.', farsiSentenceExample: 'او تب بالایی دارد.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What do you call the place where you see a doctor?', farsiPrompt: 'جایی که دکتر را می‌بینید چه نامیده می‌شود؟', options: ['Pharmacy', 'Hospital', 'Clinic', 'Both B and C'], answer: 'Both B and C', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'این دارو را چند وقت یکبار باید مصرف کنم؟', answer: 'How often should I take this medicine?', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Medicine', farsiPrompt: 'دارو', sentence: 'Take the medicine twice a day.', farsiSentenceExample: 'دارو را روزی دو بار مصرف کنید.', answer: '', difficulty: 'Intermediate' }
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'Pain', farsiPrompt: 'درد', sentence: 'Where do you feel the pain?', farsiSentenceExample: 'کجا احساس درد می‌کنید؟', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'If you feel sick, you should...', farsiPrompt: 'اگر احساس بیماری می‌کنید، باید...', options: ['go to a party', 'see a doctor', 'eat junk food', 'work harder'], answer: 'see a doctor', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من به پنی‌سیلین حساسیت دارم.', answer: 'I am allergic to penicillin.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'A "sore throat" is a type of...', farsiPrompt: '"گلودرد" یک نوع ... است.', options: ['pain', 'medicine', 'doctor', 'appointment'], answer: 'pain', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من سرفه می‌کنم.', answer: 'I have a cough.', difficulty: 'Intermediate' }
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من به یک دکتر نیاز دارم.', answer: 'I need a doctor.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Nauseous', farsiPrompt: 'حالت تهوع داشتن', sentence: 'I feel nauseous after eating.', farsiSentenceExample: 'بعد از غذا خوردن حالت تهوع دارم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a "fever"?', farsiPrompt: '"تب" چیست؟', options: ['Feeling cold', 'A high body temperature', 'A headache', 'A prescription'], answer: 'A high body temperature', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'دکتر به من گفت استراحت کنم.', answer: 'The doctor told me to get some rest.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is a "symptom"?', farsiPrompt: '"علامت بیماری" چیست؟', options: ['A type of medicine', 'A sign of an illness', 'A doctor\'s office', 'A scheduled visit'], answer: 'A sign of an illness', difficulty: 'Intermediate' }
    ]
  ],
  "Past and Future Tenses": [
    [ // Variation 1
      { type: ExerciseType.LEARN, prompt: 'Past Tense: -ed', farsiPrompt: 'زمان گذشته: -ed', sentence: 'For regular verbs, add -ed. Example: walk -> walked.', farsiSentenceExample: 'برای افعال باقاعده، -ed اضافه کنید. مثال: راه رفتن -> راه رفت.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من دیروز تلویزیون تماشا کردم.', answer: 'I watched TV yesterday.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Future Tense: will', farsiPrompt: 'زمان آینده: will', sentence: 'Use "will" for future actions. Example: I will call you tomorrow.', farsiSentenceExample: 'از "will" برای کارهای آینده استفاده کنید. مثال: فردا به شما زنگ خواهم زد.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence in the future tense.', farsiPrompt: 'جمله را در زمان آینده کامل کنید.', sentence: 'She ___ to the party next week.', options: ['goes', 'went', 'will go', 'going'], answer: 'will go', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آنها سال گذشته از پاریس دیدن کردند.', answer: 'They visited Paris last year.', difficulty: 'Intermediate' }
    ],
    [ // Variation 2
      { type: ExerciseType.LEARN, prompt: 'Irregular Past Tense', farsiPrompt: 'زمان گذشته بی‌قاعده', sentence: 'Some verbs have irregular past forms. Example: go -> went.', farsiSentenceExample: 'بعضی افعال شکل گذشته بی‌قاعده دارند. مثال: رفتن -> رفت.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the past tense of "eat"?', farsiPrompt: 'زمان گذشته "eat" چیست؟', options: ['eated', 'ate', 'eaten', 'eat'], answer: 'ate', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من فردا به سر کار خواهم رفت.', answer: 'I will go to work tomorrow.', difficulty: 'Intermediate' },
      { type: ExerciseType.LEARN, prompt: 'Future Tense: going to', farsiPrompt: 'زمان آینده: going to', sentence: 'Use "be going to" for plans. Example: I am going to study tonight.', farsiSentenceExample: 'از "be going to" برای برنامه‌ها استفاده کنید. مثال: من قصد دارم امشب مطالعه کنم.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'We are ___ visit our grandparents this weekend.', options: ['will', 'go', 'going to', 'went'], answer: 'going to', difficulty: 'Intermediate' },
    ],
    [ // Variation 3
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English using past tense.', farsiPrompt: 'با استفاده از زمان گذشته به انگلیسی ترجمه کنید.', farsiSentence: 'او یک کتاب خرید.', answer: 'She bought a book.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the past tense of "see"?', farsiPrompt: 'زمان گذشته "see" چیست؟', options: ['see', 'saw', 'seed', 'seen'], answer: 'saw', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English using future tense.', farsiPrompt: 'با استفاده از زمان آینده به انگلیسی ترجمه کنید.', farsiSentence: 'باران خواهد بارید.', answer: 'It will rain.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which word indicates the future?', farsiPrompt: 'کدام کلمه به آینده اشاره دارد؟', options: ['Yesterday', 'Last week', 'Tomorrow', 'Now'], answer: 'Tomorrow', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من هفته پیش او را دیدم.', answer: 'I saw him last week.', difficulty: 'Intermediate' }
    ],
    [ // Variation 4
      { type: ExerciseType.LEARN, prompt: 'Yesterday / Tomorrow', farsiPrompt: 'دیروز / فردا', sentence: '"Yesterday" refers to the past. "Tomorrow" refers to the future.', farsiSentenceExample: '"دیروز" به گذشته اشاره دارد. "فردا" به آینده اشاره دارد.', answer: '', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Complete the sentence.', farsiPrompt: 'جمله را کامل کنید.', sentence: 'I ___ my homework yesterday.', options: ['do', 'did', 'will do', 'doing'], answer: 'did', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'ما قصد داریم یک ماشین جدید بخریم.', answer: 'We are going to buy a new car.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'What is the past tense of "have"?', farsiPrompt: 'زمان گذشته "have" چیست؟', options: ['haved', 'had', 'has', 'having'], answer: 'had', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'او ماه آینده سفر خواهد کرد.', answer: 'She will travel next month.', difficulty: 'Intermediate' }
    ],
    [ // Variation 5
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'من تکالیفم را تمام کردم.', answer: 'I finished my homework.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which sentence is in the future tense?', farsiPrompt: 'کدام جمله در زمان آینده است؟', options: ['He plays football.', 'He played football.', 'He will play football.', 'He is playing football.'], answer: 'He will play football.', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'آنها فیلم را دوست نداشتند.', answer: 'They did not like the movie.', difficulty: 'Intermediate' },
      { type: ExerciseType.MULTIPLE_CHOICE, prompt: 'Which word indicates the past?', farsiPrompt: 'کدام کلمه به گذشته اشاره دارد؟', options: ['Next year', 'Soon', 'Last night', 'Today'], answer: 'Last night', difficulty: 'Intermediate' },
      { type: ExerciseType.TRANSLATE_TO_ENGLISH, prompt: 'Translate to English.', farsiPrompt: 'به انگلیسی ترجمه کنید.', farsiSentence: 'فکر می‌کنم او امتحان را قبول خواهد شد.', answer: 'I think he will pass the exam.', difficulty: 'Intermediate' }
    ]
  ]
};
