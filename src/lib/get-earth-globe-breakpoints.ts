export function getEarthGlobeSize(viewPortWidth: number | undefined): number {
  if (!viewPortWidth) return 0;

  if (viewPortWidth >= 1280) {
    return 1700;
  } else if (viewPortWidth < 1280 && viewPortWidth >= 600) {
    return 800;
  } else if (viewPortWidth < 600) {
    return 500;
  }

  return 1700;
}

export function getEarthGlobeOffset(
  viewPortWidth: number | undefined
): [number, number] {
  if (!viewPortWidth) return [0, 0];

  if (viewPortWidth >= 1280) {
    return [-290, -300];
  }

  return [0, 0];
}
