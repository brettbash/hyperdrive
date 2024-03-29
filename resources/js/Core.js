import cardSlider from '@modules/CardSlider';
import header from '@modules/Header';
// import lightboxVideo from '@modules/LightboxVideo';
import navigation from '@modules/Navigation';

import avalanche from '@components/avalanche/Avalanche';
import cursor from '@components/Cursor';
import mouse from '@components/MouseController';
// import videoPlayer from '@components/VideoPlayer';

export default () => {
    Alpine.data('cardSlider', cardSlider);
    Alpine.data('header', header);
    // Alpine.data('lightboxVideo', lightboxVideo);
    Alpine.data('navigation', navigation);

    Alpine.data('cursor', cursor);
    window.mouse = mouse;
    // Alpine.data('videoPlayer', videoPlayer);

    avalanche();
};
