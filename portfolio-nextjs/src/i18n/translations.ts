// Translation types
export type Language = 'it' | 'en' | 'de' | 'fr' | 'es' | 'da';

export interface LanguageInfo {
    flag: string;
    code: string;
    name: string;
}

export const languages: Record<Language, LanguageInfo> = {
    it: { name: 'Italiano', code: 'IT', flag: 'https://flagcdn.com/w40/it.png' },
    en: { name: 'English', code: 'EN', flag: 'https://flagcdn.com/w40/gb.png' },
    de: { name: 'Deutsch', code: 'DE', flag: 'https://flagcdn.com/w40/de.png' },
    fr: { name: 'Français', code: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
    es: { name: 'Español', code: 'ES', flag: 'https://flagcdn.com/w40/es.png' },
    da: { name: 'Dansk', code: 'DA', flag: 'https://flagcdn.com/w40/dk.png' },
};

export interface Translations {
    nav: {
        experience: string;
        projects: string;
        education: string;
        skills: string;
        interests: string;
        competitions: string;
    };
    hero: {
        greeting: string;
        description: string;
    };
    sections: {
        experience: string;
        projects: string;
        education: string;
        skills: string;
        interests: string;
        competitions: string;
    };
    footer: {
        title: string;
        subtitle: string;
    };
    buttons: {
        downloadCV: string;
        visitSite: string;
    };
    interests: {
        photography: string;
        photographyDesc: string;
        youtube: string;
        youtubeDesc: string;
        strava: string;
        stravaDesc: string;
        creativeTools: string;
        creativeToolsDesc: string;

        tools: {
            figma: { name: string; description: string; };
            antigravity: { name: string; description: string; };
            lovable: { name: string; description: string; };
            notion: { name: string; description: string; };
            excel: { name: string; description: string; };
            office: { name: string; description: string; };
            python: { name: string; description: string; };
            flutter: { name: string; description: string; };
        };
    };
    experience: {
        flybag: { role: string; description: string; date: string; };
        ey: { role: string; description: string; date: string; };
        impactHub: { role: string; description: string; date: string; };
    };
    education: {
        lum: { degree: string; description: string; date: string; };
        westfalische: { degree: string; description: string; date: string; };
        liceo: { degree: string; description: string; date: string; };
        yesChina: { title: string; description: string; date: string; };
        excelCourse: { title: string; description: string; date: string; };
    };
    skills: {
        hard: string;
        soft: string;
        languages: string;
        tags: {
            native: string;
            fluent: string;
            beginner: string;
            problemSolving: string;
            communication: string;
            teamWork: string;
            leadership: string;
            creativity: string;
        };
    };
    competitions: {
        binp: { title: string; description: string; pitchTitle: string; pitchText: string; viewProject: string; onlyInItalian?: string; };
        makeItACase: { description: string; viewProject: string; onlyInItalian?: string; };
    };
    youtubePage: {
        title: string;
        description: string;
        channelsTitle: string;
        channels: {
            marcelloAscani: string;
            caffeDesign: string;
            novaLectio: string;
            matArmstrong: string;
            jakiDale: string;
            mkbhd: string;
            enricoTartarotti: string;
            gioPizzi: string;
            safariUmano: string;
        };
    };
    photographyPage: {
        title: string;
        description: string;
    };
    languageNames: {
        it: string;
        en: string;
        de: string;
        fr: string;
        es: string;
        da: string;
    };
}

export const translations: Record<Language, Translations> = {
    it: {
        nav: {
            experience: 'Esperienza',
            projects: 'Progetti',
            education: 'Formazione',
            skills: 'Competenze',
            interests: 'Interessi',
            competitions: 'Competizioni',
        },
        hero: {
            greeting: 'Ciao, io sono',
            description: 'Nato a Siena e cresciuto in Puglia, sono uno studente di Business Administration al terzo anno. Questo portfolio racconta il mio percorso attraverso i progetti, le esperienze e gli interessi che rappresentano i miei valori.',
        },
        sections: {
            experience: 'Esperienza',
            projects: 'Progetti',
            education: 'Formazione Accademica',
            skills: 'Competenze',
            interests: 'Interessi',
            competitions: 'Competizioni',
        },
        footer: {
            title: 'Parliamone!',
            subtitle: 'Hai un progetto in mente o vuoi solo salutare?',
        },
        buttons: {
            downloadCV: 'Download CV',
            visitSite: 'Visita il sito',
        },
        interests: {
            photography: 'Fotografia',
            photographyDesc: "I miei scatti preferiti",
            youtube: 'YouTube',
            youtubeDesc: 'Canali e contenuti che seguo per informarmi ed incuriosirmi',
            strava: 'Strava Profile',
            stravaDesc: 'Allenamenti e attività sportive',
            creativeTools: 'Strumenti Creativi',
            creativeToolsDesc: 'Tool e servizi che uso per la creatività',

            tools: {
                figma: {
                    name: 'Figma',
                    description: 'Per progettare interfacce utente e prototipi interattivi con collaborazione in tempo reale'
                },
                antigravity: {
                    name: 'Antigravity',
                    description: 'Assistente AI avanzato per coding e problem solving complessi'
                },
                lovable: {
                    name: 'Lovable',
                    description: 'Piattaforma per creare applicazioni web rapidamente con AI'
                },
                notion: {
                    name: 'Notion',
                    description: 'Workspace all-in-one per organizzare progetti, note e documentazione'
                },
                excel: {
                    name: 'Excel',
                    description: 'Conoscenze di base per analisi dati e creazione di fogli di calcolo'
                },
                office: {
                    name: 'Microsoft Office',
                    description: 'Competenze di base nella suite Office per produttività'
                },
                python: {
                    name: 'Python',
                    description: 'Conoscenze di base di programmazione Python'
                },
                flutter: {
                    name: 'Flutter',
                    description: 'Conoscenze di base per sviluppo app mobile multipiattaforma'
                }
            }
        },
        experience: {
            flybag: {
                role: 'Co-founder & UX/UI Designer',
                description: "Creazione di un servizio innovativo per migliorare l'esperienza di shopping per i turisti. Responsabile della progettazione dell'interfaccia utente e dell'esperienza complessiva del servizio.",
                date: '09/2024 - Presente',
            },
            ey: {
                role: 'Campus Ambassador',
                description: "Collegamento tra EY e l'università, promozione di eventi e opportunità agli studenti. Organizzazione di attività di networking nel campus per aumentare l'engagement e la consapevolezza dei programmi EY.",
                date: '10/2024 - Presente',
            },
            impactHub: {
                role: 'Community Host',
                description: 'Accoglienza ospiti e gestione delle operazioni dello spazio di co-working, garantendo un ambiente professionale. Organizzazione e facilitazione di attività di networking per rafforzare la comunità imprenditoriale locale.',
                date: '08/2024 - 11/2024',
            },
        },
        education: {
            lum: {
                degree: 'Laurea in Business Administration',
                description: 'Focus su gestione aziendale, innovazione e imprenditorialità. Partecipazione con un team alla competizione "Make It A Case", analizzando e risolvendo con successo sfide aziendali reali.',
                date: '2023 - 2026',
            },
            westfalische: {
                degree: 'Erasmus+ Exchange Program',
                description: 'Programma di scambio internazionale per ampliare le competenze in ambito business e management in un contesto europeo.',
                date: '09/2025 - 02/2026',
            },
            liceo: {
                degree: 'Diploma di Maturità Scientifica',
                description: 'Partecipazione a corsi di teatro, creazione di contenuti (pubblicità, fotografia, video editing), e programma Associazione Diplomatici.',
                date: '2017 - 2022',
            },
            yesChina: {
                title: 'Cultural Exchange Program (YES China)',
                description: 'Partecipazione al programma di scambio culturale YES China, esperienza immersiva nella cultura e nel sistema educativo cinese.',
                date: 'Mag 2025',
            },
            excelCourse: {
                title: 'Laboratorio di Excel',
                description: "Attività frequentata con esito positivo presso il Dipartimento di Management, Finanza e Tecnologia.",
                date: 'A.A. 2024/2025',
            },
        },
        skills: {
            hard: 'Hard Skills',
            soft: 'Soft Skills',
            languages: 'Lingue',
            tags: {
                native: 'Nativo',
                fluent: 'Fluente - IELTS 6.5',
                beginner: 'Principiante',
                problemSolving: 'Problem Solving',
                communication: 'Comunicazione',
                teamWork: 'Team Work',
                leadership: 'Leadership',
                creativity: 'Creatività',
            },
        },
        competitions: {
            binp: {
                title: 'Hackathon Binp - Politecnico di Bari',
                description: "Partecipazione all'hackathon organizzato da Binp presso il Politecnico di Bari. Ideazione del funzionamento di un’app innovativa per il settore fitness.",
                pitchTitle: '💡 Il Nostro Pitch',
                pitchText: "Scarica la nostra presentazione per vedere i dettagli del progetto.",
                viewProject: "Visualizza Pitch",
            },
            makeItACase: {
                description: 'Competizione di business case analysis con team universitario presso LUM. Abbiamo analizzato il caso di "Alveare da Favola".',
                viewProject: "Visualizza Pitch",
                onlyInItalian: "",
            },
        },
        youtubePage: {
            title: 'YouTube',
            description: 'Canali che seguo per rimanere aggiornato, incuriosirmi e imparare cose nuove',
            channelsTitle: 'Canali che Seguo',
            channels: {
                marcelloAscani: "Imprenditore e YouTuber. Racconto l'economia, la finanza e il mondo delle aziende in modo semplice.",
                caffeDesign: "Design, marketing, innovazione e futuro. Il baretto dell'Internet con Giuliano, Nanni e Riccardo.",
                novaLectio: 'Storia, geopolitica e attualità. Documentari per capire le dinamiche del mondo moderno.',
                matArmstrong: 'Restauro e modifica di auto. Do una seconda possibilità a supercar e veicoli abbandonati.',
                jakiDale: 'Tech, viaggi e lifestyle. Racconto la mia vita e le mie passioni tra droni e avventure.',
                mkbhd: 'Il punto di riferimento per la tecnologia. Recensioni di altissima qualità su smartphone e gadget.',
                enricoTartarotti: 'Design e psicologia della tecnologia. Analisi approfondite sui prodotti digitali che usiamo ogni giorno.',
                gioPizzi: 'Analisi politica e commento sociale. Spunti di riflessione su attualità e società.',
                safariUmano: 'Storie umane e avventure di viaggio. Esplorazione di culture e persone in giro per il mondo.',
            },
        },
        photographyPage: {
            title: 'Fotografia',
            description: 'Una collezione dei miei scatti preferiti.',
        },
        languageNames: {
            it: 'Italiano',
            en: 'Inglese',
            de: 'Tedesco',
            fr: 'Francese',
            es: 'Spagnolo',
            da: 'Danese',
        },
    },
    en: {
        nav: {
            experience: 'Experience',
            projects: 'Projects',
            education: 'Education',
            skills: 'Skills',
            interests: 'Interests',
            competitions: 'Competitions',
        },
        hero: {
            greeting: "Hi, I'm",
            description: 'Born in Siena and raised in Puglia, I am a third-year Business Administration student. This portfolio tells my journey through projects, experiences, and interests that represent my values.',
        },
        sections: {
            experience: 'Experience',
            projects: 'Projects',
            education: 'Academic Education',
            skills: 'Skills',
            interests: 'Interests',
            competitions: 'Competitions',
        },
        footer: {
            title: "Let's Talk!",
            subtitle: 'Have a project in mind or just want to say hi?',
        },
        buttons: {
            downloadCV: 'Download CV',
            visitSite: 'Visit Site',
        },
        interests: {
            photography: 'Photography',
            photographyDesc: 'Creative exploration through the lens',
            youtube: 'YouTube',
            youtubeDesc: 'Channels and content I follow for inspiration',
            strava: 'Strava Profile',
            stravaDesc: 'Workouts and sports activities',
            creativeTools: 'Tool',
            creativeToolsDesc: 'Tools and services I use for creativity',

            tools: {
                figma: { name: 'Figma', description: 'For designing user interfaces and interactive prototypes with real-time collaboration' },
                antigravity: { name: 'Antigravity', description: 'Advanced AI assistant for coding and complex problem solving' },
                lovable: { name: 'Lovable', description: 'Platform to create web applications quickly with AI' },
                notion: { name: 'Notion', description: 'All-in-one workspace for organizing projects, notes and documentation' },
                excel: { name: 'Excel', description: 'Basic knowledge for data analysis and spreadsheet creation' },
                office: { name: 'Microsoft Office', description: 'Basic skills in Office suite for productivity' },
                python: { name: 'Python', description: 'Basic Python programming knowledge' },
                flutter: { name: 'Flutter', description: 'Basic knowledge for cross-platform mobile app development' }
            }
        },
        experience: {
            flybag: {
                role: 'Co-founder & UX/UI Designer',
                description: 'Creation of an innovative service to improve the shopping experience for tourists. Responsible for UI design and overall service experience.',
                date: '09/2024 - Present',
            },
            ey: {
                role: 'Campus Ambassador',
                description: 'Liaison between EY and the university, promoting events and opportunities to students. Organizing on-campus networking activities to increase engagement and awareness of EY programs.',
                date: '10/2024 - Present',
            },
            impactHub: {
                role: 'Community Host',
                description: 'Welcoming guests and managing co-working space operations, ensuring a professional environment. Organizing and facilitating networking activities to strengthen the local entrepreneurial community.',
                date: '08/2024 - 11/2024',
            },
        },
        education: {
            lum: {
                degree: 'Bachelor in Business Administration',
                description: 'Focus on business management, innovation, and entrepreneurship. Participated with a team in the "Make It A Case" competition, successfully analyzing and solving real business challenges.',
                date: '2023 - 2026',
            },
            westfalische: {
                degree: 'Erasmus+ Exchange Program',
                description: 'International exchange program to broaden skills in business and management in a European context.',
                date: '09/2025 - 02/2026',
            },
            liceo: {
                degree: 'Scientific High School Diploma',
                description: 'Participation in theater courses, content creation (advertising, photography, video editing), and Diplomatici Association program.',
                date: '2017 - 2022',
            },
            yesChina: {
                title: 'Cultural Exchange Program (YES China)',
                description: 'Participation in the YES China cultural exchange program, immersive experience in Chinese culture and educational system.',
                date: 'May 2025',
            },
            excelCourse: {
                title: 'Excel Laboratory',
                description: 'Activity attended with positive outcome at the Department of Management, Finance and Technology.',
                date: 'A.Y. 2024/2025',
            },
        },
        skills: {
            hard: 'Hard Skills',
            soft: 'Soft Skills',
            languages: 'Languages',
            tags: {
                native: 'Native',
                fluent: 'Fluent - IELTS 6.5',
                beginner: 'Beginner',
                problemSolving: 'Problem Solving',
                communication: 'Communication',
                teamWork: 'Team Work',
                leadership: 'Leadership',
                creativity: 'Creativity',
            },
        },
        competitions: {
            binp: {
                title: 'Binp Hackathon - Polytechnic of Bari',
                description: 'Participation in the hackathon organized by Binp at the Polytechnic of Bari. Conception of the functioning of an innovative app for the fitness sector.',
                pitchTitle: '💡 Our Pitch',
                pitchText: 'Download our presentation to see the project details.',
                viewProject: 'View Pitch',
                onlyInItalian: "(Only in Italian)",
            },
            makeItACase: {
                description: 'Business case analysis competition with university team at LUM. We analyzed the "Alveare da Favola" case.',
                viewProject: 'View Pitch',
                onlyInItalian: "(Only in Italian)",
            },
        },
        youtubePage: {
            title: 'YouTube',
            description: 'Channels and videos I follow to stay updated, get curious, and learn new things',
            channelsTitle: 'Channels I Follow',
            channels: {
                marcelloAscani: 'Entrepreneur and YouTuber. I talk about economics, finance, and the corporate world in a simple way.',
                caffeDesign: 'Design, marketing, innovation, and future. The internet coffee shop with Giuliano, Nanni, and Riccardo.',
                novaLectio: 'History, geopolitics, and current events. Documentaries to understand the dynamics of the modern world.',
                matArmstrong: 'Car restoration and modification. Giving a second chance to supercars and abandoned vehicles.',
                jakiDale: 'Tech, travel, and lifestyle. Sharing my life and passions through drones and adventures.',
                mkbhd: 'The benchmark for technology. High-quality reviews on smartphones and gadgets.',
                enricoTartarotti: 'Design and psychology of technology. In-depth analysis of the digital products we use every day.',
                gioPizzi: 'Political analysis and social commentary. Insights on current events and society.',
                safariUmano: 'Human stories and travel adventures. Exploring cultures and people around the world.',
            },
        },
        photographyPage: {
            title: 'Photography',
            description: 'A collection of my favorite shots.',
        },
        languageNames: {
            it: 'Italian',
            en: 'English',
            de: 'German',
            fr: 'French',
            es: 'Spanish',
            da: 'Danish',
        },
    },
    de: {
        nav: {
            experience: 'Erfahrung',
            projects: 'Projekte',
            education: 'Ausbildung',
            skills: 'Fähigkeiten',
            interests: 'Interessen',
            competitions: 'Wettbewerbe',
        },
        hero: {
            greeting: 'Hallo, ich bin',
            description: 'Geboren in Siena und aufgewachsen in Apulien, bin ich Student der Betriebswirtschaftslehre im dritten Jahr. Dieses Portfolio erzählt meinen Weg durch Projekte, Erfahrungen und Interessen, die meine Werte repräsentieren.',
        },
        sections: {
            experience: 'Erfahrung',
            projects: 'Projekte',
            education: 'Akademische Ausbildung',
            skills: 'Fähigkeiten',
            interests: 'Interessen',
            competitions: 'Wettbewerbe',
        },
        footer: {
            title: 'Lass uns reden!',
            subtitle: 'Hast du ein Projekt im Sinn oder möchtest du einfach Hallo sagen?',
        },
        buttons: {
            downloadCV: 'Lebenslauf herunterladen',
            visitSite: 'Seite besuchen',
        },
        interests: {
            photography: 'Fotografie',
            photographyDesc: 'Kreative Entdeckung durch das Objektiv',
            youtube: 'YouTube',
            youtubeDesc: 'Kanäle und Inhalte, denen ich zur Inspiration folge',
            strava: 'Strava Profil',
            stravaDesc: 'Training und sportliche Aktivitäten',
            creativeTools: 'Tool',
            creativeToolsDesc: 'Tools und Dienste, die ich für Kreativität nutze',

            tools: {
                figma: { name: 'Figma', description: 'Zum Entwerfen von Benutzeroberflächen und interaktiven Prototypen mit Echtzeit-Zusammenarbeit' },
                antigravity: { name: 'Antigravity', description: 'Fortgeschrittener KI-Assistent für Programmierung und komplexe Problemlösungen' },
                lovable: { name: 'Lovable', description: 'Plattform zum schnellen Erstellen von Webanwendungen mit KI' },
                notion: { name: 'Notion', description: 'All-in-One-Workspace zum Organisieren von Projekten, Notizen und Dokumentation' },
                excel: { name: 'Excel', description: 'Grundkenntnisse für Datenanalyse und Tabellenkalkulation' },
                office: { name: 'Microsoft Office', description: 'Grundkenntnisse in Office-Suite für Produktivität' },
                python: { name: 'Python', description: 'Grundkenntnisse in Python-Programmierung' },
                flutter: { name: 'Flutter', description: 'Grundkenntnisse für plattformübergreifende mobile App-Entwicklung' }
            }
        },
        experience: {
            flybag: {
                role: 'Mitbegründer & UX/UI Designer',
                description: 'Entwicklung eines innovativen Dienstes zur Verbesserung des Einkaufserlebnisses für Touristen. Verantwortlich für UI-Design und das gesamte Serviceerlebnis.',
                date: '09/2024 - Heute',
            },
            ey: {
                role: 'Campus Ambassador',
                description: 'Verbindung zwischen EY und der Universität, Förderung von Veranstaltungen und Möglichkeiten für Studenten. Organisation von Networking-Aktivitäten auf dem Campus zur Steigerung des Engagements.',
                date: '10/2024 - Heute',
            },
            impactHub: {
                role: 'Community Host',
                description: 'Empfang von Gästen und Verwaltung des Co-Working-Space-Betriebs, Gewährleistung eines professionellen Umfelds. Organisation von Networking-Aktivitäten zur Stärkung der lokalen Unternehmergemeinschaft.',
                date: '08/2024 - 11/2024',
            },
        },
        education: {
            lum: {
                degree: 'Bachelor in Betriebswirtschaftslehre',
                description: 'Fokus auf Unternehmensführung, Innovation und Unternehmertum. Teilnahme mit einem Team am Wettbewerb "Make It A Case", erfolgreiche Analyse und Lösung realer geschäftlicher Herausforderungen.',
                date: '2023 - 2026',
            },
            westfalische: {
                degree: 'Erasmus+ Austauschprogramm',
                description: 'Internationales Austauschprogramm zur Erweiterung der Kompetenzen in Wirtschaft und Management in einem europäischen Kontext.',
                date: '09/2025 - 02/2026',
            },
            liceo: {
                degree: 'Abitur (Wissenschaftliches Gymnasium)',
                description: 'Teilnahme an Theaterkursen, Content Creation (Werbung, Fotografie, Videobearbeitung) und Diplomatici Association Programm.',
                date: '2017 - 2022',
            },
            yesChina: {
                title: 'Kulturaustauschprogramm (YES China)',
                description: 'Teilnahme am YES China Kulturaustauschprogramm, immersive Erfahrung in der chinesischen Kultur und im Bildungssystem.',
                date: 'Mai 2025',
            },
            excelCourse: {
                title: 'Excel-Labor',
                description: 'Erfolgreich besuchter Kurs am Department für Management, Finanzen und Technologie.',
                date: 'Studienjahr 2024/2025',
            },
        },
        skills: {
            hard: 'Hard Skills',
            soft: 'Soft Skills',
            languages: 'Sprachen',
            tags: {
                native: 'Muttersprache',
                fluent: 'Fließend - IELTS 6.5',
                beginner: 'Anfänger',
                problemSolving: 'Problemlösung',
                communication: 'Kommunikation',
                teamWork: 'Teamarbeit',
                leadership: 'Führung',
                creativity: 'Kreativität',
            },
        },
        competitions: {
            binp: {
                title: 'Binp Hackathon - Polytechnikum Bari',
                description: 'Teilnahme am von Binp organisierten Hackathon am Polytechnikum Bari. Konzeption der Funktionsweise einer innovativen App für den Fitnesssektor.',
                pitchTitle: '💡 Unser Pitch',
                pitchText: 'Laden Sie unsere Präsentation herunter, um die Projektdetails zu sehen.',
                viewProject: 'Pitch ansehen',
                onlyInItalian: "(Nur auf Italienisch)",
            },
            makeItACase: {
                description: 'Business Case Analyse Wettbewerb mit Universitätsteam an der LUM. Wir haben den Fall "Alveare da Favola" analysiert.',
                viewProject: 'Pitch ansehen',
                onlyInItalian: "(Nur auf Italienisch)",
            },
        },
        youtubePage: {
            title: 'YouTube',
            description: 'Kanäle und Videos, denen ich folge, um auf dem Laufenden zu bleiben, neugierig zu werden und Neues zu lernen',
            channelsTitle: 'Kanäle, denen ich folge',
            channels: {
                marcelloAscani: 'Unternehmer und YouTuber. Ich erkläre Wirtschaft, Finanzen und die Unternehmenswelt auf einfache Weise.',
                caffeDesign: 'Design, Marketing, Innovation und Zukunft. Das Internet-Café mit Giuliano, Nanni und Riccardo.',
                novaLectio: 'Geschichte, Geopolitik und aktuelle Ereignisse. Dokumentationen zum Verständnis der Dynamik der modernen Welt.',
                matArmstrong: 'Autorestaurierung und -modifikation. Ich gebe Supersportwagen und verlassenen Fahrzeugen eine zweite Chance.',
                jakiDale: 'Technik, Reisen und Lifestyle. Ich teile mein Leben und meine Leidenschaften durch Drohnen und Abenteuer.',
                mkbhd: 'Der Maßstab für Technologie. Hochwertige Bewertungen von Smartphones und Gadgets.',
                enricoTartarotti: 'Design und Psychologie der Technologie. Eingehende Analyse der digitalen Produkte, die wir täglich nutzen.',
                gioPizzi: 'Politische Analyse und Sozialkommentar. Einblicke in aktuelle Ereignisse und Gesellschaft.',
                safariUmano: 'Menschliche Geschichten und Reiseabenteuer. Erkundung von Kulturen und Menschen auf der ganzen Welt.',
            },
        },
        photographyPage: {
            title: 'Fotografie',
            description: 'Eine Sammlung meiner Lieblingsaufnahmen.',
        },
        languageNames: {
            it: 'Italienisch',
            en: 'Englisch',
            de: 'Deutsch',
            fr: 'Französisch',
            es: 'Spanisch',
            da: 'Dänisch',
        },
    },
    fr: {
        nav: {
            experience: 'Expérience',
            projects: 'Projets',
            education: 'Formation',
            skills: 'Compétences',
            interests: 'Intérêts',
            competitions: 'Compétitions',
        },
        hero: {
            greeting: 'Bonjour, je suis',
            description: 'Né à Sienne et élevé dans les Pouilles, je suis étudiant en Administration des Affaires en troisième année. Ce portfolio raconte mon parcours à travers des projets, des expériences et des intérêts qui représentent mes valeurs.',
        },
        sections: {
            experience: 'Expérience',
            projects: 'Projets',
            education: 'Formation Académique',
            skills: 'Compétences',
            interests: 'Intérêts',
            competitions: 'Compétitions',
        },
        footer: {
            title: 'Parlons-en !',
            subtitle: 'Vous avez un projet en tête ou voulez juste dire bonjour ?',
        },
        buttons: {
            downloadCV: 'Télécharger CV',
            visitSite: 'Visiter le site',
        },
        interests: {
            photography: 'Photographie',
            photographyDesc: "Exploration créative à travers l'objectif",
            youtube: 'YouTube',
            youtubeDesc: 'Chaînes et contenus que je suis pour inspiration',
            strava: 'Profil Strava',
            stravaDesc: 'Entraînements et activités sportives',
            creativeTools: 'Tool',
            creativeToolsDesc: 'Outils et services que j\'utilise pour la créativité',

            tools: {
                figma: { name: 'Figma', description: 'Pour concevoir des interfaces utilisateur et des prototypes interactifs avec collaboration en temps réel' },
                antigravity: { name: 'Antigravity', description: 'Assistant IA avancé pour le codage et la résolution de problèmes complexes' },
                lovable: { name: 'Lovable', description: 'Plateforme pour créer rapidement des applications web avec l\'IA' },
                notion: { name: 'Notion', description: 'Espace de travail tout-en-un pour organiser projets, notes et documentation' },
                excel: { name: 'Excel', description: 'Connaissances de base pour l\'analyse de données et création de feuilles de calcul' },
                office: { name: 'Microsoft Office', description: 'Compétences de base dans la suite Office pour la productivité' },
                python: { name: 'Python', description: 'Connaissances de base en programmation Python' },
                flutter: { name: 'Flutter', description: 'Connaissances de base pour le développement d\'applications mobiles multiplateformes' }
            }
        },
        experience: {
            flybag: {
                role: 'Co-fondateur & UX/UI Designer',
                description: "Création d'un service innovant pour améliorer l'expérience d'achat des touristes. Responsable de la conception de l'interface utilisateur et de l'expérience globale du service.",
                date: '09/2024 - Présent',
            },
            ey: {
                role: 'Campus Ambassador',
                description: "Liaison entre EY et l'université, promotion d'événements et d'opportunités pour les étudiants. Organisation d'activités de réseautage sur le campus.",
                date: '10/2024 - Présent',
            },
            impactHub: {
                role: 'Community Host',
                description: "Accueil des invités et gestion des opérations de l'espace de co-working, assurant un environnement professionnel. Organisation et facilitation d'activités de réseautage.",
                date: '08/2024 - 11/2024',
            },
        },
        education: {
            lum: {
                degree: 'Licence en Administration des Affaires',
                description: 'Focus sur la gestion d\'entreprise, l\'innovation et l\'entrepreneuriat. Participation avec une équipe au concours "Make It A Case", analysant et résolvant avec succès des défis commerciaux réels.',
                date: '2023 - 2026',
            },
            westfalische: {
                degree: 'Programme d\'échange Erasmus+',
                description: 'Programme d\'échange international pour élargir les compétences en affaires et en gestion dans un contexte européen.',
                date: '09/2025 - 02/2026',
            },
            liceo: {
                degree: 'Diplôme de Lycée Scientifique',
                description: 'Participation à des cours de théâtre, création de contenu (publicité, photographie, montage vidéo) et programme de l\'Association Diplomatici.',
                date: '2017 - 2022',
            },
            yesChina: {
                title: 'Programme d\'échange culturel (YES China)',
                description: 'Participation au programme d\'échange culturel YES China, expérience immersive dans la culture et le système éducatif chinois.',
                date: 'Mai 2025',
            },
            excelCourse: {
                title: 'Laboratoire Excel',
                description: 'Activité suivie avec succès au Département de Management, Finance et Technologie.',
                date: 'A.A. 2024/2025',
            },
        },
        skills: {
            hard: 'Compétences Techniques',
            soft: 'Compétences Douces',
            languages: 'Langues',
            tags: {
                native: 'Langue maternelle',
                fluent: 'Courant - IELTS 6.5',
                beginner: 'Débutant',
                problemSolving: 'Résolution de problèmes',
                communication: 'Communication',
                teamWork: 'Travail d\'équipe',
                leadership: 'Leadership',
                creativity: 'Créativité',
            },
        },
        competitions: {
            binp: {
                title: 'Hackathon Binp - Polytechnique de Bari',
                description: "Participation au hackathon organisé par Binp à l'École Polytechnique de Bari. Conception du fonctionnement d'une application innovante pour le secteur du fitness.",
                pitchTitle: '💡 Notre Pitch',
                pitchText: 'Téléchargez notre présentation pour voir les détails du projet.',
                viewProject: 'Voir le Pitch',
                onlyInItalian: "(Seulement en italien)",
            },
            makeItACase: {
                description: "Compétition d'analyse de cas d'affaires avec une équipe universitaire à la LUM. Nous avons analysé le cas \"Alveare da Favola\".",
                viewProject: 'Voir le Pitch',
                onlyInItalian: "(Seulement en italien)",
            },
        },
        youtubePage: {
            title: 'YouTube',
            description: 'Chaînes et vidéos que je suis pour rester à jour, éveiller ma curiosité et apprendre de nouvelles choses',
            channelsTitle: 'Chaînes que je suis',
            channels: {
                marcelloAscani: 'Entrepreneur et YouTuber. Je parle d\'économie, de finance et du monde de l\'entreprise de manière simple.',
                caffeDesign: 'Design, marketing, innovation et futur. Le café internet avec Giuliano, Nanni et Riccardo.',
                novaLectio: 'Histoire, géopolitique et actualité. Des documentaires pour comprendre la dynamique du monde moderne.',
                matArmstrong: 'Restauration et modification de voitures. Donner une seconde chance aux supercars et aux véhicules abandonnés.',
                jakiDale: 'Tech, voyages et lifestyle. Partager ma vie et mes passions à travers les drones et les aventures.',
                mkbhd: 'La référence en matière de technologie. Des critiques de haute qualité sur les smartphones et les gadgets.',
                enricoTartarotti: 'Design et psychologie de la technologie. Analyse approfondie des produits numériques que nous utilisons au quotidien.',
                gioPizzi: 'Analyse politique et commentaire social. Aperçus sur l\'actualité et la société.',
                safariUmano: 'Histoires humaines et aventures de voyage. Exploration des cultures et des gens autour du monde.',
            },
        },
        photographyPage: {
            title: 'Photographie',
            description: 'Une collection de mes clichés préférés.',
        },
        languageNames: {
            it: 'Italien',
            en: 'Anglais',
            de: 'Allemand',
            fr: 'Français',
            es: 'Espagnol',
            da: 'Danois',
        },
    },
    es: {
        nav: {
            experience: 'Experiencia',
            projects: 'Proyectos',
            education: 'Formación',
            skills: 'Habilidades',
            interests: 'Intereses',
            competitions: 'Competiciones',
        },
        hero: {
            greeting: 'Hola, soy',
            description: 'Nacido en Siena y criado en Puglia, soy estudiante de Administración de Empresas en tercer año. Este portafolio cuenta mi viaje a través de proyectos, experiencias e intereses que representan mis valores.',
        },
        sections: {
            experience: 'Experiencia',
            projects: 'Proyectos',
            education: 'Formación Académica',
            skills: 'Habilidades',
            interests: 'Intereses',
            competitions: 'Competiciones',
        },
        footer: {
            title: '¡Hablemos!',
            subtitle: '¿Tienes un proyecto en mente o solo quieres saludar?',
        },
        buttons: {
            downloadCV: 'Descargar CV',
            visitSite: 'Visitar sitio',
        },
        interests: {
            photography: 'Fotografía',
            photographyDesc: 'Exploración creativa a través del objetivo',
            youtube: 'YouTube',
            youtubeDesc: 'Canales y contenido que sigo para inspiración',
            strava: 'Perfil de Strava',
            stravaDesc: 'Entrenamientos y actividades deportivas',
            creativeTools: 'Tool',
            creativeToolsDesc: 'Herramientas y servicios que uso para la creatividad',

            tools: {
                figma: { name: 'Figma', description: 'Para diseñar interfaces de usuario y prototipos interactivos con colaboración en tiempo real' },
                antigravity: { name: 'Antigravity', description: 'Asistente de IA avanzado para programación y resolución de problemas complejos' },
                lovable: { name: 'Lovable', description: 'Plataforma para crear aplicaciones web rápidamente con IA' },
                notion: { name: 'Notion', description: 'Espacio de trabajo todo en uno para organizar proyectos, notas y documentación' },
                excel: { name: 'Excel', description: 'Conocimientos básicos para análisis de datos y creación de hojas de cálculo' },
                office: { name: 'Microsoft Office', description: 'Habilidades básicas en suite Office para productividad' },
                python: { name: 'Python', description: 'Conocimientos básicos de programación Python' },
                flutter: { name: 'Flutter', description: 'Conocimientos básicos para desarrollo de aplicaciones móviles multiplataforma' }
            }
        },
        experience: {
            flybag: {
                role: 'Cofundador & UX/UI Designer',
                description: 'Creación de un servicio innovador para mejorar la experiencia de compra de los turistas. Responsable del diseño de la interfaz de usuario y la experiencia general del servicio.',
                date: '09/2024 - Presente',
            },
            ey: {
                role: 'Campus Ambassador',
                description: 'Enlace entre EY y la universidad, promoviendo eventos y oportunidades para los estudiantes. Organización de actividades de networking en el campus.',
                date: '10/2024 - Presente',
            },
            impactHub: {
                role: 'Community Host',
                description: 'Recepción de invitados y gestión de las operaciones del espacio de co-working, asegurando un ambiente profesional. Organización y facilitación de actividades de networking.',
                date: '08/2024 - 11/2024',
            },
        },
        education: {
            lum: {
                degree: 'Grado en Administración de Empresas',
                description: 'Enfoque en gestión empresarial, innovación y emprendimiento. Participación con un equipo en la competición "Make It A Case", analizando y resolviendo con éxito desafíos empresariales reales.',
                date: '2023 - 2026',
            },
            westfalische: {
                degree: 'Programa de Intercambio Erasmus+',
                description: 'Programa de intercambio internacional para ampliar competencias en negocios y gestión en un contexto europeo.',
                date: '09/2025 - 02/2026',
            },
            liceo: {
                degree: 'Bachillerato Científico',
                description: 'Participación en cursos de teatro, creación de contenido (publicidad, fotografía, edición de video) y programa de la Asociación Diplomatici.',
                date: '2017 - 2022',
            },
            yesChina: {
                title: 'Programa de Intercambio Cultural (YES China)',
                description: 'Participación en el programa de intercambio cultural YES China, experiencia inmersiva en la cultura y el sistema educativo chino.',
                date: 'May 2025',
            },
            excelCourse: {
                title: 'Laboratorio de Excel',
                description: 'Actividad cursada con resultado positivo en el Departamento de Gestión, Finanzas y Tecnología.',
                date: 'Curso 2024/2025',
            },
        },
        skills: {
            hard: 'Habilidades Duras',
            soft: 'Habilidades Blandas',
            languages: 'Idiomas',
            tags: {
                native: 'Nativo',
                fluent: 'Fluido - IELTS 6.5',
                beginner: 'Principiante',
                problemSolving: 'Resolución de problemas',
                communication: 'Comunicación',
                teamWork: 'Trabajo en equipo',
                leadership: 'Liderazgo',
                creativity: 'Creatividad',
            },
        },
        competitions: {
            binp: {
                title: 'Hackathon Binp - Politécnico de Bari',
                description: 'Participación en el hackathon organizado por Binp en el Politécnico de Bari. Ideación del funcionamiento de una aplicación innovadora para el sector del fitness.',
                pitchTitle: '💡 Nuestro Pitch',
                pitchText: 'Descarga nuestra presentación para ver los detalles del proyecto.',
                viewProject: 'Ver Pitch',
                onlyInItalian: "(Solo en italiano)",
            },
            makeItACase: {
                description: 'Competición de análisis de casos de negocio con equipo universitario en LUM. Analizamos el caso "Alveare da Favola".',
                viewProject: 'Ver Pitch',
                onlyInItalian: "(Solo en italiano)",
            },
        },
        youtubePage: {
            title: 'YouTube',
            description: 'Canales y videos que sigo para mantenerme actualizado, despertar mi curiosidad y aprender cosas nuevas',
            channelsTitle: 'Canales que sigo',
            channels: {
                marcelloAscani: 'Emprendedor y YouTuber. Hablo de economía, finanzas y el mundo empresarial de forma sencilla.',
                caffeDesign: 'Diseño, marketing, innovación y futuro. La cafetería de internet con Giuliano, Nanni y Riccardo.',
                novaLectio: 'Historia, geopolítica y actualidad. Documentales para entender la dinámica del mundo moderno.',
                matArmstrong: 'Restauración y modificación de coches. Dando una segunda oportunidad a superdeportivos y vehículos abandonados.',
                jakiDale: 'Tecnología, viajes y estilo de vida. Compartiendo mi vida y pasiones a través de drones y aventuras.',
                mkbhd: 'El referente en tecnología. Reseñas de alta calidad sobre smartphones y gadgets.',
                enricoTartarotti: 'Diseño y psicología de la tecnología. Análisis en profundidad de los productos digitales que usamos a diario.',
                gioPizzi: 'Análisis político y comentario social. Perspectivas sobre actualidad y sociedad.',
                safariUmano: 'Historias humanas y aventuras de viaje. Explorando culturas y personas alrededor del mundo.',
            },
        },
        photographyPage: {
            title: 'Fotografía',
            description: 'Una colección de mis fotos favoritas.',
        },
        languageNames: {
            it: 'Italiano',
            en: 'Inglés',
            de: 'Alemán',
            fr: 'Francés',
            es: 'Español',
            da: 'Danés',
        },
    },
    da: {
        nav: {
            experience: 'Erfaring',
            projects: 'Projekter',
            education: 'Uddannelse',
            skills: 'Færdigheder',
            interests: 'Interesser',
            competitions: 'Konkurrencer',
        },
        hero: {
            greeting: 'Hej, jeg er',
            description: 'Født i Siena og opvokset i Puglia, jeg er studerende i Business Administration på tredje år. Denne portefølje fortæller min rejse gennem projekter, erfaringer og interesser, der repræsenterer mine værdier.',
        },
        sections: {
            experience: 'Erfaring',
            projects: 'Projekter',
            education: 'Akademisk Uddannelse',
            skills: 'Færdigheder',
            interests: 'Interesser',
            competitions: 'Konkurrencer',
        },
        footer: {
            title: 'Lad os tale sammen!',
            subtitle: 'Har du et projekt i tankerne eller vil du bare sige hej?',
        },
        buttons: {
            downloadCV: 'Download CV',
            visitSite: 'Besøg side',
        },
        interests: {
            photography: 'Fotografi',
            photographyDesc: 'Kreativ udforskning gennem linsen',
            youtube: 'YouTube',
            youtubeDesc: 'Kanaler og indhold jeg følger for inspiration',
            strava: 'Strava Profil',
            stravaDesc: 'Træning og sportsaktiviteter',
            creativeTools: 'Tool',
            creativeToolsDesc: 'Værktøjer og tjenester jeg bruger til kreativitet',

            tools: {
                figma: { name: 'Figma', description: 'Til at designe brugergrænseflader og interaktive prototyper med realtidssamarbejde' },
                antigravity: { name: 'Antigravity', description: 'Avanceret AI-assistent til kodning og kompleks problemløsning' },
                lovable: { name: 'Lovable', description: 'Platform til hurtigt at skabe webapplikationer med AI' },
                notion: { name: 'Notion', description: 'Alt-i-en arbejdsområde til at organisere projekter, noter og dokumentation' },
                excel: { name: 'Excel', description: 'Grundlæggende viden om dataanalyse og oprettelse af regneark' },
                office: { name: 'Microsoft Office', description: 'Grundlæggende færdigheder i Office-pakken til produktivitet' },
                python: { name: 'Python', description: 'Grundlæggende Python-programmeringsviden' },
                flutter: { name: 'Flutter', description: 'Grundlæggende viden om udvikling af mobile apps på tværs af platforme' }
            }
        },
        experience: {
            flybag: {
                role: 'Medstifter & UX/UI Designer',
                description: 'Skabelse af en innovativ service til at forbedre shoppingoplevelsen for turister. Ansvarlig for UI-design og den samlede serviceoplevelse.',
                date: '09/2024 - Nu',
            },
            ey: {
                role: 'Campus Ambassador',
                description: 'Bindeled mellem EY og universitetet, fremme af arrangementer og muligheder for studerende. Organisering af netværksaktiviteter på campus for at øge engagementet.',
                date: '10/2024 - Nu',
            },
            impactHub: {
                role: 'Community Host',
                description: 'Modtagelse af gæster og drift af co-working space, sikring af et professionelt miljø. Organisering og facilitering af netværksaktiviteter for at styrke det lokale iværksættermiljø.',
                date: '08/2024 - 11/2024',
            },
        },
        education: {
            lum: {
                degree: 'Bachelor i Business Administration',
                description: 'Fokus på virksomhedsledelse, innovation og iværksætteri. Deltog med et team i "Make It A Case" konkurrencen, med succesfuld analyse og løsning af virkelige forretningsudfordringer.',
                date: '2023 - 2026',
            },
            westfalische: {
                degree: 'Erasmus+ Udvekslingsprogram',
                description: 'Internationalt udvekslingsprogram for at udvide kompetencer inden for forretning og ledelse i en europæisk kontekst.',
                date: '09/2025 - 02/2026',
            },
            liceo: {
                degree: 'Naturvidenskabelig Studentereksamen',
                description: 'Deltagelse i teaterkurser, indholdsskabelse (reklame, fotografi, videoredigering) og Diplomatici Association program.',
                date: '2017 - 2022',
            },
            yesChina: {
                title: 'Kulturelt Udvekslingsprogram (YES China)',
                description: 'Deltagelse i YES China kulturelt udvekslingsprogram, fordybende oplevelse i kinesisk kultur og uddannelsessystem.',
                date: 'Maj 2025',
            },
            excelCourse: {
                title: 'Excel Laboratorium',
                description: 'Aktivitet gennemført med positivt resultat ved Institut for Ledelse, Finans og Teknologi.',
                date: '2024/2025',
            },
        },
        skills: {
            hard: 'Hårde Færdigheder',
            soft: 'Bløde Færdigheder',
            languages: 'Sprog',
            tags: {
                native: 'Modersmål',
                fluent: 'Flydende - IELTS 6.5',
                beginner: 'Begynder',
                problemSolving: 'Problemløsning',
                communication: 'Kommunikation',
                teamWork: 'Teamarbejde',
                leadership: 'Lederskab',
                creativity: 'Kreativitet',
            },
        },
        competitions: {
            binp: {
                title: 'Binp Hackathon - Polytechnic of Bari',
                description: 'Deltagelse i hackathon arrangeret af Binp på Polytechnic of Bari. Idéudvikling af funktionaliteten af en innovativ app til fitnesssektoren.',
                pitchTitle: '💡 Vores Pitch',
                pitchText: 'Download vores præsentation for at se projektdetaljerne.',
                viewProject: 'Se Pitch',
                onlyInItalian: "(Kun på italiensk)",
            },
            makeItACase: {
                description: 'Business case analyse konkurrence med universitetsteam på LUM. Vi analyserede "Alveare da Favola" sagen.',
                viewProject: 'Se Pitch',
                onlyInItalian: "(Kun på italiensk)",
            },
        },
        youtubePage: {
            title: 'YouTube',
            description: 'Kanaler og videoer, jeg følger for at holde mig opdateret, blive nysgerrig og lære nye ting',
            channelsTitle: 'Kanaler jeg følger',
            channels: {
                marcelloAscani: 'Iværksætter og YouTuber. Jeg fortæller om økonomi, finans og erhvervslivet på en enkel måde.',
                caffeDesign: 'Design, marketing, innovation og fremtid. Internet-caféen med Giuliano, Nanni og Riccardo.',
                novaLectio: 'Historie, geopolitik og aktuelle begivenheder. Dokumentarer til at forstå dynamikken i den moderne verden.',
                matArmstrong: 'Bilrestaurering og modifikation. Giver en ny chance til superbiler og forladte køretøjer.',
                jakiDale: 'Tech, rejser og livsstil. Deler mit liv og mine passioner gennem droner og eventyr.',
                mkbhd: 'Benchmark for teknologi. Anmeldelser af høj kvalitet på smartphones og gadgets.',
                enricoTartarotti: 'Design og teknologiens psykologi. Dybdegående analyse af de digitale produkter, vi bruger hver dag.',
                gioPizzi: 'Politisk analyse og social kommentar. Indsigter i aktuelle begivenheder og samfund.',
                safariUmano: 'Menneskelige historier og rejseeventyr. Udforskning af kulturer og mennesker rundt om i verden.',
            },
        },
        photographyPage: {
            title: 'Fotografi',
            description: 'En samling af mine yndlingsbilleder.',
        },
        languageNames: {
            it: 'Italiensk',
            en: 'Engelsk',
            de: 'Tysk',
            fr: 'Fransk',
            es: 'Spansk',
            da: 'Dansk',
        },
    },
};
