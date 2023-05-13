import { Component } from '@angular/core';

@Component({
  selector: 'app-team-expansion-panel',
  templateUrl: './team-expansion-panel.component.html',
  styleUrls: ['./team-expansion-panel.component.scss'],
})
export class TeamExpansionPanelComponent {
  // TODO: Get Team names from backend
  list: string[] = [
    'Red Jaguars',
    'Blue Barracudas',
    'Green Monkeys',
    'Orange Iguanas',
    'Purple Parrots',
    'Silver Snakes',
  ];
}
