import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: [
    './plan.component.css',
    './styles/main-img-section.component.css',
    './styles/steps-section.component.css',
    './styles/order-section.component.css',
    './styles/order-summary-section.component.css',
    './styles/modal.component.css'
  ]
})
export class PlanComponent{

  validPlan = false;
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
      id: 'preferences',
      question: 'How do you drink your coffee?',
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
      id: 'beanType',
      question: 'What type of coffee?',
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
      id: 'quantity',
      question: 'How much would you like??',
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
      id: 'grindOption',
      question: 'Want us to grind them?',
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
      id: 'deliveries',
      question: 'How often should we deliver?',
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

  indexList = [
    {
      id: 'preferences',
      number: '01',
      name: 'Preferences'
    },
    {
      id: 'beanType',
      number: '02',
      name: 'Bean type'
    },
    {
      id: 'quantity',
      number: '03',
      name: 'Quantity'
    },
    {
      id: 'grindOption',
      number: '04',
      name: 'Grind option'
    },
    {
      id: 'deliveries',
      number: '05',
      name: 'Deliveries'
    },
  ]

  @ViewChild('listOfOptions') listOfOptions!: ElementRef<HTMLUListElement>;

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

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

  openDropDown(event: HTMLDivElement){
    const optionPicked = event;
    const ulPicked = event.nextElementSibling as HTMLUListElement;
    const ulPickedChildrenId = ulPicked.children[0].id;

    if(ulPickedChildrenId === 'grindOption' && this.howYouDrinkYourCoffee === 'Capsule'){
      return;
    }

    optionPicked.classList.toggle('openInnerList');
    ulPicked.classList.toggle('openedList');
  }

  selectOption(event: HTMLLIElement, optionName: string, indexList: HTMLUListElement){
    const li = event;
    const listOfIndex = indexList;
    const grindQuestion = li.parentNode?.parentNode?.parentNode?.children[3].firstChild as HTMLDivElement;

    if(li.id === 'preferences'){
      this.howYouDrinkYourCoffee === optionName ? this.howYouDrinkYourCoffee = '' : this.howYouDrinkYourCoffee = optionName;

      if(this.howYouDrinkYourCoffee !== ''){
        listOfIndex.querySelector('.preferences')?.classList.add('completedOption');
      } else {
        listOfIndex.querySelector('.preferences')?.classList.remove('completedOption');
      }

      if(this.howYouDrinkYourCoffee === 'Capsule'){
        listOfIndex.querySelector('.grindOption')?.classList.add('disabled_index');
        grindQuestion.classList.add('disabled_option');
      } else {
        listOfIndex.querySelector('.grindOption')?.classList.remove('disabled_index');
        grindQuestion.classList.remove('disabled_option');
      }
    }

    if(li.id === 'beanType'){
      this.typeOfCoffee === optionName ? this.typeOfCoffee = '' : this.typeOfCoffee = optionName;

      if(this.typeOfCoffee !== ''){
        listOfIndex.querySelector('.beanType')?.classList.add('completedOption')
      } else {
        listOfIndex.querySelector('.beanType')?.classList.remove('completedOption')
      }
    }

    if(li.id === 'quantity'){
      this.howMuch === optionName ? this.howMuch = '' : this.howMuch = optionName;

      if(this.howMuch !== ''){
        listOfIndex.querySelector('.quantity')?.classList.add('completedOption')
      } else {
        listOfIndex.querySelector('.quantity')?.classList.remove('completedOption')
      }
    }

    if(li.id === 'grindOption'){
      this.grind === optionName ? this.grind = '' : this.grind = optionName;

      if(this.grind !== ''){
        listOfIndex.querySelector('.grindOption')?.classList.add('completedOption')
      } else {
        listOfIndex.querySelector('.grindOption')?.classList.remove('completedOption')
      }


    }

    if(li.id === 'deliveries'){
      this.howOften === optionName ? this.howOften = '' : this.howOften = optionName;

      if(this.howOften !== ''){
        listOfIndex.querySelector('.deliveries')?.classList.add('completedOption')
      } else {
        listOfIndex.querySelector('.deliveries')?.classList.remove('completedOption')
      }
    }

    this.validatePlanCreation();
  }

  validatePlanCreation(){
    if(this.howYouDrinkYourCoffee === 'Capsule' && this.typeOfCoffee !== '' && this.howMuch !== '' && this.howOften !== '') {
      this.validPlan = true;
    } else if((this.howYouDrinkYourCoffee !== 'Capsule' && this.howYouDrinkYourCoffee !== '') && this.typeOfCoffee !== '' && this.howMuch !== '' && this.howMuch !== '' && this.grind !== '' && this.howOften !== ''){
      this.validPlan = true;
    } else {
      this.validPlan = false;
    }
  }

  createPlan(){
    this.modal.nativeElement.showModal();
  }

  closeModal(){
    this.modal.nativeElement.close();
  }
}
