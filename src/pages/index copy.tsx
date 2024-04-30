import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const ref = useRef(null);
  const [height, setHeight] = useState('100vh');
  const handleOnload = () => {
    if (ref.current) {
      window.addEventListener("message", function (e) {
        console.log(e);
        switch (e.data.type) {
          case "loc":
            window.location.href = e.data.target;
          case "height":
            // setHeight(e.data.px + "px");
        }
      });
    }
  }
  // useEffect(() => {
  //   if (ref.current) {
  //     window.addEventListener("message", function (e) {
  //       console.log(e);
  //       switch (e.data.type) {
  //         case "loc":
  //           window.location.href = e.data.target;
  //         case "height":
  //           setHeight(e.data.px + "px");
  //       }
  //     });
  //   }
  // }, [ref.current])
  return (
    <main className='bg-[#000000]'>
      <iframe
        ref={ref}
        id="#m" data-src="https://docs.cloud.kabeers.network/"
        src="https://hosting.admin.narkinsbuilders.com/scratch.php?c=af"
        frameBorder="0" allowTransparency
        style={{ width: "100vw", background: 'black', height }} onLoad={handleOnload}
      />
    </main>
  )
}
