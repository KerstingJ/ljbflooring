class Imgbar {
    constructor(element){
        this.element = element;
        this.images = Array.from(element.children);
        this.current = 0;
        this.slide.bind(this)();
        setInterval(this.slide.bind(this), 5000);
    }

    slide(){
        let first = this.images[this.current];
        let movement = window.getComputedStyle(first).width;
        
        let doAfter = () => {
            this.element.append(first);
        }

        TweenMax.to(this.element, 5, {x: "-"+movement, onComplete: doAfter, clearProps:"all"});

        this.current++;
        this.current = this.current % this.images.length;
    }
}

let imgbar = new Imgbar(document.querySelector(".imgbar"))