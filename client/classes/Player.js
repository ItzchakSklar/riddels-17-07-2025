export class Player {

    constructor(name) {
        this.name = name;
        this.times = [];
        this.reccord = -1;
        this.sumRiddles = 0
    }
    recordTime(start, end) {
        let duration = (end - start)
        // console.log("time",duration);
        this.times.push(duration)
    }
    getReccord() {
        if (this.reccord === -1 || this.times != []) {
            let ollTime = 0;
            this.sumRiddles = this.times.length;
            this.times.forEach(element => {
                ollTime += element;
                this.times = [];
            })
            this.reccord = ollTime
        }
        return this.reccord;
    }
    showStats(){
        if (this.reccord === -1) {
            let ollTime = 0;
            this.sumRiddles = this.times.length;
            this.times.forEach(element => {
                ollTime += element;
            });
            this.reccord = ollTime;
            this.times = [];
        }
        // console.clear();
        console.log("total time =", this.reccord, "seconds");
        let average = this.reccord / this.sumRiddles;
        console.log("Average time per reddle =", average, "seconds");
        }
    }

