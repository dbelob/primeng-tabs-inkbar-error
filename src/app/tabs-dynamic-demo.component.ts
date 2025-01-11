import { Component, OnInit } from '@angular/core';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';

@Component({
  selector: 'app-tabs-dynamic-demo',
  imports: [
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels
  ],
  templateUrl: './tabs-dynamic-demo.component.html',
  standalone: true
})
export class TabsDynamicDemoComponent implements OnInit {
  tabs: { title: string; value: number; content: string }[] = [];

  ngOnInit() {
    this.tabs = [
      {title: 'Tab 1', value: 0, content: 'Tab 1 Content'},
      {title: 'Tab 2', value: 1, content: 'Tab 2 Content'},
      {title: 'Tab 3', value: 2, content: 'Tab 3 Content'},
    ];
  }
}
