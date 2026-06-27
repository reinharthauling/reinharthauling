export const projectImages = {
  estateCleanouts: {
    hendersonville: {
      before: '/images/projects/estate-cleanouts/estate-cleanout-hendersonville-before.jpeg',
      after: '/images/projects/estate-cleanouts/estate-cleanout-hendersonville-after.jpeg',
    },
  },
  garageCleanouts: {
    gallatin: {
      before: '/images/projects/garage-cleanouts/garage-cleanout-gallatin-before.jpeg',
      after: '/images/projects/garage-cleanouts/garage-cleanout-gallatin-after.jpeg',
    },
    hendersonville: {
      before: '/images/projects/garage-cleanouts/garage-cleanout-hendersonville-before.jpeg',
      after: '/images/projects/garage-cleanouts/garage-cleanout-hendersonville-after.jpeg',
    },
    nashville: {
      before: '/images/projects/garage-cleanouts/garage-cleanout-nashville-before.jpg',
      after: '/images/projects/garage-cleanouts/garage-cleanout-nashville-after.jpg',
    },
  },
  commercialCleanouts: {
    downtownNashville: {
      cubicles: '/images/projects/commercial-cleanouts/commercial-office-cleanout-nashville-cubicles.jpeg',
      executiveFurniture:
        '/images/projects/commercial-cleanouts/commercial-office-cleanout-nashville-executive-furniture.jpeg',
      fileCabinets: '/images/projects/commercial-cleanouts/commercial-office-cleanout-nashville-file-cabinets.jpeg',
    },
  },
  propertyCleanouts: {
    nashville: {
      before: '/images/projects/property-cleanouts/property-cleanout-nashville-before.png',
      after: '/images/projects/property-cleanouts/property-cleanout-nashville-after.png',
    },
    goodlettsville: {
      dumpster: '/images/projects/property-cleanouts/property-cleanout-goodlettsville-dumpster.jpeg',
    },
  },
  yardDebris: {
    trampolineRemovalNashville: {
      before: '/images/projects/yard-debris/trampoline-removal-nashville-before.png',
      after: '/images/projects/yard-debris/trampoline-removal-nashville-after.png',
    },
  },
  truckBranding: {
    truckMagnetMiddleTennessee:
      '/images/projects/truck-branding/reinhart-truck-magnet-middle-tennessee.jpeg',
    truckMagnetNashvilleCleanouts:
      '/images/projects/truck-branding/reinhart-truck-magnet-nashville-cleanouts.jpeg',
    truckTrailerMiddleTennessee:
      '/images/projects/truck-branding/reinhart-truck-trailer-middle-tennessee.jpeg',
  },
} as const;

export type ProjectImages = typeof projectImages;
