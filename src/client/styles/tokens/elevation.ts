// Based on material design elevation system
// https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_variables.scss

export type ElevationKey =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export const componentElevationKey: Record<
  | 'navigationBar'
  | 'sidebar'
  | 'dropdown'
  | 'componentOnBackground'
  | 'elevatedComponentOnBackground'
  | 'background'
  | 'skipLink',
  ElevationKey
> = {
  background: 0,
  componentOnBackground: 3,
  navigationBar: 6,
  dropdown: 8,
  sidebar: 10,
  elevatedComponentOnBackground: 12,
  skipLink: 16,
};

const UMBRA_COLOR = 'rgba(0, 0, 0, 0.2)';
const PENUMBRA_COLOR = 'rgba(0, 0, 0, 0.14)';
const AMBIENT_COLOR = 'rgba(0, 0, 0, 0.12)';

const UMBRA_SHADOW: Record<ElevationKey, string> = {
  0: '0px 0px 0px 0px',
  1: '0px 2px 1px -1px',
  2: '0px 3px 1px -2px',
  3: '0px 3px 3px -2px',
  4: '0px 2px 4px -1px',
  5: '0px 3px 5px -1px',
  6: '0px 3px 5px -1px',
  7: '0px 4px 5px -2px',
  8: '0px 5px 5px -3px',
  9: '0px 5px 6px -3px',
  10: '0px 6px 6px -3px',
  11: '0px 6px 7px -4px',
  12: '0px 7px 8px -4px',
  13: '0px 7px 8px -4px',
  14: '0px 7px 9px -4px',
  15: '0px 8px 9px -5px',
  16: '0px 8px 10px -5px',
  17: '0px 8px 11px -5px',
  18: '0px 9px 11px -5px',
  19: '0px 9px 12px -6px',
  20: '0px 10px 13px -6px',
  21: '0px 10px 13px -6px',
  22: '0px 10px 14px -6px',
  23: '0px 11px 14px -7px',
  24: '0px 11px 15px -7px',
};

const PENUMBRA_SHADOW: Record<ElevationKey, string> = {
  0: '0px 0px 0px 0px',
  1: '0px 1px 1px 0px',
  2: '0px 2px 2px 0px',
  3: '0px 3px 4px 0px',
  4: '0px 4px 5px 0px',
  5: '0px 5px 8px 0px',
  6: '0px 6px 10px 0px',
  7: '0px 7px 10px 1px',
  8: '0px 8px 10px 1px',
  9: '0px 9px 12px 1px',
  10: '0px 10px 14px 1px',
  11: '0px 11px 15px 1px',
  12: '0px 12px 17px 2px',
  13: '0px 13px 19px 2px',
  14: '0px 14px 21px 2px',
  15: '0px 15px 22px 2px',
  16: '0px 16px 24px 2px',
  17: '0px 17px 26px 2px',
  18: '0px 18px 28px 2px',
  19: '0px 19px 29px 2px',
  20: '0px 20px 31px 3px',
  21: '0px 21px 33px 3px',
  22: '0px 22px 35px 3px',
  23: '0px 23px 36px 3px',
  24: '0px 24px 38px 3px',
};

const AMBIENT_SHADOW: Record<ElevationKey, string> = {
  0: '0px 0px 0px 0px',
  1: '0px 1px 3px 0px',
  2: '0px 1px 5px 0px',
  3: '0px 1px 8px 0px',
  4: '0px 1px 10px 0px',
  5: '0px 1px 14px 0px',
  6: '0px 1px 18px 0px',
  7: '0px 2px 16px 1px',
  8: '0px 3px 14px 2px',
  9: '0px 3px 16px 2px',
  10: '0px 4px 18px 3px',
  11: '0px 4px 20px 3px',
  12: '0px 5px 22px 4px',
  13: '0px 5px 24px 4px',
  14: '0px 5px 26px 4px',
  15: '0px 6px 28px 5px',
  16: '0px 6px 30px 5px',
  17: '0px 6px 32px 5px',
  18: '0px 7px 34px 6px',
  19: '0px 7px 36px 6px',
  20: '0px 8px 38px 7px',
  21: '0px 8px 40px 7px',
  22: '0px 8px 42px 7px',
  23: '0px 9px 44px 8px',
  24: '0px 9px 46px 8px',
};

