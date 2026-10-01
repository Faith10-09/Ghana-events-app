// All event data lives here so pages can reuse it.
// To add an event, add a new object with a unique id.
export const events = [
  { id: 1, name: 'Chale Wote Street Art Festival', city: 'Accra', region: 'Greater Accra', category: 'Arts', month: 'August',
    desc: 'Jamestown turns into an open-air gallery: murals, live music, fashion, skating and performance art fill the streets for a weekend.' },
  { id: 2, name: 'Homowo Festival', city: 'Accra', region: 'Greater Accra', category: 'Culture', month: 'August',
    desc: 'The Ga people celebrate the harvest with kpokpoi, drumming and processions, recalling a past famine survived.' },
  { id: 3, name: 'Akwasidae Festival', city: 'Kumasi', region: 'Ashanti', category: 'Culture', month: 'Every 6 weeks',
    desc: 'At the Manhyia Palace the Asantehene receives chiefs and subjects in kente and gold, with drums, dancing and libation.' },
  { id: 4, name: 'Aboakyer Festival', city: 'Winneba', region: 'Central', category: 'Culture', month: 'May',
    desc: 'The Effutu people hold a lively deer-hunt tradition with Asafo company displays, drumming and street celebrations.' },
  { id: 5, name: 'Panafest & Emancipation Day', city: 'Cape Coast', region: 'Central', category: 'Heritage', month: 'July - August',
    desc: 'A Pan-African gathering of reflection and celebration around the castles of Cape Coast and Elmina, with talks, music and a night durbar.' },
  { id: 6, name: 'Decemba 2 Rememba', city: 'Accra', region: 'Greater Accra', category: 'Music', month: 'December',
    desc: 'The festive season brings concerts, beach parties and homecoming events as the diaspora returns to Accra.' },
  { id: 7, name: 'Ghana Food & Jollof Day', city: 'Accra', region: 'Greater Accra', category: 'Food', month: 'August',
    desc: 'Cooks and food lovers compare jollof, waakye, kenkey and more, with tastings, stalls and live entertainment.' },
  { id: 8, name: 'Kente & Adinkra Craft Fair', city: 'Bonwire', region: 'Ashanti', category: 'Arts', month: 'Varies',
    desc: 'Visit the weaving town of Bonwire to watch kente being woven by hand and learn what Adinkra symbols mean.' }
]
// Build the filter list automatically from the events.
// Set removes duplicates; 'All' is added at the front.
export const categories = ['All', ...new Set(events.map(e => e.category))]
