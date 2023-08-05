import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: [
    './plan.component.css',
    './styles/main-img-section.component.css',
    './styles/steps-section.component.css',
    './styles/order-section.component.css',
    './styles/order-summary-section.component.css'
  ]
})
export class PlanComponent {

  howYouDrinkYourCoffee = '';
  typeOfCoffee = '';
  howMuch = '';
  grind = '';
  howOften = '';

  steps = [
    {
      number: '01',
      stepName: 'Pick your coffee',
      stepDescription: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
    },
    {
      number: '02',
      stepName: 'Choose the frequency',
      stepDescription: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
    },
    {
      number: '03',
      stepName: 'Receive and enjoy!',
      stepDescription: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
    },
  ];

  options = [
    {
      question: 'How do you drink your coffee?',
      category: 'drink',
      innerOptions: [
        {
          optionName: 'Capsule',
          optionDescription: 'Compatible with Nespresso systems and similar brewers'
        },
        {
          optionName: 'Filter',
          optionDescription: 'For pour over or drip methods like Aeropress, Chemex, and V60'
        },
        {
          optionName: 'Espresso',
          optionDescription: 'Dense and finely ground beans for an intense, flavorful experience'
        }
      ]
    },
    {
      question: 'What type of coffee?',
      category: 'type',
      innerOptions: [
        {
          optionName: 'Single origin',
          optionDescription: 'Distinct, high quality coffee from a specific family-owned farm'
        },
        {
          optionName: 'Decaf',
          optionDescription: 'Just like regular coffee, except the caffeine has been removed'
        },
        {
          optionName: 'Blended',
          optionDescription: 'Combination of two or three dark roasted beans of organic coffees'
        }
      ]
    },
    {
      question: 'How much would you like??',
      category: 'howMuch',
      innerOptions: [
        {
          optionName: '250g',
          optionDescription: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
        },
        {
          optionName: '500g',
          optionDescription: 'Perfect option for a couple. Yields about 40 delectable cups.'
        },
        {
          optionName: '1000g',
          optionDescription: 'Perfect for offices and events. Yields about 90 delightful cups.'
        }
      ]
    },
    {
      question: 'Want us to grind them?',
      category: 'grind',
      innerOptions: [
        {
          optionName: 'Wholebean',
          optionDescription: 'Best choice if you cherish the full sensory experience'
        },
        {
          optionName: 'Filter',
          optionDescription: 'For drip or pour-over coffee methods such as V60 or Aeropress'
        },
        {
          optionName: 'Cafetiére',
          optionDescription: 'Course ground beans specially suited for french press coffee'
        }
      ]
    },
    {
      question: 'How often should we deliver?',
      category: 'howOften',
      innerOptions: [
        {
          optionName: 'Every week',
          optionDescription: '$14.00 per shipment. Includes free first-class shipping.'
        },
        {
          optionName: 'Every 2 weeks',
          optionDescription: '$17.25 per shipment. Includes free priority shipping.'
        },
        {
          optionName: 'Every month',
          optionDescription: '$22.50 per shipment. Includes free priority shipping.'
        }
      ]
    },

  ];

  addActiveClass(event: HTMLLIElement){
    const li = event;
    const ul = event.parentNode;
    const currentActiveLi = ul?.querySelector('.active');
    if(currentActiveLi === li){
      li.classList.remove('active')
    } else {
      currentActiveLi?.classList.remove('active')
      li.classList.add('active')
    }
  }

  selectOption(event: HTMLLIElement, optionName: string){
    const li = event;

    if(li.id === 'drink'){
      this.howYouDrinkYourCoffee === optionName ? this.howYouDrinkYourCoffee = '' : this.howYouDrinkYourCoffee = optionName;
    }

    if(li.id === 'type'){
      this.typeOfCoffee === optionName ? this.typeOfCoffee = '' : this.typeOfCoffee = optionName;
    }

    if(li.id === 'howMuch'){
      this.howMuch === optionName ? this.howMuch = '' : this.howMuch = optionName;
    }

    if(li.id === 'grind'){
      this.grind === optionName ? this.grind = '' : this.grind = optionName;
    }

    if(li.id === 'howOften'){
      this.howOften === optionName ? this.howOften = '' : this.howOften = optionName;
    }
  }
}
