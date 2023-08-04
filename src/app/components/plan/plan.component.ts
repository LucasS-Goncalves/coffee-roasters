import { Component } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: [
    './plan.component.css',
    './styles/main-img-section.component.css',
    './styles/steps-section.component.css'
  ]
})
export class PlanComponent {

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
  ]
}
