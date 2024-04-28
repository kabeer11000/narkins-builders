
import { XCircleIcon } from "@heroicons/react/20/solid";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
export const Lightbox = ({ open, onClose, image }: { open: boolean, onClose: () => void, image: string }) => {
    return (
        <div onClick={onClose} className={`fixed top-0 left-0 z-[999] flex justify-center items-center transition duration-150 ease-in-out w-[100vw] h-[100vh] ${open ? 'visible' : 'hidden'}`} style={{ background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)' }}>
            <div className={'fixed top-0 w-[100vw] h-[5rem] right-0 flex gap-2 justify-end'}>
                <div style={{width: '100%', flexGrow: '1 1 auto'}}></div>
                <a href={image} download className="ml-auto mt-5 mr-5 pointer-cursor"><CloudArrowDownIcon width="2rem" height="2rem" color="white" /></a>
                <XCircleIcon width="2rem" height="2rem" className="ml-auto mt-5 mr-5 pointer-cursor" onClick={onClose} color="white" />
            </div>
            <img onClick={e => e.stopPropagation()} alt="" src={image} className={'max-w-6xl w-full h-auto'} />
        </div>
    )
}