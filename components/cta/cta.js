class CTA {
    constructor(element){
        this.element = element;
        this.reviewBlock = this.element.querySelector(".cta-reviews");
        this.reviews = this.reviewBlock.querySelectorAll(".review");
        this.current = 0;

        setInterval(this.switch.bind(this), 6000);
    }
    switch(){
        let active = this.reviews[this.current];
        let nextInd = (this.current + 1) % this.reviews.length;
        let next = this.reviews[nextInd];

        let doAfter = () => {
            active.classList.remove("active");
            next.classList.add("active");
        }

        let anim = new TimelineLite();
        let to = {opacity: 0, color: "rgba(247,247,239,0)", clearProps:"all", onComplete: doAfter};
        let from = {opacity: 0, color: "rgba(247,247,239,0)", clearProps:"all"}
        anim.to(active, 3, to).from(next, 3, from);
        

        this.current = nextInd;
    }
}

new CTA(document.querySelector(".cta-main"));