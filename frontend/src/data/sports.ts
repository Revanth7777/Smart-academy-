import { brand } from "@/data/theme";

export type Sport = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  color: string;
  origin: string;
  highlights: string[];
  sections: { heading: string; body: string }[];
};

export const sports: Sport[] = [
  {
    slug: "atya-patya",
    name: "Atya Patya",
    emoji: "🏃",
    tagline: "A traditional chase-and-dodge sport that builds speed, reflexes, and teamwork.",
    description:
      "Traditional Indian tag sport focused on quick movement, timing, and strategy.",
    color: brand.gradient,
    origin: "Maharashtra, India",
    highlights: [
      "Fast chasing and dodging",
      "Reflexes and directional control",
      "Team coordination and game awareness",
      "Stamina and agility",
    ],
    sections: [
      {
        heading: "What is Atya Patya?",
        body: "Atya Patya is a traditional Indian team sport played on a marked court with parallel lanes. One team sends chasers to block and tag, while the other team sends runners who dodge and cross lanes to score safely. It is a classic chase-and-escape game that combines speed, timing, and sharp decision-making.",
      },
      {
        heading: "History & cultural roots",
        body: "Atya Patya is one of India’s long-standing indigenous field games and has been popular in school and community tournaments for decades, especially in western India. It developed as a low-equipment sport that could be played almost anywhere and remains valued for fitness, teamwork, and local sporting culture.",
      },
      {
        heading: "How it is practiced",
        body: "Training focuses on lane movement, quick starts and stops, safe turning, and tagging technique. Players practice body feints, acceleration bursts, and anticipation drills to outsmart opponents. Coaches also train communication and rotation strategy so teams can defend lanes efficiently and attack at the right moment.",
      },
      {
        heading: "Why train Atya Patya with us",
        body: "Students build agility, reaction speed, and confidence while learning structured team play. Our program starts with beginner-friendly movement and court awareness, then progresses to advanced chase patterns and match strategy for competitive performance.",
      },
    ],
  },
  {
    slug: "taekwondo",
    name: "Taekwondo",
    emoji: "🥋",
    tagline: "Korean martial art of powerful kicks, focus, and Olympic competition.",
    description:
      "Korean martial art focused on powerful kicks, discipline, and self-defense.",
    color: brand.gradient,
    origin: "Korea",
    highlights: [
      "Dynamic kicking techniques",
      "Olympic sparring (Kyorugi)",
      "Forms / Poomsae training",
      "Discipline & respect",
    ],
    sections: [
      {
        heading: "What is Taekwondo?",
        body: "Taekwondo is a Korean martial art and Olympic combat sport. The name breaks down as Tae (foot / to step), Kwon (fist / strike), and Do (the way or discipline). It is practiced in more than 200 countries and teaches far more than fighting — respect, perseverance, and self-control are core values of the art.",
      },
      {
        heading: "History in brief",
        body: "Its roots reach back to older Korean fighting traditions such as Taekkyon and Subak. After World War II and the Korean War, several martial arts schools (kwans) unified their systems into what became modern Taekwondo. World Taekwondo (formerly the World Taekwondo Federation), founded in 1973, governs the Olympic style. Taekwondo was a demonstration sport at Seoul 1988 and became an official Olympic medal sport at Sydney 2000.",
      },
      {
        heading: "How competition works",
        body: "Two main pillars are sparring (Kyorugi) and patterns (Poomsae). In Olympic-style sparring, athletes score with punches and kicks to the torso or head. Electronic Protector and Scoring Systems (PSS) often register valid impact. Typical scoring includes 1 point for a punch to the trunk, 2 for a kick to the trunk, 3 for a kick to the head, with higher points for turning / spinning techniques. Matches are usually three rounds with short breaks between them.",
      },
      {
        heading: "Why train Taekwondo with us",
        body: "Our program builds flexibility, explosive power, balance, and mental focus. Beginners learn stances, basic kicks, and etiquette; advancing students prepare for belt progression, forms, and competitive sparring. It is an excellent path for fitness, confidence, and sport ambition.",
      },
    ],
  },
  {
    slug: "wushu",
    name: "Wushu",
    emoji: "🥋",
    tagline: "Chinese martial arts sport — flowing forms, weapons, and sanda combat.",
    description:
      "Chinese martial art blending fluid movements, acrobatics, and combat forms.",
    color: brand.gradient,
    origin: "China",
    highlights: [
      "Taolu (forms & routines)",
      "Sanda (full-contact sparring)",
      "Weapons & barehand styles",
      "Speed, power & flexibility",
    ],
    sections: [
      {
        heading: "What is Wushu?",
        body: "Wushu (武术) literally means “martial arts” in Chinese. As a modern sport, it compiles and standardizes techniques drawn from traditional Chinese systems such as Shaolin, tai chi, and Wudang styles. It is practiced worldwide under the International Wushu Federation (IWUF) and appears in major multi-sport events including the Asian Games and World Games.",
      },
      {
        heading: "Two competitive paths: Taolu & Sanda",
        body: "Taolu are choreographed routines judged on quality, difficulty (nandu), and overall performance. Athletes may compete barehanded — for example Changquan (long fist), Nanquan (southern fist), or tai chi — or with weapons such as the straight sword (jian), broadsword (dao), staff (gun), and spear (qiang). Sanda (also called Sanshou) is the full-contact combat side, combining striking with throws and grappling under sport rules.",
      },
      {
        heading: "Modern development",
        body: "While Chinese martial traditions are ancient, competitive modern wushu was shaped in the mid-20th century to create a national training system with standard forms and curricula. Today both traditional approaches and sport wushu thrive, giving students a path from fitness and performance artistry to high-level international competition.",
      },
      {
        heading: "Why train Wushu with us",
        body: "Wushu develops explosive athleticism, coordination, flexibility, and artistic expression. Whether your goal is graceful taolu performance or combat-ready sanda skills, structured coaching helps you progress safely from foundational stances to advanced combinations.",
      },
    ],
  },
  {
    slug: "archery",
    name: "Archery",
    emoji: "🏹",
    tagline: "Precision under pressure — focus, form, and the pursuit of the gold.",
    description:
      "Precision sport developing focus, patience, and hand-eye coordination.",
    color: brand.gradient,
    origin: "Global / Olympic sport",
    highlights: [
      "Target precision & scoring",
      "Breath & posture control",
      "Mental focus under pressure",
      "Olympic recurve pathway",
    ],
    sections: [
      {
        heading: "What is Archery?",
        body: "Archery is the sport of shooting arrows at a target with a bow. It is one of the world’s oldest practiced disciplines, with roots in hunting and warfare that stretch back thousands of years. As a modern sport, it rewards patience, steady technique, and the ability to stay calm when every shot counts.",
      },
      {
        heading: "Olympic archery at a glance",
        body: "Archery appeared at the Olympic Games in 1900, 1904, 1908, and 1920, then returned permanently in 1972 after World Archery helped standardize international rules. Olympic athletes use recurve bows and shoot at a 122 cm target from 70 metres. The gold (10-ring) at the center is only about 12.2 cm across — a true test of precision.",
      },
      {
        heading: "How scoring & matches work",
        body: "In ranking rounds, archers often shoot 72 arrows for a total score that seeds the elimination brackets. Matchplay commonly uses a set system: the better score in a set earns set points, and the first to reach six set points wins. Individual, team, and mixed-team formats keep competition exciting for athletes and spectators alike. Other popular disciplines include indoor, field, and compound archery.",
      },
      {
        heading: "Why train Archery with us",
        body: "Archery sharpens concentration, posture, and emotional control. Our coaching covers safe equipment handling, stance and draw technique, aiming routines, and progressive target practice — ideal for beginners and for students aiming toward competitive pathways.",
      },
    ],
  },
  {
    slug: "sepak-takraw",
    name: "Sepak Takraw",
    emoji: "⚽",
    tagline: "Kick volleyball — acrobatic rallies with feet, knees, chest, and head.",
    description:
      "Dynamic Southeast Asian sport using feet, knees, and head to play volleyball.",
    color: brand.gradient,
    origin: "Southeast Asia",
    highlights: [
      "No hands — feet & head only",
      "Volleyball-style net play",
      "Acrobatic spikes & blocks",
      "Team coordination",
    ],
    sections: [
      {
        heading: "What is Sepak Takraw?",
        body: "Sepak takraw is a Southeast Asian team sport played with a woven rattan or synthetic ball over a net on a court similar to badminton. Players may use feet, knees, chest, and head — but not hands or arms. The name blends Malay sepak (“kick”) and Thai takraw (woven ball). It is often described as a mix of volleyball’s net game and football’s foot skills.",
      },
      {
        heading: "History & modern rules",
        body: "Traditional circle-kick games existed across the region for centuries. A faster net version known as Sepak Raga Jaring was showcased in Penang in 1945. In 1960, officials from Malaysia, Singapore, Thailand, and Myanmar met in Kuala Lumpur to agree on the name “Sepak Takraw” and standard rules. It became a Southeast Asian Games medal event in 1965 and is widely regarded as Malaysia’s national sport. The International Sepaktakraw Federation (ISTAF) governs the game globally.",
      },
      {
        heading: "How a rally works",
        body: "Teams of two to four players face off. A teammate tosses the ball to the server (tekong), who kicks it over the net. The receiving side has up to three touches to return it. Spectacular overhead kicks and bicycle-style spikes are signature attacks, while defenders dig and block without using hands. Points are won when the opponent faults or the ball lands in their court.",
      },
      {
        heading: "Why train Sepak Takraw with us",
        body: "This sport builds leg power, aerial awareness, teamwork, and explosive agility. Training progresses from ball control and serving to advanced attacking combinations — a thrilling option for athletes who love football skills with volleyball intensity.",
      },
    ],
  },
  {
    slug: "soft-tennis",
    name: "Soft Tennis",
    emoji: "🎾",
    tagline: "Japan’s soft-ball racket sport — fast rallies for every age and level.",
    description:
      "Fast-paced racket sport perfect for agility, reflexes, and team play.",
    color: brand.gradient,
    origin: "Japan",
    highlights: [
      "Soft rubber ball & light racket",
      "Singles & doubles formats",
      "Agility & racket skills",
      "Asian Games pathway",
    ],
    sections: [
      {
        heading: "What is Soft Tennis?",
        body: "Soft tennis is a racket sport that evolved in Japan in the 1880s from lawn tennis. Instead of a hard felt ball, players use a soft, hollow rubber ball and a lighter, more flexible racket with lower string tension. Courts and net height are essentially the same as regular tennis, but the softer ball creates unique bounce, control, and shot-making styles. The International Soft Tennis Federation (ISTF) governs the sport worldwide.",
      },
      {
        heading: "History & global growth",
        body: "When Western tennis arrived in Japan in the late 19th century, local players adapted the game with rubber balls that suited available equipment and preferences — giving rise to soft tennis (ソフトテニス). It spread widely across Asia (notably Japan, Korea, Chinese Taipei, and later China and Southeast Asia) and now reaches players on multiple continents. Soft tennis features in events such as the Asian Games and World Championships.",
      },
      {
        heading: "How the game is played",
        body: "Matches are contested in singles or doubles. The aim is the same as tennis: return the ball over the net so it lands in bounds and force errors from your opponent. Competition formats often use best-of-seven or best-of-nine game structures depending on event rules. Because the ball is softer and lighter, players of many ages can hit with power while keeping control — a big reason soft tennis is known as a sport “for anyone and everyone.”",
      },
      {
        heading: "Why train Soft Tennis with us",
        body: "Soft tennis develops footwork, hand-eye coordination, tactical doubles play, and cardiovascular fitness. Our coaching introduces grip, strokes, serve, and court movement in a welcoming environment — then builds toward match play and competitive readiness.",
      },
    ],
  },
];

export function getSportBySlug(slug: string): Sport | undefined {
  return sports.find((s) => s.slug === slug);
}

export function getAllSportSlugs(): string[] {
  return sports.map((s) => s.slug);
}
