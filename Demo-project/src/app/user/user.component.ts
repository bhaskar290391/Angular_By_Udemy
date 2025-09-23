import { Component, signal, computed, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avator!: string;
  @Input({ required: true }) name!: string;
  //selectedUser =  DUMMY_USERS[randomIndex];

  //using signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  get imagePath() {
    return 'assets/users/' + this.avator;
  }

  // onSelectedUser() {
  //   console.log('Clicked !!!');
  //   const onUserSelectIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   //this.selectedUser = DUMMY_USERS[onUserSelectIndex];

  //   //using signals
  //   this.selectedUser.set(DUMMY_USERS[onUserSelectIndex]);
  // }

  onSelectedUser() {}
}
