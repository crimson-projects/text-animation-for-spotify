console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const container = select('.container');
let gltl;

function animate() {
    
    gltl = gsap.timeline({}); 

    gltl.fromTo(".textPath", {
            attr: { startOffset: '-0%' }, 
        },{
            duration: 6,
            attr: { startOffset: '100%' }, 
            ease: 'none',
            stagger: {
                repeat: -1, 
                each: 2
        }}
    )
    
    gltl.seek(5);
    
    gsap.to('.record', {
        duration: 2,
        rotation: 360,
        transformOrigin: "center center",
        ease: 'none',
        repeat: -1
    })
    
}

function init() {
    gsap.set(container, { autoAlpha: 1 });
    gsap.set('#path', { x: -228 });
    animate();
}

window.onload = () => {
	init();
};