export const COMMON_ELEVATIONS: Record<
  ElevationKey,
  { boxShadow: string; zIndex: number }
> = {
  0: {
    boxShadow: `${UMBRA_SHADOW[0]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[0]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[0]} ${AMBIENT_COLOR}`,
    zIndex: 0,
  },
  1: {
    boxShadow: `${UMBRA_SHADOW[1]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[1]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[1]} ${AMBIENT_COLOR}`,
    zIndex: 10,
  },
  2: {
    boxShadow: `${UMBRA_SHADOW[2]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[2]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[2]} ${AMBIENT_COLOR}`,
    zIndex: 20,
  },
  3: {
    boxShadow: `${UMBRA_SHADOW[3]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[3]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[3]} ${AMBIENT_COLOR}`,
    zIndex: 30,
  },
  4: {
    boxShadow: `${UMBRA_SHADOW[4]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[4]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[4]} ${AMBIENT_COLOR}`,
    zIndex: 40,
  },
  5: {
    boxShadow: `${UMBRA_SHADOW[5]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[5]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[5]} ${AMBIENT_COLOR}`,
    zIndex: 50,
  },
  6: {
    boxShadow: `${UMBRA_SHADOW[6]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[6]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[6]} ${AMBIENT_COLOR}`,
    zIndex: 60,
  },
  7: {
    boxShadow: `${UMBRA_SHADOW[7]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[7]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[7]} ${AMBIENT_COLOR}`,
    zIndex: 70,
  },
  8: {
    boxShadow: `${UMBRA_SHADOW[8]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[8]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[8]} ${AMBIENT_COLOR}`,
    zIndex: 80,
  },
  9: {
    boxShadow: `${UMBRA_SHADOW[9]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[9]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[9]} ${AMBIENT_COLOR}`,
    zIndex: 90,
  },
  10: {
    boxShadow: `${UMBRA_SHADOW[10]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[10]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[10]} ${AMBIENT_COLOR}`,
    zIndex: 100,
  },
  11: {
    boxShadow: `${UMBRA_SHADOW[11]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[11]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[11]} ${AMBIENT_COLOR}`,
    zIndex: 110,
  },
  12: {
    boxShadow: `${UMBRA_SHADOW[12]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[12]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[12]} ${AMBIENT_COLOR}`,
    zIndex: 120,
  },
  13: {
    boxShadow: `${UMBRA_SHADOW[13]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[13]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[13]} ${AMBIENT_COLOR}`,
    zIndex: 130,
  },
  14: {
    boxShadow: `${UMBRA_SHADOW[14]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[14]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[14]} ${AMBIENT_COLOR}`,
    zIndex: 140,
  },
  15: {
    boxShadow: `${UMBRA_SHADOW[15]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[15]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[15]} ${AMBIENT_COLOR}`,
    zIndex: 150,
  },
  16: {
    boxShadow: `${UMBRA_SHADOW[16]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[16]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[16]} ${AMBIENT_COLOR}`,
    zIndex: 160,
  },
  17: {
    boxShadow: `${UMBRA_SHADOW[17]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[17]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[17]} ${AMBIENT_COLOR}`,
    zIndex: 170,
  },
  18: {
    boxShadow: `${UMBRA_SHADOW[18]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[18]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[18]} ${AMBIENT_COLOR}`,
    zIndex: 180,
  },
  19: {
    boxShadow: `${UMBRA_SHADOW[19]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[19]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[19]} ${AMBIENT_COLOR}`,
    zIndex: 190,
  },
  20: {
    boxShadow: `${UMBRA_SHADOW[20]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[20]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[20]} ${AMBIENT_COLOR}`,
    zIndex: 200,
  },
  21: {
    boxShadow: `${UMBRA_SHADOW[21]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[21]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[21]} ${AMBIENT_COLOR}`,
    zIndex: 210,
  },
  22: {
    boxShadow: `${UMBRA_SHADOW[22]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[22]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[22]} ${AMBIENT_COLOR}`,
    zIndex: 220,
  },
  23: {
    boxShadow: `${UMBRA_SHADOW[23]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[23]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[23]} ${AMBIENT_COLOR}`,
    zIndex: 230,
  },
  24: {
    boxShadow: `${UMBRA_SHADOW[24]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[24]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[24]} ${AMBIENT_COLOR}`,
    zIndex: 240,
  },
};

