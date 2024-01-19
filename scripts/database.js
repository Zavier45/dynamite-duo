const database = {
  heroes: [
    {
      id: 1,
      name: "Psion",
      ability: "Telekinesis",
    },
    {
      id: 2,
      name: "Squirrel Girl",
      ability: "Speak with/Command squirrels",
    },
    {
      id: 3,
      name: "Bulk",
      ability: "Super Strength",
    },
    {
      id: 4,
      name: "Zip",
      ability: "Speedster",
    },
    {
      id: 5,
      name: "Knit",
      ability: "Stringomancy",
    },
  ],

  villains: [
    {
      id: 1,
      name: "Dynamite",
      ability: "Explosion",
    },
    {
      id: 2,
      name: "Jim",
      ability: "Being Extremely Average. At Everything",
    },
    {
      id: 3,
      name: "Pocket",
      ability: "Space Expansion",
    },
    {
      id: 4,
      name: "Cryo",
      ability: "Pyrokinesis",
    },
    {
      id: 5,
      name: "Pyro",
      ability: "Cryokinesis",
    },
    {
      id: 6,
      name: "Purl",
      ability: "Yarnomancy",
    },
  ],
};

export const getHeroes = () => {
  return database.heroes.map((hero) => ({ ...hero }));
};

export const getVillains = () => {
  return database.villains.map((villain) => ({ ...villain }));
};
