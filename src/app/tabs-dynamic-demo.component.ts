import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-tabs-dynamic-demo',
  imports: [
    FormsModule,
    Select,
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
  languages: Language[] = [];
  selectedLanguage: string | undefined;

  tabMap = new Map<string, { title: string; value: number; content: string }[]>;
  tabs: { title: string; value: number; content: string }[] = [];

  ngOnInit() {
    this.languages = [
      {name: 'English', code: 'en'},
      {name: 'German', code: 'de'}
    ];

    this.selectedLanguage = this.languages[0].code;

    this.tabMap.set('en', [
      {title: 'Dashboard', value: 0, content: 'Dashboard Content'},
      {title: 'Transactions', value: 1, content: 'Transactions Content'},
      {title: 'Products', value: 2, content: 'Products Content'},
      {title: 'News', value: 3, content: 'News Content'}
    ]);
    this.tabMap.set('de', [
      {title: 'Armaturenbrett', value: 0, content: 'Armaturenbrett Content'},
      {title: 'Transaktionen', value: 1, content: 'Transaktionen Content'},
      {title: 'Produkte', value: 2, content: 'Produkte Content'},
      {title: 'Nachrichten', value: 3, content: 'Nachrichten Content'}
    ]);

    this.tabs = this.getTabs(this.selectedLanguage);
  }

  getTabs(language: string | undefined): { title: string; value: number; content: string }[] {
    if (language) {
      const tabs = this.tabMap.get(language);

      return tabs ? tabs : [];
    } else {
      return [];
    }
  }

  handleChange() {
    this.tabs = this.getTabs(this.selectedLanguage);
  }
}
