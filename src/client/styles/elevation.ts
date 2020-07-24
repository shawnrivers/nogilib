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

export const ELEVATION_DARK: Record<
  ElevationKey,
  { boxShadow: string; whiteOverlayTransparency: string }
> = {
  0: {
    boxShadow: `${UMBRA_SHADOW[0]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[0]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[0]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0)',
  },
  1: {
    boxShadow: `${UMBRA_SHADOW[1]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[1]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[1]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.05)',
  },
  2: {
    boxShadow: `${UMBRA_SHADOW[2]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[2]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[2]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.07)',
  },
  3: {
    boxShadow: `${UMBRA_SHADOW[3]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[3]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[3]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.08)',
  },
  4: {
    boxShadow: `${UMBRA_SHADOW[4]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[4]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[4]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.09)',
  },
  5: {
    boxShadow: `${UMBRA_SHADOW[5]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[5]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[5]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.1)',
  },
  6: {
    boxShadow: `${UMBRA_SHADOW[6]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[6]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[6]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.11)',
  },
  7: {
    boxShadow: `${UMBRA_SHADOW[7]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[7]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[7]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.11)',
  },
  8: {
    boxShadow: `${UMBRA_SHADOW[8]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[8]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[8]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.12)',
  },
  9: {
    boxShadow: `${UMBRA_SHADOW[9]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[9]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[9]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.12)',
  },
  10: {
    boxShadow: `${UMBRA_SHADOW[10]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[10]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[10]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.13)',
  },
  11: {
    boxShadow: `${UMBRA_SHADOW[11]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[11]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[11]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.13)',
  },
  12: {
    boxShadow: `${UMBRA_SHADOW[12]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[12]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[12]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.14)',
  },
  13: {
    boxShadow: `${UMBRA_SHADOW[13]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[13]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[13]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.14)',
  },
  14: {
    boxShadow: `${UMBRA_SHADOW[14]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[14]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[14]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.14)',
  },
  15: {
    boxShadow: `${UMBRA_SHADOW[15]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[15]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[15]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.14)',
  },
  16: {
    boxShadow: `${UMBRA_SHADOW[16]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[16]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[16]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
  },
  17: {
    boxShadow: `${UMBRA_SHADOW[17]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[17]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[17]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
  },
  18: {
    boxShadow: `${UMBRA_SHADOW[18]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[18]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[18]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
  },
  19: {
    boxShadow: `${UMBRA_SHADOW[19]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[19]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[19]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
  },
  20: {
    boxShadow: `${UMBRA_SHADOW[20]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[20]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[20]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
  },
  21: {
    boxShadow: `${UMBRA_SHADOW[21]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[21]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[21]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
  },
  22: {
    boxShadow: `${UMBRA_SHADOW[22]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[22]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[22]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
  },
  23: {
    boxShadow: `${UMBRA_SHADOW[23]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[23]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[23]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.15)',
  },
  24: {
    boxShadow: `${UMBRA_SHADOW[24]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[24]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[24]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'rgba(255, 255, 255, 0.16)',
  },
};

export const ELEVATION_LIGHT: Record<
  ElevationKey,
  { boxShadow: string; whiteOverlayTransparency: string }
> = {
  0: {
    boxShadow: `${UMBRA_SHADOW[0]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[0]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[0]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  1: {
    boxShadow: `${UMBRA_SHADOW[1]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[1]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[1]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  2: {
    boxShadow: `${UMBRA_SHADOW[2]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[2]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[2]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  3: {
    boxShadow: `${UMBRA_SHADOW[3]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[3]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[3]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  4: {
    boxShadow: `${UMBRA_SHADOW[4]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[4]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[4]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  5: {
    boxShadow: `${UMBRA_SHADOW[5]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[5]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[5]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  6: {
    boxShadow: `${UMBRA_SHADOW[6]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[6]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[6]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  7: {
    boxShadow: `${UMBRA_SHADOW[7]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[7]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[7]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  8: {
    boxShadow: `${UMBRA_SHADOW[8]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[8]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[8]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  9: {
    boxShadow: `${UMBRA_SHADOW[9]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[9]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[9]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  10: {
    boxShadow: `${UMBRA_SHADOW[10]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[10]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[10]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  11: {
    boxShadow: `${UMBRA_SHADOW[11]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[11]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[11]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  12: {
    boxShadow: `${UMBRA_SHADOW[12]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[12]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[12]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  13: {
    boxShadow: `${UMBRA_SHADOW[13]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[13]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[13]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  14: {
    boxShadow: `${UMBRA_SHADOW[14]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[14]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[14]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  15: {
    boxShadow: `${UMBRA_SHADOW[15]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[15]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[15]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  16: {
    boxShadow: `${UMBRA_SHADOW[16]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[16]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[16]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  17: {
    boxShadow: `${UMBRA_SHADOW[17]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[17]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[17]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  18: {
    boxShadow: `${UMBRA_SHADOW[18]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[18]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[18]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  19: {
    boxShadow: `${UMBRA_SHADOW[19]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[19]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[19]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  20: {
    boxShadow: `${UMBRA_SHADOW[20]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[20]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[20]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  21: {
    boxShadow: `${UMBRA_SHADOW[21]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[21]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[21]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  22: {
    boxShadow: `${UMBRA_SHADOW[22]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[22]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[22]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  23: {
    boxShadow: `${UMBRA_SHADOW[23]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[23]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[23]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
  24: {
    boxShadow: `${UMBRA_SHADOW[24]} ${UMBRA_COLOR}, ${PENUMBRA_SHADOW[24]} ${PENUMBRA_COLOR}, ${AMBIENT_SHADOW[24]} ${AMBIENT_COLOR}`,
    whiteOverlayTransparency: 'none',
  },
};
