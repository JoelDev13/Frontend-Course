import { ChangeDetectionStrategy ,Component, signal } from "@angular/core";

@Component({
    templateUrl: `./counter-page.component.html`,
    styleUrl: `./counter-page.component.css`,

    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterpageComponet{
    counter = 0; 
    counterSignal = signal(10);

    constructor(){
        setInterval(() => {
            //this.counter += 1;
            //this.counterSignal.update((v) => v + 1)
            console.log('Joel') 
        }, (2000));
    }

    increaseby (value: number) {
        this.counter += value;
        this.counterSignal.update((current) => current + value )

    }

    decrease (value: number) {
        this.counter -= value;
        this.counterSignal.update((current) => current - value )
    }

    resetCounter (){
        this.counter = 10;
        this.counterSignal.set(0);
    }
}
