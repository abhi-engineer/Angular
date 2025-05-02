import { DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, NgFor, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [DecimalPipe, PercentPipe, I18nPluralPipe, I18nSelectPipe,KeyValuePipe,NgFor],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {

  num = 111;

  messageCount = 9;
  messages = {
    '=0': 'No messages',
    '=1': 'One message',
    'other': '# messages'
  };

  gender = "male";
  genderMap = {
    'male': 'Invite him.',
    'female': 'Invite her.',
    'other': 'Invite them.'
  };

  user = {
    name: 'Alice',
    age: 28,
    role: 'Developer'
  };

}
