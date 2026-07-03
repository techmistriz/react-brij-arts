export interface SafFilm {
  slug: string;
  title: string;
  embedId: string;
  date: string; // ISO date
  year: number;
  category: "launch" | "making-of";
  shortDescription: string;
  context: string[]; // paragraphs of academic-style writing
  transcript: string[]; // paragraphs of transcript / narrated content
}

export const SAF_FILMS: SafFilm[] = [
  {
    slug: "moments-of-serendipity-a-decade",
    title: "Moments Of Serendipity: A Decade",
    embedId: "AT2y5gz1TRg",
    date: "2026-01-15",
    year: 2026,
    category: "launch",
    shortDescription:
      "The official launch film for the 2026 edition. An invitation into the worlds, disciplines and encounters that make up the Serendipity Arts Festival.",
    context: [
      "Ten years into its life, the Serendipity Arts Festival has grown from an experiment in interdisciplinarity into one of the largest publicly accessible arts gatherings in South Asia. The 2026 launch film positions this anniversary not as a celebration of scale, but as an argument about what a festival can be when it refuses to behave like a marketplace.",
      "The film moves between performance halls, riverside venues, kitchens, rehearsal rooms and gallery floors in Panjim, treating the city itself as a curatorial collaborator. In doing so, it reframes the festival as a civic infrastructure: a yearly civic occasion in which audiences, artists and the city renegotiate their relationship to public culture.",
      "What is striking is the film's quiet insistence that art's value lies in encounter rather than spectacle. Where most festival trailers reach for the cinematic, this one prefers the everyday: a hand on a wall, an instrument being tuned, an audience leaning forward. The tagline 'Let Art Take You Places' becomes both literal and metaphorical, an invitation to travel through disciplines as much as through geographies.",
    ],
    transcript: [
      "For a decade, the Serendipity Arts Festival has been a meeting ground. A place where disciplines speak to each other and where audiences are trusted with complexity.",
      "Each December, the city of Panjim becomes a stage, a studio, a gallery, a kitchen. Visual arts, theatre, dance, music, craft and culinary arts unfold side by side, across heritage venues and public spaces.",
      "In 2026, we return to ask the same questions in new forms. What does it mean to gather? What does it mean to listen? What does it mean to make work that belongs to everyone?",
      "Let art take you places.",
    ],
  },
  {
    slug: "accessibility",
    title: "'Making Of' | Accessibility",
    embedId: "ExTwY3Ib6IA",
    date: "2025-12-20",
    year: 2025,
    category: "making-of",
    shortDescription:
      "A look inside the festival's accessibility programme, featuring the artists, interpreters and designers re-imagining how performances are experienced.",
    context: [
      "Accessibility, in most cultural institutions, is treated as a compliance question. The 2025 Serendipity Arts Festival argued instead that it is a curatorial one. Access is not an addition to the work; it is a way of imagining the audience differently from the first sketch.",
      "Working across audio description, sign-supported performance, sensory design and integrated dramaturgy, the programme brought disabled artists and access practitioners into the rehearsal room rather than the foyer. The result was a body of work that did not merely accommodate disabled audiences but was shaped by their presence.",
      "The film documents this shift in practice. It captures the small rehearsal choices, the recalibrations of lighting and sound, the language of touch tours, and the slow building of trust between collaborators. It also stages a quiet provocation to the wider sector: that the real measure of inclusion is who is in the room when the decisions are being made.",
    ],
    transcript: [
      "When we speak about accessibility, we are not speaking about a service. We are speaking about a relationship between a work and its audience.",
      "In our rehearsals, the audio describer, the sign language interpreter and the access dramaturg are not visitors. They are part of the company.",
      "We learn to ask different questions. Not 'how do we translate this for a blind audience' but 'what would this work be if a blind audience were always imagined within it'.",
      "The work changes. The room changes. And the audience changes too.",
    ],
  },
  {
    slug: "funkybodhi-irular-ensemble",
    title: "'Making Of' | Funkybodhi ft S. Rani's Irular Ensemble",
    embedId: "DG0AxE2rtNw",
    date: "2025-12-18",
    year: 2025,
    category: "making-of",
    shortDescription:
      "An intimate glimpse into the making of a cross-cultural musical collaboration between the producer Funkybodhi and S. Rani's Irular Ensemble from Tamil Nadu.",
    context: [
      "The collaboration between the electronic producer Funkybodhi and the Irular Ensemble led by S. Rani is, at first glance, a meeting between genres. Listened to more carefully, it is a meeting between economies, histories and ways of holding sound.",
      "The Irular community, an indigenous people of Tamil Nadu, carry musical practices that have rarely been afforded the protections of the classical canon or the visibility of mainstream folk. Placing this practice in dialogue with contemporary electronic production is not a neutral act. The film follows the negotiations of consent, credit and creative authorship that such a collaboration demands.",
      "What emerges is neither fusion nor extraction. The film charts an attempt at musical co-authorship in which both parties retain the right to refuse, to revise, and to define their own role in the final work. In doing so, it offers a quietly important model for how Indian festivals might commission across cultural asymmetries.",
    ],
    transcript: [
      "Those songs were traditionally sung by our elders. Our grandfathers sang them, and then our fathers and mothers sang them. After that, we decided that we shouldn't let it fade away, that we should recreate it.",
      "My name is Rani, I am from Siruseri village in the Chengalpattu district. There are 37 tribal groups today, and the Irular people are the fourth among them.",
      "If we keep working all the time, life feels monotonous. Since the time of our elders, people would happily play the drums and sing songs in the evenings as a joyful pastime. To prevent this tradition from being lost, we formed an art group called Dholkattai Irular Kalaikuzhu. Through this group we gathered everyone who knew how to sing and play the drums, and we started writing down all those songs.",
      "To write a song you need a basis. Whenever something is on my mind, like if I want to write about God, I write about God, or I write about an aunt or uncle. We are now teaching this to everyone, and this knowledge is reaching the people. We have recorded about 84 songs so far.",
      "Not everyone speaks up easily. If you go to a village, maybe only 10 people will speak while the rest stay quiet. We have to bring this music to such people so that they will open up and talk.",
      "(Funkybodhi) I am currently doing some projects with performers and I build ideas with them for global audiences. Mr. Paul, myself, and the Serendipity team put together a list of artists, and Rani Amma seemed to be a perfect fit for something like this. Rani Amma is, according to us, the Beyoncé of folk music from here. She is a powerhouse, not just as a performer but in who she is as a person. If not for her, we would have clearly lost a lot of what we know.",
      "(Rani Amma) When this community steps out to see more of the outside world, there is an opportunity to nurture and develop the talents within. There is hope that they will create opportunities for their families and the artists around them to continue on this journey. If they get such opportunities, they will go on to develop many more people. Just as I have created one group now, they should go on to create many groups.",
    ],
  },
  {
    slug: "ramman-folk-experience",
    title: "'Making Of' | Ramman: A Unique Folk Experience",
    embedId: "u5uTe3IKT2g",
    date: "2025-12-16",
    year: 2025,
    category: "making-of",
    shortDescription:
      "Inside Ramman, a centuries-old ritual theatre tradition from the Garhwal Himalayas, brought from the village courtyard onto the festival stage.",
    context: [
      "Ramman is not a performance in the conventional sense. Recognised by UNESCO as an Intangible Cultural Heritage of Humanity, it is a ritual theatre tradition performed annually in the Saloor Dungra villages of the Garhwal Himalayas. It binds together myth, masked dance, agricultural calendar and caste-specific role, and is inseparable from the social fabric that produces it.",
      "Staging Ramman within a festival programme raises serious questions. What is lost when a ritual leaves its courtyard? What does it mean to ask audiences in Panjim to receive, in a single evening, a form that takes a full day in its village context? The 2025 commission refused to resolve these questions cleanly. Instead, it made the negotiation visible.",
      "The film follows the performers as they prepare, travel and adapt. It documents both the rigour of the tradition and the editorial choices made to translate it for a festival audience, while keeping authorship firmly with the community itself.",
    ],
    transcript: [
      "For the preservation of any art form and any tradition, it is very important that we keep practicing it and showing it to people. Bring the Bhonkar please, the Bhonkar players will come, right? Come on, let's begin, start the practice once.",
      "My village is Saloor-Dungra in Jyotirmath, Uttarakhand, where the Ramman fair is organized every year. It is believed that when Shankaracharya ji came to Devbhoomi Uttarakhand in the 8th century at the age of 12, the Ramman, the Ramayana, was started by him from that time.",
      "So Ramman is actually the Ramayana. Although in this entire 14-day program there are also some scenes from the Mahabharata, for the theater we just bring out some glimpses of it.",
      "It is a completely religious ritual, and these masks are the representatives of our deities. There are a total of 18 masks, and there is a very sacred wood called Bhojpatra. We use that wood to make these masks. Through those masks, the entire Ramlila and Mahabharata are performed.",
      "The people involved are the local people. Some are farmers, some are people who look after their cattle, and students who are going to take this form to the next level. So I hope that our audience will receive it enthusiastically, admire it, and remember it.",
    ],
  },
  {
    slug: "mrcchakatikam-kutiyattam",
    title: "'Making Of' | Mrcchakatikam In Kutiyattam",
    embedId: "L3bdnnNR77g",
    date: "2025-12-14",
    year: 2025,
    category: "making-of",
    shortDescription:
      "A behind-the-scenes look at the staging of Mrcchakatikam in Kutiyattam, one of the world's oldest continuously performed theatre forms.",
    context: [
      "Kutiyattam, the Sanskrit theatre tradition of Kerala, is one of the oldest continuously performed theatre forms in the world. Its grammar of gesture, eye movement and rhythm has been transmitted through guru-shishya lineages for nearly two thousand years. To stage Sudraka's Mrcchakatikam within this form is to enter into a conversation with that lineage rather than to produce a new play.",
      "The 2025 commission worked with senior practitioners to bring the classical text into a Kutiyattam frame, holding the long temporality of the form against the brevity of festival programming. The film attends to this tension carefully, refusing to treat Kutiyattam as either museum object or contemporary novelty.",
      "What emerges is a serious argument for slow audience attention. Kutiyattam does not flatter the viewer; it asks them to learn its vocabulary. The film makes the case that this asking is itself a form of cultural respect, and that festivals committed to interdisciplinarity have a responsibility to programme work that resists easy consumption.",
    ],
    transcript: [
      "In life I am a person who is slightly anxious. I keep a low profile.",
      "Kutiyattam is one of the oldest living theatre traditions of the world today. It has a very long, unbroken tradition of practice. It is both a storytelling tradition and a theatre tradition. These were two separate traditions that were woven together and became one.",
      "The role of the female performer is very important, very strong in Kutiyattam, which is very unlike many other theatre traditions in the world like Beijing opera, Kathakali, or Kabuki. The presence of the actress is not confined to a sensual body. It is a neutral body of a storyteller that can impersonate any type of character. So I can be a monkey, a warrior, I can be a god, I can be a demon, a snake.",
      "The physicality is very liberating. This is what drew me to Kutiyattam. The language, the acting style allows for a lot of freedom. It allows you to push your limits with emotions, with physicality. That is the power of a form.",
      "When you train in a form for many years, it becomes your language. I have been on stage from a very young age and I have grown to be so comfortable in that space, because it is such a protected space. I think that is the most empowering place for me.",
    ],
  },
  {
    slug: "puppet-folk-arts-lab",
    title: "'Making Of' | Puppet Folk Arts Lab",
    embedId: "5Kk65o_Sb48",
    date: "2025-12-12",
    year: 2025,
    category: "making-of",
    shortDescription:
      "Inside the Puppet Folk Arts Lab, where puppeteers, designers and storytellers gather across traditions to experiment, build and play.",
    context: [
      "Indian puppetry exists as a constellation of regional forms, each with distinct materials, vocabularies and audiences. The Puppet Folk Arts Lab gathered practitioners across these traditions, not to homogenise them, but to ask what they might learn from each other when placed in a shared studio.",
      "The lab format is significant. Rather than commissioning a finished show, the festival invested in the conditions for experimentation: time, space, dramaturgy, and the right to fail. The film documents what such an investment makes possible, and quietly argues that this kind of patient infrastructure is what the contemporary folk arts ecosystem needs most.",
      "Across the days of the lab, traditional figures appear in new lights, contemporary techniques meet inherited craft, and a generation of puppeteers find peers across linguistic and regional lines. The work that emerges is not folk preserved in formaldehyde. It is folk that is being lived with.",
    ],
    transcript: [
      "What is tradition. Is it something stuck in time, or has it continuously innovated? Otherwise, how has it survived? India is unique in the way that we have traditional forms which are a few thousand years old.",
      "But training in traditional puppetry was always generational. There was never a focused professional training program for puppeteers. It remained isolated in different corners of the country. The idea here is to run training programs for both people who have never been puppeteers and some who have been practicing for a while but want to add to their skills.",
      "Traditionally the light source would be a single source like fire. What has changed is that now it is the overhead projector, which not only enables you to make smaller puppets but also very elaborate backdrops. They are doing things like runners, where the puppet walks and the scenery changes. They are doing special effects. It is a whole exercise in visualising.",
      "The backgrounds of the artists are very varied. There are those who are entrenched in generations of tradition. Some come directly from temple practices. There are those who have contracts with villages which are centuries old. It is highly unlikely that you would have puppeteers from six or seven states of India under one roof. This is missing in the world of traditional performers.",
      "The audience understands the gist of the story. The traditional narrative is not exciting for everybody. When you leave that, what else do you have, because old audiences are dying out. So we are very clear that we want to build a new audience. And I have to tell you, these shows are absolutely new. They were built here in two days, and the puppeteers who built them are trying this technique for the first time.",
      "It is very clear that there is still a huge market for traditional puppet forms. Audiences definitely want to watch it. It is just that most people do not even know they exist. The idea here is to make sure that people actually have access to what is technically their own heritage.",
    ],
  },
  {
    slug: "culinary-cosmopolitanism",
    title: "'Making Of' | Culinary Cosmopolitanism",
    embedId: "ONKeMrwrY7w",
    date: "2025-12-10",
    year: 2025,
    category: "making-of",
    shortDescription:
      "A food writer travels across Tamil Nadu in search of the parotta, tracing how a newcomer to a rice-eating state became inseparable from its everyday food fabric.",
    context: [
      "Food writing in India has too often been the preserve of restaurant criticism and travel features. The Culinary Cosmopolitanism project takes a different posture. It treats the kitchen, the wayside stall and the working-class meal as legitimate sites of cultural enquiry, and the food worker as an intellectual.",
      "By tracing the parotta across Tamil Nadu, the work complicates a single, settled idea of Tamil taste. The parotta is geographically diffuse, historically recent and socially mobile. To follow it is to follow questions about labour, migration, gender and class, and to refuse the temptation of a tidy origin story.",
      "The film documents this research as practice. It captures the rhythm of fieldwork, the negotiation of access in spaces unaccustomed to being archived, and the ethics of writing about communities whose work has rarely been written about with care. Above all, it argues for food writing that takes its subjects seriously as makers of meaning, not merely as makers of food.",
    ],
    transcript: [
      "Whatever I consumed as literature and cinema was not reflective of the kind of place that I come from. My journey with food writing began as a way of complicating the idea of Tamil tastes.",
      "So the project is about the parotta eateries of Tamil Nadu. Before the actual fieldwork began, my idea was to find out the fascination for parotta taste. We are predominantly a rice eating state, and parotta eating as a fact started in the late 60s. It came out of nowhere, and now it has become a very important, essential part of its food fabric. So the newness of the tradition in this matter is an important research question in this project. And then it was about the people who make it.",
      "When I was prepared to set out into the field, one thing I was severely handicapped with was my inability to click a nice photo. When I initially started this project I hesitated a little to do this because I do not have an experience in food photography. But Sumaya told me that it is all about the working classes, so you have to do it, and you can.",
      "There are certain places that do not want to engage with these new fats. There is still a huge movement against parotta eating because people paint that as a reason for many illnesses. But still the amount of parotta eating has not come down.",
      "When talking to these old parotta makers I realised whatever the food academia imagines to be its provenance is so different from the reality. It is very hard to come by a space without a parotta. I love to call this as where there is a place, there is a parotta, in Tamil Nadu. So to me it is about how we make meanings through food.",
    ],
  },
  {
    slug: "chari-wadoo-echo-of-time",
    title: "'Making Of' | Chari Wadoo: Echo Of Time",
    embedId: "HLQRDZ5rDmM",
    date: "2025-12-08",
    year: 2025,
    category: "making-of",
    shortDescription:
      "A photographer takes the wet plate collodion process to the carpenters of Moira, Goa, treating an unbroken craft tradition as portraiture and homage.",
    context: [
      "Chari Wadoo: Echo Of Time is a meditation on craft as continuity. Working in the wet plate collodion process, a photographic method dating back to 1851, the artist insists on a slow, archival relationship between subject and image. The choice of medium is not nostalgic but ethical. It asks the sitter for time, presence and trust.",
      "The community of carpenters in Moira, Goa, offered the project a counterpart in another time-bound craft. Their practice of seasoning wood for seven years, in a market that rewards speed above all, mirrors the photographer's commitment to a method that resists efficiency. To bring these two slow practices together is to argue for a different economy of attention.",
      "The film documents this encounter as portraiture. The carpenters are photographed not as picturesque subjects but as stalwarts, family. The work refuses the extractive gaze that has too often defined documentary photography of artisan communities, and offers instead what the artist describes as homage to time and timelessness.",
    ],
    transcript: [
      "These are silver sculptures. It is pure silver which is retained for life on those metallic plates. This wet plate collodion process dating back to 1851, one of the oldest photographic methods. I try to create my work in the most archival and the most traditional manner as much as possible.",
      "You literally have to take everything like it is still life, like a mannequin, because you are working with exposures which can be between 10 seconds to 30 seconds, sometimes even more. That is it. That is it. That is it.",
      "The collodion process is something I really wanted to take to Chari Wadoo. This community of carpenters in Moira. For me Chari Wadoo is like a space set back in time. The kind of architecture, the kind of families, the kind of living that happens out there, is almost like a time stamp.",
      "To season wood for 7 years, it is the most traditional way of seasoning your wood. To see people doing that regardless of what is commercially acceptable. Viability is a big factor. But here is a tradition which is unbroken. If I go to Udar's place, I get flashes from another period altogether. Family.",
      "For this particular project, Chari Wadoo and Echo Of Time, I wanted to shoot these people as members of my own family. People who are stalwarts in their own right. The only thing that my project aims to do is to pay my regards and my respect to them. It is almost like an homage to time and timelessness.",
    ],
  },
];

export const getFilmBySlug = (slug: string) => SAF_FILMS.find((f) => f.slug === slug);
