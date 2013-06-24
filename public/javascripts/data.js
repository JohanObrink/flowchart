var graph = [
  {
    id: 1,
    type: 'start',
    text: 'Start',
    position: { x: 1, y: 1 }
  },
  {
    id: 2,
    type: 'decision',
    text: 'Manuell/automat',
    parent: 1,
    position: { x: 1, y: 2 }
  },
  {
    id: 3,
    type: 'decision',
    text: 'Bränsle',
    parent: 2,
    position: { x: 1, y: 3 }
  },
  {
    id: 4,
    type: 'decision',
    text: 'Oljerapport',
    parent: 3,
    position: { x: 1, y: 4 }
  },
  {
    id: 5,
    type: 'report',
    text: 'Oljerapport växellåda',
    parent: 4,
    position: { x: 1, y: 5 }
  },
  {
    id: 6,
    type: 'end',
    text: 'Slut',
    parent: 5,
    position: { x: 1, y: 6 }
  },
  {
    id: 7,
    type: 'info',
    text: 'Basintervall',
    parent: 2,
    position: { x: 2, y: 2 }
  },
  {
    id: 8,
    type: 'info',
    text: 'Applikation',
    parent: 7,
    position: { x: 3, y: 2 }
  },
  {
    id: 9,
    type: 'end',
    text: 'Slut',
    parent: 8,
    position: { x: 3, y: 3 }
  },
  {
    id: 10,
    type: 'info',
    text: 'Basintervall',
    parents: [ 3, 4 ],
    position: { x: 2, y: 4 }
  },
  {
    id: 11,
    type: 'info',
    text: 'Stoppfrekvens',
    parent: 10,
    position: { x: 2, y: 5 }
  },
  {
    id: 12,
    type: 'info',
    text: 'Bruttovikt',
    parent: 11,
    position: { x: 2, y: 6 }
  },
  {
    id: 13,
    type: 'info',
    text: 'Applikation',
    parent: 12,
    position: { x: 2, y: 7 }
  },
  {
    id: 14,
    type: 'info',
    text: 'Vägojämnhet',
    parent: 13,
    position: { x: 2, y: 8 }
  },
  {
    id: 15,
    type: 'end',
    text: 'Slut',
    parent: 14,
    position: { x: 2, y: 9 }
  }
];