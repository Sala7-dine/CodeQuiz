const QuizData = {
    javascript: [
        {  
          type: 'qcm',
          question: 'Quelle méthode JavaScript permet de filtrer les éléments d\'un tableau?',
          options: ['map()', 'filter()', 'reduce()', 'forEach()'],
          correctAnswer: 1,
          explanation: 'filter() crée un nouveau tableau avec les éléments qui passent le test.'
        },
        {
          type: 'boolean',
          question: 'JavaScript est un langage typé de manière statique?',
          options: ['Vrai', 'Faux'],
          correctAnswer: 1,
          explanation: 'JavaScript est faiblement typé et dynamique.'
        },
        {
          type: 'text',
          question: 'Quelle méthode permet d\'ajouter un élément à la fin d\'un tableau?',
          correctAnswer: ['push', 'push()', '.push', '.push()'],
          explanation: 'La méthode push() ajoute un ou plusieurs éléments à la fin d\'un tableau.'
        },
        {
          type: 'mcq',
          question: 'Quelle déclaration est correcte pour créer une fonction anonyme en JavaScript?',
          options: ['function() {}', '()=>{}', 'function {}', 'let f() {}'],
          correctAnswer: 1,
          explanation: 'La syntaxe ()=>{} est utilisée pour créer des fonctions fléchées, qui sont anonymes.'
        }
    ],

    html: [
        {
          id: 1,
          type: 'mcq',
          question: 'Quelle balise HTML est utilisée pour les titres de niveau supérieur?',
          options: ['head', 'header', 'h1', 'title'],
          correctAnswer: 2,
          explanation: 'La balise h1 est utilisée pour les titres de niveau supérieur.'
        },
        {
          id: 2,
          type: 'boolean',
          question: 'La balise br crée un saut de ligne en HTML.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 0,
          explanation: 'La balise br crée un saut de ligne sans interrompre le flux de texte.'
        },
        {
          id: 3,
          type: 'mcq',
          question: 'Quel attribut HTML est utilisé pour lier une feuille de style CSS?',
          options: ['rel', 'src', 'type', 'href'],
          correctAnswer: 3,
          explanation: 'href est l\'attribut qui spécifie le lien vers le fichier CSS.'
        },
        {
          id: 4,
          type: 'mcq',
          question: 'Quelle balise HTML est utilisée pour insérer une image?',
          options: ['image', 'img', 'picture', 'src'],
          correctAnswer: 1,
          explanation: 'img est la balise utilisée pour afficher une image.'
        }
    ],

    css: [
        {
          id: 1,
          type: 'mcq',
          question: 'Quelle propriété CSS contrôle la taille du texte?',
          options: ['font-size', 'text-size', 'font-weight', 'size'],
          correctAnswer: 0,
          explanation: 'font-size est utilisée pour spécifier la taille de la police.'
        },
        {
          id: 2,
          type: 'boolean',
          question: 'La propriété "color" change la couleur d\'arrière-plan en CSS.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 1,
          explanation: 'La propriété background-color modifie l’arrière-plan, tandis que color change la couleur du texte.'
        },
        {
          id: 3,
          type: 'mcq',
          question: 'Quelle valeur de positionnement permet de fixer un élément en haut de la page?',
          options: ['static', 'absolute', 'fixed', 'relative'],
          correctAnswer: 2,
          explanation: 'fixed fixe l\'élément en position par rapport à la fenêtre du navigateur.'
        },
        {
          id: 4,
          type: 'text',
          question: 'Quelle propriété est utilisée pour ajouter de l’espace à l’intérieur d’un élément?',
          correctAnswer: ['padding'],
          explanation: 'padding ajoute de l\'espace à l\'intérieur d\'un élément, entre son contenu et sa bordure.'
        }
    ],

    python: [
        {
          id: 1,
          type: 'mcq',
          question: 'Quel mot-clé est utilisé pour définir une fonction en Python?',
          options: ['function', 'def', 'func', 'define'],
          correctAnswer: 1,
          explanation: 'def est utilisé pour définir une fonction en Python.'
        },
        {
          id: 2,
          type: 'boolean',
          question: 'Python est sensible à la casse.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 0,
          explanation: 'Python distingue les majuscules des minuscules.'
        },
        {
          id: 3,
          type: 'mcq',
          question: 'Quelle méthode est utilisée pour lire les entrées utilisateur en Python 3?',
          options: ['scan()', 'input()', 'read()', 'get()'],
          correctAnswer: 1,
          explanation: 'input() est utilisé pour lire les entrées utilisateur en Python 3.'
        },
        {
          id: 4,
          type: 'text',
          question: 'Quel mot-clé est utilisé pour gérer les exceptions en Python?',
          correctAnswer: ['try', 'try-except'],
          explanation: 'try est utilisé avec except pour gérer les exceptions en Python.'
        }
    ],

    java: [
        {
          id: 1,
          type: 'mcq',
          question: 'Quel est le mot-clé pour créer un nouvel objet en Java?',
          options: ['class', 'new', 'instance', 'object'],
          correctAnswer: 1,
          explanation: 'Le mot-clé new est utilisé pour instancier un objet.'
        },
        {
          id: 2,
          type: 'boolean',
          question: 'Java est un langage de programmation orienté objet.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 0,
          explanation: 'Java est un langage orienté objet avec concepts comme héritage et encapsulation.'
        },
        {
          id: 3,
          type: 'mcq',
          question: 'Quelle est la méthode principale par laquelle un programme Java démarre?',
          options: ['init()', 'start()', 'main()', 'run()'],
          correctAnswer: 2,
          explanation: 'main() est la méthode d\'entrée d\'un programme Java.'
        },
        {
          id: 4,
          type: 'text',
          question: 'Quel mot-clé est utilisé pour hériter d’une classe en Java?',
          correctAnswer: ['extends'],
          explanation: 'extends est utilisé pour l\'héritage en Java.'
        }
    ]
  
    
};


