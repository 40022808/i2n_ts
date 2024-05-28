class lugas {
    aSide?:HTMLInputElement | null;
    bSide?:HTMLInputElement | null;
    perimeter?:HTMLInputElement | null;
    calcButton?:HTMLButtonElement | null;
    constructor() {
        this.bindHtml()
        this.handleEvent()

    }

    bindHtml() {
        this.aSide = document.querySelector('#aSide')
        this.bSide = document.querySelector('#bSide')
        this.perimeter = document.querySelector('#perimeter')
        this.calcButton = document.querySelector('#calcButton')
    }

    handleEvent() {
        this.calcButton?.addEventListener('click',()=>{
            this.startcalc()
        })
    }

    startcalc() {
        const aside = Number(this.aSide?.value)
        const bside = Number(this.bSide?.value)
        const perimeter = this.calcperimeter(aside,bside)
        this.perimeter!.value = String(perimeter)
    }

    calcperimeter(aside:number,bside:number):number {
        return (aside + bside) * 2
    }




}

new lugas()