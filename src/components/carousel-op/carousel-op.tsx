import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Carousel as CarouselO } from 'smart-webcomponents-react/carousel';
// export {CarouselO as Carousel};
// const CarouselO = dynamic(() => import('smart-webcomponents-react/carousel').then(d => d.Carousel), { ssr: false });
export function Carousel ({...props}) {
    return (
        <CarouselO {...props} />
    )
}