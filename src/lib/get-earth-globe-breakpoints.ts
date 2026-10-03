export function getEarthGlobeSize(viewPortWidth: number | undefined): number {
  if (!viewPortWidth) return 0;

  if (viewPortWidth >= 2400) return 2700;
  else if (viewPortWidth >= 1700 && viewPortWidth < 2400) return 1600;
  else if (viewPortWidth >= 1536 && viewPortWidth < 1700) return 1300;
  else if (viewPortWidth < 1536 && viewPortWidth >= 1280) return 1200;
  else if (viewPortWidth < 1280 && viewPortWidth >= 600) return 800;
  else if (viewPortWidth < 600) return 500;

  return 1200;
}

export function getEarthGlobeOffset(
  viewPortWidth: number | undefined
): [number, number] {
  if (!viewPortWidth) return [0, 0];

  if (viewPortWidth >= 2200) return [0, 300];
  else if (viewPortWidth > 1920 && viewPortWidth < 2200) return [0, 80];
  else if (viewPortWidth >= 1700 && viewPortWidth <= 1920) return [-260, 130];
  else if (viewPortWidth >= 1536 && viewPortWidth < 1700) return [-130, 50];
  else if (viewPortWidth < 1536 && viewPortWidth >= 1280) return [-160, 50];
  else if (viewPortWidth < 1280 && viewPortWidth >= 640) return [0, 80];
  else if (viewPortWidth < 640 && viewPortWidth >= 600) return [0, 120];
  else if (viewPortWidth < 600) return [0, 80];

  return [0, 0];
}
