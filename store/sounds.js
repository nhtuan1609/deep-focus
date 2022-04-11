const SOUNDS = [
  {
    id: '154c1de3-5950-4ffb-a425-d8737aaa0a7f',
    name: 'Bonfire',
    imageSrc: require('~/assets/images/bonfire.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1KgjpOG5vwdCMciA_EVnylwHMrI0jYcgs'
  },
  {
    id: 'b14d4033-03a6-46b2-91b7-0f288f62fce0',
    name: 'Ocean Waves',
    imageSrc: require('~/assets/images/ocean-waves.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1TlCAunirg2kFwx88u_FdjJDB67TL-hV6'
  },
  {
    id: '1c127b0f-4994-43a4-a9d4-7eb661ebaaf5',
    name: 'Heavy Rain',
    imageSrc: require('~/assets/images/heavy-rain.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1GiAvkjwLxMXdmZ2HCxr1g9ekr94zkenC'
  },
  {
    id: '8495d567-665b-4aa2-99fd-1ee09fb3bc5a',
    name: 'Thunder',
    imageSrc: require('~/assets/images/thunder.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=10go94SC2jS71hNa4SJ126-AF3Y7trqSc'
  },
  {
    id: '72f40732-7938-4cf6-a756-a179dd0cd824',
    name: 'Wind',
    imageSrc: require('~/assets/images/wind.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1ivctAolnWpE8f4EPswSkKDHQ6BmXHbZU'
  },
  {
    id: 'bc0dc59a-5481-4939-bf58-b35975f2f432',
    name: 'Waterfall',
    imageSrc: require('~/assets/images/waterfall.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1XcemX8FsuVxdqATPUwEJLr7hIB2CB76a'
  },
  {
    id: '9feb37bd-a6bd-449f-9ae8-816675283ede',
    name: 'Birds',
    imageSrc: require('~/assets/images/birds.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1udgu1AO4xv6n_5Di1noN1BrMpKUIBRW7'
  },
  {
    id: '63dc3063-6c2a-49b5-a17f-f7d691d7f46b',
    name: 'Frogs',
    imageSrc: require('~/assets/images/frogs.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1pMKQyKOh9-uzA2HtUCLt8m-X4Zr2t2sK'
  },
  {
    id: '95a07bfc-9b2b-4d5b-b488-34a3becf2f2b',
    name: 'Chimes',
    imageSrc: require('~/assets/images/chimes.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1zZYnZuZL610Sfh6xuQQ2_xqB-3bh6wkb'
  },
  {
    id: '6ba21262-c459-4c25-b9cd-7728f4da9743',
    name: 'Sleeping',
    imageSrc: require('~/assets/images/sleeping.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1ZFLfZLrLVHq5-aUinz_a_hKQasH9ffan'
  },
  {
    id: 'e736b3fb-9500-4b9d-bbc9-eed4dd914e13',
    name: 'Coffee House',
    imageSrc: require('~/assets/images/coffee-house.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1fSCEyhfIxNoBB7j4pqQ8o_Bap2RqGXIX'
  },
  {
    id: 'e61fae6f-ab7b-4ece-9d7b-cfe0227c112e',
    name: 'Cooking',
    imageSrc: require('~/assets/images/cooking.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=197u6_P-naEiHBMVG9FNl-kwgWbnYmVWL'
  },
  {
    id: '5a7d04ba-0578-4a29-89b0-c7e4295ada68',
    name: 'Market',
    imageSrc: require('~/assets/images/market.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1S0z-2G4NeXCn-Ac2PZwejiROKAcJDltC'
  },
  {
    id: '69fbf962-2ff1-4385-bc33-f2af1956424a',
    name: 'Yoga',
    imageSrc: require('~/assets/images/yoga.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1Vm6wLQzl1gAWr4s0SuxxZWGh3vbU03U-'
  },
  {
    id: 'c49337b6-bd96-4b9f-b601-e08992e17f4a',
    name: 'Coding',
    imageSrc: require('~/assets/images/coding.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1vBQVNcd17CxHfN8oRc4cPMrx_mJrKsKS'
  },
  {
    id: '8c19b6fb-b5c6-450d-9835-2c2008198aaf',
    name: 'Piano',
    imageSrc: require('~/assets/images/piano.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1BCdhLOywPuWfuxt30T76ny7cH0sfD_dH'
  },
  {
    id: '473664df-f059-4745-b9f7-19e6b7914647',
    name: 'flute',
    imageSrc: require('~/assets/images/flute.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1d37tSI07zBAqwsu0FopvdfaaiMHgY-uC'
  },
  {
    id: '57be589a-faa7-4374-a9ad-2f44ebea5d23',
    name: 'Guitar',
    imageSrc: require('~/assets/images/guitar.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1xpGZGFeD5onhhvBhfUsJVS9sFKG-4Oxl'
  },
  {
    id: 'f03a1e10-7fea-4136-8981-281b0db26f16',
    name: 'Jazz',
    imageSrc: require('~/assets/images/jazz.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1w20Idz6ELZ838o1j94YbkABNcqasNeX3'
  },
  {
    id: 'b753b021-cb16-42ca-a1e8-d6e55183ff3b',
    name: 'Disc Player',
    imageSrc: require('~/assets/images/disc-player.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=10CyiiYqvadI50i3HzC2S76O-pUMBBeLR'
  },
  {
    id: '4d4f9f3f-6147-4c73-94d7-0c1a67e29aba',
    name: 'Beatbox',
    imageSrc: require('~/assets/images/beatbox.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=11stXdybAZy2lllhGmjnypvNGJrh_ncV9'
  },
  {
    id: 'a31edf8f-0959-42e1-89eb-200c98bd3f29',
    name: 'EDM',
    imageSrc: require('~/assets/images/edm.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=1tCQWTlUFsqDIbGcAT8UiCEPexeSVxovT'
  },
  {
    id: '5fe3192c-bcc4-4c4f-b254-87c80762db0f',
    name: 'Opera',
    imageSrc: require('~/assets/images/opera.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=16gxd6fBa8pnCF22wCz0FqJAintjjtILB'
  },
  {
    id: '1e267963-1b2f-4864-8028-6bd050c492ab',
    name: 'Theater',
    imageSrc: require('~/assets/images/theater.png'),
    soundSrc: 'https://docs.google.com/uc?export=download&id=15sXNZlki9RZrg5C2S1Y3TVLkLHZgRpjj'
  }
]

export const state = () => ({
  sounds: SOUNDS
})

export const getters = {
  getSounds(state) {
    return state.sounds
  }
}
