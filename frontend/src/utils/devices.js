const size = {
    mobileP: '360px',
    mobileL: '640px',
    tabletP: '768px',
    tabletL: '1024px',
    laptop: '1024px',
}

const devices = {
    mobileP: `(min-width: ${size.mobileP})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletP: `(min-width: ${size.tabletP})`,
    tabletL: `(min-width: ${size.tabletL})`,
    laptop: `(min-width: ${size.laptop})`,
}

export default devices