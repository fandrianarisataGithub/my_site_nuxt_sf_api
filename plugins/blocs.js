import Vue from 'vue';

import Header from '@/components/layouts/header';
import SVGMenu from '@/components/elements/svg';
import Menu from '@/components/elements/menu';
import LocomotiveScroll from '@/LocomotiveScroll/component';
import Title from '@/components/blocs/title';
import AnimateWord from '@/components/blocs/animateWord.vue';
import Carousel from '@/components/blocs/carousel.vue';
// body components

import Footer from '@/components/layouts/footer';

const components = {
    Header,
    LocomotiveScroll,
    SVGMenu,
    Menu,
    Title,
    AnimateWord,
    Carousel,
    Footer
}

// on les insert dans le Vue.component
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