export type Elevation = Record<
  ElevationKey,
  { boxShadow: string; whiteOverlayTransparency: string; zIndex: number }
>;

export const ELEVATION_DARK: Elevation = {
  0: {
    boxShadow: COMMON_ELEVATIONS[0].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0)',
    zIndex: COMMON_ELEVATIONS[0].zIndex,
  },
  1: {
    boxShadow: COMMON_ELEVATIONS[1].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.05)',
    zIndex: COMMON_ELEVATIONS[1].zIndex,
  },
  2: {
    boxShadow: COMMON_ELEVATIONS[2].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.07)',
    zIndex: COMMON_ELEVATIONS[2].zIndex,
  },
  3: {
    boxShadow: COMMON_ELEVATIONS[3].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.08)',
    zIndex: COMMON_ELEVATIONS[3].zIndex,
  },
  4: {
    boxShadow: COMMON_ELEVATIONS[4].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.09)',
    zIndex: COMMON_ELEVATIONS[4].zIndex,
  },
  5: {
    boxShadow: COMMON_ELEVATIONS[5].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.1)',
    zIndex: COMMON_ELEVATIONS[5].zIndex,
  },
  6: {
    boxShadow: COMMON_ELEVATIONS[6].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.11)',
    zIndex: COMMON_ELEVATIONS[6].zIndex,
  },
  7: {
    boxShadow: COMMON_ELEVATIONS[7].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.11)',
    zIndex: COMMON_ELEVATIONS[7].zIndex,
  },
  8: {
    boxShadow: COMMON_ELEVATIONS[8].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.12)',
    zIndex: COMMON_ELEVATIONS[8].zIndex,
  },
  9: {
    boxShadow: COMMON_ELEVATIONS[9].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.12)',
    zIndex: COMMON_ELEVATIONS[9].zIndex,
  },
  10: {
    boxShadow: COMMON_ELEVATIONS[10].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.13)',
    zIndex: COMMON_ELEVATIONS[10].zIndex,
  },
  11: {
    boxShadow: COMMON_ELEVATIONS[11].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.13)',
    zIndex: COMMON_ELEVATIONS[11].zIndex,
  },
  12: {
    boxShadow: COMMON_ELEVATIONS[12].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.14)',
    zIndex: COMMON_ELEVATIONS[12].zIndex,
  },
  13: {
    boxShadow: COMMON_ELEVATIONS[13].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.14)',
    zIndex: COMMON_ELEVATIONS[13].zIndex,
  },
  14: {
    boxShadow: COMMON_ELEVATIONS[14].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.14)',
    zIndex: COMMON_ELEVATIONS[14].zIndex,
  },
  15: {
    boxShadow: COMMON_ELEVATIONS[15].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.14)',
    zIndex: COMMON_ELEVATIONS[15].zIndex,
  },
  16: {
    boxShadow: COMMON_ELEVATIONS[16].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
    zIndex: COMMON_ELEVATIONS[16].zIndex,
  },
  17: {
    boxShadow: COMMON_ELEVATIONS[17].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
    zIndex: COMMON_ELEVATIONS[17].zIndex,
  },
  18: {
    boxShadow: COMMON_ELEVATIONS[18].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
    zIndex: COMMON_ELEVATIONS[18].zIndex,
  },
  19: {
    boxShadow: COMMON_ELEVATIONS[19].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
    zIndex: COMMON_ELEVATIONS[19].zIndex,
  },
  20: {
    boxShadow: COMMON_ELEVATIONS[20].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
    zIndex: COMMON_ELEVATIONS[20].zIndex,
  },
  21: {
    boxShadow: COMMON_ELEVATIONS[21].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
    zIndex: COMMON_ELEVATIONS[21].zIndex,
  },
  22: {
    boxShadow: COMMON_ELEVATIONS[22].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
    zIndex: COMMON_ELEVATIONS[22].zIndex,
  },
  23: {
    boxShadow: COMMON_ELEVATIONS[23].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
    zIndex: COMMON_ELEVATIONS[23].zIndex,
  },
  24: {
    boxShadow: COMMON_ELEVATIONS[24].boxShadow,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.16)',
    zIndex: COMMON_ELEVATIONS[24].zIndex,
  },
};

