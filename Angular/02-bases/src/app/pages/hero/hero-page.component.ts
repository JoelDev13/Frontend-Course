import { UpperCasePipe } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe]
})
export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(21)

    heroDescription = computed(() => {
        const description = `${ this.name() } - ${this.age()}`;
        return description
    })

    capitalizeName = computed(() =>{
        return this.name().toUpperCase()
    })

    changeHero(){
        this.name.set('spiderman')
        this.age.set(19)
    }

    resetForm(){
        this.name.set('Ironman')
        this.age.set(21)
    }
    
    changeAge(){
        this.age.set(60)
    }

}
