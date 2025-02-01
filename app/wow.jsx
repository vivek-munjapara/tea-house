import { useEffect } from "react"

const Wow = () => {

    useEffect(() => {
        const wow = new WOW.WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       120,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true        // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }, []);
  return (
    <div>Wow</div>
  )
}

export default Wow