export const ELEVATION_LIGHT: Elevation = {
  0: {
    boxShadow: COMMON_ELEVATIONS[0].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[0].zIndex,
  },
  1: {
    boxShadow: COMMON_ELEVATIONS[1].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[1].zIndex,
  },
  2: {
    boxShadow: COMMON_ELEVATIONS[2].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[2].zIndex,
  },
  3: {
    boxShadow: COMMON_ELEVATIONS[3].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[3].zIndex,
  },
  4: {
    boxShadow: COMMON_ELEVATIONS[4].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[4].zIndex,
  },
  5: {
    boxShadow: COMMON_ELEVATIONS[5].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[5].zIndex,
  },
  6: {
    boxShadow: COMMON_ELEVATIONS[6].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[6].zIndex,
  },
  7: {
    boxShadow: COMMON_ELEVATIONS[7].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[7].zIndex,
  },
  8: {
    boxShadow: COMMON_ELEVATIONS[8].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[8].zIndex,
  },
  9: {
    boxShadow: COMMON_ELEVATIONS[9].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[9].zIndex,
  },
  10: {
    boxShadow: COMMON_ELEVATIONS[10].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[10].zIndex,
  },
  11: {
    boxShadow: COMMON_ELEVATIONS[11].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[11].zIndex,
  },
  12: {
    boxShadow: COMMON_ELEVATIONS[12].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[12].zIndex,
  },
  13: {
    boxShadow: COMMON_ELEVATIONS[13].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[13].zIndex,
  },
  14: {
    boxShadow: COMMON_ELEVATIONS[14].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[14].zIndex,
  },
  15: {
    boxShadow: COMMON_ELEVATIONS[15].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[15].zIndex,
  },
  16: {
    boxShadow: COMMON_ELEVATIONS[16].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[16].zIndex,
  },
  17: {
    boxShadow: COMMON_ELEVATIONS[17].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[17].zIndex,
  },
  18: {
    boxShadow: COMMON_ELEVATIONS[18].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[18].zIndex,
  },
  19: {
    boxShadow: COMMON_ELEVATIONS[19].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[19].zIndex,
  },
  20: {
    boxShadow: COMMON_ELEVATIONS[20].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[20].zIndex,
  },
  21: {
    boxShadow: COMMON_ELEVATIONS[21].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[21].zIndex,
  },
  22: {
    boxShadow: COMMON_ELEVATIONS[22].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[22].zIndex,
  },
  23: {
    boxShadow: COMMON_ELEVATIONS[23].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[23].zIndex,
  },
  24: {
    boxShadow: COMMON_ELEVATIONS[24].boxShadow,
    whiteOverlayTransparency: 'none',
    zIndex: COMMON_ELEVATIONS[24].zIndex,
  },
};

export function getElevationWhiteOverlayTransparencyVarName(
  elevation: ElevationKey
): string {
  return `--elevation-white-overlay-transparency-${elevation}`;
}