const category = [
    {
        id: 1,
        niveux: "facile",
        titre: "JavaScript",
        description: "Un quiz pour tester vos bases en JavaScript, des variables aux boucles.",
        nbrQuestion: 5,
        time: 3 , 
        status: true 
    },
    {
        id: 2,
        niveux: "moyenne",
        titre: "HTML",
        description: "Découvrez votre niveau en HTML en répondant à des questions de difficulté moyenne.",
        nbrQuestion: 7,
        time: 5 , 
        status: true 
    },
    {
        id: 3,
        niveux: "facile",
        titre: "CSS",
        description: "Connaissez-vous les bases du CSS ? Vérifiez-le avec ce quiz simple.",
        nbrQuestion: 6,
        time: 2 , 
        status: true 
    },
    {
        id: 4,
        niveux: "difficile",
        titre: "Python",
        description: "Un challenge en Python pour les développeurs expérimentés !",
        nbrQuestion: 10,
        time: 8 , 
        status: true 
    },
    {
        id: 5,
        niveux: "moyenne",
        titre: "Java",
        description: "Testez vos compétences en Java avec des questions intermédiaires.",
        nbrQuestion: 6,
        time: 6 , 
        status: true 
    },
    {
        id: 6,
        niveux: "facile",
        titre: "React",
        description: "Découverte des concepts de base du framework React.",
        nbrQuestion: 5,
        time: 4 , 
        status: true 
    },
    {
        id: 7,
        niveux: "difficile",
        titre: "Node.js",
        description: "Un quiz avancé pour les experts en développement backend.",
        nbrQuestion: 8,
        time: 10 , 
        status: true 
    },
    {
        id: 8,
        niveux: "facile",
        titre: "SQL",
        description: "Maîtrisez les requêtes de base avec ce quiz sur SQL.",
        nbrQuestion: 4,
        time: 3 , 
        status: true 
    },
    {
        id: 9,
        niveux: "moyenne",
        titre: "PHP",
        description: "Mettez vos connaissances PHP à l’épreuve avec des questions variées.",
        nbrQuestion: 7,
        time: 6 , 
        status: true 
    },
    {
        id: 10,
        niveux: "difficile",
        titre: "Git",
        description: "Vérifiez votre maîtrise de Git et des commandes avancées.",
        nbrQuestion: 9,
        time: 8 , 
        status: true 
    },
    {
        id: 11,
        niveux: "facile",
        titre: "JSON",
        description: "Apprenez les bases du format JSON avec des questions simples.",
        nbrQuestion: 3,
        time: 2 , 
        status: true 
    },
    {
        id: 12,
        niveux: "moyenne",
        titre: "MongoDB",
        description: "Testez vos connaissances intermédiaires en bases de données NoSQL.",
        nbrQuestion: 7,
        time: 5 , 
        status: true 
    },
    {
        id: 13,
        niveux: "facile",
        titre: "Vue.js",
        description: "Apprenez les bases de Vue.js avec des questions pour débutants.",
        nbrQuestion: 4,
        time: 3 , 
        status: true 
    },
    {
        id: 14,
        niveux: "difficile",
        titre: "Typescript",
        description: "Un quiz pour les développeurs avancés en TypeScript.",
        nbrQuestion: 10,
        time: 9 , 
        status: true 
    },
    {
        id: 15,
        niveux: "moyenne",
        titre: "C++",
        description: "Testez vos compétences en programmation orientée objet avec le C++.",
        nbrQuestion: 6,
        time: 7 , 
        status: true 
    },
    {
        id: 16,
        niveux: "facile",
        titre: "Bootstrap",
        description: "Découvrez les bases de Bootstrap pour le design responsive.",
        nbrQuestion: 5,
        time: 3 , 
        status: true 
    },
    {
        id: 17,
        niveux: "difficile",
        titre: "Docker",
        description: "Un quiz avancé pour maîtriser Docker et les conteneurs.",
        nbrQuestion: 8,
        time: 9 , 
        status: true 
    },
    {
        id: 18,
        niveux: "facile",
        titre: "Angular",
        description: "Approfondissez vos connaissances d’Angular avec des questions de base.",
        nbrQuestion: 4,
        time: 4 , 
        status: true 
    },
];



// localStorage.QuizData = JSON.stringify(QuizData);
// localStorage.category = JSON.stringify(category);